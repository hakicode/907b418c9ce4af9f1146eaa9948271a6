"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3918],{2726:(K,A,h)=>{h.d(A,{Uw:()=>M,dV:()=>f,fo:()=>Z});var o=h(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var _=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(_||{});class R extends Error{constructor(e,t,l){super(e),this.message=e,this.code=t,this.data=l}}const r=n=>{var e,t,l,i,a;const u=n.CapacitorCustomPlatform||null,s=n.Capacitor||{},b=s.Plugins=s.Plugins||{},d=n.CapacitorPlatforms,E=(null===(e=null==d?void 0:d.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==u?u.name:(n=>{var e,t;return null!=n&&n.androidBridge?"android":null!==(t=null===(e=null==n?void 0:n.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(n)),le=(null===(t=null==d?void 0:d.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==E()),ie=(null===(l=null==d?void 0:d.currentPlatform)||void 0===l?void 0:l.isPluginAvailable)||(m=>{const g=B.get(m);return!!(null!=g&&g.platforms.has(E())||Q(m))}),Q=(null===(i=null==d?void 0:d.currentPlatform)||void 0===i?void 0:i.getPluginHeader)||(m=>{var g;return null===(g=s.PluginHeaders)||void 0===g?void 0:g.find(O=>O.name===m)}),B=new Map,fe=(null===(a=null==d?void 0:d.currentPlatform)||void 0===a?void 0:a.registerPlugin)||((m,g={})=>{const O=B.get(m);if(O)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),O.proxy;const U=E(),$=Q(m);let y;const me=function(){var p=(0,o.Z)(function*(){return!y&&U in g?y=y="function"==typeof g[U]?yield g[U]():g[U]:null!==u&&!y&&"web"in g&&(y=y="function"==typeof g.web?yield g.web():g.web),y});return function(){return p.apply(this,arguments)}}(),H=p=>{let v;const w=(...k)=>{const C=me().then(P=>{const L=((p,v)=>{var w,k;if(!$){if(p)return null===(k=p[v])||void 0===k?void 0:k.bind(p);throw new R(`"${m}" plugin is not implemented on ${U}`,_.Unimplemented)}{const C=null==$?void 0:$.methods.find(P=>v===P.name);if(C)return"promise"===C.rtype?P=>s.nativePromise(m,v.toString(),P):(P,L)=>s.nativeCallback(m,v.toString(),P,L);if(p)return null===(w=p[v])||void 0===w?void 0:w.bind(p)}})(P,p);if(L){const W=L(...k);return v=null==W?void 0:W.remove,W}throw new R(`"${m}.${p}()" is not implemented on ${U}`,_.Unimplemented)});return"addListener"===p&&(C.remove=(0,o.Z)(function*(){return v()})),C};return w.toString=()=>`${p.toString()}() { [capacitor code] }`,Object.defineProperty(w,"name",{value:p,writable:!1,configurable:!1}),w},X=H("addListener"),Y=H("removeListener"),be=(p,v)=>{const w=X({eventName:p},v),k=function(){var P=(0,o.Z)(function*(){const L=yield w;Y({eventName:p,callbackId:L},v)});return function(){return P.apply(this,arguments)}}(),C=new Promise(P=>w.then(()=>P({remove:k})));return C.remove=(0,o.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield k()}),C},G=new Proxy({},{get(p,v){switch(v){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return $?be:X;case"removeListener":return Y;default:return H(v)}}});return b[m]=G,B.set(m,{name:m,proxy:G,platforms:new Set([...Object.keys(g),...$?[U]:[]])}),G});return s.convertFileSrc||(s.convertFileSrc=m=>m),s.getPlatform=E,s.handleError=m=>n.console.error(m),s.isNativePlatform=le,s.isPluginAvailable=ie,s.pluginMethodNoop=(m,g,O)=>Promise.reject(`${O} does not have an implementation of "${g}".`),s.registerPlugin=fe,s.Exception=R,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s},f=(n=>n.Capacitor=r(n))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Z=f.registerPlugin;class M{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var l=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const a=this.windowListeners[e];a&&!a.registered&&this.addWindowListener(a);const u=function(){var b=(0,o.Z)(function*(){return l.removeListener(e,t)});return function(){return b.apply(this,arguments)}}(),s=Promise.resolve({remove:u});return Object.defineProperty(s,"remove",{value:(b=(0,o.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield u()}),function(){return b.apply(this,arguments)})}),s;var b}removeAllListeners(){var e=this;return(0,o.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const l=this.listeners[e];l&&l.forEach(i=>i(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:l=>{this.notifyListeners(t,l)}}}unimplemented(e="not implemented"){return new f.Exception(e,_.Unimplemented)}unavailable(e="not available"){return new f.Exception(e,_.Unavailable)}removeListener(e,t){var l=this;return(0,o.Z)(function*(){const i=l.listeners[e];if(!i)return;const a=i.indexOf(t);l.listeners[e].splice(a,1),l.listeners[e].length||l.removeWindowListener(l.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const q=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),J=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class N extends M{getCookies(){return(0,o.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(l=>{if(l.length<=0)return;let[i,a]=l.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=J(i).trim(),a=J(a).trim(),t[i]=a}),t})()}setCookie(e){return(0,o.Z)(function*(){try{const t=q(e.key),l=q(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,a=(e.path||"/").replace("path=",""),u=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${l||""}${i}; path=${a}; ${u};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,o.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,o.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,o.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}Z("CapacitorCookies",{web:()=>new N});const ee=function(){var n=(0,o.Z)(function*(e){return new Promise((t,l)=>{const i=new FileReader;i.onload=()=>{const a=i.result;t(a.indexOf(",")>=0?a.split(",")[1]:a)},i.onerror=a=>l(a),i.readAsDataURL(e)})});return function(t){return n.apply(this,arguments)}}();class ae extends M{request(e){return(0,o.Z)(function*(){const t=((n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),i=((n={})=>{const e=Object.keys(n);return Object.keys(n).map(i=>i.toLocaleLowerCase()).reduce((i,a,u)=>(i[a]=n[e[u]],i),{})})(n.headers)["content-type"]||"";if("string"==typeof n.data)t.body=n.data;else if(i.includes("application/x-www-form-urlencoded")){const a=new URLSearchParams;for(const[u,s]of Object.entries(n.data||{}))a.set(u,s);t.body=a.toString()}else if(i.includes("multipart/form-data")){const a=new FormData;if(n.data instanceof FormData)n.data.forEach((s,b)=>{a.append(b,s)});else for(const s of Object.keys(n.data))a.append(s,n.data[s]);t.body=a;const u=new Headers(t.headers);u.delete("content-type"),t.headers=u}else(i.includes("application/json")||"object"==typeof n.data)&&(t.body=JSON.stringify(n.data));return t})(e,e.webFetchExtra),l=((n,e=!0)=>n?Object.entries(n).reduce((l,i)=>{const[a,u]=i;let s,b;return Array.isArray(u)?(b="",u.forEach(d=>{s=e?encodeURIComponent(d):d,b+=`${a}=${s}&`}),b.slice(0,-1)):(s=e?encodeURIComponent(u):u,b=`${a}=${s}`),`${l}&${b}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),i=l?`${e.url}?${l}`:e.url,a=yield fetch(i,t),u=a.headers.get("content-type")||"";let b,d,{responseType:s="text"}=a.ok?e:{};switch(u.includes("application/json")&&(s="json"),s){case"arraybuffer":case"blob":d=yield a.blob(),b=yield ee(d);break;case"json":b=yield a.json();break;default:b=yield a.text()}const D={};return a.headers.forEach((E,S)=>{D[S]=E}),{data:b,headers:D,status:a.status,url:a.url}})()}get(e){var t=this;return(0,o.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,o.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,o.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,o.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,o.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}Z("CapacitorHttp",{web:()=>new ae})},8662:(K,A,h)=>{h.d(A,{A:()=>T});const T=(0,h(2726).fo)("Device",{web:()=>h.e(7116).then(h.bind(h,7116)).then(j=>new j.DeviceWeb)})},5328:(K,A,h)=>{h.d(A,{Es:()=>F,e8:()=>_,f9:()=>j,no:()=>T,s2:()=>I,u7:()=>x,xK:()=>V});var o=h(4459);function T(r){r.params=r.params||{},(0,o.cd)({url:"api/User/Detail",params:{userid:r.params.userid||null},success:c=>{"function"==typeof r.callback&&r.callback(c.data||null)},error:c=>{"function"==typeof r.callback&&r.callback(null),console.error(c)}})}function j(r){r.params=r.params||{},(0,o.T1)({url:"api/User/SignIn",params:{emailaddr:r.params.emailaddr||null,pwd:r.params.pwd||null},success:c=>{"function"==typeof r.callback&&r.callback(c.data||null)},error:c=>{"function"==typeof r.callback&&r.callback(null),console.error(r,c)}})}function x(r){r.params=r.params||{},(0,o.T1)({url:"api/User/SignUp",params:{firstname:r.params.firstname||null,lastname:r.params.lastname||null,emailaddr:r.params.emailaddr||null,pwd:r.params.pwd||null},success:c=>{"function"==typeof r.callback&&r.callback(c.data||null)},error:c=>{"function"==typeof r.callback&&r.callback(null),console.error(r,c)}})}function F(r){r.params=r.params||{},(0,o.T1)({url:"api/User/Active",params:{emailaddr:r.params.emailaddr||null,activationcode:r.params.activationcode||null},success:c=>{"function"==typeof r.callback&&r.callback(c.data||null)},error:c=>{"function"==typeof r.callback&&r.callback(null),console.error(r,c)}})}function V(r){r.params=r.params||{},(0,o.T1)({url:"api/User/ChangePassword",params:{emailaddr:r.params.emailaddr||null,pwd:r.params.pwd||null,forgotpwdcode:r.params.forgotpwdcode||null,newpwd:r.params.newpwd||null},success:c=>{"function"==typeof r.callback&&r.callback(c.data||null)},error:c=>{"function"==typeof r.callback&&r.callback(null),console.error(r,c)}})}function I(r){r.params=r.params||{},(0,o.T1)({url:"api/User/UpdateInfo",params:{userid:r.params.userid||null,firstname:r.params.firstname||null,lastname:r.params.lastname||null,emailaddr:r.params.emailaddr||null,mobilecountrycode:r.params.mobilecountrycode||null,mobile:r.params.mobile||null,introduce:r.params.introduce||null},success:c=>{"function"==typeof r.callback&&r.callback(c.data||null)},error:c=>{"function"==typeof r.callback&&r.callback(null),console.error(r,c)}})}function _(r){r.params=r.params||{},(0,o.T1)({url:"api/users/forgotpassword",params:{emailaddr:r.params.emailaddr||null},success:c=>{if("function"==typeof r.callback){var f=c.data||{};f.returncode=null!=f.returncode?f.returncode:f.ReturnCode,f.returnmsg=null!=f.returnmsg?f.returnmsg:f.ReturnMsg,f.id=null!=f.id?f.id:f.AccountID,r.callback(f)}},error:c=>{"function"==typeof r.callback&&r.callback(null),console.error(r,c)}})}}}]);