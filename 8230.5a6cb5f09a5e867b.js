"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8230],{1062:(M,p,r)=>{r.d(p,{Z:()=>_,m:()=>n});var s=r(5861),u=r(2014);const c=new u.K({name:"_localDataDB",driverOrder:[u.N.IndexedDB,u.N.LocalStorage]}),g="ui-config",_=function(){var f=(0,s.Z)(function*(t){yield c.create();try{var a=(yield c.get(g))||{};"function"==typeof t.callback&&t.callback(a)}catch(h){"function"==typeof t.callback&&t.callback(null),console.error(h)}});return function(a){return f.apply(this,arguments)}}(),n=function(){var f=(0,s.Z)(function*(t){yield c.create(),t.params=t.params||{};try{var a=(yield c.get(g))||{};Object.assign(a,t.params),yield c.set(g,a),"function"==typeof t.callback&&t.callback(a)}catch(h){"function"==typeof t.callback&&t.callback(null),console.error(h)}});return function(a){return f.apply(this,arguments)}}()},8230:(M,p,r)=>{r.r(p),r.d(p,{Editor2PageModule:()=>w});var s=r(6814),u=r(95),c=r(3536),g=r(4487),_=r(1062),n=r(9468);function f(e,o){1&e&&n._UZ(0,"div",26)}function t(e,o){1&e&&n._UZ(0,"ion-icon",27)}function a(e,o){1&e&&n._UZ(0,"ion-icon",28)}function h(e,o){1&e&&n._UZ(0,"div",26)}function m(e,o){1&e&&n._UZ(0,"ion-icon",28)}function P(e,o){1&e&&n._UZ(0,"ion-icon",27)}const x=[{path:"",component:(()=>{var e;class o{constructor(){this.isMenuLeft=!0,this.isMenuRight=!1,this.toggleMenuLeft=i=>{this.isMenuLeft=!this.isMenuLeft},this.toggleMenuRight=i=>{this.isMenuRight=!this.isMenuRight}}ngOnInit(){(0,_.Z)({callback:i=>{null!=i.isMenuLeft&&(this.isMenuLeft=i.isMenuLeft),null!=i.isMenuRight&&(this.isMenuRight=i.isMenuRight)}})}}return(e=o).\u0275fac=function(i){return new(i||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-editor2"]],decls:33,vars:7,consts:[[1,"ion-page"],["scroll-x","false","scroll-y","false",3,"fullscreen"],[1,"container-grid","grid-column"],[1,"container-head","container-top"],[2,"height","80px"],[1,"container-body","grid-grow"],[1,"container-grid","grid-row"],[1,"container-left"],["style","width: 280px;",4,"ngIf"],[2,"position","absolute","top","50%","right","-1.5rem"],["color","dark","fill","clear",1,"ion-no-padding","ion-no-margin",3,"click"],["name","chevron-back-outline",4,"ngIf"],["name","chevron-forward-outline",4,"ngIf"],[1,"container-center"],[1,"grid-grow"],[1,"main-container"],["scroll-x","false","scroll-y","false"],["id","svgMain","viewBox","-500 -500 2280 1220","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"editor",2,"width","100%","height","100%"],["id","410240311","fill","rgba(159,177,249,1)","x","0","y","0","width","1280","height","720","stroke","rgba(0,0,0,0)"],["id","299921594","x","40","y","250","width","1200","height","220","fill","rgba(0,0,0,0)","stroke","rgba(0,0,0,0)"],["xmlns","http://www.w3.org/1999/xhtml",2,"width","100%","height","100%","display","block"],[2,"font-family","Roboto"],[2,"font-size","200px"],[1,"container-bottom"],[1,"container-right"],[2,"position","absolute","top","50%","left","-1.5rem"],[2,"width","280px"],["name","chevron-back-outline"],["name","chevron-forward-outline"]],template:function(i,l){1&i&&(n.TgZ(0,"div",0)(1,"ion-content",1)(2,"div",2)(3,"div",3),n._UZ(4,"div",4),n.qZA(),n.TgZ(5,"div",5)(6,"div",6)(7,"div",7),n.YNc(8,f,1,0,"div",8),n.TgZ(9,"div",9)(10,"ion-button",10),n.NdJ("click",function(v){return l.toggleMenuLeft(v)}),n.YNc(11,t,1,0,"ion-icon",11),n.YNc(12,a,1,0,"ion-icon",12),n.qZA()()(),n.TgZ(13,"div",13)(14,"div",2)(15,"div",14)(16,"div",15)(17,"ion-content",16),n.O4$(),n.TgZ(18,"svg",17),n._UZ(19,"rect",18),n.TgZ(20,"foreignObject",19),n.kcU(),n.TgZ(21,"div",20)(22,"p")(23,"span",21)(24,"span",22),n._uU(25,"0 0 1280 720"),n.qZA()()()()()()()()(),n._UZ(26,"div",23),n.qZA()(),n.TgZ(27,"div",24),n.YNc(28,h,1,0,"div",8),n.TgZ(29,"div",25)(30,"ion-button",10),n.NdJ("click",function(v){return l.toggleMenuRight(v)}),n.YNc(31,m,1,0,"ion-icon",12),n.YNc(32,P,1,0,"ion-icon",11),n.qZA()()()()()()()()),2&i&&(n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(7),n.Q6J("ngIf",l.isMenuLeft),n.xp6(3),n.Q6J("ngIf",l.isMenuLeft),n.xp6(1),n.Q6J("ngIf",!l.isMenuLeft),n.xp6(16),n.Q6J("ngIf",l.isMenuRight),n.xp6(3),n.Q6J("ngIf",l.isMenuRight),n.xp6(1),n.Q6J("ngIf",!l.isMenuRight))},dependencies:[s.O5,c.YG,c.W2,c.gu],styles:[".container-grid[_ngcontent-%COMP%]{display:flex;width:100%;height:100%}.container-grid.grid-row[_ngcontent-%COMP%]{flex-flow:row}.container-grid.grid-column[_ngcontent-%COMP%]{flex-flow:column}.container-grid[_ngcontent-%COMP%]   .grid-grow[_ngcontent-%COMP%]{flex-grow:1}.container-head[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:0 2px 2px #0000001a}.container-body[_ngcontent-%COMP%]{position:relative;z-index:1}.container-body[_ngcontent-%COMP%]   .container-left[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:2px 0 2px #0000001a}.container-body[_ngcontent-%COMP%]   .container-right[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:-2px 0 2px #0000001a}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]{position:relative;z-index:1;flex:auto;width:calc(100% - 480px)}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]   .container-bottom[_ngcontent-%COMP%]{position:relative;z-index:2}.main-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;z-index:1;-webkit-user-select:none;user-select:none;background-color:#f5f5f5}"]}),o})()}];let b=(()=>{var e;class o{}return(e=o).\u0275fac=function(i){return new(i||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[g.Bz.forChild(x),g.Bz]}),o})(),w=(()=>{var e;class o{}return(e=o).\u0275fac=function(i){return new(i||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[s.ez,u.u5,c.Pc,b]}),o})()}}]);