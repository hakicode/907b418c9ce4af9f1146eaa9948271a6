"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9391],{9391:(m,p,t)=>{t.r(p),t.d(p,{PreviewPageModule:()=>C});var l=t(6814),f=t(95),d=t(3536),v=t(5470),i=t(4487),u=t(5861),o=t(644),c=t(1690),P=t(4981),M=t(4459),e=t(9468);const y=[{path:"",component:(()=>{var n;class s{constructor(r,a){this.router=r,this.activatedRoute=a,this.slideIdx=0,this.slideTotal=0,this.pageBack=()=>{this.slideIdx>0&&(this.slideIdx--,this.renderSlide())},this.pageNext=()=>{this.slideIdx<this.slideTotal-1&&(this.slideIdx++,this.renderSlide())}}ngOnInit(){this.slideIdx=parseInt(this.activatedRoute.snapshot.queryParamMap.get("num")||"")||0,P.icdt.container="#mainContainer",P.icdt.svg="#mainSvg",(0,u.Z)(function*(){P.icdt.config=yield(0,M.H0)()})()}ngAfterViewInit(){setTimeout(()=>{(0,o.qz)({callback:r=>{console.log("loadData",r),c.$.data=r||{},c.$.changeSlide=(a,h,w,O)=>{this.slideIdx=w,this.slideTotal=O},this.slideTotal=c.$.slideTotal,this.renderSlide()}})},600)}renderSlide(){c.$.runSlide(this.slideIdx)}}return(n=s).\u0275fac=function(r){return new(r||n)(e.Y36(i.F0),e.Y36(i.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-preview"]],decls:22,vars:5,consts:[["scroll-x","false","scroll-y","false",3,"fullscreen"],[1,"container-grid","grid-column"],[1,"container-head","container-top"],[1,"container-body","grid-grow"],[1,"container-grid","grid-row"],[1,"container-left"],[1,"container-center"],[1,"grid-grow"],[1,"main-container",2,"overflow","auto"],["scroll-x","false","scroll-y","false"],["id","mainContainer",1,"svg-box"],["id","mainSvg",1,"viewer"],[1,"container-bottom"],[1,"group-action-paging"],["fill","clear",1,"ion-no-margin","ion-no-padding",3,"disabled","click"],["src","../../../assets/icon-png/Back.png"],["src","../../../assets/icon-png/Next.png"],[1,"container-right"]],template:function(r,a){1&r&&(e.TgZ(0,"ion-content",0)(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div",3)(4,"div",4),e._UZ(5,"div",5),e.TgZ(6,"div",6)(7,"div",1)(8,"div",7)(9,"div",8)(10,"ion-content",9)(11,"div",10),e.O4$(),e._UZ(12,"svg",11),e.qZA()()()(),e.kcU(),e.TgZ(13,"div",12)(14,"div",13)(15,"ion-button",14),e.NdJ("click",function(){return a.pageBack()}),e._UZ(16,"ion-img",15),e.qZA(),e.TgZ(17,"span"),e._uU(18),e.qZA(),e.TgZ(19,"ion-button",14),e.NdJ("click",function(){return a.pageNext()}),e._UZ(20,"ion-img",16),e.qZA()()()()(),e._UZ(21,"div",17),e.qZA()()()()),2&r&&(e.Q6J("fullscreen",!0),e.xp6(15),e.Q6J("disabled",a.slideIdx<1),e.xp6(3),e.AsE("",a.slideIdx+1,"/",a.slideTotal,""),e.xp6(1),e.Q6J("disabled",a.slideIdx>=a.slideTotal-1))},dependencies:[d.YG,d.W2,d.Xz],styles:[".container-grid[_ngcontent-%COMP%]{display:flex;width:100%;height:100%}.container-grid.grid-row[_ngcontent-%COMP%]{flex-flow:row}.container-grid.grid-column[_ngcontent-%COMP%]{flex-flow:column}.container-grid[_ngcontent-%COMP%]   .grid-grow[_ngcontent-%COMP%]{flex-grow:1}.container-head[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:0 2px 2px #0000001a}.container-body[_ngcontent-%COMP%]{position:relative;z-index:1}.container-body[_ngcontent-%COMP%]   .container-left[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:2px 0 2px #0000001a}.container-body[_ngcontent-%COMP%]   .container-right[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:-2px 0 2px #0000001a}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]{position:relative;z-index:1;flex:auto;width:calc(100% - 480px)}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]   .container-bottom[_ngcontent-%COMP%]{position:relative;z-index:2}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;z-index:1;-webkit-user-select:none;user-select:none;background-color:#fafafa}.group-action-paging[_ngcontent-%COMP%]{position:absolute;bottom:.5rem;right:1rem;line-height:0;-webkit-user-select:none;user-select:none}.group-action-paging[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;padding:0 1rem;vertical-align:middle;font-size:18px;color:#fab11d}.group-action-paging[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{vertical-align:middle}.group-action-paging[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:34px}.svg-box[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));display:flex;align-items:center;justify-content:center}.svg-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:block;max-width:100%;max-height:100%;margin:auto;background:#fff}"]}),s})()}];let x=(()=>{var n;class s{}return(n=s).\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[i.Bz.forChild(y),i.Bz]}),s})(),C=(()=>{var n;class s{}return(n=s).\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,f.u5,d.Pc,v.Z,x]}),s})()},5470:(m,p,t)=>{t.d(p,{Z:()=>v,y:()=>d});var l=t(9468),f=t(6593);let d=(()=>{class i{constructor(o){this.sanitizer=o}transform(o,c){switch(c){case"html":return this.sanitizer.bypassSecurityTrustHtml(o);case"style":return this.sanitizer.bypassSecurityTrustStyle(o);case"script":return this.sanitizer.bypassSecurityTrustScript(o);case"url":return this.sanitizer.bypassSecurityTrustUrl(o);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(o);default:throw new Error(`SafePipe unable to bypass security for invalid type: ${c}`)}}}return i.\u0275fac=function(o){return new(o||i)(l.Y36(f.H7,16))},i.\u0275pipe=l.Yjl({name:"safe",type:i,pure:!0}),i})(),v=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=l.oAB({type:i}),i.\u0275inj=l.cJS({}),i})()}}]);