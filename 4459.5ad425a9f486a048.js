"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4459],{4459:(Ee,at,F)=>{F.d(at,{tD:()=>vr,cd:()=>Er,OL:()=>Ar,T1:()=>Sr,tm:()=>Rr,H0:()=>x,TT:()=>gr,rt:()=>wr,dV:()=>X});var Q={};F.r(Q),F.d(Q,{hasBrowserEnv:()=>qe,hasStandardBrowserEnv:()=>Jt,hasStandardBrowserWebWorkerEnv:()=>Vt});var v=F(5861);function Se(e,t){return function(){return e.apply(t,arguments)}}const{toString:it}=Object.prototype,{getPrototypeOf:Y}=Object,z=(e=Object.create(null),t=>{const r=it.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())}),R=e=>(e=e.toLowerCase(),t=>z(t)===e),I=e=>t=>typeof t===e,{isArray:B}=Array,j=I("undefined");var e;const ve=R("ArrayBuffer"),ct=I("string"),E=I("function"),Re=I("number"),M=e=>null!==e&&"object"==typeof e,q=e=>{if("object"!==z(e))return!1;const t=Y(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},dt=R("Date"),pt=R("File"),ft=R("Blob"),ht=R("FileList"),yt=R("URLSearchParams");function $(e,t,{allOwnKeys:r=!1}={}){if(null===e||typeof e>"u")return;let n,s;if("object"!=typeof e&&(e=[e]),B(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const i=r?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(n=0;n<a;n++)l=i[n],t.call(null,e[l],l,e)}}function Ae(e,t){t=t.toLowerCase();const r=Object.keys(e);let s,n=r.length;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const Oe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Te=e=>!j(e)&&e!==Oe,At=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Y(Uint8Array)),xt=R("HTMLFormElement"),xe=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Pt=R("RegExp"),Ce=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};$(r,(s,i)=>{let a;!1!==(a=t(s,i,e))&&(n[i]=a||s)}),Object.defineProperties(e,n)},te="abcdefghijklmnopqrstuvwxyz",Pe="0123456789",Ne={DIGIT:Pe,ALPHA:te,ALPHA_DIGIT:te+te.toUpperCase()+Pe},jt=R("AsyncFunction"),o={isArray:B,isArrayBuffer:ve,isBuffer:function ot(e){return null!==e&&!j(e)&&null!==e.constructor&&!j(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||E(e.append)&&("formdata"===(t=z(e))||"object"===t&&E(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function lt(e){let t;return t=typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ve(e.buffer),t},isString:ct,isNumber:Re,isBoolean:e=>!0===e||!1===e,isObject:M,isPlainObject:q,isUndefined:j,isDate:dt,isFile:pt,isBlob:ft,isRegExp:Pt,isFunction:E,isStream:e=>M(e)&&E(e.pipe),isURLSearchParams:yt,isTypedArray:At,isFileList:ht,forEach:$,merge:function ee(){const{caseless:e}=Te(this)&&this||{},t={},r=(n,s)=>{const i=e&&Ae(t,s)||s;t[i]=q(t[i])&&q(n)?ee(t[i],n):q(n)?ee({},n):B(n)?n.slice():n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&$(arguments[n],r);return t},extend:(e,t,r,{allOwnKeys:n}={})=>($(t,(s,i)=>{e[i]=r&&E(s)?Se(s,r):s},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let s,i,a;const l={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],(!n||n(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=!1!==r&&Y(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:z,kindOfTest:R,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length);const n=e.indexOf(t,r-=t.length);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!Re(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:xt,hasOwnProperty:xe,hasOwnProp:xe,reduceDescriptors:Ce,freezeMethods:e=>{Ce(e,(t,r)=>{if(E(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;if(E(e[r])){if(t.enumerable=!1,"writable"in t)return void(t.writable=!1);t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{const r={},n=s=>{s.forEach(i=>{r[i]=!0})};return B(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:Ae,global:Oe,isContextDefined:Te,ALPHABET:Ne,generateString:(e=16,t=Ne.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function Dt(e){return!!(e&&E(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),r=(n,s)=>{if(M(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const i=B(n)?[]:{};return $(n,(a,l)=>{const d=r(a,s+1);!j(d)&&(i[l]=d)}),t[s]=void 0,i}}return n};return r(e,0)},isAsyncFn:jt,isThenable:e=>e&&(M(e)||E(e))&&E(e.then)&&E(e.catch)};function U(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}o.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:o.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Fe=U.prototype,Le={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Le[e]={value:e}}),Object.defineProperties(U,Le),Object.defineProperty(Fe,"isAxiosError",{value:!0}),U.from=(e,t,r,n,s,i)=>{const a=Object.create(Fe);return o.toFlatObject(e,a,function(d){return d!==Error.prototype},l=>"isAxiosError"!==l),U.call(a,e.message,t,r,n,s),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const m=U;function re(e){return o.isPlainObject(e)||o.isArray(e)}function Ue(e){return o.endsWith(e,"[]")?e.slice(0,-2):e}function De(e,t,r){return e?e.concat(t).map(function(s,i){return s=Ue(s),!r&&i?"["+s+"]":s}).join(r?".":""):t}const Ht=o.toFlatObject(o,{},null,function(t){return/^is[A-Z]/.test(t)}),J=function zt(e,t,r){if(!o.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=o.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,g){return!o.isUndefined(g[f])})).metaTokens,s=r.visitor||u,i=r.dots,a=r.indexes,d=(r.Blob||typeof Blob<"u"&&Blob)&&o.isSpecCompliantForm(t);if(!o.isFunction(s))throw new TypeError("visitor must be a function");function h(p){if(null===p)return"";if(o.isDate(p))return p.toISOString();if(!d&&o.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return o.isArrayBuffer(p)||o.isTypedArray(p)?d&&"function"==typeof Blob?new Blob([p]):Buffer.from(p):p}function u(p,f,g){let w=p;if(p&&!g&&"object"==typeof p)if(o.endsWith(f,"{}"))f=n?f:f.slice(0,-2),p=JSON.stringify(p);else if(o.isArray(p)&&function $t(e){return o.isArray(e)&&!e.some(re)}(p)||(o.isFileList(p)||o.endsWith(f,"[]"))&&(w=o.toArray(p)))return f=Ue(f),w.forEach(function(N,Or){!o.isUndefined(N)&&null!==N&&t.append(!0===a?De([f],Or,i):null===a?f:f+"[]",h(N))}),!1;return!!re(p)||(t.append(De(g,f,i),h(p)),!1)}const c=[],_=Object.assign(Ht,{defaultVisitor:u,convertValue:h,isVisitable:re});if(!o.isObject(e))throw new TypeError("data must be an object");return function S(p,f){if(!o.isUndefined(p)){if(-1!==c.indexOf(p))throw Error("Circular reference detected in "+f.join("."));c.push(p),o.forEach(p,function(w,P){!0===(!(o.isUndefined(w)||null===w)&&s.call(t,w,o.isString(P)?P.trim():P,f,_))&&S(w,f?f.concat(P):[P])}),c.pop()}}(e),t};function ke(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function je(e,t){this._pairs=[],e&&J(e,this,t)}const $e=je.prototype;$e.append=function(t,r){this._pairs.push([t,r])},$e.toString=function(t){const r=t?function(n){return t.call(this,n,ke)}:ke;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};const He=je;function It(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ze(e,t,r){if(!t)return e;const n=r&&r.encode||It,s=r&&r.serialize;let i;if(i=s?s(t,r):o.isURLSearchParams(t)?t.toString():new He(t,r).toString(n),i){const a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const Ie=class Mt{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){o.forEach(this.handlers,function(n){null!==n&&t(n)})}},Me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qt={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<"u"?URLSearchParams:He,FormData:typeof FormData<"u"?FormData:null,Blob:typeof Blob<"u"?Blob:null},protocols:["http","https","file","blob","url","data"]},qe=typeof window<"u"&&typeof document<"u",Jt=(e=>qe&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Vt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,A={...Q,...qt},Je=function Zt(e){function t(r,n,s,i){let a=r[i++];if("__proto__"===a)return!0;const l=Number.isFinite(+a),d=i>=r.length;return a=!a&&o.isArray(s)?s.length:a,d?(s[a]=o.hasOwnProp(s,a)?[s[a],n]:n,!l):((!s[a]||!o.isObject(s[a]))&&(s[a]=[]),t(r,n,s[a],i)&&o.isArray(s[a])&&(s[a]=function Gt(e){const t={},r=Object.keys(e);let n;const s=r.length;let i;for(n=0;n<s;n++)i=r[n],t[i]=e[i];return t}(s[a])),!l)}if(o.isFormData(e)&&o.isFunction(e.entries)){const r={};return o.forEachEntry(e,(n,s)=>{t(function Kt(e){return o.matchAll(/\w+|\[(\w*)]/g,e).map(t=>"[]"===t[0]?"":t[1]||t[0])}(n),s,r,0)}),r}return null},ne={transitional:Me,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,i=o.isObject(t);if(i&&o.isHTMLForm(t)&&(t=new FormData(t)),o.isFormData(t))return s?JSON.stringify(Je(t)):t;if(o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t))return t;if(o.isArrayBufferView(t))return t.buffer;if(o.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function Wt(e,t){return J(e,new A.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,i){return A.isNode&&o.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}(t,this.formSerializer).toString();if((l=o.isFileList(t))||n.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return J(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(r.setContentType("application/json",!1),function Xt(e,t,r){if(o.isString(e))try{return(t||JSON.parse)(e),o.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(e)}(t)):t}],transformResponse:[function(t){const r=this.transitional||ne.transitional,n=r&&r.forcedJSONParsing,s="json"===this.responseType;if(t&&o.isString(t)&&(n&&!this.responseType||s)){const a=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(a)throw"SyntaxError"===l.name?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};o.forEach(["delete","get","head","post","put","patch"],e=>{ne.headers[e]={}});const se=ne,Qt=o.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ve=Symbol("internals");function H(e){return e&&String(e).trim().toLowerCase()}function V(e){return!1===e||null==e?e:o.isArray(e)?e.map(V):String(e)}function ae(e,t,r,n,s){if(o.isFunction(n))return n.call(this,t,r);if(s&&(t=r),o.isString(t)){if(o.isString(n))return-1!==t.indexOf(n);if(o.isRegExp(n))return n.test(t)}}class W{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function i(l,d,h){const u=H(d);if(!u)throw new Error("header name must be a non-empty string");const c=o.findKey(s,u);(!c||void 0===s[c]||!0===h||void 0===h&&!1!==s[c])&&(s[c||d]=V(l))}const a=(l,d)=>o.forEach(l,(h,u)=>i(h,u,d));return o.isPlainObject(t)||t instanceof this.constructor?a(t,r):o.isString(t)&&(t=t.trim())&&!(e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))(t)?a((e=>{const t={};let r,n,s;return e&&e.split("\n").forEach(function(a){s=a.indexOf(":"),r=a.substring(0,s).trim().toLowerCase(),n=a.substring(s+1).trim(),!(!r||t[r]&&Qt[r])&&("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t})(t),r):null!=t&&i(r,t,n),this}get(t,r){if(t=H(t)){const n=o.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(!0===r)return function er(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(s);if(o.isFunction(r))return r.call(this,s,n);if(o.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=H(t)){const n=o.findKey(this,t);return!(!n||void 0===this[n]||r&&!ae(0,this[n],n,r))}return!1}delete(t,r){const n=this;let s=!1;function i(a){if(a=H(a)){const l=o.findKey(n,a);l&&(!r||ae(0,n[l],l,r))&&(delete n[l],s=!0)}}return o.isArray(t)?t.forEach(i):i(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const i=r[n];(!t||ae(0,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const r=this,n={};return o.forEach(this,(s,i)=>{const a=o.findKey(n,i);if(a)return r[a]=V(s),void delete r[i];const l=t?function rr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}(i):String(i).trim();l!==i&&delete r[i],r[l]=V(s),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return o.forEach(this,(n,s)=>{null!=n&&!1!==n&&(r[s]=t&&o.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[Ve]=this[Ve]={accessors:{}}).accessors,s=this.prototype;function i(a){const l=H(a);n[l]||(function nr(e,t){const r=o.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,i,a){return this[n].call(this,t,s,i,a)},configurable:!0})})}(s,a),n[l]=!0)}return o.isArray(t)?t.forEach(i):i(t),this}}W.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),o.reduceDescriptors(W.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}}),o.freezeMethods(W);const O=W;function ie(e,t){const r=this||se,n=t||r,s=O.from(n.headers);let i=n.data;return o.forEach(e,function(l){i=l.call(r,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function We(e){return!(!e||!e.__CANCEL__)}function Ke(e,t,r){m.call(this,null==e?"canceled":e,m.ERR_CANCELED,t,r),this.name="CanceledError"}o.inherits(Ke,m,{__CANCEL__:!0});const K=Ke,ar=A.hasStandardBrowserEnv?{write(e,t,r,n,s,i){const a=[e+"="+encodeURIComponent(t)];o.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),o.isString(n)&&a.push("path="+n),o.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Ge(e,t){return e&&!function ir(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}(t)?function or(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const lr=A.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(i){let a=i;return t&&(r.setAttribute("href",a),a=r.href),r.setAttribute("href",a),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(a){const l=o.isString(a)?s(a):a;return l.protocol===n.protocol&&l.host===n.host}}():function(){return!0};function Ze(e,t){let r=0;const n=function ur(e,t){e=e||10;const r=new Array(e),n=new Array(e);let a,s=0,i=0;return t=void 0!==t?t:1e3,function(d){const h=Date.now(),u=n[i];a||(a=h),r[s]=d,n[s]=h;let c=i,_=0;for(;c!==s;)_+=r[c++],c%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),h-a<t)return;const S=u&&h-u;return S?Math.round(1e3*_/S):void 0}}(50,250);return s=>{const i=s.loaded,a=s.lengthComputable?s.total:void 0,l=i-r,d=n(l);r=i;const u={loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:d||void 0,estimated:d&&a&&i<=a?(a-i)/d:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const oe={http:null,xhr:typeof XMLHttpRequest<"u"&&function(e){return new Promise(function(r,n){let s=e.data;const i=O.from(e.headers).normalize();let d,u,{responseType:a,withXSRFToken:l}=e;function h(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}if(o.isFormData(s))if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if(!1!==(u=i.getContentType())){const[f,...g]=u?u.split(";").map(w=>w.trim()).filter(Boolean):[];i.setContentType([f||"multipart/form-data",...g].join("; "))}let c=new XMLHttpRequest;if(e.auth){const f=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(f+":"+g))}const _=Ge(e.baseURL,e.url);function S(){if(!c)return;const f=O.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());(function sr(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new m("Request failed with status code "+r.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)})(function(N){r(N),h()},function(N){n(N),h()},{data:a&&"text"!==a&&"json"!==a?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:f,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),ze(_,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=S:c.onreadystatechange=function(){!c||4!==c.readyState||0===c.status&&(!c.responseURL||0!==c.responseURL.indexOf("file:"))||setTimeout(S)},c.onabort=function(){c&&(n(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),n(new m(g,(e.transitional||Me).clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},A.hasStandardBrowserEnv&&(l&&o.isFunction(l)&&(l=l(e)),l||!1!==l&&lr(_))){const f=e.xsrfHeaderName&&e.xsrfCookieName&&ar.read(e.xsrfCookieName);f&&i.set(e.xsrfHeaderName,f)}void 0===s&&i.setContentType(null),"setRequestHeader"in c&&o.forEach(i.toJSON(),function(g,w){c.setRequestHeader(w,g)}),o.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&"json"!==a&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Ze(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Ze(e.onUploadProgress)),(e.cancelToken||e.signal)&&(d=f=>{c&&(n(!f||f.type?new K(null,e,c):f),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d)));const p=function cr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(_);p&&-1===A.protocols.indexOf(p)?n(new m("Unsupported protocol "+p+":",m.ERR_BAD_REQUEST,e)):c.send(s||null)})}};o.forEach(oe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Xe=e=>`- ${e}`,pr=e=>o.isFunction(e)||null===e||!1===e,Qe_getAdapter=e=>{e=o.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let i=0;i<t;i++){let a;if(r=e[i],n=r,!pr(r)&&(n=oe[(a=String(r)).toLowerCase()],void 0===n))throw new m(`Unknown adapter '${a}'`);if(n)break;s[a||"#"+i]=n}if(!n){const i=Object.entries(s).map(([l,d])=>`adapter ${l} `+(!1===d?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?"since :\n"+i.map(Xe).join("\n"):" "+Xe(i[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return n};function le(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new K(null,e)}function Ye(e){return le(e),e.headers=O.from(e.headers),e.data=ie.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Qe_getAdapter(e.adapter||se.adapter)(e).then(function(n){return le(e),n.data=ie.call(e,e.transformResponse,n),n.headers=O.from(n.headers),n},function(n){return We(n)||(le(e),n&&n.response&&(n.response.data=ie.call(e,e.transformResponse,n.response),n.response.headers=O.from(n.response.headers))),Promise.reject(n)})}const et=e=>e instanceof O?e.toJSON():e;function D(e,t){t=t||{};const r={};function n(h,u,c){return o.isPlainObject(h)&&o.isPlainObject(u)?o.merge.call({caseless:c},h,u):o.isPlainObject(u)?o.merge({},u):o.isArray(u)?u.slice():u}function s(h,u,c){return o.isUndefined(u)?o.isUndefined(h)?void 0:n(void 0,h,c):n(h,u,c)}function i(h,u){if(!o.isUndefined(u))return n(void 0,u)}function a(h,u){return o.isUndefined(u)?o.isUndefined(h)?void 0:n(void 0,h):n(void 0,u)}function l(h,u,c){return c in t?n(h,u):c in e?n(void 0,h):void 0}const d={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(h,u)=>s(et(h),et(u),!0)};return o.forEach(Object.keys(Object.assign({},e,t)),function(u){const c=d[u]||s,_=c(e[u],t[u],u);o.isUndefined(_)&&c!==l||(r[u]=_)}),r}const ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const rt={};ce.transitional=function(t,r,n){function s(i,a){return"[Axios v1.6.7] Transitional option '"+i+"'"+a+(n?". "+n:"")}return(i,a,l)=>{if(!1===t)throw new m(s(a," has been removed"+(r?" in "+r:"")),m.ERR_DEPRECATED);return r&&!rt[a]&&(rt[a]=!0,console.warn(s(a," has been deprecated since v"+r+" and will be removed in the near future"))),!t||t(i,a,l)}};const ue={assertOptions:function fr(e,t,r){if("object"!=typeof e)throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const i=n[s],a=t[i];if(a){const l=e[i],d=void 0===l||a(l,i,e);if(!0!==d)throw new m("option "+i+" must be "+d,m.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}},validators:ce},T=ue.validators;class G{constructor(t){this.defaults=t,this.interceptors={request:new Ie,response:new Ie}}request(t,r){var n=this;return(0,v.Z)(function*(){try{return yield n._request(t,r)}catch(s){if(s instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const a=i.stack?i.stack.replace(/^.+\n/,""):"";s.stack?a&&!String(s.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(s.stack+="\n"+a):s.stack=a}throw s}})()}_request(t,r){"string"==typeof t?(r=r||{}).url=t:r=t||{},r=D(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:i}=r;void 0!==n&&ue.assertOptions(n,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),null!=s&&(o.isFunction(s)?r.paramsSerializer={serialize:s}:ue.assertOptions(s,{encode:T.function,serialize:T.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let a=i&&o.merge(i.common,i[r.method]);i&&o.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),r.headers=O.concat(a,i);const l=[];let d=!0;this.interceptors.request.forEach(function(f){"function"==typeof f.runWhen&&!1===f.runWhen(r)||(d=d&&f.synchronous,l.unshift(f.fulfilled,f.rejected))});const h=[];this.interceptors.response.forEach(function(f){h.push(f.fulfilled,f.rejected)});let u,_,c=0;if(!d){const p=[Ye.bind(this),void 0];for(p.unshift.apply(p,l),p.push.apply(p,h),_=p.length,u=Promise.resolve(r);c<_;)u=u.then(p[c++],p[c++]);return u}_=l.length;let S=r;for(c=0;c<_;){const p=l[c++],f=l[c++];try{S=p(S)}catch(g){f.call(this,g);break}}try{u=Ye.call(this,S)}catch(p){return Promise.reject(p)}for(c=0,_=h.length;c<_;)u=u.then(h[c++],h[c++]);return u}getUri(t){return ze(Ge((t=D(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}o.forEach(["delete","get","head","options"],function(t){G.prototype[t]=function(r,n){return this.request(D(n||{},{method:t,url:r,data:(n||{}).data}))}}),o.forEach(["post","put","patch"],function(t){function r(n){return function(i,a,l){return this.request(D(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}G.prototype[t]=r(),G.prototype[t+"Form"]=r(!0)});const Z=G;class de{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(s=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](s);n._listeners=null}),this.promise.then=s=>{let i;const a=new Promise(l=>{n.subscribe(l),i=l}).then(s);return a.cancel=function(){n.unsubscribe(i)},a},t(function(i,a,l){n.reason||(n.reason=new K(i,a,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);-1!==r&&this._listeners.splice(r,1)}static source(){let t;return{token:new de(function(s){t=s}),cancel:t}}}const hr=de,pe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pe).forEach(([e,t])=>{pe[t]=e});const yr=pe,y=function nt(e){const t=new Z(e),r=Se(Z.prototype.request,t);return o.extend(r,Z.prototype,t,{allOwnKeys:!0}),o.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return nt(D(e,s))},r}(se);y.Axios=Z,y.CanceledError=K,y.CancelToken=hr,y.isCancel=We,y.VERSION="1.6.7",y.toFormData=J,y.AxiosError=m,y.Cancel=y.CanceledError,y.all=function(t){return Promise.all(t)},y.spread=function mr(e){return function(r){return e.apply(null,r)}},y.isAxiosError=function br(e){return o.isObject(e)&&!0===e.isAxiosError},y.mergeConfig=D,y.AxiosHeaders=O,y.formToJSON=e=>Je(o.isHTMLForm(e)?new FormData(e):e),y.getAdapter=Qe_getAdapter,y.HttpStatusCode=yr,y.default=y;const L=y;var fe=F(2014),b=F(9455),_r=F(553);const k=new fe.K({name:"_config",driverOrder:[fe.N.IndexedDB,fe.N.LocalStorage]}),x=function(){var e=(0,v.Z)(function*(){var t={};try{yield k.create(),t=(yield k.get("appsettings"))||{}}catch(r){console.error(r)}return t.madonvi?t:st()});return function(){return e.apply(this,arguments)}}(),gr=function(){var e=(0,v.Z)(function*(t){var r=(yield X()).find(s=>s.madonvi==t);if(r){var n={};Object.keys(r).forEach(s=>{n[s]=(b[s]||"").replace("[replace_value]",r[s])});try{yield k.create(),yield k.set("appsettings",n)}catch(s){console.error(s)}}});return function(r){return e.apply(this,arguments)}}(),st=()=>b.default_donvi?b.donvis.find(e=>e.madonvi==b.default_donvi):{},wr=function(){var e=(0,v.Z)(function*(){var t=st(),r={};Object.keys(t).forEach(n=>{r[n]=(b[n]||"").replace("[replace_value]",t[n])});try{yield k.create(),yield k.set("appsettings",r)}catch(n){console.error(n)}});return function(){return e.apply(this,arguments)}}(),X=function(){var e=(0,v.Z)(function*(t){if(t)return _r.N.production?b.donvis||[]:b.donvis2||[];var r=[];if(b.api_disabled)r=yield X(!0);else{let n=yield C({api_url:b.api_url,api_id:b.api_id,api_secret:b.api_secret});yield L.create({baseURL:b.api_url}).get("api/configs/get",{headers:{Authorization:`Bearer ${n}`},params:{}}).then(s=>{r=(s||{}).data||[]}).catch(s=>{console.error(s)}),r.length||(r=yield X(!0))}return r});return function(r){return e.apply(this,arguments)}}(),C=function(){var e=(0,v.Z)(function*(t){let r="";return yield L.create({baseURL:t.api_url||null}).post("/api/auth/token",{client_id:t.api_id||null,client_secret:t.api_secret||null}).then(n=>{n&&n.data&&n.data.access_token?r=n.data.access_token:console.error("something is wrong -> access_token",n)}).catch(n=>{console.error(n)}),r});return function(r){return e.apply(this,arguments)}}();function Er(e){return he.apply(this,arguments)}function he(){return he=(0,v.Z)(function*(e){var t,r,n,s,i;let a=yield x(),l=0==e.authorization?"":yield C({api_url:e.api_url||a.apiurl,api_id:e.api_id||(null===(t=e.api_auth)||void 0===t?void 0:t.split("/").shift())||(null===(r=a.apiauth)||void 0===r?void 0:r.split("/").shift())||b.api_id,api_secret:e.api_secret||(null===(n=e.api_auth)||void 0===n?void 0:n.split("/").pop())||(null===(s=a.apiauth)||void 0===s?void 0:s.split("/").pop())||b.api_secret});e.loading=null!==(i=e.loading)&&void 0!==i?i:d=>{},e.loading(!0),L.create({baseURL:e.api_url||a.apiurl}).get(e.path||e.url,{headers:e.headers||{Authorization:`Bearer ${l}`},params:e.params||null}).then(d=>{"function"==typeof e.success&&e.success(d)}).catch(d=>{"function"==typeof e.error&&e.error(d),console.error(d)}).finally(()=>{e.loading(!1)})}),he.apply(this,arguments)}function Sr(e){return me.apply(this,arguments)}function me(){return me=(0,v.Z)(function*(e){var t,r,n;let s=yield x(),i=0==e.authorization?"":yield C({api_url:e.api_url||s.apiurl,api_id:e.api_id||(null===(t=s.apiauth)||void 0===t?void 0:t.split("/").shift())||b.api_id,api_secret:e.api_secret||(null===(r=s.apiauth)||void 0===r?void 0:r.split("/").pop())||b.api_secret});e.loading=null!==(n=e.loading)&&void 0!==n?n:a=>{},e.loading(!0),L.create({baseURL:e.api_url||s.apiurl}).post(e.path||e.url,e.params||{},{headers:e.headers||{Authorization:`Bearer ${i}`}}).then(a=>{"function"==typeof e.success&&e.success(a)}).catch(a=>{"function"==typeof e.error&&e.error(a),console.error(a)}).finally(()=>{e.loading(!1)})}),me.apply(this,arguments)}function vr(e){return _e.apply(this,arguments)}function _e(){return _e=(0,v.Z)(function*(e){var t,r,n;let s=yield x(),i=0==e.authorization?"":yield C({api_url:e.api_url||s.apiurl,api_id:e.api_id||(null===(t=s.apiauth)||void 0===t?void 0:t.split("/").shift())||b.api_id,api_secret:e.api_secret||(null===(r=s.apiauth)||void 0===r?void 0:r.split("/").pop())||b.api_secret});e.loading=null!==(n=e.loading)&&void 0!==n?n:a=>{},e.loading(!0),L.create({baseURL:e.api_url||s.apiurl}).delete(e.url,{headers:e.headers||{Authorization:`Bearer ${i}`},params:e.params||null}).then(a=>{"function"==typeof e.success&&e.success(a)}).catch(a=>{"function"==typeof e.error&&e.error(a),console.error(a)}).finally(()=>{e.loading(!1)})}),_e.apply(this,arguments)}function Rr(e){return ge.apply(this,arguments)}function ge(){return ge=(0,v.Z)(function*(e){var t,r,n;let s=yield x(),i=0==e.authorization?"":yield C({api_url:e.api_url||s.apiurl,api_id:e.api_id||(null===(t=s.apiauth)||void 0===t?void 0:t.split("/").shift())||b.api_id,api_secret:e.api_secret||(null===(r=s.apiauth)||void 0===r?void 0:r.split("/").pop())||b.api_secret});e.loading=null!==(n=e.loading)&&void 0!==n?n:a=>{},e.loading(!0),L.create({baseURL:e.api_url||s.fileuploadurl}).post(e.path||e.url,e.params||{},{headers:e.headers||{Authorization:`Bearer ${i}`}}).then(a=>{"function"==typeof e.success&&e.success(a)}).catch(a=>{"function"==typeof e.error&&e.error(a),console.error(a)}).finally(()=>{e.loading(!1)})}),ge.apply(this,arguments)}function Ar(e){return we.apply(this,arguments)}function we(){return we=(0,v.Z)(function*(e){var t,r,n;let s=yield x(),i=0==e.authorization?"":yield C({api_url:e.api_url||s.apiurl,api_id:e.api_id||(null===(t=s.apiauth)||void 0===t?void 0:t.split("/").shift())||b.api_id,api_secret:e.api_secret||(null===(r=s.apiauth)||void 0===r?void 0:r.split("/").pop())||b.api_secret});e.loading=null!==(n=e.loading)&&void 0!==n?n:a=>{},e.loading(!0),L.create({baseURL:e.api_url||s.apiurl}).get(e.path||e.url,{headers:e.headers||{Authorization:`Bearer ${i}`},params:e.params||null,responseType:"blob"}).then(a=>{"function"==typeof e.success&&e.success(a)}).catch(a=>{"function"==typeof e.error&&e.error(a),console.error(a)}).finally(()=>{e.loading(!1)})}),we.apply(this,arguments)}},9455:Ee=>{Ee.exports=JSON.parse('{"appname":"ICDT","isai":true,"api_disabled":true,"api_url":"https://board.surelrn.vn/app/config/","api_id":"mobileapi","api_secret":"lacviet@2023@$%!$$!(@","madonvi":"[replace_value]","tendv":"[replace_value]","weburl":"[replace_value]","weburlv1":"[replace_value]","apiurl":"[replace_value]","apiauth":"[replace_value]","apifilereaderurl":"[replace_value]","apifilereaderauth":"[replace_value]","fileuploadurl":"[replace_value]","readfileuploadurl":"[replace_value]","boardpath":"[replace_value]","boardpathv1":"[replace_value]","template_test":"[replace_value]","template_subject":"[replace_value]","default_donvi":"tabca","donvis":[{"madonvi":"tabca","tendv":"Tabca","weburl":"https://www.tabca.vn/","weburlv1":"https://board.tabca.vn/","apiurl":"https://board.tabca.vn/app/api/","apiauth":"mobileapi/lacviet@2023!@#$","apifilereaderurl":"https://board.tabca.vn/app/api_filereader/","apifilereaderauth":"mobileapi/lacviet@2023!@#$","fileuploadurl":"https://board.tabca.vn/app/api_filereader/","readfileuploadurl":"https://board.tabca.vn/files/","boardpath":"board-content/boards-v2/","boardpathv1":"board-content/boards/","template_test":"3239","template_subject":"3214"}],"donvis2":[{"madonvi":"tabca","tendv":"Tabca","weburl":"https://www.tabca.vn/","weburlv1":"https://board.tabca.vn/","apiurl":"https://board.tabca.vn/app/api/","apiauth":"mobileapi/lacviet@2023!@#$","apifilereaderurl":"https://board.tabca.vn/app/api_filereader/","apifilereaderauth":"mobileapi/lacviet@2023!@#$","fileuploadurl":"https://board.tabca.vn/app/api_filereader/","readfileuploadurl":"https://board.tabca.vn/files/","boardpath":"board-content/boards-v2/","boardpathv1":"board-content/boards/","template_test":"3239","template_subject":"3214"},{"madonvi":"sureboardlang4v","tendv":"Lang4v","weburl":"https://tabca.surelrn.vn/","weburlv1":"https://board-lang4v.surelrn.vn/","apiurl":"https://board-lang4v.surelrn.vn/app/api/","apiauth":"mobileapi/lacviet@2023!@#$","apifilereaderurl":"https://board-lang4v.surelrn.vn/app/api_filereader/","apifilereaderauth":"mobileapi/lacviet@2023!@#$","fileuploadurl":"https://board-lang4v.surelrn.vn/filereader/","readfileuploadurl":"https://board-lang4v.surelrn.vn/fileapi/readfile/","boardpath":"board-content/boards-v2/","boardpathv1":"board-content/boards/"},{"madonvi":"devOnline","tendv":"[D\xe0nh cho nh\xe0 ph\xe1t tri\u1ec3n]","weburl":"http://localhost:8100/","weburlv1":"https://dev.surelrn.vn/demo/sureboard/","apiurl":"https://dev.surelrn.vn/demo/sureboard/app/api/","apiauth":"test/123456","apifilereaderurl":"https://dev.surelrn.vn/demo/sureboard/app/api_filereader/","apifilereaderauth":"test/123456","fileuploadurl":"https://dev.surelrn.vn/demo/sureboard/app/api_filereader/","readfileuploadurl":"https://dev.surelrn.vn/demo/sureboard/files/","boardpath":"board-content/boards-v2/","boardpathv1":"board-content/boards/","template_test":"1873","template_subject":"1901"},{"madonvi":"devLocal","tendv":"[D\xe0nh cho nh\xe0 ph\xe1t tri\u1ec3n]","weburl":"http://localhost:8100/","weburlv1":"http://172.16.0.75/demo/sureboard/","apiurl":"https://localhost:5001/","apiauth":"test/123456","apifilereaderurl":"https://localhost:5003/","apifilereaderauth":"test/123456","fileuploadurl":"https://localhost:5003/","readfileuploadurl":"https://localhost:5003/readfile/","boardpath":"board-content/boards-v2/","boardpathv1":"board-content/boards/"}]}')}}]);