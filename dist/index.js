!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.spider=t():e.spider=t()}(global,function(){return function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=235)}({0:function(e,t){e.exports=require("util")},10:function(e,t){e.exports=require("stream")},127:function(e,t,i){"use strict";var r=this&&this.__awaiter||function(e,t,i,r){return new(i||(i=Promise))(function(n,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function c(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){e.done?n(e.value):new i(function(t){t(e.value)}).then(o,c)}u((r=r.apply(e,t||[])).next())})},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(i(128)),o=n(i(413)),c=i(36);var u;!function(e){e[e.development=0]="development",e[e.production=1]="production",e[e.test=2]="test"}(u||(u={}));class l extends c.EventEmitter{constructor(e,t){super(),this.config={name:"spider"},this.rules=[],this.mode=u.production,this.errorMiddlewares=[],this.config=Object.assign({},this.config,e),this.http=t?s.default.clone(t):new s.default(e.http,e.downloadMiddleware),this.init(this.config)}static new(e){return new l(e)}init(e){e.rules&&this.initRules(e.rules),e.errorMiddleware&&(this.errorMiddlewares=this.errorMiddlewares.concat(e.errorMiddleware)),this.http.on("complete",this.handler.bind(this)),this.http.on("error",this.error.bind(this)),this.http.on("completeAll",this.onCompleteAll.bind(this))}start(e,t){return r(this,void 0,void 0,function*(){this.config.open&&"function"==typeof this.config.open&&(yield this.config.open.call(this,this)),this.push(e,t)})}test(e,t){this.mode=u.test,this.start(e,t)}push(e,t={},i=!1){let r=[];Array.isArray(e)?r=r.concat(e):r.push(e),r.forEach(e=>{const r=this.getRuleConfig(e),n=r&&r.http||{};this.http.push(e,Object.assign({},n,{rule:r},t),i)})}rule(e,t,i,...r){let n={};const s=r[r.length-1];let c;"object"==typeof s&&(n=s,r.pop());const u=new Promise((e,t)=>{c=t}),l=new o.default(e,t,n,i,r,(e,t,i)=>{c(e,t,i,this)});return this.rules.push(l),u}use(...e){this.http.appendMiddleware(e)}handler(e){return r(this,void 0,void 0,function*(){const{url:t,data:i,config:n}=e,s=[];for(const e of this.rules)e.test(t)&&s.push(e);let o=!0;if(s.forEach(e=>r(this,void 0,void 0,function*(){try{o&&(o=e.isInclude()),yield e.call(t,i,n,this)}catch(i){e.callError(t,i,n,this)}})),!o||"string"!=typeof i||this.mode===u.test)return;this.rules.reduce((e,r)=>{return r.match(t,i).forEach(t=>{e.add(t)}),e},new Set).forEach(e=>{this.push(e)})})}error(e){const{url:t,error:i,config:r}=e;this.errorMiddlewares.forEach(e=>{e.call(this,t,i,r,this)})}onCompleteAll(){if(this.config.plan){const{time:e,urls:t}=this.config.plan;setTimeout(()=>{this.push(t)},e)}else this.config.close&&"function"==typeof this.config.close&&this.config.close.call(this,this)}getRuleConfig(e){return this.rules.reduce((t,i)=>i.test(e)?Object.assign({},t,i.config):t,{})}initRules(e){e.forEach(e=>{const t=new o.default(e.name,e.test,e.config,e.parse,e.pipeline,e.error);this.rules.push(t)})}}t.default=l},128:function(e,t,i){"use strict";var r=this&&this.__awaiter||function(e,t,i,r){return new(i||(i=Promise))(function(n,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function c(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){e.done?n(e.value):new i(function(t){t(e.value)}).then(o,c)}u((r=r.apply(e,t||[])).next())})},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(i(239)),o=i(36),c=n(i(240)),u=n(i(258));class l extends o.EventEmitter{constructor(e={repeat:!1},t){super(),this.delay=0,this.overlist=new Set,this.maxConnect=1/0,this.connect=0,this.middlewares=[],this.timer=null,this.config={overlist:new Set,cacheMap:new Map},this.queue=[];const i=this.config=Object.assign({},this.config,e);i.maxConnect&&(this.maxConnect=i.maxConnect,delete i.maxConnect),i.delay&&(this.maxConnect=1,this.delay=i.delay,delete i.delay),i.repeat||(this.middlewares.push(s.default),delete i.repeat),t&&(this.middlewares=[...this.middlewares,...t])}static clone(e){return new l(e.config,e.middlewares)}ifInsert(){return this.connect<this.maxConnect}push(e,t={},i=!1){return r(this,void 0,void 0,function*(){if(this.ifInsert())return void this.run(e,t);const r=this.queue;i?r.unshift({url:e,config:t}):r.push({url:e,config:t})})}run(e,t={}){return r(this,void 0,void 0,function*(){this.connect++;let i=!1;try{let r=this.callMiddleware(Object.assign({url:e},this.config,t,{rootConfig:this.config}));if(!1===r)throw i=!0,new Error("middleware return false");const n=yield u.default(e,Object.assign({jar:!1,encoding:null},r)),s={url:e,config:r,data:n};if(!r.encoding){const e=r.meta&&r.meta.charset;s.data=this.decode(n,e)}this.emit("complete",s)}catch(i){this.emit("error",{url:e,config:t,error:i})}finally{this.delay&&!i?this.timer=setTimeout(()=>{this.timer&&(clearTimeout(this.timer),this.timer=null),this.complete()},this.delay):this.complete()}})}appendMiddleware(e){Array.isArray(e)?this.middlewares=this.middlewares.concat(e):this.middlewares.push(e)}callMiddleware(e){let t=Object.assign({},e);for(const e of this.middlewares){const i=e(t);if(i)t=i;else if(!1===i)return!1}return t}decode(e,t){if(t)return c.default.decode(e,t);const i=c.default.decode(e,"utf8");try{t=(t=/charset\=[^"].*"|charset\="[^"].*"/.exec(i)).replace("charset=","").replace(/"/g,"").replace("-","").trim()}catch(e){t="utf8"}return"utf8"===t.toLowerCase()?i:c.default.decode(e,t)}complete(){for(this.connect--;this.ifInsert();){const e=this.queue.shift();if(!e)break;this.push(e.url,e.config)}0===this.connect&&0===this.queue.length&&this.emit("completeAll")}}t.default=l},129:function(e,t){e.exports=require("string_decoder")},14:function(e,t){e.exports=require("buffer")},148:function(e,t){e.exports=require("path")},149:function(e,t){e.exports=require("tls")},15:function(e,t){e.exports=require("url")},151:function(e,t){e.exports=require("fs")},235:function(e,t,i){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),r(i(236)).default()},236:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(237),n=i(595),s=i(596),o=[...Array(22).keys()].map(e=>`http://interface.sina.cn/pc_api/public_news_data.d.json?callback=jQuery111205342924576141639_1552357040134&cids=239198%2C239199%2C239200%2C239201%2C239202&pdps=&smartFlow=&editLevel=0%2C1%2C2%2C3&type=std_news%2Cstd_slide%2Cstd_video&pageSize=40&mod=nt_category_finance_fund_hot&cTime=1483200000&up=${e}&action=0&_=1552357040135`),c=new r.Spider({name:"sina",http:{delay:5e3},errorMiddleware:[(e,t)=>{t.message.includes("false")||console.log("error",e,t)}],plan:{time:18e5,urls:o.slice(0,2)}});c.rule("list",/http:\/\/interface\.sina\.cn\/pc_api\/public_news_data\.d\.json?.*/,(e,t,i,r,s)=>{if("string"!=typeof t)return null;let o=t.substring(t.indexOf("(")+1,t.lastIndexOf(")"));o=n.handlerJSONP(o);const c=n.get("data",o);if(!c)return null;c.map((e,t)=>{const i={docid:e.docid,title:e.title,url:e.url,pc_url:e.pcurl,wap_url:e.wapurl,media:e.media,labels:e.labels_show,tags:e.tags,introduct:e.intro,thumb:e.thumb,thumbs:e.thumbs,mthumbs:e.mthumbs,img_count:e.img_count,ctime:e.ctime,fptime:e.fpTime};console.log(i),s.push(i.wap_url,{meta:i})})},{cacheTime:5e4,include:!1}),c.rule("item",/http[s]*:\/\/finance\.sina\.cn\/.*\.html/,(e,t,i,r,n)=>{const s=r.meta;if(!s||!s.title)return;const o=[],c=[];let u="",l="",a=!1;if(!i)return;let d=i("body > main > section.j_main_art > section > article > section.art_pic_card.art_content");return d&&d.children?(d.children().each((e,t)=>{const r=i(t);if(!r)return;let n="";r.find("img").each((e,t)=>{const r=i(t).attr("data-src")||i(t).attr("src");r&&!r.includes(".cn/default/")&&r!==n&&(n=r,o.push(`[image-${c.length}]`),c.push(r))});const d=r.text().trim().replace(/\\t/g,"").replace(/\\n/g,"").replace(/&nbsp;/g," ");if(u||!/^来源：/.test(d))if(l||!/^作者：/.test(d)){if(!s.introduct&&d!==s.title)if(d.length>s.title.length+1)s.introduct=d;else{const e=d.indexOf("。");-1!==e&&(s.introduct=d.substring(0,e+1))}!a&&(d.includes("禁止")||d.includes("授权"))&&d.includes("转载")&&(a=!0),o.push(d)}else l=d.replace(/^作者：/,"");else u=d.replace(/^来源：/,"")}),s.texts=o,s.imagelist=c,s.target=u,s.target_url=u,s.author=l,s.is_copyright=a,s):void 0},s.saveMysql,{include:!1}),t.default=function(){c.start(o)}},237:function(e,t,i){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(i(238)),s=r(i(128)),o=r(i(127));t.Crawl=n.default,t.Http=s.default,t.Spider=o.default,t.default=t.Spider},238:function(e,t,i){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(i(127));t.default=class{static create(e){return new n.default(e)}}},239:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{url:t,overlist:i,cacheMap:r,rule:n,rootConfig:s,cacheTime:o}=e;if(i||(s.overlist=e.overlist=i=new Set),r||(s.cacheMap=e.cacheMap=r=new Map),o||n&&n.cacheTime){const n=r.get(t);return n&&Date.now()-n.date>=o?(r.delete(t),i.delete(t),e):!n&&(i.add(t),r.set(t,{date:Date.now()}),e)}return!i.has(t)&&e}},30:function(e,t){e.exports=require("assert")},305:function(e,t){e.exports=require("zlib")},36:function(e,t){e.exports=require("events")},39:function(e,t){e.exports=require("http")},4:function(e,t){e.exports=require("crypto")},412:function(e,t){e.exports=require("os")},413:function(e,t,i){"use strict";var r=this&&this.__awaiter||function(e,t,i,r){return new(i||(i=Promise))(function(n,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function c(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){e.done?n(e.value):new i(function(t){t(e.value)}).then(o,c)}u((r=r.apply(e,t||[])).next())})},n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(i(414)),c=s(i(15));t.default=class{constructor(e="rule",t,i={baseUrl:""},r,n,s){this.pipelines=[],this.name=e,this.rule=new RegExp(t),this.config=i,this.parse=r,n&&(Array.isArray(n)?this.pipelines=this.pipelines.concat(n):this.pipelines.push(n)),this.error=s}match(e,t){const i=new Set,r=new RegExp(this.rule,"g"),n=t.match(r);return Array.isArray(n)&&n.forEach(t=>{const r=this.config.baseUrl?this.config.baseUrl:e;i.add(c.default.resolve(r,t))}),i}test(e){return this.rule.test(e)}call(e,t,i,n){return r(this,void 0,void 0,function*(){if(this.test(e)&&this.parse)try{let r=yield this.parse.call(n,e,t,"string"==typeof t?o.load(t):null,i,n);if(!this.pipelines.length)return;for(const e of this.pipelines)if(!1===(r=yield e.call(n,r,n)))break}catch(t){this.callError(e,t,i,n)}})}callError(e,t,i,r){this.error&&this.error.call(r,e,t,i,r)}isInclude(){return!1!==this.config.include}}},58:function(e,t){e.exports=require("net")},59:function(e,t){e.exports=require("https")},595:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.get=function(e,t){const i=e.split(".");let r=t;for(let e of i){let t=r[e];if(!t)return null;r=t}return r},t.handlerJSONP=function(e){return e.replace(/\\"/g,'"').replace(/"\{/g,"{").replace(/\}"/g,"}").replace(/"\[/g,"[").replace(/\]"/g,"]"),JSON.parse(e)}},596:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.saveMysql=function(e){console.log(e)}},83:function(e,t){e.exports=require("punycode")},85:function(e,t){e.exports=require("querystring")}})});