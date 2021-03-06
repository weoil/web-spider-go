import { EventEmitter } from 'events';
import { Logger } from 'log4js';
import Schedule, { Job } from 'node-schedule';
import Http from './http';
import Rule from './rule';
import { createLogger } from './utils/logger';
import { ISpider, IRule, IHttp } from '../types';

enum Mode {
  development,
  production,
  test,
}
enum Status {
  Running,
  Complete,
  Waiting,
}
type startUrl = string | string[] | ISpider.urlsFn | Set<string>;
class Spider extends EventEmitter {
  public static new(config: ISpider.Config) {
    return new Spider(config);
  }
  cornJob: Job | null = null;
  public config: ISpider.Config = {};
  public logger: Logger;
  public rules: Rule[] = [];
  public http: Http;
  public status: Status = Status.Waiting;
  public mode: Mode = Mode.production;
  public errorMiddlewares: ISpider.ErrorMiddleware[] = [];
  public isPlan: boolean = false;
  private handlingCount: number = 0;
  constructor(config: ISpider.Config, http?: Http) {
    super();
    this.config = { ...this.config, ...config };
    if (http) {
      this.http = Http.clone(http);
    } else {
      this.http = new Http(
        {
          ...config.http,
          name: config.name,
          log: config.log,
          spider: this,
        },
        config.downloadMiddleware
      );
    }
    this.logger = createLogger(`${config.name}-spider-node`, config.log);
    this.init(this.config);
  }
  private init(config: ISpider.Config) {
    if (config.rules) {
      this.initRules(config.rules);
    }
    if (config.errorMiddleware) {
      this.errorMiddlewares = this.errorMiddlewares.concat(
        config.errorMiddleware
      );
    }
    this.http.on('complete', this.handler.bind(this));
    this.http.on('error', this.error.bind(this));
    this.http.on('completeAll', this.onCompleteAll.bind(this));
  }
  public async start(
    urls: startUrl = [],
    config?: IHttp.HttpConstructorConfig
  ) {
    if (this.config.open && typeof this.config.open === 'function') {
      this.logger.debug(`执行打开函数`);
      await this.config.open.call(this, this);
    }
    this.push(urls, config);
  }
  public test(urls: startUrl, config?: IHttp.HttpConstructorConfig) {
    this.mode = Mode.test;
    this.start(urls, config);
  }
  public push(
    urls: startUrl,
    config: IHttp.HttpConstructorConfig = {},
    priority: boolean = false
  ) {
    let arr: string[] = [];
    if (typeof urls === 'function') {
      urls = urls();
    }
    if (Array.isArray(urls)) {
      arr = arr.concat(urls);
    } else if (urls instanceof Set) {
      arr = arr.concat(Array.from(urls));
    } else {
      arr.push(urls);
    }
    arr.forEach((url: string) => {
      if (!url || typeof url !== 'string') {
        return;
      }
      this.logger.debug(`任务推送:${url}`);
      const rule = this.getRule(url);
      const ruleHttp = rule.config.http || {};
      this.http.push(url, { ...ruleHttp, rule: rule, ...config }, priority);
    });
  }
  public rule(
    name: string,
    test: string | RegExp,
    parse: IRule.RuleParse,
    ...args: any[]
  ): Promise<any> {
    let config: IRule.RuleConfig = {};
    const c = args[args.length - 1];
    if (typeof c === 'object') {
      config = c;
      args.pop();
    }
    let rej: any;
    const p = new Promise((_, reject) => {
      rej = reject;
    });
    const rule = new Rule(
      name,
      test,
      config,
      parse,
      args,
      (url: string, err: Error, cfg: IRule.RuleConfig) => {
        rej(url, err, cfg, this);
      }
    );
    this.rules.push(rule);
    return p;
  }
  public use(...args: IHttp.DownloadMiddleware[]): void {
    this.http.appendMiddleware(args);
  }
  private async handler(params: {
    url: string;
    data: string | object;
    config: IHttp.HttpConfig;
  }): Promise<any> {
    this.handlingCount++;
    try {
      const { url, data, config } = params;
      this.logger.debug(`请求完成,等待处理,${url}`);
      const rules = this.rules.filter((rule) => {
        return rule.test(url);
      });
      // 是否从该文档提取url
      let include = true;
      for (let r of rules) {
        try {
          if (include) {
            include = r.isInclude();
          }
          this.logger.debug(`正在进行数据处理:${url}`);
          await r.call(url, data, config, this);
        } catch (error) {
          this.logger.error(`数据处理异常,url:${url},error:`, error);
          r.callError(url, error, config, this);
        }
      }
      if (!include || typeof data !== 'string' || this.mode === Mode.test) {
        return;
      }
      this.logger.debug(`正在提取匹配url:${url}`);
      const urls = this.rules.reduce((set: Set<string>, rule: Rule) => {
        const cs = rule.match(url, data);
        cs.forEach((u: string) => {
          set.add(u);
        });
        return set;
      }, new Set<string>());
      this.push(urls);
    } finally {
      this.handlingCount--;
      if (this.handlingCount <= 0) {
        this.onCompleteAll();
      }
    }
  }
  public error(params: {
    url: string;
    error: Error;
    config: IHttp.HttpConfig;
  }) {
    const { url, error, config } = params;
    this.errorMiddlewares.forEach((fn: ISpider.ErrorMiddleware) => {
      fn.call(this, url, error, config, this);
    });
  }
  // corntab 语法定时任务 -> 秒 分 时 日 月 周几
  public plan(
    rule: CornJobType,
    urls: startUrl,
    immediate: boolean = true
  ): void {
    this.isPlan = true;
    if (immediate) {
      this.start(urls);
    }
    this.cornJob = Schedule.scheduleJob(rule, () => {
      if (this.getStatus()) {
        this.logger.debug(
          `定时任务因任务尚未结束被搁浅,函数执行:${
            this.handlingCount
          },http运行状态:${this.http.isIdle()}`
        );
        return;
      }
      this.start(urls);
    });
  }
  public getStatus() {
    return Boolean(this.handlingCount || !this.http.isIdle());
  }
  private async onCompleteAll() {
    // 防止在pipeline中插入任务时检测不到http/queue里的任务，从而意外的结束任务
    if (this.getStatus()) {
      return;
    }
    this.logger.debug(`任务全部完成`);
    if (!this.isPlan) {
      this.logger.debug(`没有定时任务,程序退出`);
      this.cancel();
    }
  }
  public getRule(url: string) {
    for (let r of this.rules) {
      if (r.test(url)) {
        return r;
      }
    }
    throw new Error(`not fount Rule,url:${url}`);
  }
  public initRules(
    rules: ISpider.SpiderRuleConfig[] | ISpider.SpiderRuleConfig
  ) {
    const ruleArr = Array.isArray(rules) ? rules : [rules];
    ruleArr.forEach((rule: ISpider.SpiderRuleConfig) => {
      const r = new Rule(
        rule.name,
        rule.test,
        rule.config,
        rule.parse,
        rule.pipeline,
        rule.error
      );
      this.rules.push(r);
    });
  }
  public async cancel() {
    if (this.config.close && typeof this.config.close === 'function') {
      this.logger.debug(`执行关闭函数`);
      await this.config.close.call(this, this);
    }
    if (this.cornJob) {
      this.cornJob.cancel(false);
    }
  }
}
export default Spider;

type CornJobType =
  | string
  | number
  | Schedule.RecurrenceRule
  | Schedule.RecurrenceSpecDateRange
  | Schedule.RecurrenceSpecObjLit
  | Date;
