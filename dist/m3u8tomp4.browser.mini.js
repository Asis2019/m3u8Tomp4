!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).m3u8tomp4={})}(this,(function(e){"use strict";function t(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function r(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function s(e){t(a,o,i,s,c,"next",e)}function c(e){t(a,o,i,s,c,"throw",e)}s(void 0)}))}}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=s(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function u(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports),r.exports}u((function(e){var t=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(e,t,r){var n=l;return function(o,i){if(n===m)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=j(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var c=u(e,t,r);if("normal"===c.type){if(n=r.done?h:p,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=f;var l="suspendedStart",p="suspendedYield",m="executing",h="completed",d={};function g(){}function y(){}function v(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==r&&n.call(x,i)&&(w=x);var E=v.prototype=g.prototype=Object.create(w);function F(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(o,i,a,s){var c=u(e[o],e,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(l).then((function(e){f.value=e,a(f)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function j(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function P(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:t,done:!0}}return y.prototype=E.constructor=v,v.constructor=y,y.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},F(_.prototype),_.prototype[a]=function(){return this},e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},F(E),c(E,s,"Generator"),E[i]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}));let l=!1,p=()=>{};var m={logging:l,setLogging:e=>{l=e},setCustomLogger:e=>{p=e},log:(e,t)=>{p({type:e,message:t}),l&&console.log(`[${e}] ${t}`)}};let h=0;const d=e=>{const[t,r,n]=e.split(":");return 60*parseFloat(t)*60+60*parseFloat(r)+parseFloat(n)};var g=u((function(e,t){e.exports=function(){function e(){var e=arguments.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var t=document.createElement("base");if(t.href=arguments[0],1===e)return t.href;var r=document.getElementsByTagName("head")[0];r.insertBefore(t,r.firstChild);for(var n,o=document.createElement("a"),i=1;i<e;i++)o.href=arguments[i],n=o.href,t.href=n;return r.removeChild(t),n}return e}()})),y={_from:"@ffmpeg/ffmpeg@^0.9.5",_id:"@ffmpeg/ffmpeg@0.9.5",_inBundle:!1,_integrity:"sha1-ZiR0fcMxYyvHxYHo1PIEaryTN5g=",_location:"/@ffmpeg/ffmpeg",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"@ffmpeg/ffmpeg@^0.9.5",name:"@ffmpeg/ffmpeg",escapedName:"@ffmpeg%2fffmpeg",scope:"@ffmpeg",rawSpec:"^0.9.5",saveSpec:null,fetchSpec:"^0.9.5"},_requiredBy:["/"],_resolved:"https://registry.npm.taobao.org/@ffmpeg/ffmpeg/download/@ffmpeg/ffmpeg-0.9.5.tgz",_shasum:"6624747dc331632bc7c581e8d4f2046abc933798",_spec:"@ffmpeg/ffmpeg@^0.9.5",_where:"D:\\web\\m3u8Tomp4",author:{name:"Jerome Wu",email:"jeromewus@gmail.com"},browser:{"./src/node/index.js":"./src/browser/index.js"},bugs:{url:"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},bundleDependencies:!1,dependencies:{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},deprecated:!1,description:"FFmpeg WebAssembly version",devDependencies:{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.8.4","@types/emscripten":"^1.39.4","babel-loader":"^8.1.0",chai:"^4.2.0",cors:"^2.8.5",eslint:"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1",express:"^4.17.1",mocha:"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.2.0",webpack:"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"},directories:{example:"examples"},engines:{node:">=12.16.1"},homepage:"https://github.com/ffmpegwasm/ffmpeg.wasm#readme",keywords:["ffmpeg","WebAssembly","video"],license:"MIT",main:"src/index.js",name:"@ffmpeg/ffmpeg",repository:{type:"git",url:"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},scripts:{build:"rimraf dist && webpack --config scripts/webpack.config.prod.js",lint:"eslint src",prepublishOnly:"npm run build",start:"node scripts/server.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js",wait:"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js"},types:"src/index.d.ts",version:"0.9.5"};const{devDependencies:v}=y;var w={corePath:"undefined"!=typeof process&&"development"===process.env.FFMPEG_ENV?g("/node_modules/@ffmpeg/core/dist/ffmpeg-core.js"):`https://unpkg.com/@ffmpeg/core@${v["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`};const{log:b}=m;var x={defaultOptions:w,getCreateFFmpegCore:async({corePath:e})=>{if(void 0===window.createFFmpegCore){b("info","fetch ffmpeg-core.worker.js script");const t=g(e),r=await(await fetch(t.replace("ffmpeg-core.js","ffmpeg-core.worker.js"))).blob();return window.FFMPEG_CORE_WORKER_SCRIPT=URL.createObjectURL(r),b("info",`worker object URL=${window.FFMPEG_CORE_WORKER_SCRIPT}`),b("info",`download ffmpeg-core script (~25 MB) from ${t}`),new Promise((e=>{const r=document.createElement("script"),n=()=>{r.removeEventListener("load",n),b("info","initialize ffmpeg-core"),e(window.createFFmpegCore)};r.src=t,r.type="text/javascript",r.addEventListener("load",n),document.getElementsByTagName("head")[0].appendChild(r)}))}return b("info","ffmpeg-core is loaded already"),Promise.resolve(window.createFFmpegCore)},fetchFile:async e=>{let t=e;if(void 0===e)return new Uint8Array;if("string"==typeof e)if(/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e))t=atob(e.split(",")[1]).split("").map((e=>e.charCodeAt(0)));else{const r=await fetch(g(e));t=await r.arrayBuffer()}else(e instanceof File||e instanceof Blob)&&(t=await(r=e,new Promise(((e,t)=>{const n=new FileReader;n.onload=()=>{e(n.result)},n.onerror=({target:{error:{code:e}}})=>{t(Error(`File could not be read! Code=${e}`))},n.readAsArrayBuffer(r)}))));var r;return new Uint8Array(t)}};const{defaultArgs:E,baseOptions:F}={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}},{setLogging:_,setCustomLogger:j,log:O}=m,{defaultOptions:L,getCreateFFmpegCore:k}=x,{version:P}=y,S=Error("ffmpeg.wasm is not ready, make sure you have completed load().");const{fetchFile:R}=x;var C={createFFmpeg:(e={})=>{const{log:t,logger:r,progress:n,...o}={...F,...L,...e};let i=null,a=null,s=null,c=!1,f=n;const u=({type:e,message:t})=>{O(e,t),((e,t)=>{if("string"==typeof e)if(e.startsWith("  Duration")){const t=e.split(", ")[0].split(": ")[1],r=d(t);(0===h||h>r)&&(h=r)}else if(e.startsWith("frame")){const r=e.split("time=")[1].split(" ")[0];t({ratio:d(r)/h})}else e.startsWith("video:")&&(t({ratio:1}),h=0)})(t,f),(e=>{"FFMPEG_END"===e&&null!==s&&(s(),s=null,c=!1)})(t)};return _(t),j(r),O("info",`use ffmpeg.wasm v${P}`),{setProgress:e=>{f=e},setLogger:e=>{j(e)},setLogging:_,load:async()=>{if(O("info","load ffmpeg-core"),null!==i)throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.");{O("info","loading ffmpeg-core");const e=await k(o);i=await e({printErr:e=>u({type:"fferr",message:e}),print:e=>u({type:"ffout",message:e}),locateFile:(e,t)=>"undefined"!=typeof window&&void 0!==window.FFMPEG_CORE_WORKER_SCRIPT&&e.endsWith("ffmpeg-core.worker.js")?window.FFMPEG_CORE_WORKER_SCRIPT:t+e}),a=i.cwrap("proxy_main","number",["number","number"]),O("info","ffmpeg-core loaded")}},isLoaded:()=>null!==i,run:(...e)=>{if(O("info",`run ffmpeg command: ${e.join(" ")}`),null===i)throw S;if(c)throw Error("ffmpeg.wasm can only run one command at a time");return c=!0,new Promise((t=>{const r=[...E,...e].filter((e=>0!==e.length));s=t,a(...((e,t)=>{const r=e._malloc(t.length*Uint32Array.BYTES_PER_ELEMENT);return t.forEach(((t,n)=>{const o=e._malloc(t.length+1);e.writeAsciiToMemory(t,o),e.setValue(r+Uint32Array.BYTES_PER_ELEMENT*n,o,"i32")})),[t.length,r]})(i,r))}))},FS:(e,...t)=>{if(O("info",`run FS.${e} ${t.map((e=>"string"==typeof e?e:`<${e.length} bytes binary file>`)).join(" ")}`),null===i)throw S;{let r=null;try{r=i.FS[e](...t)}catch(r){throw"readdir"===e?Error(`ffmpeg.FS('readdir', '${t[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`):"readFile"===e?Error(`ffmpeg.FS('readFile', '${t[0]}') error. Check if the path exists`):Error("Oops, something went wrong in FS operation.")}return r}}}},fetchFile:R},T=function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},A=function(){},N=function(e){A=e},W=function(e){return A(e)},$=C.fetchFile,G=/(.*\/).*\.m3u8$/,I=function(){var e=r(regeneratorRuntime.mark((function e(t){var r,n,o,s,c,u,l,p,m,h,d,g;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={},e.next=3,M(t);case 3:if(n=e.sent,o=T(n),s=t.match(G),c=a(s,2),c[0],u=c[1],0!==(l=o.split("\n").filter((function(e){return!e.startsWith("#")}))).length){e.next=9;break}return e.abrupt("return",r);case 9:if(y=l[0],"ts"!==(y.endsWith("m3u8")?"m3u8":y.endsWith("ts")?"ts":y.endsWith("key")?"key":"")){e.next=15;break}return r[t]=l.map((function(e){return{name:e,path:u+e}})).filter((function(e){return e.name})),e.abrupt("return",r);case 15:p=f(l),e.prev=16,p.s();case 18:if((m=p.n()).done){e.next=27;break}return h=m.value,d=u+h,e.next=23,I(d);case 23:g=e.sent,r=i(i({},r),g);case 25:e.next=18;break;case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(16),p.e(e.t0);case 32:return e.prev=32,p.f(),e.finish(32);case 35:return e.abrupt("return",r);case 36:case"end":return e.stop()}var y}),e,null,[[16,29,32,35]])})));return function(t){return e.apply(this,arguments)}}(),M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return r(regeneratorRuntime.mark((function r(){var n,o,i,a,s,c=arguments;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(n=c.length,o=new Array(n),i=0;i<n;i++)o[i]=c[i];a=0;case 2:if(!(a<t)){r.next=18;break}return r.prev=3,r.next=6,e.apply(null,o);case 6:return s=r.sent,r.abrupt("return",s);case 10:if(r.prev=10,r.t0=r.catch(3),W("下载".concat(o[0],"出错,已尝试次数").concat(a+1)),a!==t-1){r.next=15;break}throw new Error("尝试次数".concat(t,"次,获取失败！"));case 15:a++,r.next=2;break;case 18:case"end":return r.stop()}}),r,null,[[3,10]])})))}($);N(console.log);var B=C.createFFmpeg,D=function(){var e=r(regeneratorRuntime.mark((function e(t){var r,n,o,i,s,c,u,l,p,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=B(),W("开始下载".concat(t,",并获取所有ts片段链接")),e.next=4,I(t);case 4:return n=e.sent,o=a(Object.entries(n)[0],2),i=o[0],s=o[1],W("加载ffmpeg..."),e.next=9,r.load();case 9:return e.t0=r,e.next=12,M(i);case 12:e.t1=e.sent,e.t0.FS.call(e.t0,"writeFile","index.m3u8",e.t1),r.setLogging(!1),r.setProgress((function(e){var t=e.ratio;W("合并进度".concat(t,"."))})),c=f(s),e.prev=17,c.s();case 19:if((u=c.n()).done){e.next=31;break}return l=u.value,e.t2=r,e.t3=l.name,e.next=25,M(l.path);case 25:e.t4=e.sent,e.t2.FS.call(e.t2,"writeFile",e.t3,e.t4),p=s.indexOf(l),W("正在下载ts片段: 第".concat(p,"段，共").concat(s.length,"段"));case 29:e.next=19;break;case 31:e.next=36;break;case 33:e.prev=33,e.t5=e.catch(17),c.e(e.t5);case 36:return e.prev=36,c.f(),e.finish(36);case 39:return W("开始执行合并."),e.next=42,r.run("-i","index.m3u8","-c","copy","output.mp4");case 42:return m=r.FS("readFile","output.mp4"),e.abrupt("return",m);case 44:case"end":return e.stop()}}),e,null,[[17,33,36,39]])})));return function(t){return e.apply(this,arguments)}}(),U=N;e.default=D,e.setLogger=U,Object.defineProperty(e,"__esModule",{value:!0})}));
