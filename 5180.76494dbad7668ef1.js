"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5180],{112:(P,h,r)=>{r.d(h,{N:()=>O});var u=r(5861),C=r(4459),g=r(3377),n=r(2695),d=r(9416),f=r(3300),i=r(203),o=r(5879),_=r(3536),p=r(3999);let O=(()=>{var s;class m{constructor(t){this.modalController=t,this.APP_ROUTE=n.z,this.response={}}ngOnInit(){var t=this;(0,u.Z)(function*(){var e;t.user=yield(0,g.iA)(),(0,i.nC)({loading:a=>{t.response.loading=a},params:{userid:null===(e=t.user)||void 0===e?void 0:e.userid},callback:a=>{t.response.productpackageapplied=a}})})()}close(){this.modalController.dismiss()}presentModalUserChangeInfo(t){var e=this;return(0,u.Z)(function*(){const a=yield e.modalController.create({component:d.w,componentProps:{user:e.user},mode:"md",cssClass:"ion-modal ion-modal-change-info",backdropDismiss:!0,keyboardClose:!0});a.onDidDismiss().then(function(){var l=(0,u.Z)(function*(M){"confirm"==M.role&&(0,g.LE)({params:M.data,callback:Z=>{e.user=Z}})});return function(M){return l.apply(this,arguments)}}()),a.present()})()}presentModalUserChangePwd(t){var e=this;return(0,u.Z)(function*(){(yield e.modalController.create({component:f.B,componentProps:{user:e.user},mode:"md",cssClass:"ion-modal ion-modal-change-pwd",backdropDismiss:!0,keyboardClose:!0})).present()})()}signOut(){return(0,u.Z)(function*(){yield(0,C.rt)(),(0,g.Kr)({callback:()=>{window.location.replace(n.z.LANDING_PAGE)}})})()}}return(s=m).\u0275fac=function(t){return new(t||s)(o.Y36(_.IN))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-modal-menu-user"]],decls:95,vars:61,consts:[["slot","end"],["color","dark",3,"click"],["src","../../../../assets/icon/16x16/close.svg"],[1,"ion-no-padding"],[1,"h-100","d-flex","flex-column"],[1,"flex-grow-1"],["onerror","errorAvatar(this)",3,"src"],[1,"user-name","text-ellipsis","my-3"],[1,"text-center","mt-0","mb-1"],[1,"text-center","text-muted"],["mode","ios"],["button","","detail","true","detail-icon","chevron-forward-outline",3,"href"],["button","","detail","true","detail-icon","chevron-forward-outline",3,"click"],["button","","detail","true","detail-icon","log-out-outline",3,"click"],["color","danger"],["button","","detail","false","detail-icon","chevron-forward-outline",3,"href"],["button","","detail","true","detail-icon","arrow-up-circle-outline",3,"href"],["button","","detail","true","detail-icon","download-outline",3,"href"],[1,"copyright"],["href","https://lacviet.vn","target","_blank"]],template:function(t,e){if(1&t&&(o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),o.NdJ("click",function(){return e.close()}),o._UZ(4,"ion-icon",2),o.qZA()()()(),o.TgZ(5,"ion-content",3)(6,"div",4)(7,"div",5)(8,"ion-thumbnail"),o._UZ(9,"img",6),o.qZA(),o.TgZ(10,"div",7)(11,"h5",8)(12,"b"),o._uU(13),o.qZA()(),o.TgZ(14,"div",9),o._uU(15),o.qZA()(),o.TgZ(16,"ion-list",10)(17,"ion-list-header")(18,"ion-label")(19,"b"),o._uU(20),o.ALo(21,"translate"),o.qZA()()(),o.TgZ(22,"ion-item",11)(23,"ion-label"),o._uU(24),o.ALo(25,"translate"),o.qZA()(),o.TgZ(26,"ion-item",12),o.NdJ("click",function(l){return e.presentModalUserChangeInfo(l)}),o.TgZ(27,"ion-label"),o._uU(28),o.ALo(29,"translate"),o.qZA()(),o.TgZ(30,"ion-item",12),o.NdJ("click",function(l){return e.presentModalUserChangePwd(l)}),o.TgZ(31,"ion-label"),o._uU(32),o.ALo(33,"translate"),o.qZA()(),o.TgZ(34,"ion-item",13),o.NdJ("click",function(){return e.signOut()}),o.TgZ(35,"ion-label",14),o._uU(36),o.ALo(37,"translate"),o.qZA()()(),o.TgZ(38,"ion-list",10)(39,"ion-list-header")(40,"ion-label")(41,"b"),o._uU(42),o.ALo(43,"translate"),o.qZA()()(),o.TgZ(44,"ion-item",15)(45,"ion-label"),o._uU(46),o.ALo(47,"translate"),o.qZA(),o.TgZ(48,"ion-badge"),o._uU(49),o.qZA()(),o.TgZ(50,"ion-item",16)(51,"ion-label"),o._uU(52),o.ALo(53,"translate"),o.qZA()()(),o.TgZ(54,"ion-list",10)(55,"ion-list-header")(56,"ion-label")(57,"b"),o._uU(58),o.ALo(59,"translate"),o.qZA()()(),o.TgZ(60,"ion-item",11)(61,"ion-label"),o._uU(62),o.ALo(63,"translate"),o.qZA()(),o.TgZ(64,"ion-item",17)(65,"ion-label"),o._uU(66),o.ALo(67,"translate"),o.qZA()()(),o.TgZ(68,"ion-list",10)(69,"ion-list-header")(70,"ion-label")(71,"b"),o._uU(72),o.ALo(73,"translate"),o.qZA()()(),o.TgZ(74,"ion-item",11)(75,"ion-label"),o._uU(76),o.ALo(77,"translate"),o.qZA()(),o.TgZ(78,"ion-item",11)(79,"ion-label"),o._uU(80),o.ALo(81,"translate"),o.qZA()(),o.TgZ(82,"ion-item",11)(83,"ion-label"),o._uU(84),o.ALo(85,"translate"),o.qZA()(),o.TgZ(86,"ion-item",11)(87,"ion-label"),o._uU(88),o.ALo(89,"translate"),o.qZA()()()(),o.TgZ(90,"div")(91,"div",18),o._uU(92,"\xa9 Copyright 2024 by "),o.TgZ(93,"a",19),o._uU(94,"L\u1ea1c Vi\u1ec7t"),o.qZA()()()()()),2&t){let a;o.xp6(9),o.Q6J("src",null!==(a=null==e.user?null:e.user.url_profilephoto)&&void 0!==a?a:"../../../assets/image/user-avatar-default.png",o.LSH),o.xp6(4),o.Oqu(null==e.user?null:e.user.fullname),o.xp6(2),o.Oqu(null==e.user?null:e.user.emailaddr),o.xp6(5),o.Oqu(o.lcZ(21,29,"Account")),o.xp6(2),o.Q6J("href",e.APP_ROUTE.USER),o.xp6(2),o.Oqu(o.lcZ(25,31,"AccountInfo")),o.xp6(4),o.Oqu(o.lcZ(29,33,"ChangeInfo")),o.xp6(4),o.Oqu(o.lcZ(33,35,"ChangePassword")),o.xp6(4),o.Oqu(o.lcZ(37,37,"SignOut")),o.xp6(6),o.Oqu(o.lcZ(43,39,"Membership")),o.xp6(2),o.Q6J("href",e.APP_ROUTE.USER_MEMBERSHIP),o.xp6(2),o.Oqu(o.lcZ(47,41,"MemberInfo")),o.xp6(3),o.Oqu(null==e.response.productpackageapplied?null:e.response.productpackageapplied.productpackage_key),o.xp6(1),o.Q6J("href",e.APP_ROUTE.HOME_PRODUCT_PACKAGE),o.xp6(2),o.Oqu(o.lcZ(53,43,"AccountUpgrade")),o.xp6(6),o.Oqu(o.lcZ(59,45,"ForUser")),o.xp6(2),o.Q6J("href",e.APP_ROUTE.HELP),o.xp6(2),o.Oqu(o.lcZ(63,47,"UseGuide")),o.xp6(2),o.Q6J("href",e.APP_ROUTE.HOME_DOWNLOAD_APP),o.xp6(2),o.Oqu(o.lcZ(67,49,"DownloadApp")),o.xp6(6),o.Oqu(o.lcZ(73,51,"ForTabca")),o.xp6(2),o.Q6J("href",e.APP_ROUTE.ABOUT_US),o.xp6(2),o.Oqu(o.lcZ(77,53,"AboutUs")),o.xp6(2),o.Q6J("href",e.APP_ROUTE.POLICIES_AND_REGULATIONS),o.xp6(2),o.Oqu(o.lcZ(81,55,"PoliciesAndRegulations")),o.xp6(2),o.Q6J("href",e.APP_ROUTE.SALES_AND_PAYMENT_POLICIES),o.xp6(2),o.Oqu(o.lcZ(85,57,"SalesAndPaymentPolicies")),o.xp6(2),o.Q6J("href",e.APP_ROUTE.TERMS_OF_USE),o.xp6(2),o.Oqu(o.lcZ(89,59,"TermsOfUse"))}},dependencies:[_.yp,_.YG,_.Sm,_.W2,_.Gu,_.gu,_.Ie,_.Q$,_.q_,_.yh,_.Bs,_.sr,p.X$],styles:["ion-header[_ngcontent-%COMP%]{box-shadow:none}ion-header[_ngcontent-%COMP%]:after{display:none}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{box-shadow:none}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:40px;margin:1rem 0 1rem 1rem}ion-thumbnail[_ngcontent-%COMP%]{--size: 140px;--border-radius: 50%;margin:auto}.user-name[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:first-child{visibility:hidden}.user-name[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{fill:#4d4f60;font-size:16px}.copyright[_ngcontent-%COMP%]{padding:1rem 0 .5rem;color:#666;text-align:center;font-size:.75rem;font-weight:400;line-height:1.5rem}.copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration-line:underline}"]}),m})()},9416:(P,h,r)=>{r.d(h,{w:()=>O});var u=r(5861),C=r(5328),g=r(7308),n=r(5879),d=r(3536),f=r(6814),i=r(6223),o=r(3999);function _(s,m){if(1&s&&(n.TgZ(0,"div",8)(1,"div",14),n._uU(2),n.qZA()()),2&s){const c=n.oxw();n.xp6(2),n.Oqu(c.response.returnmsg)}}const p=function(){return{standalone:!0}};let O=(()=>{var s;class m{constructor(t,e){this.modalController=t,this.toastController=e,this.isfullscreen=!1,this.dataForm={},this.configs=[]}ngOnInit(){var t,e,a;this.isfullscreen=window.document.body.classList.contains("modal-fullscreen"),this.dataForm.userid=null===(t=this.user)||void 0===t?void 0:t.userid,this.dataForm.fullname=null===(e=this.user)||void 0===e?void 0:e.fullname,this.dataForm.emailaddr=null===(a=this.user)||void 0===a?void 0:a.emailaddr}toggleFullScreen(){this.isfullscreen?window.document.body.classList.remove("modal-fullscreen"):window.document.body.classList.add("modal-fullscreen"),this.isfullscreen=window.document.body.classList.contains("modal-fullscreen")}close(){return this.modalController.dismiss(null,"cancel")}switchModal(t){return this.modalController.dismiss({modalName:t,dataForm:this.dataForm},"switch")}changeFullName(t){this.dataForm.fullname=t}keypressFullName(t){(t.keyCode||t.which||t.charCode||0)==g.s.Enter&&this.formSubmit(t)}formSubmit(t){var e=this;return(0,u.Z)(function*(){var a;if(t.preventDefault(),!e.dataForm.fullname)return;let l=null===(a=e.dataForm.fullname)||void 0===a?void 0:a.split(" ");e.dataForm.firstname=null==l?void 0:l.pop(),e.dataForm.lastname=null==l?void 0:l.join(" "),(0,C.s2)({params:e.dataForm,callback:M=>{e.response=M,0==(null==M?void 0:M.returncode)&&e.modalController.dismiss(e.dataForm,"confirm")}})})()}}return(s=m).\u0275fac=function(t){return new(t||s)(n.Y36(d.IN),n.Y36(d.yF))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-modal-user-change-info"]],inputs:{user:"user"},decls:35,vars:24,consts:[["slot","end"],["color","dark",1,"d-none","d-md-block",3,"click"],[3,"src"],["color","dark",3,"click"],["src","../../../../assets/icon/16x16/close.svg"],[1,"container-form"],["src","../../../../../assets/image/logo.svg","alt","Tabca"],[3,"submit"],[1,"form-group"],["type","text","name","fullname","minlength","{6}","maxlength","{32}","required","","autofocus","",1,"form-control",3,"placeholder","ngModel","ngModelOptions","keypress","ngModelChange"],[1,"form-group","mb-5"],["type","email","name","emailaddr","minlength","{6}","maxlength","{32}","required","","autofocus","","readonly","",1,"form-control",3,"placeholder","ngModel"],["class","form-group",4,"ngIf"],["type","submit",1,"btn"],[1,"text-danger","text-center"]],template:function(t,e){1&t&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),n.NdJ("click",function(){return e.toggleFullScreen()}),n._UZ(4,"ion-icon",2),n.qZA(),n.TgZ(5,"ion-button",3),n.NdJ("click",function(){return e.close()}),n._UZ(6,"ion-icon",4),n.qZA()()()(),n.TgZ(7,"ion-content")(8,"div",5),n._UZ(9,"img",6),n.TgZ(10,"h1"),n._uU(11),n.ALo(12,"translate"),n.qZA(),n.TgZ(13,"form",7),n.NdJ("submit",function(l){return e.formSubmit(l)}),n.TgZ(14,"div",8)(15,"label"),n._uU(16),n.ALo(17,"translate"),n.TgZ(18,"span"),n._uU(19,"*"),n.qZA()(),n.TgZ(20,"input",9),n.NdJ("keypress",function(l){return e.keypressFullName(l)})("ngModelChange",function(l){return e.changeFullName(l)}),n.ALo(21,"translate"),n.qZA()(),n.TgZ(22,"div",10)(23,"label"),n._uU(24),n.ALo(25,"translate"),n.TgZ(26,"span"),n._uU(27,"*"),n.qZA()(),n._UZ(28,"input",11),n.ALo(29,"translate"),n.qZA(),n.YNc(30,_,3,1,"div",12),n.TgZ(31,"div",8)(32,"button",13),n._uU(33),n.ALo(34,"translate"),n.qZA()()()()()),2&t&&(n.xp6(4),n.Q6J("src",e.isfullscreen?"assets/icon/16x16/fullscreen-exit.svg":"assets/icon/16x16/fullscreen.svg"),n.xp6(7),n.Oqu(n.lcZ(12,11,"ChangeInfo")),n.xp6(5),n.hij("",n.lcZ(17,13,"YourName")," "),n.xp6(4),n.s9C("placeholder",n.lcZ(21,15,"EnterYourName")),n.Q6J("ngModel",e.dataForm.fullname)("ngModelOptions",n.DdM(23,p)),n.xp6(4),n.hij("",n.lcZ(25,17,"Email")," "),n.xp6(4),n.s9C("placeholder",n.lcZ(29,19,"EnterEmail")),n.Q6J("ngModel",e.dataForm.emailaddr),n.xp6(2),n.Q6J("ngIf",e.response),n.xp6(3),n.Oqu(n.lcZ(34,21,"Confirm")))},dependencies:[f.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.wO,i.nD,i.On,i.F,d.YG,d.Sm,d.W2,d.Gu,d.gu,d.sr,o.X$],styles:["ion-header[_ngcontent-%COMP%]{box-shadow:none}ion-header[_ngcontent-%COMP%]:after{display:none}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{box-shadow:none}.container-form[_ngcontent-%COMP%]{max-width:420px;padding:0 1rem;margin:auto}.container-form[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:60px}.container-form[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin:1rem 0 2rem;font-size:32px;font-weight:700;line-height:40px}.container-form[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{color:#1f1f39;font-size:14px}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{text-align:center}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#858597}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3243c7;cursor:pointer}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{margin-bottom:5px;color:#333}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff3131}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > select[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;border:.5px solid #B8B8D2;background:#E8F0FE;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;color:#fff;background:#3243C7;background:linear-gradient(90deg,#6D42E7 4.11%,#EA5FC1 100%);border:0;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .custom-control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:sub}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3243c7;cursor:pointer}form[_ngcontent-%COMP%]   .for-got-pwd[_ngcontent-%COMP%]{margin-top:-.5rem;text-align:right}"]}),m})()},3300:(P,h,r)=>{r.d(h,{B:()=>O});var u=r(5861),C=r(5328),g=r(7308),n=r(5879),d=r(3536),f=r(6814),i=r(6223),o=r(3999);function _(s,m){if(1&s&&(n.TgZ(0,"div",8)(1,"div",16),n._uU(2),n.qZA()()),2&s){const c=n.oxw();n.xp6(2),n.Oqu(c.response.returnmsg)}}const p=function(){return{standalone:!0}};let O=(()=>{var s;class m{constructor(t,e){this.modalController=t,this.toastController=e,this.isfullscreen=!1,this.dataForm={}}ngOnInit(){var t;this.isfullscreen=window.document.body.classList.contains("modal-fullscreen"),this.dataForm.emailaddr=null===(t=this.user)||void 0===t?void 0:t.emailaddr}toggleFullScreen(){this.isfullscreen?window.document.body.classList.remove("modal-fullscreen"):window.document.body.classList.add("modal-fullscreen"),this.isfullscreen=window.document.body.classList.contains("modal-fullscreen")}close(){return this.modalController.dismiss(null,"cancel")}switchModal(t){return this.modalController.dismiss({modalName:t,dataForm:this.dataForm},"switch")}changePwd(t){this.dataForm.pwd=t}changeNewPwd(t){this.dataForm.newpwd=t}changeNewPwd2(t){this.dataForm.newpwd2=t}keypressPwd(t){(t.keyCode||t.which||t.charCode||0)==g.s.Enter&&this.formSubmit(t)}formSubmit(t){var e=this;return(0,u.Z)(function*(){t.preventDefault(),e.dataForm.emailaddr&&e.dataForm.pwd&&e.dataForm.newpwd&&e.dataForm.newpwd==e.dataForm.newpwd2&&(0,C.xK)({params:e.dataForm,callback:a=>{e.response=a,a&&0==a.returncode&&e.close()}})})()}}return(s=m).\u0275fac=function(t){return new(t||s)(n.Y36(d.IN),n.Y36(d.yF))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-modal-user-change-pwd"]],inputs:{user:"user"},decls:48,vars:35,consts:[["slot","end"],["color","dark",1,"d-none","d-md-block",3,"click"],[3,"src"],["color","dark",3,"click"],["src","../../../../assets/icon/16x16/close.svg"],[1,"container-form"],["src","../../../../../assets/image/logo.svg","alt","Tabca"],[3,"submit"],[1,"form-group"],["type","email","name","emailaddr","minlength","{6}","maxlength","{32}","required","","autofocus","","readonly","",1,"form-control",3,"placeholder","ngModel"],["type","password","name","pwd","minlength","{6}","maxlength","{32}","required","","placeholder","******",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["type","password","name","newpwd","minlength","{6}","maxlength","{32}","required","","placeholder","******",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"form-group","mb-5"],["type","password","name","newpwd2","minlength","{6}","maxlength","{32}","required","","placeholder","******",1,"form-control",3,"ngModel","ngModelOptions","keypress","ngModelChange"],["class","form-group",4,"ngIf"],["type","submit",1,"btn"],[1,"text-danger","text-center"]],template:function(t,e){1&t&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),n.NdJ("click",function(){return e.toggleFullScreen()}),n._UZ(4,"ion-icon",2),n.qZA(),n.TgZ(5,"ion-button",3),n.NdJ("click",function(){return e.close()}),n._UZ(6,"ion-icon",4),n.qZA()()()(),n.TgZ(7,"ion-content")(8,"div",5),n._UZ(9,"img",6),n.TgZ(10,"h1"),n._uU(11),n.ALo(12,"translate"),n.qZA(),n.TgZ(13,"form",7),n.NdJ("submit",function(l){return e.formSubmit(l)}),n.TgZ(14,"div",8)(15,"label"),n._uU(16),n.ALo(17,"translate"),n.TgZ(18,"span"),n._uU(19,"*"),n.qZA()(),n._UZ(20,"input",9),n.ALo(21,"translate"),n.qZA(),n.TgZ(22,"div",8)(23,"label"),n._uU(24),n.ALo(25,"translate"),n.TgZ(26,"span"),n._uU(27,"*"),n.qZA()(),n.TgZ(28,"input",10),n.NdJ("ngModelChange",function(l){return e.changePwd(l)}),n.qZA()(),n.TgZ(29,"div",8)(30,"label"),n._uU(31),n.ALo(32,"translate"),n.TgZ(33,"span"),n._uU(34,"*"),n.qZA()(),n.TgZ(35,"input",11),n.NdJ("ngModelChange",function(l){return e.changeNewPwd(l)}),n.qZA()(),n.TgZ(36,"div",12)(37,"label"),n._uU(38),n.ALo(39,"translate"),n.TgZ(40,"span"),n._uU(41,"*"),n.qZA()(),n.TgZ(42,"input",13),n.NdJ("keypress",function(l){return e.keypressPwd(l)})("ngModelChange",function(l){return e.changeNewPwd2(l)}),n.qZA()(),n.YNc(43,_,3,1,"div",14),n.TgZ(44,"div",8)(45,"button",15),n._uU(46),n.ALo(47,"translate"),n.qZA()()()()()),2&t&&(n.xp6(4),n.Q6J("src",e.isfullscreen?"assets/icon/16x16/fullscreen-exit.svg":"assets/icon/16x16/fullscreen.svg"),n.xp6(7),n.Oqu(n.lcZ(12,18,"UpdatePassword")),n.xp6(5),n.hij("",n.lcZ(17,20,"Email")," "),n.xp6(4),n.s9C("placeholder",n.lcZ(21,22,"EnterEmail")),n.Q6J("ngModel",e.dataForm.emailaddr),n.xp6(4),n.hij("",n.lcZ(25,24,"OldPassword")," "),n.xp6(4),n.Q6J("ngModel",e.dataForm.pwd)("ngModelOptions",n.DdM(32,p)),n.xp6(3),n.hij("",n.lcZ(32,26,"NewPassword")," "),n.xp6(4),n.Q6J("ngModel",e.dataForm.newpwd)("ngModelOptions",n.DdM(33,p)),n.xp6(3),n.hij("",n.lcZ(39,28,"ConfirmPassword")," "),n.xp6(4),n.Tol(e.dataForm.newpwd&&e.dataForm.newpwd2?e.dataForm.newpwd==e.dataForm.newpwd2?"is-valid":"is-invalid":""),n.Q6J("ngModel",e.dataForm.newpwd2)("ngModelOptions",n.DdM(34,p)),n.xp6(1),n.Q6J("ngIf",e.response),n.xp6(3),n.Oqu(n.lcZ(47,30,"SetNewPassword")))},dependencies:[f.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.wO,i.nD,i.On,i.F,d.YG,d.Sm,d.W2,d.Gu,d.gu,d.sr,o.X$],styles:["ion-header[_ngcontent-%COMP%]{box-shadow:none}ion-header[_ngcontent-%COMP%]:after{display:none}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{box-shadow:none}.container-form[_ngcontent-%COMP%]{max-width:420px;padding:0 1rem;margin:auto}.container-form[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:60px}.container-form[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin:1rem 0 2rem;font-size:32px;font-weight:700;line-height:40px}.container-form[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{color:#1f1f39;font-size:14px}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{text-align:center}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#858597}.container-form[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3243c7;cursor:pointer}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{margin-bottom:5px;color:#333}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff3131}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > select[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;color:#fff;background:#3243C7;background:linear-gradient(90deg,#6D42E7 4.11%,#EA5FC1 100%);border:0;outline:none;box-shadow:none}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .custom-control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:sub}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3243c7;cursor:pointer}form[_ngcontent-%COMP%]   .for-got-pwd[_ngcontent-%COMP%]{margin-top:-.5rem;text-align:right}"]}),m})()},9074:(P,h,r)=>{r.d(h,{V:()=>i});var u=r(6814),C=r(6223),g=r(3536),n=r(5470),d=r(2630),f=r(5879);let i=(()=>{var o;class _{}return(o=_).\u0275fac=function(O){return new(O||o)},o.\u0275mod=f.oAB({type:o}),o.\u0275inj=f.cJS({imports:[u.ez,C.u5,g.Pc,n.Z,d.L,n.Z,d.L]}),_})()}}]);