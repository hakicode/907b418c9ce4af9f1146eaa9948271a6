"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{6117:(O,f,l)=>{l.d(f,{c:()=>c});var d=l(4190),t=l(7408),s=l(8077);const c=(r,a)=>{let e,n;const i=(u,v,h)=>{if(typeof document>"u")return;const w=document.elementFromPoint(u,v);w&&a(w)?w!==e&&(_(),g(w,h)):_()},g=(u,v)=>{e=u,n||(n=e);const h=e;(0,d.c)(()=>h.classList.add("ion-activated")),v()},_=(u=!1)=>{if(!e)return;const v=e;(0,d.c)(()=>v.classList.remove("ion-activated")),u&&n!==e&&e.click(),e=void 0};return(0,s.createGesture)({el:r,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>i(u.currentX,u.currentY,t.a),onMove:u=>i(u.currentX,u.currentY,t.b),onEnd:()=>{_(!0),(0,t.h)(),n=void 0}})}},1776:(O,f,l)=>{l.d(f,{i:()=>d});const d=t=>t&&""!==t.dir?"rtl"===t.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},9222:(O,f,l)=>{l.r(f),l.d(f,{startFocusVisible:()=>c});const d="ion-focused",s=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=r=>{let a=[],e=!0;const n=r?r.shadowRoot:document,i=r||document.body,g=y=>{a.forEach(m=>m.classList.remove(d)),y.forEach(m=>m.classList.add(d)),a=y},_=()=>{e=!1,g([])},u=y=>{e=s.includes(y.key),e||g([])},v=y=>{if(e&&void 0!==y.composedPath){const m=y.composedPath().filter(p=>!!p.classList&&p.classList.contains("ion-focusable"));g(m)}},h=()=>{n.activeElement===i&&g([])};return n.addEventListener("keydown",u),n.addEventListener("focusin",v),n.addEventListener("focusout",h),n.addEventListener("touchstart",_),n.addEventListener("mousedown",_),{destroy:()=>{n.removeEventListener("keydown",u),n.removeEventListener("focusin",v),n.removeEventListener("focusout",h),n.removeEventListener("touchstart",_),n.removeEventListener("mousedown",_)},setFocus:g}}},2861:(O,f,l)=>{l.d(f,{C:()=>r,a:()=>s,d:()=>c});var d=l(5861),t=l(690);const s=function(){var a=(0,d.Z)(function*(e,n,i,g,_,u){var v;if(e)return e.attachViewToDom(n,i,_,g);if(!(u||"string"==typeof i||i instanceof HTMLElement))throw new Error("framework delegate is missing");const h="string"==typeof i?null===(v=n.ownerDocument)||void 0===v?void 0:v.createElement(i):i;return g&&g.forEach(w=>h.classList.add(w)),_&&Object.assign(h,_),n.appendChild(h),yield new Promise(w=>(0,t.c)(h,w)),h});return function(n,i,g,_,u,v){return a.apply(this,arguments)}}(),c=(a,e)=>{if(e){if(a)return a.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},r=()=>{let a,e;return{attachViewToDom:function(){var g=(0,d.Z)(function*(_,u,v={},h=[]){var w,y;if(a=_,u){const p="string"==typeof u?null===(w=a.ownerDocument)||void 0===w?void 0:w.createElement(u):u;h.forEach(o=>p.classList.add(o)),Object.assign(p,v),a.appendChild(p),yield new Promise(o=>(0,t.c)(p,o))}else if(a.children.length>0&&!a.children[0].classList.contains("ion-delegate-host")){const o=null===(y=a.ownerDocument)||void 0===y?void 0:y.createElement("div");o.classList.add("ion-delegate-host"),h.forEach(E=>o.classList.add(E)),o.append(...a.children),a.appendChild(o)}const m=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),a.parentNode.insertBefore(e,a),m.appendChild(a),a});return function(u,v){return g.apply(this,arguments)}}(),removeViewFromDom:()=>(a&&e&&(e.parentNode.insertBefore(a,e),e.remove()),Promise.resolve())}}},7408:(O,f,l)=>{l.d(f,{a:()=>c,b:()=>r,c:()=>s,d:()=>e,h:()=>a});const d={getEngine(){var n;const i=window;return i.TapticEngine||(null===(n=i.Capacitor)||void 0===n?void 0:n.isPluginAvailable("Haptics"))&&i.Capacitor.Plugins.Haptics},available(){var n;const i=window;return!!this.getEngine()&&("web"!==(null===(n=i.Capacitor)||void 0===n?void 0:n.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(n){const i=this.getEngine();if(!i)return;const g=this.isCapacitor()?n.style.toUpperCase():n.style;i.impact({style:g})},notification(n){const i=this.getEngine();if(!i)return;const g=this.isCapacitor()?n.style.toUpperCase():n.style;i.notification({style:g})},selection(){this.impact({style:"light"})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},t=()=>d.available(),s=()=>{t()&&d.selection()},c=()=>{t()&&d.selectionStart()},r=()=>{t()&&d.selectionChanged()},a=()=>{t()&&d.selectionEnd()},e=n=>{t()&&d.impact(n)}},8014:(O,f,l)=>{l.d(f,{a:()=>d,b:()=>u,c:()=>e,d:()=>v,e:()=>P,f:()=>a,g:()=>h,h:()=>s,i:()=>t,j:()=>o,k:()=>E,l:()=>n,m:()=>g,n:()=>w,o:()=>i,p:()=>r,q:()=>c,r:()=>p,s:()=>C,t:()=>_,u:()=>y,v:()=>m});const d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4964:(O,f,l)=>{l.d(f,{I:()=>r,a:()=>g,b:()=>a,c:()=>v,d:()=>w,f:()=>_,g:()=>i,i:()=>n,p:()=>h,r:()=>y,s:()=>u});var d=l(5861),t=l(690),s=l(3140);const r="ion-content",a=".ion-content-scroll-host",e=`${r}, ${a}`,n=m=>"ION-CONTENT"===m.tagName,i=function(){var m=(0,d.Z)(function*(p){return n(p)?(yield new Promise(o=>(0,t.c)(p,o)),p.getScrollElement()):p});return function(o){return m.apply(this,arguments)}}(),g=m=>m.querySelector(a)||m.querySelector(e),_=m=>m.closest(e),u=(m,p)=>n(m)?m.scrollToTop(p):Promise.resolve(m.scrollTo({top:0,left:0,behavior:p>0?"smooth":"auto"})),v=(m,p,o,E)=>n(m)?m.scrollByPoint(p,o,E):Promise.resolve(m.scrollBy({top:o,left:p,behavior:E>0?"smooth":"auto"})),h=m=>(0,s.a)(m,r),w=m=>{if(n(m)){const o=m.scrollY;return m.scrollY=!1,o}return m.style.setProperty("overflow","hidden"),!0},y=(m,p)=>{n(m)?m.scrollY=p:m.style.removeProperty("overflow")}},5034:(O,f,l)=>{l.r(f),l.d(f,{KEYBOARD_DID_CLOSE:()=>t,KEYBOARD_DID_OPEN:()=>d,copyVisualViewport:()=>p,keyboardDidClose:()=>h,keyboardDidOpen:()=>u,keyboardDidResize:()=>v,resetKeyboardAssist:()=>e,setKeyboardClose:()=>_,setKeyboardOpen:()=>g,startKeyboardAssist:()=>n,trackViewportChanges:()=>m});const d="ionKeyboardDidShow",t="ionKeyboardDidHide";let c={},r={},a=!1;const e=()=>{c={},r={},a=!1},n=o=>{i(o),o.visualViewport&&(r=p(o.visualViewport),o.visualViewport.onresize=()=>{m(o),u()||v(o)?g(o):h(o)&&_(o)})},i=o=>{o.addEventListener("keyboardDidShow",E=>g(o,E)),o.addEventListener("keyboardDidHide",()=>_(o))},g=(o,E)=>{w(o,E),a=!0},_=o=>{y(o),a=!1},u=()=>!a&&c.width===r.width&&(c.height-r.height)*r.scale>150,v=o=>a&&!h(o),h=o=>a&&r.height===o.innerHeight,w=(o,E)=>{const P=new CustomEvent(d,{detail:{keyboardHeight:E?E.keyboardHeight:o.innerHeight-r.height}});o.dispatchEvent(P)},y=o=>{const E=new CustomEvent(t);o.dispatchEvent(E)},m=o=>{c=Object.assign({},r),r=p(o.visualViewport)},p=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},7585:(O,f,l)=>{l.d(f,{c:()=>t});var d=l(2470);const t=s=>{let c,r,a;const e=()=>{c=()=>{a=!0,s&&s(!0)},r=()=>{a=!1,s&&s(!1)},null==d.w||d.w.addEventListener("keyboardWillShow",c),null==d.w||d.w.addEventListener("keyboardWillHide",r)};return e(),{init:e,destroy:()=>{null==d.w||d.w.removeEventListener("keyboardWillShow",c),null==d.w||d.w.removeEventListener("keyboardWillHide",r),c=r=void 0},isKeyboardVisible:()=>a}}},6490:(O,f,l)=>{l.d(f,{S:()=>t});const t={bubbles:{dur:1e3,circles:9,fn:(s,c,r)=>{const a=s*c/r-s+"ms",e=2*Math.PI*c/r;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":a}}}},circles:{dur:1e3,circles:8,fn:(s,c,r)=>{const a=c/r,e=s*a-s+"ms",n=2*Math.PI*a;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(s,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(s,c,r)=>({y1:14,y2:26,style:{transform:`rotate(${360/r*c+(c<r/2?180:-180)}deg)`,"animation-delay":s*c/r-s+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(s,c,r)=>({y1:12,y2:20,style:{transform:`rotate(${360/r*c+(c<r/2?180:-180)}deg)`,"animation-delay":s*c/r-s+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(s,c,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":s*c/r-s+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(s,c,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":s*c/r-s+"ms"}})}}},1460:(O,f,l)=>{l.r(f),l.d(f,{createSwipeBackGesture:()=>r});var d=l(690),t=l(1776),s=l(8077);l(4587);const r=(a,e,n,i,g)=>{const _=a.ownerDocument.defaultView;let u=(0,t.i)(a);const h=o=>u?-o.deltaX:o.deltaX;return(0,s.createGesture)({el:a,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(u=(0,t.i)(a),(o=>{const{startX:C}=o;return u?C>=_.innerWidth-50:C<=50})(o)&&e()),onStart:n,onMove:o=>{const C=h(o)/_.innerWidth;i(C)},onEnd:o=>{const E=h(o),C=_.innerWidth,P=E/C,D=(o=>u?-o.velocityX:o.velocityX)(o),M=D>=0&&(D>.2||E>C/2),T=(M?1-P:P)*C;let b=0;if(T>5){const x=T/Math.abs(D);b=Math.min(x,540)}g(M,P<=0?.01:(0,d.l)(0,P,.9999),b)}})}},5844:(O,f,l)=>{l.d(f,{Sz:()=>r,d9:()=>s,rP:()=>c});var d=l(5861),t=l(4459);const s=function(){var a=(0,d.Z)(function*(e){var n,i,g,_,u,v;e.params=e.params||{},(0,t.T1)({path:"api/Payment2/Pay",params:{userid:null!==(n=e.params.userid)&&void 0!==n?n:null,pay_orderid:null!==(i=e.params.pay_orderid)&&void 0!==i?i:null,discount_code:null!==(g=e.params.discount_code)&&void 0!==g?g:null,recharge_method:null!==(_=e.params.recharge_method)&&void 0!==_?_:null,v_doctypes:null!==(u=e.params.v_doctypes)&&void 0!==u?u:null,docid:null!==(v=e.params.docid)&&void 0!==v?v:null},success:h=>{"function"==typeof e.callback&&e.callback(h.data||null)},error:h=>{"function"==typeof e.callback&&e.callback(null),console.error(h)},loading:e.loading})});return function(n){return a.apply(this,arguments)}}(),c=function(){var a=(0,d.Z)(function*(e){var n,i,g,_,u;e.params=e.params||{},e.params.page=e.params.page||1,e.params.limit=e.params.limit||1,(0,t.cd)({path:"api/payment/search_pay_order_detail",params:{getby:null!==(n=e.params.userid)&&void 0!==n?n:null,order_code:null!==(i=e.params.order_code)&&void 0!==i?i:null,pay_orderid:null!==(g=e.params.pay_orderid)&&void 0!==g?g:null,posstart:(e.params.page-1)*e.params.limit,numofrow:e.params.limit,sortfield:null!==(_=e.params.sortfield)&&void 0!==_?_:null,sorttype:null!==(u=e.params.sorttype)&&void 0!==u?u:null},success:v=>{"function"==typeof e.callback&&e.callback(v.data||null)},error:v=>{"function"==typeof e.callback&&e.callback(null),console.error(v)},loading:e.loading})});return function(n){return a.apply(this,arguments)}}(),r=function(){var a=(0,d.Z)(function*(e){var n,i,g,_,u,v,h,w,y,m,p,o,E,C;e.params=e.params||{},e.params.page=e.params.page||1,e.params.limit=e.params.limit||1,(0,t.cd)({path:"api/payment/search_pay_order_info",params:{getby:null!==(n=e.params.userid)&&void 0!==n?n:null,userid:null!==(i=e.params.userid)&&void 0!==i?i:null,pay_orderid:null!==(g=e.params.pay_orderid)&&void 0!==g?g:null,orderid:null!==(_=e.params.orderid)&&void 0!==_?_:null,order_code:null!==(u=e.params.order_code)&&void 0!==u?u:null,amount_from:null!==(v=e.params.amount_from)&&void 0!==v?v:null,amount_to:null!==(h=e.params.amount_to)&&void 0!==h?h:null,order_date_from:null!==(w=e.params.order_date_from)&&void 0!==w?w:null,order_date_to:null!==(y=e.params.order_date_to)&&void 0!==y?y:null,v_feesstatus:null!==(m=e.params.v_feesstatus)&&void 0!==m?m:null,cardtype:null!==(p=e.params.cardtype)&&void 0!==p?p:null,pay_full_name:null!==(o=e.params.pay_full_name)&&void 0!==o?o:null,posstart:(e.params.page-1)*e.params.limit,numofrow:e.params.limit,sortfield:null!==(E=e.params.sortfield)&&void 0!==E?E:null,sorttype:null!==(C=e.params.sorttype)&&void 0!==C?C:null},success:P=>{"function"==typeof e.callback&&e.callback(P.data||null)},error:P=>{"function"==typeof e.callback&&e.callback(null),console.error(P)},loading:e.loading})});return function(n){return a.apply(this,arguments)}}()},2654:(O,f,l)=>{l.d(f,{A:()=>t});var d=l(4459);const t=s=>{var c,r,a,e;s.params=s.params||{},s.params.page=s.params.page||1,s.params.limit=s.params.limit||-1,(0,d.cd)({url:"api/ProductPackageContent/SearchJoinLookup",params:{getby:null!==(c=s.params.userid)&&void 0!==c?c:null,userid:null!==(r=s.params.userid)&&void 0!==r?r:null,productpackage_id:null!==(a=s.params.productpackage_id)&&void 0!==a?a:null,productpackage_key:null!==(e=s.params.productpackage_key)&&void 0!==e?e:null,sortfield:"ordinal",sorttype:"asc",posstart:(s.params.page-1)*s.params.limit,numofrow:s.params.limit},success:n=>{var i;"function"==typeof s.callback&&s.callback(null!==(i=n.data)&&void 0!==i?i:null)},error:n=>{"function"==typeof s.callback&&s.callback(),console.error(n)},loading:s.loading})}},2820:(O,f,l)=>{l.d(f,{c:()=>c});var d=l(2695),t=l(9468),s=l(3536);let c=(()=>{var r;class a{constructor(){this.APP_ROUTE=d.z}ngOnInit(){}}return(r=a).\u0275fac=function(n){return new(n||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-footer"]],decls:67,vars:6,consts:[[1,"footer"],[1,"container","pt-5","pb-4"],[1,"row"],[1,"col-12","col-md-6","col-lg-3","mb-5"],[1,"title","mb-3"],[1,"content"],["name","arrow-forward-outline"],[3,"href"],[1,"title","mb-3","mt-5"],[1,"connect"],["href","https://www.facebook.com/LacvietCorporation","target","_blank"],["src","../../../assets/image/landing-page/icon-facebook.svg"],[1,"col-12","col-md-6","col-lg-4","mb-5"],[1,"col-12","col-md-12","col-lg-5","mb-5"],["href","https://maps.app.goo.gl/Hd7d53DR9GicP4JE6","target","_blank"],[1,"contact"],["href","mailto:lacviet@lacviet.com.vn"],["href","tel:+842838423333"],[1,"copyright"],["href","https://lacviet.vn","target","_blank"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._uU(5,"D\xe0nh cho ng\u01b0\u1eddi d\xf9ng"),t.qZA(),t.TgZ(6,"div",5)(7,"div"),t._UZ(8,"ion-icon",6),t.TgZ(9,"a",7),t._uU(10,"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng"),t.qZA()(),t.TgZ(11,"div"),t._UZ(12,"ion-icon",6),t.TgZ(13,"a",7),t._uU(14,"T\u1ea3i \u1ee9ng d\u1ee5ng"),t.qZA()()(),t.TgZ(15,"div",8),t._uU(16,"Ch\u0103m s\xf3c kh\xe1ch h\xe0ng"),t.qZA(),t.TgZ(17,"div",5)(18,"div"),t._uU(19,"K\u1ebft n\u1ed1i v\u1edbi ch\xfang t\xf4i"),t.qZA(),t.TgZ(20,"div",9)(21,"a",10),t._UZ(22,"ion-icon",11),t.qZA()()()(),t.TgZ(23,"div",12)(24,"div",4),t._uU(25,"V\u1ec1 Tabca"),t.qZA(),t.TgZ(26,"div",5)(27,"div"),t._UZ(28,"ion-icon",6),t.TgZ(29,"a",7),t._uU(30,"V\u1ec1 ch\xfang t\xf4i"),t.qZA()(),t.TgZ(31,"div"),t._UZ(32,"ion-icon",6),t.TgZ(33,"a",7),t._uU(34,"Ch\xednh s\xe1ch v\xe0 quy \u0111\u1ecbnh"),t.qZA()(),t.TgZ(35,"div"),t._UZ(36,"ion-icon",6),t.TgZ(37,"a",7),t._uU(38,"Ch\xednh s\xe1ch b\xe1n h\xe0ng v\xe0 thanh to\xe1n"),t.qZA()(),t.TgZ(39,"div"),t._UZ(40,"ion-icon",6),t.TgZ(41,"a",7),t._uU(42,"\u0110i\u1ec1u kho\u1ea3n s\u1eed d\u1ee5ng"),t.qZA()()()(),t.TgZ(43,"div",13)(44,"div",4),t._uU(45,"C\xf4ng ty c\u1ed5 ph\u1ea7n tin h\u1ecdc L\u1ea1c Vi\u1ec7t"),t.qZA(),t.TgZ(46,"div",5)(47,"a",14)(48,"span"),t._uU(49,"23 Nguy\u1ec5n Th\u1ecb Hu\u1ef3nh,"),t.qZA(),t.TgZ(50,"span"),t._uU(51,"ph\u01b0\u1eddng 8,"),t.qZA(),t.TgZ(52,"span"),t._uU(53,"qu\u1eadn Ph\xfa Nhu\u1eadn,"),t.qZA(),t.TgZ(54,"span"),t._uU(55,"th\xe0nh ph\u1ed1 H\u1ed3 Ch\xed Minh"),t.qZA()()(),t.TgZ(56,"div",15)(57,"div")(58,"a",16),t._uU(59,"lacviet@lacviet.com.vn"),t.qZA()(),t.TgZ(60,"div")(61,"a",17),t._uU(62,"(+84.28) 3842 3333"),t.qZA()()()()(),t.TgZ(63,"div",18),t._uU(64,"\xa9 Copyright 2024 by "),t.TgZ(65,"a",19),t._uU(66,"L\u1ea1c Vi\u1ec7t"),t.qZA()()()()),2&n&&(t.xp6(9),t.Q6J("href",i.APP_ROUTE.HELP,t.LSH),t.xp6(4),t.Q6J("href",i.APP_ROUTE.HOME_DOWNLOAD_APP,t.LSH),t.xp6(16),t.Q6J("href",i.APP_ROUTE.ABOUT_US,t.LSH),t.xp6(4),t.Q6J("href",i.APP_ROUTE.POLICIES_AND_REGULATIONS,t.LSH),t.xp6(4),t.Q6J("href",i.APP_ROUTE.SALES_AND_PAYMENT_POLICIES,t.LSH),t.xp6(4),t.Q6J("href",i.APP_ROUTE.TERMS_OF_USE,t.LSH))},dependencies:[s.gu],styles:[".footer[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.1);background:#FFF}.footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:17px;font-weight:700;letter-spacing:2px;text-transform:uppercase}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:28px;letter-spacing:1.8px}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:1rem}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;margin-right:.5rem}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{vertical-align:middle;color:inherit}.footer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.75rem;vertical-align:middle;font-size:18px}.footer[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:40px}.footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{font-size:25px;font-weight:400;line-height:22px;letter-spacing:3px}.footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:20px}.footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit}.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{color:#333;text-align:center;font-size:18px;font-weight:400;line-height:26px}.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration-line:underline}"]}),a})()}}]);