declare namespace Http {
	export interface HttpRuleConfig extends Rule.Config {
		rule: Rule.Rule;
	}
	export interface IHttpConstructorConfig {
		name?: string;
		url?: string;
		retry?: number;
		meta?: {
			[key: string]: any;
		};
		charset?: string;
		cacheTime?: number;
		overlist?: Set<string>;
		[key: string]: any;
		repeat?: boolean;
	}
	export interface Config extends IHttpConstructorConfig {
		rule: Rule.Rule;
	}
	export interface MiddlewareConfig extends Config {
		url: string;
		rootConfig: IHttpConstructorConfig;
	}
	export interface Result {
		url: string;
		data: any;
		config: Config;
	}
	type DownloadMiddleware = (
		config: MiddlewareConfig
	) => Promise<MiddlewareConfig | false>;
	export interface IHttp {
		maxConnect: number;
		connect: number;
		middlewares: Array<DownloadMiddleware>;
		config: IHttpConstructorConfig;
		inspect(url: string, config: Config): boolean;
		run(url: string, config: Config): Promise<Result>;
		callMiddleware(config: Config): Promise<Http.MiddlewareConfig | false>;
	}

	export interface IFetch {
		request(url: string, config: any): Promise<any>;
	}
}
