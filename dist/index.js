!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(global,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){var n,o,i;o=[t,r(12)],void 0===(i="function"==typeof(n=function(e,t){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.createLogger=function(e,r){void 0===r&&(r=!0);var n=t.default.getLogger(e);return n.addContext("logName",e),r||(n.level="off"),n},e.default=void 0,(r=t,t=r&&r.__esModule?r:{default:r}).default.configure({appenders:{console:{type:"console"}},categories:{default:{appenders:["console"],level:"info"}}});var n=t.default;e.default=n})?n.apply(t,o):n)||(e.exports=i)},function(e,t,r){var n,o,i;o=[t,r(2),r(8),r(3),r(13),r(0)],void 0===(i="function"==typeof(n=function(r,n,o,i,u,c){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,o=a(o),i=a(i),u=a(u);var s,f,p,h=(p=function(e,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),d=function(){return(d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},y=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function u(e){try{a(n.next(e))}catch(e){i(e)}}function c(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(u,c)}a((n=n.apply(e,t||[])).next())})},g=function(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};(function(e){e[e.development=0]="development",e[e.production=1]="production",e[e.test=2]="test"})(s||(s={})),function(e){e[e.Running=0]="Running",e[e.Complete=1]="Complete",e[e.Waiting=2]="Waiting"}(f||(f={}));var v=function(e){function t(t,r){var n=e.call(this)||this;return n.config={},n.rules=[],n.status=f.Waiting,n.mode=s.production,n.errorMiddlewares=[],n.config=d({},n.config,t),n.http=r?i.default.clone(r):new i.default(d({},t.http,{name:t.name,log:t.log}),t.downloadMiddleware),n.logger=(0,c.createLogger)(t.name||"spider",t.log),n.init(n.config),n}return h(t,e),t.new=function(e){return new t(e)},t.prototype.init=function(e){e.rules&&this.initRules(e.rules),e.errorMiddleware&&(this.errorMiddlewares=this.errorMiddlewares.concat(e.errorMiddleware)),this.http.on("complete",this.handler.bind(this)),this.http.on("error",this.error.bind(this)),this.http.on("completeAll",this.onCompleteAll.bind(this))},t.prototype.start=function(e,t){return void 0===e&&(e=[]),y(this,void 0,void 0,function(){return g(this,function(r){switch(r.label){case 0:return this.status=f.Running,this.config.open&&"function"==typeof this.config.open?(this.logger.info("执行打开函数"),[4,this.config.open.call(this,this)]):[3,2];case 1:r.sent(),r.label=2;case 2:return this.push(e,t),[2]}})})},t.prototype.test=function(e,t){this.mode=s.test,this.start(e,t)},t.prototype.push=function(e,t,r){var n=this;void 0===t&&(t={}),void 0===r&&(r=!1);var o=[];"function"==typeof e&&(e=e()),Array.isArray(e)?o=o.concat(e):e instanceof Set?o=o.concat(Array.from(e)):o.push(e),0!==this.http.connect||0!==o.length?o.forEach(function(e){if(e&&"string"==typeof e){n.logger.info("任务推送:"+e);var o=n.getRuleConfig(e),i=o&&o.http||{};n.http.push(e,d({},i,{rule:o},t),r)}}):this.status=f.Complete},t.prototype.rule=function(e,t,r){for(var n=this,o=[],i=3;i<arguments.length;i++)o[i-3]=arguments[i];var c,a={},s=o[o.length-1];"object"===l(s)&&(a=s,o.pop());var f=new Promise(function(e,t){c=t}),p=new u.default(e,t,a,r,o,function(e,t,r){c(e,t,r,n)});return this.rules.push(p),f},t.prototype.use=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.http.appendMiddleware(e)},t.prototype.handler=function(e){return y(this,void 0,Promise,function(){var t,r,n,o,i,u,c=this;return g(this,function(a){return t=e.url,r=e.data,n=e.config,this.logger.info("请求完成,等待处理,"+t),o=this.rules.filter(function(e){return e.test(t)}),i=!0,o.forEach(function(e){return y(c,void 0,void 0,function(){var o;return g(this,function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),i&&(i=e.isInclude()),this.logger.info("正在进行数据处理:"+t),[4,e.call(t,r,n,this)];case 1:return u.sent(),[3,3];case 2:return o=u.sent(),this.logger.error("数据处理异常,url:"+t+",error:",o),e.callError(t,o,n,this),[3,3];case 3:return[2]}})})}),i&&"string"==typeof r&&this.mode!==s.test?(this.logger.info("正在提取匹配url:"+t),u=this.rules.reduce(function(e,n){var o=n.match(t,r);return o.forEach(function(t){e.add(t)}),e},new Set),this.push(u),[2]):[2]})})},t.prototype.error=function(e){var t=this,r=e.url,n=e.error,o=e.config;this.errorMiddlewares.forEach(function(e){e.call(t,r,n,o,t)})},t.prototype.plan=function(e,t,r){var n=this;void 0===r&&(r=!0),r&&this.start(t),o.default.scheduleJob(e,function(){n.status!==f.Running&&n.start(t)})},t.prototype.onCompleteAll=function(){var e=this;if(this.status=f.Complete,this.logger.info("任务全部完成"),this.config.plan){var t=this.config.plan,r=t.time,n=t.urls;this.logger.info("等待执行计划任务,剩余时间"+r),setTimeout(function(){e.logger.info("执行定时任务"),e.push(n)},r)}else this.config.close&&"function"==typeof this.config.close&&(this.logger.info("执行关闭函数"),this.config.close.call(this,this))},t.prototype.getRuleConfig=function(e){var t=this.rules.reduce(function(t,r){return r.test(e)?d({},t,r.config):t},{});return t},t.prototype.initRules=function(e){var t=this;e.forEach(function(e){var r=new u.default(e.name,e.test,e.config,e.parse,e.pipeline,e.error);t.rules.push(r)}),this.logger.info("初始化规则,共找到"+this.rules.length+"个")},t}(n.EventEmitter);r.default=v,e.exports=t.default})?n.apply(t,o):n)||(e.exports=i)},function(e,t){e.exports=require("events")},function(e,t,r){var n,o,i;o=[t,r(2),r(9),r(10),r(11),r(0)],void 0===(i="function"==typeof(n=function(e,t,r,n,o,i){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Http=void 0,r=u(r),n=u(n),o=u(o);var c,a=(c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function u(e){try{a(n.next(e))}catch(e){i(e)}}function c(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(u,c)}a((n=n.apply(e,t||[])).next())})},f=function(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},p=function(e){function t(t,r){void 0===t&&(t={repeat:!1});var n=e.call(this)||this;n.delay=0,n.maxConnect=1/0,n.connect=0,n.middlewares=[],n.timer=null,n.config={overlist:new Set,cacheMap:new Map},n.queue=[],n.logger=(0,i.createLogger)(t.name||"spider",t.log);var u=n.config=l({},n.config,t);return u.maxConnect&&(n.maxConnect=u.maxConnect,delete u.maxConnect),u.delay&&(n.maxConnect=1,n.delay=u.delay,delete u.delay),u.repeat||(n.middlewares.push(o.default),delete u.repeat),r&&(n.middlewares=n.middlewares.concat(r)),n}return a(t,e),t.clone=function(e){return new t(e.config,e.middlewares)},t.prototype.request=function(e,t){return s(this,void 0,void 0,function(){return f(this,function(r){switch(r.label){case 0:return[4,(0,n.default)(e,t)];case 1:return[2,r.sent()]}})})},t.prototype.inspect=function(){return this.connect<this.maxConnect},t.prototype.push=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r=!1),s(this,void 0,Promise,function(){var n;return f(this,function(o){return this.inspect()?(this.run(e,t),[2]):(this.logger.info("任务加入队列:"+e),n=this.queue,r?n.unshift({url:e,config:t}):n.push({url:e,config:t}),[2])})})},t.prototype.addOverUrl=function(e){this.config.overlist||(this.config.overlist=new Set),this.config.overlist.add(e)},t.prototype.run=function(e,t){return void 0===t&&(t={}),s(this,void 0,Promise,function(){var r,n,o,i,u,c,a=this;return f(this,function(s){switch(s.label){case 0:this.connect++,this.logger.info("正在进行请求,目前请求数量:"+this.connect+":url:"+e),r=!1,s.label=1;case 1:return s.trys.push([1,4,5,6]),[4,this.callMiddleware(l({url:e},this.config,t,{rootConfig:this.config}))];case 2:if(!1===(n=s.sent()))throw this.logger.info("网络处理中间件阻止继续执:"+e),r=!0,new Error("middleware return false");return[4,this.request(e,l({jar:!1,encoding:null},n))];case 3:o=s.sent(),i={url:e,config:n,data:o},n.encoding||(u=n.charset,i.data=this.decode(o,u));try{"string"==typeof i.data&&/^(\{|\[)/.test(i.data)&&(i.data=JSON.parse(i.data))}catch(e){}return this.logger.info("网络请求完成:"+e),this.emit("complete",i),[3,6];case 4:return"middleware return false"!==(c=s.sent()).message&&t.retry?(this.push(e,l({},t,{retry:t.retry-1})),this.emit("error-retry",{url:e,config:t,error:c}),[2]):(this.emit("error",{url:e,config:t,error:c}),[3,6]);case 5:return this.delay&&!r?setTimeout(function(){a.logger.info("网络请求等待延迟:"+e+","+a.delay),a.complete()},this.delay):this.complete(),[7];case 6:return[2]}})})},t.prototype.appendMiddleware=function(e){Array.isArray(e)?this.middlewares=this.middlewares.concat(e):this.middlewares.push(e)},t.prototype.callMiddleware=function(e){return s(this,void 0,Promise,function(){var t,r,n,o;return f(this,function(i){switch(i.label){case 0:t=e,r=0,n=this.middlewares,i.label=1;case 1:return r<n.length?[4,(0,n[r])(t)]:[3,4];case 2:if(o=i.sent())t=o;else if(!1===o)return[2,!1];i.label=3;case 3:return r++,[3,1];case 4:return[2,t]}})})},t.prototype.decode=function(e,t){if(t)return r.default.decode(e,t);var n=r.default.decode(e,"utf8");try{t=(t=/charset\=[^"].*"|charset\="[^"].*"/.exec(n)).replace("charset=","").replace(/"/g,"").replace("-","").trim()}catch(e){t="utf8"}return"utf8"===t.toLowerCase()?n:r.default.decode(e,t)},t.prototype.complete=function(){for(this.connect--;this.inspect();){var e=this.queue.shift();if(!e)break;this.push(e.url,e.config)}0===this.connect&&0===this.queue.length&&this.emit("completeAll")},t}(t.EventEmitter);e.Http=p;var h=p;e.default=h})?n.apply(t,o):n)||(e.exports=i)},function(e,t,r){r(5),e.exports=r(6)},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,r){var n,o,i;o=[t,r(7),r(3),r(1),r(16),r(0)],void 0===(i="function"==typeof(n=function(e,t,r,n,o,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u={createLogger:!0};Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"createLogger",{enumerable:!0,get:function(){return i.createLogger}}),Object.keys(t).forEach(function(r){"default"!==r&&"__esModule"!==r&&(Object.prototype.hasOwnProperty.call(u,r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[r]}}))}),Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(u,t)||Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}}))}),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(n),Object.keys(n).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(u,t)||Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[t]}}))}),Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(u,t)||Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}}))})})?n.apply(t,o):n)||(e.exports=i)},function(e,t,r){var n,o,i;o=[t,r(1)],void 0===(i="function"==typeof(n=function(e,t){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Crawl=void 0,t=(r=t)&&r.__esModule?r:{default:r};var n=function(){function e(){}return e.create=function(e){var r=new t.default(e);return r},e}();e.Crawl=n;var o=n;e.default=o})?n.apply(t,o):n)||(e.exports=i)},function(e,t){e.exports=require("node-schedule")},function(e,t){e.exports=require("iconv-lite")},function(e,t){e.exports=require("request-promise")},function(e,t,r){var n,o,i;o=[t],void 0===(i="function"==typeof(n=function(r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return n(this,void 0,Promise,function(){var t,r,n,i,u,c,a,l;return o(this,function(o){return t=e.url,r=e.overlist,n=e.cacheMap,i=e.rule,u=e.rootConfig,c=e.cacheTime,r||(u.overlist=e.overlist=r=new Set),n||(u.cacheMap=e.cacheMap=n=new Map),(a=c||i&&i.cacheTime)?(l=n.get(t))&&Date.now()-l.date>=a?(l.date=Date.now(),[2,e]):l||r.has(t)?[2,!1]:(r.add(t),n.set(t,{date:Date.now()}),[2,e]):r.has(t)?[2,!1]:[2,e]})})};var n=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function u(e){try{a(n.next(e))}catch(e){i(e)}}function c(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(u,c)}a((n=n.apply(e,t||[])).next())})},o=function(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};e.exports=t.default})?n.apply(t,o):n)||(e.exports=i)},function(e,t){e.exports=require("log4js")},function(e,t,r){var n,o,i;o=[t,r(14),r(15)],void 0===(i="function"==typeof(n=function(e,t,r){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Rule=void 0,t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(t),r=(n=r)&&n.__esModule?n:{default:n};var o=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function u(e){try{a(n.next(e))}catch(e){i(e)}}function c(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(u,c)}a((n=n.apply(e,t||[])).next())})},i=function(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},u=function(){function e(e,t,r,n,o,i){void 0===e&&(e="rule"),void 0===r&&(r={baseUrl:""}),this.pipelines=[],this.name=e,this.rule=new RegExp(t),this.config=r,this.parse=n,o&&(Array.isArray(o)?this.pipelines=this.pipelines.concat(o):this.pipelines.push(o)),this.error=i}return e.prototype.match=function(e,t){var n=this,o=new Set,i=new RegExp(this.rule,"g"),u=t.match(i);return Array.isArray(u)&&u.forEach(function(t){var i=n.config.baseUrl?n.config.baseUrl:e;o.add(r.default.resolve(i,t))}),o},e.prototype.test=function(e){return this.rule.test(e)},e.prototype.call=function(e,r,n,u){return o(this,void 0,Promise,function(){var o,c,a,l;return i(this,function(i){switch(i.label){case 0:if(!this.test(e))return[2];if(!this.parse)return[2];i.label=1;case 1:return i.trys.push([1,7,,8]),[4,this.parse.call(u,e,r,t.load(r),n,u)];case 2:if(o=i.sent(),!this.pipelines.length)return[2];c=0,a=this.pipelines,i.label=3;case 3:return c<a.length?[4,a[c].call(u,o,u)]:[3,6];case 4:if(!1===(o=i.sent()))return[3,6];i.label=5;case 5:return c++,[3,3];case 6:return[3,8];case 7:return l=i.sent(),this.callError(e,l,n,u),[3,8];case 8:return[2]}})})},e.prototype.callError=function(e,t,r,n){this.error&&this.error.call(n,e,t,r,n)},e.prototype.isInclude=function(){return!1!==this.config.include},e}();e.Rule=u;var c=u;e.default=c})?n.apply(t,o):n)||(e.exports=i)},function(e,t){e.exports=require("cheerio")},function(e,t){e.exports=require("url")},function(e,t,r){var n,o,i;o=[t],void 0===(i="function"==typeof(n=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$get=function(e,t,r){void 0===r&&(r=null);var n=t.split("."),o=e;try{for(var i=0,u=n;i<u.length;i++){var c=u[i],a=o[c];if(!a)throw new Error;o=a}return o}catch(e){return r}},e.$call=function(e,t,r){return void 0===r&&(r=null),e&&e[t]&&"function"==typeof e[t]?e[t]():r},e.handlerJSONP=function(e){return e.replace(/\\"/g,'"').replace(/"\{/g,"{").replace(/\}"/g,"}").replace(/"\[/g,"[").replace(/\]"/g,"]"),JSON.parse(e)}})?n.apply(t,o):n)||(e.exports=i)}])});