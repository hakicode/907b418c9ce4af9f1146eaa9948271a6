"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5854],{7308:(v,c,t)=>{t.d(c,{s:()=>d});const d={Digit1:49,Digit2:50,Digit3:51,Digit4:52,Digit5:53,Digit6:54,Digit7:55,Digit8:56,Digit9:57,Digit0:48,KeyA:65,KeyB:66,KeyC:67,KeyD:68,KeyE:69,KeyF:70,KeyG:71,KeyH:72,KeyI:73,KeyJ:74,KeyK:75,KeyL:76,KeyM:77,KeyN:78,KeyO:79,KeyP:80,KeyQ:81,KeyR:82,KeyS:83,KeyT:84,KeyU:85,KeyV:86,KeyW:87,KeyX:88,KeyY:89,KeyZ:90,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,Insert:45,Delete:46,Home:36,End:35,PageUp:33,PageDown:34,ArrowUp:38,ArrowDown:40,ArrowLeft:37,ArrowRight:39,Escape:27,Tab:9,Backspace:8,Enter:13,Space:32}},9391:(v,c,t)=>{t.r(c),t.d(c,{PreviewPageModule:()=>x});var d=t(6814),P=t(95),l=t(3536),s=t(4487),h=t(5861),f=t(644),g=t(1690),p=t(4981),y=t(4459),e=t(9468);const m=[{path:"",component:(()=>{var n;class a{constructor(i,o){this.router=i,this.activatedRoute=o,this.slideIdx=0,this.slideTotal=0,this.pageBack=()=>{this.slideIdx>0&&(this.slideIdx--,this.renderSlide())},this.pageNext=()=>{this.slideIdx<this.slideTotal-1&&(this.slideIdx++,this.renderSlide())}}ngOnInit(){this.slideIdx=parseInt(this.activatedRoute.snapshot.queryParamMap.get("num")||"")||0,p.icdt.container="#mainContainer",p.icdt.svg="#mainSvg",(0,h.Z)(function*(){p.icdt.config=yield(0,y.H0)()})()}ngAfterViewInit(){setTimeout(()=>{(0,f.qz)({callback:i=>{console.log("loadData",i),g.$.data=i||{},g.$.changeSlide=(o,u,M,C)=>{this.slideIdx=M,this.slideTotal=C},this.slideTotal=g.$.slideTotal,this.renderSlide()}})},600)}renderSlide(){g.$.runSlide(this.slideIdx)}}return(n=a).\u0275fac=function(i){return new(i||n)(e.Y36(s.F0),e.Y36(s.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-preview"]],decls:22,vars:5,consts:[["scroll-x","false","scroll-y","false",3,"fullscreen"],[1,"container-grid","grid-column"],[1,"container-head","container-top"],[1,"container-body","grid-grow"],[1,"container-grid","grid-row"],[1,"container-left"],[1,"container-center"],[1,"grid-grow"],[1,"main-container",2,"overflow","auto"],["scroll-x","false","scroll-y","false"],["id","mainContainer",1,"svg-box"],["id","mainSvg","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"viewer"],[1,"container-bottom"],[1,"group-action-paging"],["fill","clear",1,"ion-no-margin","ion-no-padding",3,"disabled","click"],["src","../../../assets/icon-png/Back.png"],["src","../../../assets/icon-png/Next.png"],[1,"container-right"]],template:function(i,o){1&i&&(e.TgZ(0,"ion-content",0)(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div",3)(4,"div",4),e._UZ(5,"div",5),e.TgZ(6,"div",6)(7,"div",1)(8,"div",7)(9,"div",8)(10,"ion-content",9)(11,"div",10),e.O4$(),e._UZ(12,"svg",11),e.qZA()()()(),e.kcU(),e.TgZ(13,"div",12)(14,"div",13)(15,"ion-button",14),e.NdJ("click",function(){return o.pageBack()}),e._UZ(16,"ion-img",15),e.qZA(),e.TgZ(17,"span"),e._uU(18),e.qZA(),e.TgZ(19,"ion-button",14),e.NdJ("click",function(){return o.pageNext()}),e._UZ(20,"ion-img",16),e.qZA()()()()(),e._UZ(21,"div",17),e.qZA()()()()),2&i&&(e.Q6J("fullscreen",!0),e.xp6(15),e.Q6J("disabled",o.slideIdx<1),e.xp6(3),e.AsE("",o.slideIdx+1,"/",o.slideTotal,""),e.xp6(1),e.Q6J("disabled",o.slideIdx>=o.slideTotal-1))},dependencies:[l.YG,l.W2,l.Xz],styles:[".container-grid[_ngcontent-%COMP%]{display:flex;width:100%;height:100%}.container-grid.grid-row[_ngcontent-%COMP%]{flex-flow:row}.container-grid.grid-column[_ngcontent-%COMP%]{flex-flow:column}.container-grid[_ngcontent-%COMP%]   .grid-grow[_ngcontent-%COMP%]{flex-grow:1}.container-head[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:0 2px 2px #0000001a}.container-body[_ngcontent-%COMP%]{position:relative;z-index:1}.container-body[_ngcontent-%COMP%]   .container-left[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:2px 0 2px #0000001a}.container-body[_ngcontent-%COMP%]   .container-right[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:-2px 0 2px #0000001a}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]{position:relative;z-index:1;flex:auto;width:calc(100% - 480px)}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]   .container-bottom[_ngcontent-%COMP%]{position:relative;z-index:2}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;z-index:1;-webkit-user-select:none;user-select:none;background-color:#fafafa}.group-action-paging[_ngcontent-%COMP%]{position:absolute;bottom:.5rem;right:1rem;line-height:0;-webkit-user-select:none;user-select:none}.group-action-paging[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;padding:0 1rem;vertical-align:middle;font-size:18px;color:#fab11d}.group-action-paging[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{vertical-align:middle}.group-action-paging[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:34px}.svg-box[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));display:flex;align-items:center;justify-content:center}.svg-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:block;width:100%;height:100%;max-width:100%;max-height:100%;margin:auto;background:#fff}"]}),a})()}];let w=(()=>{var n;class a{}return(n=a).\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.Bz.forChild(m),s.Bz]}),a})(),x=(()=>{var n;class a{}return(n=a).\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,P.u5,l.Pc,w]}),a})()}}]);