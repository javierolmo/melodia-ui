!function(){var e;function t(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}(self.webpackChunkmelodia_ui=self.webpackChunkmelodia_ui||[]).push([[279],{54779:function(e,t,n){"use strict";n.r(t),n.d(t,{ComposicionModule:function(){return I}});var o=n(38583),s=n(99763),a=n(37716),c=function(){var e=function(){function e(){i(this,e)}return r(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["ngx-composicion"]],decls:1,vars:0,template:function(e,t){1&e&&a._UZ(0,"router-outlet")},directives:[s.lC],encapsulation:2}),e}(),u=n(55477),l=function(){function e(){i(this,e),this.authors=[],this.instrumentos=[]}return r(e,[{key:"validate",value:function(){return void 0===this.movementTitle?"El t\xedtulo no debe estar vac\xedo":this.movementTitle.length<3?"El t\xedtulo debe tener al menos 3 caracteres":this.movementTitle.length>255?"El t\xedtulo no debe tener m\xe1s de 255 caracteres":void 0===this.measures?"El n\xfamero de compases es obligatorio":this.measures>300?"El n\xfamero de compases no debe exceder de 300":this.measures<30?"El n\xfamero de compases no debe ser inferior a 30":void 0}}]),e}(),d=n(92340),f=n(91841),p=function(){var e=function(){function e(t){i(this,e),this.httpClient=t}return r(e,[{key:"getAvailableInstruments",value:function(){return this.httpClient.get("".concat(d.N.apiUrl,"/api/util/available-instruments"))}},{key:"getAvailableMeasures",value:function(){return this.httpClient.get("".concat(d.N.apiUrl,"/api/util/available-measures"))}},{key:"getAvailableTonalities",value:function(){return this.httpClient.get("".concat(d.N.apiUrl,"/api/util/available-tonalities"))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.LFG(f.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e}(),h=n(3679),g=n(13030),m=n(91e3),v=function(){var e=function(){function e(t){i(this,e),this.httpClient=t}return r(e,[{key:"getInstruments",value:function(){return this.httpClient.get("".concat(d.N.apiUrl,"/api/instruments"))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.LFG(f.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e}(),b=function(){var e=function(){function e(t){i(this,e),this.httpClient=t}return r(e,[{key:"getTonalities",value:function(){return this.httpClient.get("".concat(d.N.apiUrl,"/api/tonalities"))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.LFG(f.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e}(),Z=function(){var e=function(){function e(t){i(this,e),this.httpClient=t}return r(e,[{key:"getMeasures",value:function(){return this.httpClient.get("".concat(d.N.apiUrl,"/api/measures"))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.LFG(f.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e}(),y=n(86665),T=n(88002),A=function(){var e=function(){function e(t){i(this,e),this.httpClient=t}return r(e,[{key:"getRandomGeneticSpecs",value:function(e){return this.httpClient.get("".concat(d.N.apiUrl,"/api/specs/genetic-specs/random?requesterId=").concat(e)).pipe((0,T.U)(function(e){return Object.assign(new l,e)}))}},{key:"postGeneticSpecs",value:function(e){return this.httpClient.post("".concat(d.N.apiUrl,"/api/specs/genetic-specs"),e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.LFG(f.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e}();function q(e,t){if(1&e&&(a.TgZ(0,"nb-option",17),a._uU(1),a.qZA()),2&e){var n=t.$implicit;a.Q6J("value",n),a.xp6(1),a.Oqu(n.name)}}function k(e,t){if(1&e&&(a.TgZ(0,"nb-option",17),a._uU(1),a.qZA()),2&e){var n=t.$implicit;a.Q6J("value",n),a.xp6(1),a.Oqu(n.traditionalName)}}function w(e,t){if(1&e&&(a.TgZ(0,"nb-option",17),a._uU(1),a.qZA()),2&e){var n=t.$implicit;a.Q6J("value",n),a.xp6(1),a.AsE("",n.numerador,"/",n.denominador,"")}}var S,x,_=function(){var e=function(){function e(t,n,o,r,s,a,c,u,d){var f=this;i(this,e),this.compositionService=t,this.formBuilder=n,this.toastrService=o,this.userService=r,this.instrumentService=s,this.tonalityService=a,this.measureService=c,this.authService=u,this.specsService=d,this.specs=new l,this.authService.onTokenChange().subscribe(function(e){if(e.isValid()){var t=e.getPayload();f.specs.requesterId=t.id,f.specs.authors=[t.name+" "+t.surname]}})}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.instrumentService.getInstruments().subscribe(function(t){return e.availableInstruments=t}),this.measureService.getMeasures().subscribe(function(t){return e.availableMeasures=t}),this.tonalityService.getTonalities().subscribe(function(t){return e.availableTonalities=t})}},{key:"submit",value:function(){var e=this,t=this.specs.validate();void 0===t?this.specsService.postGeneticSpecs(this.specs).subscribe(function(t){e.toastrService.success("Tu composici\xf3n se ha puesto a la cola. Dentro de poco estar\xe1 disponible","SUCCESS!")},function(t){e.toastrService.danger(t.error.message,"ERROR")}):this.toastrService.warning(t,"Formulario inv\xe1lido")}},{key:"randomize",value:function(){return e=this,n=regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.specsService.getRandomGeneticSpecs(this.specs.requesterId).subscribe(function(e){return t.specs=e},function(e){return t.toastrService.danger(e.error.message,"ERROR")});case 1:case"end":return e.stop()}},e,this)}),new((t=void 0)||(t=Promise))(function(i,o){function r(e){try{a(n.next(e))}catch(t){o(t)}}function s(e){try{a(n.throw(e))}catch(t){o(t)}}function a(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(r,s)}a((n=n.apply(e,[])).next())});var e,t,n}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Y36(p),a.Y36(h.qu),a.Y36(g.quB),a.Y36(m.mt),a.Y36(v),a.Y36(b),a.Y36(Z),a.Y36(y._o),a.Y36(A))},e.\u0275cmp=a.Xpm({type:e,selectors:[["ngx-composition-request-form"]],decls:37,vars:6,consts:[[1,"row","my-4"],[1,"col","pl-4"],["for","title"],["id","title","type","text","nbInput","","fullWidth","","placeholder","Nombre de la composici\xf3n",3,"ngModel","ngModelChange"],["for","author"],["id","author","type","text","nbInput","","fullWidth","","placeholder","Autor de la obra","disabled","",3,"ngModel","ngModelChange"],["for","measureNumber"],["id","measureNumber","type","text","nbInput","","placeholder","N\xfamero de compases","fullWidth","",3,"ngModel","ngModelChange"],["for","instruments"],["id","instruments","multiple","","formControlName","instrumentos","placeholder","Instrumentos","fullWidth",""],[3,"value",4,"ngFor","ngForOf"],["for","tonality"],["id","tonality","placeholder","Tonalidad","fullWidth",""],["for","measure"],["id","measure","placeholder","Comp\xe1s","fullWidth",""],["nbButton","","status","basic",1,"mx-3",3,"click"],["icon","flip-outline"],[3,"value"]],template:function(e,t){1&e&&(a.TgZ(0,"nb-card"),a.TgZ(1,"nb-card-header"),a._uU(2,"Especificaciones"),a.qZA(),a.TgZ(3,"nb-card-body"),a.TgZ(4,"div",0),a.TgZ(5,"div",1),a.TgZ(6,"label",2),a._uU(7,"T\xedtulo"),a.qZA(),a.TgZ(8,"input",3),a.NdJ("ngModelChange",function(e){return t.specs.movementTitle=e}),a.qZA(),a.qZA(),a.TgZ(9,"div",1),a.TgZ(10,"label",4),a._uU(11,"Autor"),a.qZA(),a.TgZ(12,"input",5),a.NdJ("ngModelChange",function(e){return t.specs.authors[0]=e}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(13,"div",0),a.TgZ(14,"div",1),a.TgZ(15,"label",6),a._uU(16,"Compases"),a.qZA(),a.TgZ(17,"input",7),a.NdJ("ngModelChange",function(e){return t.specs.measures=e}),a.qZA(),a.qZA(),a.TgZ(18,"div",1),a.TgZ(19,"label",8),a._uU(20,"Instrumentos"),a.qZA(),a.TgZ(21,"nb-select",9),a.YNc(22,q,2,2,"nb-option",10),a.qZA(),a.qZA(),a.TgZ(23,"div",1),a.TgZ(24,"label",11),a._uU(25,"Tonalidad"),a.qZA(),a.TgZ(26,"nb-select",12),a.YNc(27,k,2,2,"nb-option",10),a.qZA(),a.qZA(),a.TgZ(28,"div",1),a.TgZ(29,"label",13),a._uU(30,"Comp\xe1s"),a.qZA(),a.TgZ(31,"nb-select",14),a.YNc(32,w,2,3,"nb-option",10),a.qZA(),a.qZA(),a.qZA(),a.TgZ(33,"button",15),a.NdJ("click",function(){return t.submit()}),a._uU(34,"Componer!"),a.qZA(),a.TgZ(35,"button",15),a.NdJ("click",function(){return t.randomize()}),a._UZ(36,"nb-icon",16),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(8),a.Q6J("ngModel",t.specs.movementTitle),a.xp6(4),a.Q6J("ngModel",t.specs.authors[0]),a.xp6(5),a.Q6J("ngModel",t.specs.measures),a.xp6(5),a.Q6J("ngForOf",t.availableInstruments),a.xp6(5),a.Q6J("ngForOf",t.availableTonalities),a.xp6(5),a.Q6J("ngForOf",t.availableMeasures))},directives:[g.Asz,g.ndF,g.yKW,g.h8i,h.Fj,h.JJ,h.On,g.rs,h.u,o.sg,g.DPz,g.fMN,g.q51],styles:[""]}),e}(),U=function(){var e=function(){function e(){i(this,e)}return r(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["ngx-genetic"]],decls:1,vars:0,template:function(e,t){1&e&&a._UZ(0,"ngx-composition-request-form")},directives:[_],styles:[""]}),e}(),C=function(){var e=function(){function e(){i(this,e)}return r(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["ngx-introduccion"]],decls:2,vars:0,template:function(e,t){1&e&&(a.TgZ(0,"p"),a._uU(1,"introduccion works!"),a.qZA())},styles:[""]}),e}(),M=function(){var e=function(){function e(){i(this,e)}return r(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["ngx-generar"]],decls:2,vars:0,template:function(e,t){1&e&&(a.TgZ(0,"p"),a._uU(1,"generar works!"),a.qZA())},styles:[""]}),e}(),N=function(){var e=function(){function e(){i(this,e)}return r(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["ngx-entrenar"]],decls:2,vars:0,template:function(e,t){1&e&&(a.TgZ(0,"p"),a._uU(1,"entrenar works!"),a.qZA())},styles:[""]}),e}(),O=[{path:"",component:c,children:[{path:"genetic",component:U},{path:"neural-network",component:(S=function(){function e(){i(this,e)}return r(e,[{key:"ngOnInit",value:function(){}}]),e}(),S.\u0275fac=function(e){return new(e||S)},S.\u0275cmp=a.Xpm({type:S,selectors:[["ngx-neuralnetwork"]],decls:9,vars:0,consts:[["tabTitle","Introducci\xf3n"],["tabTitle","Generar"],["tabTitle","Entrenar"]],template:function(e,t){1&e&&(a.TgZ(0,"nb-card"),a.TgZ(1,"nb-card-body"),a.TgZ(2,"nb-tabset"),a.TgZ(3,"nb-tab",0),a._UZ(4,"ngx-introduccion"),a.qZA(),a.TgZ(5,"nb-tab",1),a._UZ(6,"ngx-generar"),a.qZA(),a.TgZ(7,"nb-tab",2),a._UZ(8,"ngx-entrenar"),a.qZA(),a.qZA(),a.qZA(),a.qZA())},directives:[g.Asz,g.yKW,g.kyn,g.TR4,C,M,N],styles:[""]}),S)},{path:"**",component:u.w}]}],J=function(){var e=function e(){i(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[s.Bz.forChild(O)],s.Bz]}),e}(),I=((x=function e(){i(this,e)}).\u0275fac=function(e){return new(e||x)},x.\u0275mod=a.oAB({type:x}),x.\u0275inj=a.cJS({providers:[p,v,b,Z,A],imports:[[o.ez,J,h.UX,g.nKr,g.IIj,g.T2N,g.zyh,h.u5,g.LW9,g.EoG,g.KdK]]}),x)},44519:function(e,t,n){"use strict";n.r(t),n.d(t,{MiscellaneousModule:function(){return f}});var o,r,s=n(13030),a=n(10352),c=n(99763),u=n(37716),l=[{path:"",component:(o=function e(){i(this,e)},o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=u.Xpm({type:o,selectors:[["ngx-miscellaneous"]],decls:1,vars:0,template:function(e,t){1&e&&u._UZ(0,"router-outlet")},directives:[c.lC],encapsulation:2}),o),children:[{path:"404",component:n(55477).w}]}],d=function(){var e=function e(){i(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[c.Bz.forChild(l)],c.Bz]}),e}(),f=((r=function e(){i(this,e)}).\u0275fac=function(e){return new(e||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[[a.O,s.zyh,s.T2N,d]]}),r)},55477:function(e,t,n){"use strict";n.d(t,{w:function(){return a}});var o=n(37716),s=n(13030),a=function(){var e=function(){function e(t){i(this,e),this.menuService=t}return r(e,[{key:"goToHome",value:function(){this.menuService.navigateHome()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Y36(s.kkI))},e.\u0275cmp=o.Xpm({type:e,selectors:[["ngx-not-found"]],decls:11,vars:0,consts:[[1,"row"],[1,"col-md-12"],[1,"flex-centered","col-xl-4","col-lg-6","col-md-8","col-sm-12"],[1,"title"],[1,"sub-title"],["nbButton","","matRipple","","fullWidth","","type","button",1,"home-button",3,"click"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"nb-card"),o.TgZ(3,"nb-card-body"),o.TgZ(4,"div",2),o.TgZ(5,"h2",3),o._uU(6,"404 Page Not Found"),o.qZA(),o.TgZ(7,"small",4),o._uU(8,"The page you were looking for doesn't exist"),o.qZA(),o.TgZ(9,"button",5),o.NdJ("click",function(){return t.goToHome()}),o._uU(10," Take me home "),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA())},directives:[s.Asz,s.yKW,s.DPz],styles:[".flex-centered[_ngcontent-%COMP%]{margin:auto}nb-card-body[_ngcontent-%COMP%]{display:flex}.sub-title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{text-align:center}.sub-title[_ngcontent-%COMP%]{display:block;margin-bottom:3rem}.home-button[_ngcontent-%COMP%]{margin-bottom:2rem}"]}),e}()},70279:function(t,n,o){"use strict";o.r(n),o.d(n,{PagesModule:function(){return _}});var s=o(13030),a=o(99763),c=[{title:"General",group:!0},{title:"Home",icon:"home",link:"/pages/home",home:!0},{title:"Composici\xf3n",icon:"music-outline",children:[{title:"Gen\xe9tico",link:"/pages/composicion/genetic"},{title:"Red neuronal",link:"/pages/composicion/neural-network"}]},{title:"Mi repositorio",icon:"pantone-outline",link:"/pages/repositorio"},{title:"Administraci\xf3n",icon:"settings-outline",children:[{title:"Usuarios",link:"/pages/admin/users"},{title:"Logs",link:"/pages/admin/logs"}]},{title:"Cuenta",group:!0},{title:"Cerrar sesi\xf3n",icon:"log-out-outline",link:"/auth/logout"}],u=o(37716),l=o(6405),d=function(){var e=function e(){i(this,e),this.menu=c};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["ngx-pages"]],decls:3,vars:1,consts:[[3,"items"]],template:function(e,t){1&e&&(u.TgZ(0,"ngx-one-column-layout"),u._UZ(1,"nb-menu",0),u._UZ(2,"router-outlet"),u.qZA()),2&e&&(u.xp6(1),u.Q6J("items",t.menu))},directives:[l.s,s.mBz,a.lC],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}.nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),e}(),f=o(55477),p=o(92340),h=o(19418),g=o(38583);function m(e,t){if(1&e&&(u.TgZ(0,"ul"),u.TgZ(1,"li"),u._uU(2),u.qZA(),u.qZA()),2&e){var n=t.$implicit;u.xp6(2),u.Oqu(n)}}function v(e,t){if(1&e&&(u.TgZ(0,"div"),u.TgZ(1,"h6"),u._uU(2),u.qZA(),u.YNc(3,m,3,1,"ul",1),u._UZ(4,"hr"),u.qZA()),2&e){var n=t.$implicit;u.xp6(2),u.AsE("Versi\xf3n ",n.version," (",n.date,")"),u.xp6(1),u.Q6J("ngForOf",n.news)}}var b,Z=function(){var e=function(){function e(t,n){i(this,e),this.releaseService=t,this.toastrService=n,this.releases=[]}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.releaseService.getReleases().subscribe(function(t){return e.releases=t},function(t){return e.toastrService.danger("Could not load changelog")})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(h.T),u.Y36(s.quB))},e.\u0275cmp=u.Xpm({type:e,selectors:[["ngx-changelog"]],decls:5,vars:1,consts:[["size","giant"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(u.TgZ(0,"nb-card",0),u.TgZ(1,"nb-card-header"),u._uU(2,"Changelog"),u.qZA(),u.TgZ(3,"nb-card-body"),u.YNc(4,v,5,3,"div",1),u.qZA(),u.qZA()),2&e&&(u.xp6(4),u.Q6J("ngForOf",t.releases))},directives:[s.Asz,s.ndF,s.yKW,g.sg],styles:[""]}),e}(),y=function(){var t,n,o=function(){function e(){i(this,e),this.appname=p.N.appname,this.appversion=p.N.appversion}return r(e,[{key:"ngOnInit",value:function(){}}]),e}();return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=u.Xpm({type:o,selectors:[["ngx-home"]],decls:33,vars:1,consts:[[1,"row"],[1,"col-8"],[2,"font-size","large"],["href","https://jenetics.io/"],["src","/assets/images/scheme.svg","alt","logo",1,"w-100"],[1,"col-4"],["data",u.$Z9(e||(t=["/assets/images/favicon.svg"],n||(n=t.slice(0)),e=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})))),1,"w-100",2,"max-height","500px"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.TgZ(2,"nb-card"),u.TgZ(3,"nb-card-header"),u._uU(4,"INTRODUCCI\xd3N"),u.qZA(),u.TgZ(5,"nb-card-body"),u.TgZ(6,"p"),u.TgZ(7,"strong",2),u._uU(8),u.qZA(),u._uU(9," es un software de composici\xf3n musical elaborado como Proyecto de Fin de Grado en Ingenier\xeda Inform\xe1tica, UNED."),u.qZA(),u.TgZ(10,"p"),u._uU(11,"El objetivo principal es la implementaci\xf3n de un algoritmo evolutivo en un caso real. Para ello se ha utilizado la librer\xeda "),u.TgZ(12,"a",3),u._uU(13,"Jenetics"),u.qZA(),u._uU(14,", disponible en Java."),u.qZA(),u.TgZ(15,"p"),u._uU(16,'En la secci\xf3n "'),u.TgZ(17,"strong"),u._uU(18,"Composici\xf3n"),u.qZA(),u._uU(19,'" podr\xe1s rellenar un formulario de especificaciones para hacer una solicitud, que ser\xe1 recibida por el backend y posteriormente derivada al servicio de composici\xf3n, el responsable de atender la petici\xf3n y elaborar el resultado.'),u.qZA(),u.TgZ(20,"p"),u._uU(21,'Podr\xe1s ver los resultados de las composiciones una vez finalicen en la secci\xf3n "'),u.TgZ(22,"strong"),u._uU(23,"Mi repositorio"),u.qZA(),u._uU(24,'", donde podr\xe1s visualizar y descargar (en formatos .musicxml y .pdf)'),u.qZA(),u.qZA(),u.qZA(),u.TgZ(25,"nb-card"),u.TgZ(26,"nb-card-header"),u._uU(27,"Estructura"),u.qZA(),u.TgZ(28,"nb-card-body"),u._UZ(29,"img",4),u.qZA(),u.qZA(),u.qZA(),u.TgZ(30,"div",5),u._UZ(31,"object",6),u._UZ(32,"ngx-changelog"),u.qZA(),u.qZA()),2&e&&(u.xp6(8),u.Oqu(t.appname))},directives:[s.Asz,s.ndF,s.yKW,Z],styles:[""]}),o}(),T=o(75199),A=[{path:"",component:d,children:[{path:"home",component:y},{path:"miscellaneous",loadChildren:function(){return Promise.resolve().then(o.bind(o,44519)).then(function(e){return e.MiscellaneousModule})}},{path:"composicion",loadChildren:function(){return Promise.resolve().then(o.bind(o,54779)).then(function(e){return e.ComposicionModule})},canActivate:[T.a]},{path:"repositorio",loadChildren:function(){return Promise.resolve().then(o.bind(o,24157)).then(function(e){return e.RepositorioModule})},canActivate:[T.a]},{path:"profile",loadChildren:function(){return o.e(257).then(o.bind(o,86257)).then(function(e){return e.ProfileModule})},canActivate:[T.a]},{path:"admin",loadChildren:function(){return o.e(935).then(o.bind(o,75935)).then(function(e){return e.AdminModule})},canActivate:[T.a]},{path:"",redirectTo:"home",pathMatch:"full"},{path:"**",component:f.w}]}],q=function(){var e=function e(){i(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[a.Bz.forChild(A)],a.Bz]}),e}(),k=o(44519),w=o(24157),S=o(54779),x=o(10352),_=((b=function e(){i(this,e)}).\u0275fac=function(e){return new(e||b)},b.\u0275mod=u.oAB({type:b}),b.\u0275inj=u.cJS({imports:[[q,s.j5J,k.MiscellaneousModule,x.O,s.zyh,w.RepositorioModule,S.ComposicionModule,s.BW0]]}),b)},24157:function(e,n,o){"use strict";o.r(n),o.d(n,{RepositorioModule:function(){return S}});var s=o(38583),a=o(99763),c=o(92340),u=o(37716),l=o(13030),d=function(){var e=function(){function e(t){i(this,e),this.dialogRef=t}return r(e,[{key:"ngOnInit",value:function(){}},{key:"downloadMusicXML",value:function(){window.location.href="".concat(c.N.apiUrl,"/api/sheets/").concat(this.sheet.id,"/file/musicxml"),this.dialogRef.close()}},{key:"downloadPDF",value:function(){window.location.href="".concat(c.N.apiUrl,"/api/sheets/").concat(this.sheet.id,"/file/pdf"),this.dialogRef.close()}},{key:"close",value:function(){this.dialogRef.close()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(l.X4l))},e.\u0275cmp=u.Xpm({type:e,selectors:[["ngx-download-dialog"]],inputs:{sheet:"sheet"},decls:14,vars:2,consts:[[1,"my-4"],["fullWidth","","nbButton","","status","primary",3,"disabled","click"],["icon","download-outline"]],template:function(e,t){1&e&&(u.TgZ(0,"nb-card"),u.TgZ(1,"nb-card-header"),u._uU(2,"Descargar partitura"),u.qZA(),u.TgZ(3,"nb-card-body"),u.TgZ(4,"p"),u._uU(5,"Elige un formato:"),u.qZA(),u.TgZ(6,"div",0),u.TgZ(7,"button",1),u.NdJ("click",function(){return t.downloadMusicXML()}),u._UZ(8,"nb-icon",2),u._uU(9," MusicXML "),u.qZA(),u.qZA(),u.TgZ(10,"div",0),u.TgZ(11,"button",1),u.NdJ("click",function(){return t.downloadPDF()}),u._UZ(12,"nb-icon",2),u._uU(13," PDF "),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(7),u.Q6J("disabled",!t.sheet.xml),u.xp6(4),u.Q6J("disabled",!t.sheet.pdf))},directives:[l.Asz,l.ndF,l.yKW,l.DPz,l.fMN],styles:["nb-card[_ngcontent-%COMP%]{min-width:300px}"]}),e}(),f=o(57322),p=o(3679),h=o(86665),g=o(20945);function m(e,t){1&e&&(u.TgZ(0,"span"),u._UZ(1,"nb-icon",1),u.qZA())}function v(e,t){if(1&e){var n=u.EpF();u.TgZ(0,"span"),u._UZ(1,"nb-icon",2),u.TgZ(2,"button",3),u.NdJ("click",function(){u.CHM(n);var e=u.oxw();return e.retry(e.sheet.id)}),u._UZ(3,"nb-icon",4),u.qZA(),u.qZA()}}function b(e,t){1&e&&(u.TgZ(0,"span"),u._UZ(1,"em",5),u.qZA())}var Z=function(){var e=function(){function e(t,n){i(this,e),this.sheetService=t,this.toastrService=n}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.refresher=(0,g.F)(2e3).subscribe(function(t){return e.refresh()})}},{key:"retry",value:function(e){var t=this;this.sheetService.retry(this.sheet.id).subscribe(function(e){t.sheet.finished=!1,t.toastrService.success(e,"Tarea planificada")},function(e){t.toastrService.danger(e.error.message,"ERROR")})}},{key:"refresh",value:function(){var e=this;this.sheetService.getSheet(this.sheet.id).subscribe(function(t){t.finished&&(e.sheet=t,e.refresher.unsubscribe())})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(f.J),u.Y36(l.quB))},e.\u0275cmp=u.Xpm({type:e,selectors:[["ngx-status"]],inputs:{sheet:"sheet"},decls:3,vars:3,consts:[[4,"ngIf"],["status","success","icon","checkmark-outline"],["status","danger","icon","alert-triangle-outline"],["nbButton","","ghost","","shape","round","nbTooltip","Reintentar",1,"mx-2",3,"click"],["icon","sync-outline"],[1,"fas","fa-sync","fa-spin"]],template:function(e,t){1&e&&(u.YNc(0,m,2,0,"span",0),u.YNc(1,v,4,0,"span",0),u.YNc(2,b,2,0,"span",0)),2&e&&(u.Q6J("ngIf",t.sheet.finished&&t.sheet.pdf&&t.sheet.xml&&t.sheet.specs),u.xp6(1),u.Q6J("ngIf",t.sheet.finished&&(!t.sheet.pdf||!t.sheet.xml||!t.sheet.specs)),u.xp6(1),u.Q6J("ngIf",!t.sheet.finished))},directives:[s.O5,l.fMN,l.DPz,l.jNv],styles:[""]}),e}();function y(e,t){if(1&e){var n=u.EpF();u.TgZ(0,"nb-list-item",6),u.TgZ(1,"span",7),u._uU(2),u.qZA(),u.TgZ(3,"span",7),u._uU(4),u.qZA(),u._UZ(5,"ngx-status",8),u.TgZ(6,"nb-actions",9),u.TgZ(7,"nb-action",10),u.NdJ("click",function(){var e=u.CHM(n).$implicit,t=u.oxw();return e.pdf?t.openNewTab(e.id):null}),u.qZA(),u.TgZ(8,"nb-action",11),u.NdJ("click",function(){var e=u.CHM(n).$implicit;return u.oxw().openDownloadDialog(e)}),u.qZA(),u.TgZ(9,"nb-action",12),u.NdJ("click",function(){var e=u.CHM(n).$implicit;return u.oxw().deleteSheet(e.id)}),u.qZA(),u.qZA(),u.qZA()}if(2&e){var i=t.$implicit;u.xp6(2),u.Oqu(i.name),u.xp6(2),u.Oqu(i.date),u.xp6(1),u.Q6J("sheet",i),u.xp6(2),u.Q6J("disabled",!i.pdf)}}var T,A,q=[{path:"",component:(T=function(){function e(t,n,o,r,s,a){var c=this;i(this,e),this.sheetService=t,this.formBuilder=n,this.nbDialogService=o,this.toastrService=r,this.dialogService=s,this.authService=a,this.userId=null,this.sheets=[],this.filteredSheets=[],this.loading=!1,this.authService.onTokenChange().subscribe(function(e){e.isValid()&&(c.userId=e.getPayload().id)}),this.busquedaForm=n.group({name:""})}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.sheetService.getSheets(void 0,void 0,this.userId).subscribe(function(n){var i;e.sheets=n,e.loading=!1,(i=e.filteredSheets).push.apply(i,t(e.sheets))},function(t){e.toastrService.danger(t.error.message,"ERROR")})}},{key:"filterSheets",value:function(e){this.busquedaForm.valid&&(this.loading=!0,this.filteredSheets=this.sheets.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())}),this.loading=!1)}},{key:"openDownloadDialog",value:function(e){this.dialogService.open(d,{context:{sheet:e}})}},{key:"deleteSheet",value:function(e){var t=this;this.sheetService.deleteSheet(e).subscribe(function(e){t.showToast("Partitura eliminada con \xe9xito!","\xc9xito","top-right","success"),t.sheetService.getSheets().subscribe(function(e){t.sheets=e,t.filterSheets("")},function(e){t.toastrService.danger(e.error.message,"ERROR")}),t.filterSheets("")},function(e){t.toastrService.danger(e.error.message,"ERROR")})}},{key:"showToast",value:function(e,t,n,i){this.toastrService.show(e,t,{position:n,status:i})}},{key:"openNewTab",value:function(e){window.open("".concat(c.N.apiUrl,"/api/sheets/").concat(e,".pdf"),"_blank")}}]),e}(),T.\u0275fac=function(e){return new(e||T)(u.Y36(f.J),u.Y36(p.qu),u.Y36(l.Gln),u.Y36(l.quB),u.Y36(l.Gln),u.Y36(h._o))},T.\u0275cmp=u.Xpm({type:T,selectors:[["ngx-repositorio"]],decls:11,vars:5,consts:[[1,"pb-4"],[3,"formGroup","ngSubmit"],["nbInput","","formControlName","name","placeholder","Filtrar...",2,"width","300px",3,"keyup"],[1,"mx-5","text-secondary"],[3,"nbSpinner"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col"],[1,"col",3,"sheet"],["size","small","disabled","!sheet.finished",1,"ml-auto"],["icon","eye-outline",3,"disabled","click"],["icon","download-outline",3,"click"],["icon","trash-2-outline",3,"click"]],template:function(e,t){1&e&&(u.TgZ(0,"nb-card"),u.TgZ(1,"nb-card-header"),u._uU(2,"Repositorio"),u.qZA(),u.TgZ(3,"nb-card-body"),u.TgZ(4,"div",0),u.TgZ(5,"form",1),u.NdJ("ngSubmit",function(){return t.filterSheets(t.busquedaForm.value.name)}),u.TgZ(6,"input",2),u.NdJ("keyup",function(){return t.filterSheets(t.busquedaForm.value.name)}),u.qZA(),u.TgZ(7,"span",3),u._uU(8),u.qZA(),u.qZA(),u.qZA(),u.TgZ(9,"nb-list",4),u.YNc(10,y,10,4,"nb-list-item",5),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(5),u.Q6J("formGroup",t.busquedaForm),u.xp6(3),u.AsE("(",t.filteredSheets.length," resultados de ",t.sheets.length,")"),u.xp6(1),u.Q6J("nbSpinner",t.loading),u.xp6(1),u.Q6J("ngForOf",t.filteredSheets))},directives:[l.Asz,l.ndF,l.yKW,p._Y,p.JL,p.sg,l.h8i,p.Fj,p.JJ,p.u,l.zP_,l.Q7R,s.sg,l.qBV,Z,l.lYD,l.Bk3],styles:["mat-spinner[_ngcontent-%COMP%]{display:inline}nb-list[_ngcontent-%COMP%]{overflow:hidden}"]}),T)}],k=function(){var e=function e(){i(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[a.Bz.forChild(q)],a.Bz]}),e}(),w=o(73749),S=((A=function e(){i(this,e)}).\u0275fac=function(e){return new(e||A)},A.\u0275mod=u.oAB({type:A}),A.\u0275inj=u.cJS({providers:[],imports:[[s.ez,k,p.u5,p.UX,w.$,l.KdK,l.COg,l.zyh,l.j7H,l.uuI,l.MAY,l.HKp,l.T2N,l.rgH,l.spT,l.nKr]]}),A)}}])}();