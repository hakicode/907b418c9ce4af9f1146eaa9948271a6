"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[715],{3377:(U,x,l)=>{l.d(x,{Kr:()=>t,LE:()=>O,iA:()=>o,lL:()=>p});var b=l(5861),u=l(2014),P=l(4459);const f=new u.K({name:"_userDB",driverOrder:[u.N.IndexedDB,u.N.LocalStorage]}),o=function(){var h=(0,b.Z)(function*(e){yield f.create();try{var n=(yield f.get("user-local"))||{};return"function"==typeof(null==e?void 0:e.callback)&&e.callback(Object.assign({},n||{})),n}catch(g){"function"==typeof(null==e?void 0:e.callback)&&e.callback(),console.error(g)}return{}});return function(n){return h.apply(this,arguments)}}(),t=function(){var h=(0,b.Z)(function*(e){yield f.create(),e.params=e.params||{};try{var n=Object.assign({},e.params);yield f.set("user-local",n),"function"==typeof e.callback&&e.callback(Object.assign({},n||{}))}catch(g){"function"==typeof e.callback&&e.callback(),console.error(g)}});return function(n){return h.apply(this,arguments)}}(),p=function(){var h=(0,b.Z)(function*(e){return e&&(e.params={}),t(null!=e?e:{})});return function(n){return h.apply(this,arguments)}}(),O=function(){var h=(0,b.Z)(function*(e,n){let g=yield(0,P.H0)();if(n){let C=[];e.params.profilephoto&&C.push(new Promise((m,M)=>{let d=new Image;d.onload=()=>{e.params.url_profilephoto=d.src,m(1)},d.onerror=()=>{e.params.url_profilephoto="assets/image/user-avatar-default.png",m(0)},d.src=g.readfileuploadurl+e.params.profilephoto})),e.params.banner&&C.push(new Promise((m,M)=>{let d=new Image;d.onload=()=>{e.params.url_banner=d.src,m(1)},d.onerror=()=>{e.params.url_banner="assets/image/user-banner-default.png",m(0)},d.src=g.readfileuploadurl+e.params.banner})),C.length>0?Promise.all(C).then(()=>{t(e)}):t(e)}else o({callback:C=>{if(C){let m=[];e.params.profilephoto&&m.push(new Promise((M,d)=>{let v=new Image;v.onload=()=>{e.params.url_profilephoto=v.src,M(1)},v.onerror=()=>{e.params.url_profilephoto="assets/image/user-avatar-default.png",M(0)},v.src=g.readfileuploadurl+e.params.profilephoto})),e.params.banner&&m.push(new Promise((M,d)=>{let v=new Image;v.onload=()=>{e.params.url_banner=v.src,M(1)},v.onerror=()=>{e.params.url_banner="assets/image/user-banner-default.png",M(0)},v.src=g.readfileuploadurl+e.params.banner})),m.length>0?Promise.all(m).then(()=>{t({params:Object.assign({},C,e.params),callback:e.callback})}):t({params:Object.assign({},C,e.params),callback:e.callback})}else"function"==typeof e.callback&&e.callback()}})});return function(n,g){return h.apply(this,arguments)}}()},715:(U,x,l)=>{l.r(x),l.d(x,{UserActivePageModule:()=>D});var b=l(6814),u=l(6223),P=l(3536),f=l(6916),o=l(5861),t=l(8662),p=l(4459),O=l(5328),A=l(3377),y=l(2695),h=l(9455),e=l(8186),n=l(5879),g=l(6593);function C(a,s){if(1&a){const c=n.EpF();n.ynx(0),n.TgZ(1,"h4"),n._uU(2,"K\xedch ho\u1ea1t t\xe0i kho\u1ea3n th\xe0nh c\xf4ng"),n.qZA(),n.TgZ(3,"p",8)(4,"span"),n._uU(5,"Ch\xe0o m\u1eebng b\u1ea1n \u0111\u1ebfn v\u1edbi Tabca,"),n.qZA(),n._UZ(6,"br"),n.TgZ(7,"span"),n._uU(8,"T\xe0i kho\u1ea3n "),n.TgZ(9,"a")(10,"b"),n._uU(11),n.qZA()(),n._uU(12," \u0111\xe3 \u0111\u01b0\u1ee3c k\xedch ho\u1ea1t!"),n.qZA(),n._UZ(13,"br"),n.TgZ(14,"span"),n._uU(15,"\u0110\u0103ng nh\u1eadp ngay \u0111\u1ec3 tr\u1ea3i nghi\u1ec7m s\u1ea3n ph\u1ea9m."),n.qZA()(),n.TgZ(16,"p",9)(17,"button",10),n.NdJ("click",function(){n.CHM(c);const i=n.oxw();return n.KtG(i.goToSignIn())}),n._uU(18,"\u0110\u0103ng nh\u1eadp"),n.qZA()(),n.BQk()}if(2&a){const c=n.oxw();n.xp6(11),n.Oqu(c.dataForm.emailaddr)}}function m(a,s){if(1&a&&(n.TgZ(0,"option",20),n._uU(1),n.qZA()),2&a){const c=s.$implicit;n.Q6J("value",c.madonvi),n.xp6(1),n.Oqu(c.tendv)}}const M=function(){return{standalone:!0}};function d(a,s){if(1&a){const c=n.EpF();n.TgZ(0,"div",13)(1,"label"),n._uU(2,"\u0110\u01a1n v\u1ecb "),n.TgZ(3,"span"),n._uU(4,"*"),n.qZA()(),n.TgZ(5,"select",18),n.NdJ("ngModelChange",function(i){n.CHM(c);const _=n.oxw(2);return n.KtG(_.changeDonVi(i))}),n.YNc(6,m,2,2,"option",19),n.qZA()()}if(2&a){const c=n.oxw(2);n.xp6(5),n.Q6J("ngModel",c.dataForm.madonvi)("ngModelOptions",n.DdM(3,M)),n.xp6(1),n.Q6J("ngForOf",c.configs)}}function v(a,s){if(1&a&&(n.TgZ(0,"p",21)(1,"span"),n._uU(2),n.qZA()()),2&a){const c=n.oxw(2);n.xp6(2),n.Oqu(c.dataRes.returnmsg)}}function T(a,s){if(1&a){const c=n.EpF();n.ynx(0),n.TgZ(1,"h1"),n._uU(2,"K\xedch ho\u1ea1t t\xe0i kho\u1ea3n"),n.qZA(),n.TgZ(3,"form",11),n.NdJ("submit",function(i){n.CHM(c);const _=n.oxw();return n.KtG(_.formSubmit(i))}),n.YNc(4,d,7,4,"div",12),n.TgZ(5,"div",13)(6,"label"),n._uU(7,"\u0110\u1ecba ch\u1ec9 Email "),n.TgZ(8,"span"),n._uU(9,"*"),n.qZA()(),n._UZ(10,"input",14),n.qZA(),n.TgZ(11,"div",15)(12,"button",16),n._uU(13,"X\xe1c nh\u1eadn"),n.qZA()()(),n.YNc(14,v,3,1,"p",17),n.BQk()}if(2&a){const c=n.oxw();n.xp6(4),n.Q6J("ngIf",c.configs.length>1),n.xp6(6),n.Q6J("ngModel",c.dataForm.emailaddr),n.xp6(4),n.Q6J("ngIf",c.dataRes)}}const Z=[{path:"",component:(()=>{var a;class s{constructor(r,i,_,E){this.router=r,this.activatedRoute=i,this.titleService=_,this.toastController=E,this.appsettings={},this.configs=[],this.dataForm={},_.setTitle("K\xedch ho\u1ea1t t\xe0i kho\u1ea3n")}ngOnInit(){var r=this;if(this.dataForm.emailaddr=this.activatedRoute.snapshot.queryParamMap.get("email")||"",this.dataForm.activationcode=this.activatedRoute.snapshot.queryParamMap.get("code")||"",!this.dataForm.emailaddr||!this.dataForm.activationcode)return this.backToHome();(0,o.Z)(function*(){(0,A.lL)({}),yield(0,p.rt)(),r.appsettings=yield(0,p.H0)(),r.dataForm.madonvi=r.appsettings.madonvi;let i=yield t.A.getId();r.dataForm.devicekey=null==i?void 0:i.identifier,r.configs=(yield(0,p.dV)())||[],r.configs&&r.configs.length?1==r.configs.length&&(r.dataForm.madonvi=r.configs[0].madonvi):r.dataForm.madonvi=h.default_donvi,r.dataForm.madonvi&&r.formSubmit()})()}backToHome(){window.location.replace(y.z.LANDING_PAGE)}goToSignIn(){window.location.replace(y.z.LANDING_PAGE+"?require=signin")}changeDonVi(r){var i=this;return(0,o.Z)(function*(){i.dataForm.madonvi=r})()}formSubmit(r){var i=this;return(0,o.Z)(function*(){null==r||r.preventDefault(),i.dataForm.emailaddr&&i.dataForm.activationcode&&(yield(0,p.TT)(i.dataForm.madonvi),(0,O.Es)({params:i.dataForm,callback:_=>{(0,e.B)(i.toastController,{},_).then(E=>{E.onDidDismiss().then(I=>{0==(null==_?void 0:_.returncode)&&window.location.replace(y.z.LANDING_PAGE+"?require=signin")}),E.present()})}}))})()}}return(a=s).\u0275fac=function(r){return new(r||a)(n.Y36(f.F0),n.Y36(f.gz),n.Y36(g.Dx),n.Y36(P.yF))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-user-active"]],decls:9,vars:2,consts:[["scroll-x","false","scroll-y","false"],["slot","fixed","vertical","top","horizontal","start"],["size","small",3,"click"],["name","arrow-back-outline"],[1,"container-main","overflow-auto","d-flex","w-100","h-100","align-items-center","justify-content-center"],[1,"container-from"],["src","../../../../assets/image/logo.svg","alt","Tabca"],[4,"ngIf"],[1,"text-left"],[1,"mt-4","mb-3"],["type","button",1,"btn","btn-sign-in",3,"click"],[3,"submit"],["class","form-group",4,"ngIf"],[1,"form-group"],["type","email","name","emailaddr","minlength","{6}","maxlength","{32}","required","","autofocus","","placeholder","your-email@email.com","readonly","",1,"form-control",3,"ngModel"],[1,"form-group","mt-5"],["type","submit",1,"btn"],["class","text-danger",4,"ngIf"],["interface","popover","justify","end","placeholder","Ch\u1ecdn \u0111\u01a1n v\u1ecb",1,"custom-select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"text-danger"]],template:function(r,i){1&r&&(n.TgZ(0,"ion-content",0)(1,"ion-fab",1)(2,"ion-fab-button",2),n.NdJ("click",function(){return i.backToHome()}),n._UZ(3,"ion-icon",3),n.qZA()(),n.TgZ(4,"div",4)(5,"div",5),n._UZ(6,"img",6),n.YNc(7,C,19,1,"ng-container",7),n.YNc(8,T,15,3,"ng-container",7),n.qZA()()()),2&r&&(n.xp6(7),n.Q6J("ngIf",0==(null==i.dataRes?null:i.dataRes.returncode)),n.xp6(1),n.Q6J("ngIf",0!=(null==i.dataRes?null:i.dataRes.returncode)))},dependencies:[b.sg,b.O5,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.Q7,u.wO,u.nD,u.On,u.F,P.W2,P.IJ,P.W4,P.gu],styles:[".container-main[_ngcontent-%COMP%]{padding:.5rem;background-image:url(bg-join-and-share.d53a3207da518edb.png);background-repeat:no-repeat;background-size:cover;background-position:center center}.container-from[_ngcontent-%COMP%]{width:420px;padding:2rem 2rem 1rem;margin:auto;border-radius:10px;background:#fff;box-shadow:0 0 20px #00000026}.container-from[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:60px}.container-from[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin:1rem 0 2rem;font-size:32px;font-weight:700;line-height:40px}.container-from[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{margin:1rem 0 .5rem;font-size:20px;font-weight:500;line-height:26px}.container-from[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{color:#1f1f39;font-size:14px}.container-from[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{text-align:center}.container-from[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#858597}.container-from[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3243c7;cursor:pointer}.container-from[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   button.btn-sign-in[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;color:#fff;background:#3243C7;background:linear-gradient(90deg,#6D42E7 4.11%,#EA5FC1 100%);border:0;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{margin-bottom:5px;color:#333}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff3131}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > select[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;border:.5px solid #B8B8D2;background-color:#e8f0fe;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;color:#fff;background:#3243C7;background:linear-gradient(90deg,#6D42E7 4.11%,#EA5FC1 100%);border:0;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .custom-control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:sub}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3243c7;cursor:pointer}form[_ngcontent-%COMP%]   .for-got-pwd[_ngcontent-%COMP%]{margin-top:-.5rem;text-align:right}"]}),s})()}];let k=(()=>{var a;class s{}return(a=s).\u0275fac=function(r){return new(r||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[f.Bz.forChild(Z),f.Bz]}),s})(),D=(()=>{var a;class s{}return(a=s).\u0275fac=function(r){return new(r||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[b.ez,u.u5,P.Pc,k]}),s})()},8186:(U,x,l)=>{l.d(x,{B:()=>u});var b=l(5861);const u=function(){var P=(0,b.Z)(function*(f,o,t){var p,O,A;t&&(o.message||(o.message=null!==(A=null==t?void 0:t.returnmsg)&&void 0!==A?A:0==(null==t?void 0:t.returncode)?"Th\xe0nh c\xf4ng!":null!=t&&t.returncode?`L\u1ed7i: #${null==t?void 0:t.returncode}`:"H\u1ec7 th\u1ed1ng kh\xf4ng c\xf3 ph\u1ea3n h\u1ed3i!"),o.icon||(o.icon=0==(null==t?void 0:t.returncode)?"checkmark-circle-sharp":null!=t&&t.returncode?"alert-circle-outline":"close-circle-sharp"),o.color||(o.color=0==(null==t?void 0:t.returncode)?"success":null!=t&&t.returncode?"warning":"danger"));return o.position||(o.position="bottom"),o.icon||(o.icon="bulb-outline"),o.color||(o.color="secondary"),o.duration=null!==(p=o.duration)&&void 0!==p?p:3e3,o.animated=null===(O=o.animated)||void 0===O||O,o.buttons=[{icon:"close-outline",side:"end",role:"cancel"}],yield f.create(o)});return function(o,t,p){return P.apply(this,arguments)}}()}}]);