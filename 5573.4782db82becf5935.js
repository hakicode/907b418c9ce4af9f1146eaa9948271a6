"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5573],{7308:(L,R,_)=>{_.d(R,{s:()=>p});const p={Digit1:49,Digit2:50,Digit3:51,Digit4:52,Digit5:53,Digit6:54,Digit7:55,Digit8:56,Digit9:57,Digit0:48,KeyA:65,KeyB:66,KeyC:67,KeyD:68,KeyE:69,KeyF:70,KeyG:71,KeyH:72,KeyI:73,KeyJ:74,KeyK:75,KeyL:76,KeyM:77,KeyN:78,KeyO:79,KeyP:80,KeyQ:81,KeyR:82,KeyS:83,KeyT:84,KeyU:85,KeyV:86,KeyW:87,KeyX:88,KeyY:89,KeyZ:90,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,Insert:45,Delete:46,Home:36,End:35,PageUp:33,PageDown:34,ArrowUp:38,ArrowDown:40,ArrowLeft:37,ArrowRight:39,Escape:27,Tab:9,Backspace:8,Enter:13,Space:32,BracketLeft:219,BracketRight:221}},7090:(L,R,_)=>{_.d(R,{GW:()=>d,T6:()=>w,rM:()=>T});var p=_(4459);function d(e){e.params=e.params||{},e.params.page=e.params.page||1,e.params.limit=e.params.limit||1,(0,p.cd)({url:"api/Board/Search",params:{getby:e.params.userid||null,board_id:e.params.board_id||null,board_ids:e.params.board_ids||null,board_title:e.params.board_title||null,size_width:e.params.size_width||null,size_height:e.params.size_height||null,topic_id:e.params.topic_id||null,category_id:e.params.category_id||null,createdby:e.params.createdby||null,sortfield:e.params.sortfield||null,sorttype:e.params.sorttype||null,posstart:(e.params.page-1)*e.params.limit,numofrow:e.params.limit},success:f=>{"function"==typeof e.callback&&e.callback(f.data||null)},error:f=>{"function"==typeof e.callback&&e.callback(),console.error(f)},loading:e.loading})}function T(e){e.params=e.params||{},e.params.page=e.params.page||1,e.params.limit=e.params.limit||1,(0,p.cd)({url:"api/Board/SearchTemplate",params:{getby:e.params.userid||null,board_id:e.params.board_id||null,board_title:e.params.board_title||null,size_width:e.params.size_width||null,size_height:e.params.size_height||null,topic_id:e.params.topic_id||null,category_id:e.params.category_id||null,createdby:e.params.createdby||null,sortfield:e.params.sortfield||null,sorttype:e.params.sorttype||null,posstart:(e.params.page-1)*e.params.limit,numofrow:e.params.limit},success:f=>{"function"==typeof e.callback&&e.callback(f.data||null)},error:f=>{"function"==typeof e.callback&&e.callback(),console.error(f)},loading:e.loading})}function w(e){e.params=e.params||{},(0,p.cd)({url:"api/Board/Detail",params:{getby:e.params.userid||null,board_id:e.params.board_id||null},success:f=>{"function"==typeof e.callback&&e.callback(f.data||null)},error:f=>{"function"==typeof e.callback&&e.callback(),console.error(f)},loading:e.loading})}},8530:(L,R,_)=>{_.d(R,{Bh:()=>P,Dc:()=>l,Ir:()=>v,JO:()=>F,KO:()=>y,UK:()=>i,Ux:()=>w,Yx:()=>o,Z6:()=>B,aX:()=>A,gK:()=>u,gj:()=>k,mD:()=>f});var p=_(5861),d=_(4459),T=_(1862);function w(a){return C.apply(this,arguments)}function C(){return(C=(0,p.Z)(function*(a){let n=yield(0,d.H0)();n.madonvi&&(a.params=a.params||{},(0,d.T1)({api_url:n.apifilereaderurl,api_auth:n.apifilereaderauth,path:"api/BoardFile2/AddUpdate",params:{board_id:a.params.board_id||null,board_title:a.params.board_title||null,board_description:a.params.board_description||null,board_content:a.params.board_content||null,cover:a.params.cover||null,topic_id:a.params.topic_id||null,category_id:a.params.category_id||null,size_width:a.params.size_width||null,size_height:a.params.size_height||null,createdby:a.params.userid||null,modifiedby:a.params.userid||null},success:c=>{"function"==typeof a.callback&&a.callback(c.data||null)},error:c=>{"function"==typeof a.callback&&a.callback(null),console.error(c)},loading:a.loading}))})).apply(this,arguments)}function B(a){return e.apply(this,arguments)}function e(){return(e=(0,p.Z)(function*(a){let n=yield(0,d.H0)();n.madonvi&&(a.params=a.params||{},(0,d.T1)({api_url:n.apifilereaderurl,api_auth:n.apifilereaderauth,path:"api/BoardFile2/CopyBoard",params:{board_id:a.params.board_id||null,board_title:a.params.board_title||null,board_description:a.params.board_description||null,board_content:a.params.board_content||null,cover:a.params.cover||null,topic_id:a.params.topic_id||null,category_id:a.params.category_id||null,size_width:a.params.size_width||null,size_height:a.params.size_height||null,createdby:a.params.userid||null,modifiedby:a.params.userid||null},success:c=>{"function"==typeof a.callback&&a.callback(c.data||null)},error:c=>{"function"==typeof a.callback&&a.callback(null),console.error(c)},loading:a.loading}))})).apply(this,arguments)}function f(a){return E.apply(this,arguments)}function E(){return(E=(0,p.Z)(function*(a){let n=yield(0,d.H0)();n.madonvi&&(a.params=a.params||{},(0,d.tD)({api_url:n.apifilereaderurl,api_auth:n.apifilereaderauth,url:"api/BoardFile2/DeleteBoard",params:{deleteby:a.params.userid||null,board_id:a.params.board_id||null},success:c=>{"function"==typeof a.callback&&a.callback(c.data||null)},error:c=>{"function"==typeof a.callback&&a.callback(null),console.error(c)}}))})).apply(this,arguments)}function v(a){return t.apply(this,arguments)}function t(){return(t=(0,p.Z)(function*(a){var n,c,D;let U=yield(0,d.H0)();U.madonvi&&(a.params=a.params||{},a.loading=null!==(n=a.loading)&&void 0!==n?n:x=>{},a.loading(!0),(0,T.ly)(`${null!==(c=U.readfileuploadurl)&&void 0!==c?c:""}${null!==(D=U.boardpathv1)&&void 0!==D?D:""}${a.params.board_id}/content.json`,"content.json","application/json",x=>{a.loading&&a.loading(!1),a.callback&&a.callback(x)}))})).apply(this,arguments)}function o(a){return b.apply(this,arguments)}function b(){return(b=(0,p.Z)(function*(a){var n,c,D;let U=yield(0,d.H0)();U.madonvi&&(a.params=a.params||{},a.loading=null!==(n=a.loading)&&void 0!==n?n:x=>{},a.loading(!0),(0,T.ly)(`${null!==(c=U.readfileuploadurl)&&void 0!==c?c:""}${null!==(D=U.boardpath)&&void 0!==D?D:""}${a.params.board_id}/content.json`,"content.json","application/json",x=>{a.loading&&a.loading(!1),a.callback&&a.callback(x)}))})).apply(this,arguments)}function k(a){return g.apply(this,arguments)}function g(){return(g=(0,p.Z)(function*(a){var n,c,D;let U=yield(0,d.H0)();U.madonvi&&(a.params=a.params||{},(0,T.ly)(`${null!==(n=U.readfileuploadurl)&&void 0!==n?n:""}${null!==(c=U.boardpath)&&void 0!==c?c:""}${a.params.board_id}/setting.json`,"setting.json","application/json",null!==(D=a.callback)&&void 0!==D?D:x=>console.log(x)))})).apply(this,arguments)}function F(a){return m.apply(this,arguments)}function m(){return(m=(0,p.Z)(function*(a){let n=yield(0,d.H0)();n.madonvi&&(a.params=a.params||{},(0,d.T1)({api_url:n.apifilereaderurl,api_auth:n.apifilereaderauth,path:"api/BoardFile2/UpdateBoardCover",params:{board_id:a.params.board_id||null,filestring:a.params.filestring||null,createdby:a.params.userid||null,modifiedby:a.params.userid||null},success:c=>{"function"==typeof a.callback&&a.callback(c.data||null)},error:c=>{"function"==typeof a.callback&&a.callback(null),console.error(c)}}))})).apply(this,arguments)}function y(a){return K.apply(this,arguments)}function K(){return(K=(0,p.Z)(function*(a){let n=yield(0,d.H0)();n.madonvi&&(a.params=a.params||{},(0,d.T1)({api_url:n.apifilereaderurl,api_auth:n.apifilereaderauth,path:"api/BoardFile2/UpdateBoardContent",params:{board_id:a.params.board_id||null,filestring:a.params.filestring||null,createdby:a.params.userid||null,modifiedby:a.params.userid||null},success:c=>{"function"==typeof a.callback&&a.callback(c.data||null)},error:c=>{"function"==typeof a.callback&&a.callback(null),console.error(c)},loading:a.loading}))})).apply(this,arguments)}function l(a){return r.apply(this,arguments)}function r(){return(r=(0,p.Z)(function*(a){let n=yield(0,d.H0)();n.madonvi&&(a.params=a.params||{},(0,d.T1)({api_url:n.apifilereaderurl,api_auth:n.apifilereaderauth,url:"api/BoardFile2/UpdateBoardSetting",params:{board_id:a.params.board_id||null,filestring:a.params.filestring||null,createdby:a.params.userid||null,modifiedby:a.params.userid||null},success:c=>{"function"==typeof a.callback&&a.callback(c.data||null)},error:c=>{"function"==typeof a.callback&&a.callback(null),console.error(c)},loading:a.loading}))})).apply(this,arguments)}function i(a){return s.apply(this,arguments)}function s(){return(s=(0,p.Z)(function*(a){let n=yield(0,d.H0)();n.madonvi&&(a.params=a.params||{},(0,d.T1)({api_url:n.apifilereaderurl,api_auth:n.apifilereaderauth,path:"api/BoardFile2/ImportLvb",params:{board_id:a.params.board_id||null,filepath:a.params.filepath||null,createdby:a.params.userid||null,modifiedby:a.params.userid||null},success:c=>{"function"==typeof a.callback&&a.callback(c.data||null)},error:c=>{"function"==typeof a.callback&&a.callback(null),console.error(c)},loading:a.loading}))})).apply(this,arguments)}function u(a){return h.apply(this,arguments)}function h(){return(h=(0,p.Z)(function*(a){let n=yield(0,d.H0)();n.madonvi&&(a.params=a.params||{},(0,d.T1)({api_url:n.apifilereaderurl,api_auth:n.apifilereaderauth,path:"api/BoardFile2/ExportLvb",params:{board_id:a.params.board_id||null,createdby:a.params.userid||null,modifiedby:a.params.userid||null},success:c=>{"function"==typeof a.callback&&a.callback(c.data||null,n)},error:c=>{"function"==typeof a.callback&&a.callback(null),console.error(c)},loading:a.loading}))})).apply(this,arguments)}function A(a){return O.apply(this,arguments)}function O(){return(O=(0,p.Z)(function*(a){let n=yield(0,d.H0)();n.madonvi&&(a.params=a.params||{},(0,d.T1)({api_url:n.apifilereaderurl,api_auth:n.apifilereaderauth,path:"api/BoardFile2/ExportScorm",params:{board_id:a.params.board_id||null,createdby:a.params.userid||null,modifiedby:a.params.userid||null},success:c=>{"function"==typeof a.callback&&a.callback(c.data||null,n)},error:c=>{"function"==typeof a.callback&&a.callback(null),console.error(c)},loading:a.loading}))})).apply(this,arguments)}function P(a){return I.apply(this,arguments)}function I(){return(I=(0,p.Z)(function*(a){let n=yield(0,d.H0)();n.madonvi&&(a.params=a.params||{},(0,d.T1)({api_url:n.apifilereaderurl,api_auth:n.apifilereaderauth,path:"api/BoardFile2/ExportZip",params:{board_id:a.params.board_id||null,createdby:a.params.userid||null,modifiedby:a.params.userid||null},success:c=>{"function"==typeof a.callback&&a.callback(c.data||null,n)},error:c=>{"function"==typeof a.callback&&a.callback(null),console.error(c)},loading:a.loading}))})).apply(this,arguments)}},3377:(L,R,_)=>{_.d(R,{Kr:()=>B,LE:()=>f,iA:()=>C,lL:()=>e});var p=_(5861),d=_(2014),T=_(4459);const w=new d.K({name:"_userDB",driverOrder:[d.N.IndexedDB,d.N.LocalStorage]}),C=function(){var v=(0,p.Z)(function*(t){yield w.create();try{var o=(yield w.get("user-local"))||{};return"function"==typeof(null==t?void 0:t.callback)&&t.callback(Object.assign({},o||{})),o}catch(b){"function"==typeof(null==t?void 0:t.callback)&&t.callback(),console.error(b)}return{}});return function(o){return v.apply(this,arguments)}}(),B=function(){var v=(0,p.Z)(function*(t){yield w.create(),t.params=t.params||{};try{var o=Object.assign({},t.params);yield w.set("user-local",o),"function"==typeof t.callback&&t.callback(Object.assign({},o||{}))}catch(b){"function"==typeof t.callback&&t.callback(),console.error(b)}});return function(o){return v.apply(this,arguments)}}(),e=function(){var v=(0,p.Z)(function*(t){return t&&(t.params={}),B(null!=t?t:{})});return function(o){return v.apply(this,arguments)}}(),f=function(){var v=(0,p.Z)(function*(t,o){let b=yield(0,T.H0)();if(o){let k=[];t.params.profilephoto&&k.push(new Promise((g,F)=>{let m=new Image;m.onload=()=>{t.params.url_profilephoto=m.src,g(1)},m.onerror=()=>{t.params.url_profilephoto="assets/image/user-avatar-default.png",g(0)},m.src=b.readfileuploadurl+t.params.profilephoto})),t.params.banner&&k.push(new Promise((g,F)=>{let m=new Image;m.onload=()=>{t.params.url_banner=m.src,g(1)},m.onerror=()=>{t.params.url_banner="assets/image/user-banner-default.png",g(0)},m.src=b.readfileuploadurl+t.params.banner})),k.length>0?Promise.all(k).then(()=>{B(t)}):B(t)}else C({callback:k=>{if(k){let g=[];t.params.profilephoto&&g.push(new Promise((F,m)=>{let y=new Image;y.onload=()=>{t.params.url_profilephoto=y.src,F(1)},y.onerror=()=>{t.params.url_profilephoto="assets/image/user-avatar-default.png",F(0)},y.src=b.readfileuploadurl+t.params.profilephoto})),t.params.banner&&g.push(new Promise((F,m)=>{let y=new Image;y.onload=()=>{t.params.url_banner=y.src,F(1)},y.onerror=()=>{t.params.url_banner="assets/image/user-banner-default.png",F(0)},y.src=b.readfileuploadurl+t.params.banner})),g.length>0?Promise.all(g).then(()=>{B({params:Object.assign({},k,t.params),callback:t.callback})}):B({params:Object.assign({},k,t.params),callback:t.callback})}else"function"==typeof t.callback&&t.callback()}})});return function(o,b){return v.apply(this,arguments)}}()},1862:(L,R,_)=>{_.d(R,{D5:()=>j,II:()=>e,Qy:()=>K,VJ:()=>f,Yj:()=>g,d4:()=>t,eu:()=>B,jB:()=>p,lb:()=>m,ly:()=>o,qc:()=>y,vQ:()=>F,yB:()=>E});const p=l=>{var r=l||"";return(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=r.replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xc0|\xc1|\u1ea0|\u1ea2|\xc3|\xc2|\u1ea6|\u1ea4|\u1eac|\u1ea8|\u1eaa|\u0102|\u1eb0|\u1eae|\u1eb6|\u1eb2|\u1eb4/g,"A")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xc8|\xc9|\u1eb8|\u1eba|\u1ebc|\xca|\u1ec0|\u1ebe|\u1ec6|\u1ec2|\u1ec4/g,"E")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xcc|\xcd|\u1eca|\u1ec8|\u0128/g,"I")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xd2|\xd3|\u1ecc|\u1ece|\xd5|\xd4|\u1ed2|\u1ed0|\u1ed8|\u1ed4|\u1ed6|\u01a0|\u1edc|\u1eda|\u1ee2|\u1ede|\u1ee0/g,"O")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\xd9|\xda|\u1ee4|\u1ee6|\u0168|\u01af|\u1eea|\u1ee8|\u1ef0|\u1eec|\u1eee/g,"U")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u1ef2|\xdd|\u1ef4|\u1ef6|\u1ef8/g,"Y")).replace(/\u0111/g,"d")).replace(/\u0110/g,"D")).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")).replace(/ + /g," ")).trim()},T=Array(256);for(let l=0;l<256;++l){let r=l;for(let i=0;i<8;++i)r=1&r?3988292384^r>>>1:r>>>1;T[l]=r}const C=l=>{let r=null==l?void 0:l.match(/(?:.+?)?(?:\/v\/|watch\/|\?v\=|\&v\=|youtu\.be\/|\/v\=|^youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})+/);return r&&r.length>=2?r[1]:null},B=l=>{let r=C(l);return r?"https://www.youtube.com/embed/"+r+"?"+jQuery.param({wmode:"opaque",border:0,hd:1,autoplay:!1,autohide:1,enablejsapi:1,modestbranding:1,version:3,hl:"vi_VN",rel:0,showinfo:0,iv_load_policy:3}):null},e=l=>!!C(l),f=l=>!(null==l||!l.match(/^http(s)?\:\/\/phet.colorado.edu\//)),E=l=>{var r;let i=null==l||null===(r=l.toLocaleLowerCase())||void 0===r?void 0:r.split("."),s=null==i?void 0:i.pop();return{fileName:null==i?void 0:i.join("."),fileExtension:"."+s}},j=l=>!(!l||"none"==l||"transparent"==l||"rgba(0,0,0,0)"==l),t=(l,r,i,s)=>{fetch(l,{cache:"no-cache"}).then(u=>{if(404!=(null==u?void 0:u.status))return null==u?void 0:u.arrayBuffer()}).then(function(u){if(u)return new File([u],r,{type:i})}).then(function(u){s(u)}).catch(u=>{console.error("fetchUrlToFile",u),s()})},o=(l,r,i,s)=>{t(l,r,i,u=>{if(u){let h=new FileReader;h.onload=()=>{s(JSON.parse(h.result))},h.onerror=A=>{console.error("fetchUrlToDataJSON",A),s()},h.readAsText(u)}else s()})},g=function(l,r){var i=new XMLHttpRequest;i.onload=function(){!function(l,r){let i=new FileReader;i.onload=function(){r(i.result)},i.onerror=function(){r()},i.readAsDataURL(l)}(i.response,function(s){r(s)})},i.onerror=function(){r()},i.open("GET",l),i.responseType="blob",i.send()},F=l=>{if(!l)return!1;try{return navigator.clipboard.writeText(l),!0}catch(r){console.error(r)}return!1};function m(l,r){if(!l||(r||(r="."),(l=parseFloat(l))<=0))return 0;if(l){l=l.toString().split("").reverse();var i=[];return jQuery.each(l,function(u,h){u%3==0&&i.push(r),i.push(h)}),i[0]==r&&(i[0]=""),i.reverse().join("")}return 0}function y(l){switch(l){case"day":return"Day";case"week":return"Week";case"month":return"Month";case"year":return"Year"}return""}function K(l){return null==l?void 0:l.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g," ").replace(/\s+/g," ").trim()}}}]);