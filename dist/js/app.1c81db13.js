(function(e){function t(t){for(var a,r,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,r=1;r<i.length;r++){var c=i[r];0!==s[c]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},s={app:0},n=[];function r(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4a0cd566"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(e){var t=[],i=s[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,a){i=s[e]=[t,a]}));t.push(i[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(e);var l=new Error;n=function(t){c.onerror=c.onload=null,clearTimeout(u);var i=s[e];if(0!==i){if(i){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,i[1](l)}s[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var m=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"1fac":function(e,t,i){"use strict";i("e86c")},"4ff3":function(e,t,i){"use strict";i("d3dc")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],r=(i("5c0b"),i("2877")),o={},c=Object(r["a"])(o,s,n,!1,null,null,null),l=c.exports,u=(i("d3b7"),i("3ca3"),i("ddb0"),i("8c4f")),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"music-wrapper"},[i("section",{staticClass:"board"},[i("div",{staticClass:"board__grid"},[e._m(0),e._m(1),0==e.active?i("div",{staticClass:"board__item"},[i("div",{staticClass:"board__notice"},[e._v(" Choose your track, make your remix and share. ")])]):e._e(),e._e(),e._e(),0==e.active?i("div",{staticClass:"board__item"},[i("div",{staticClass:"board-video",staticStyle:{"background-image":"url('images/video-1.jpg')"}},[e._m(4),i("img",{staticClass:"board-video__play",attrs:{src:"images/play.svg",alt:""}}),i("a",{staticClass:"board-video__btn btn",attrs:{href:"#"},on:{click:function(t){e.active=3,e.genreName="pop"}}},[e._v("MAKE YOUR REMIX")])])]):e._e(),e._e(),e._e(),0==e.active?i("div",{staticClass:"board__item"},[i("div",{staticClass:"board-video",staticStyle:{"background-image":"url('images/video-1.jpg')"}},[e._m(7),i("img",{staticClass:"board-video__play",attrs:{src:"images/play.svg",alt:""}}),i("a",{staticClass:"board-video__btn btn",attrs:{href:"#"},on:{click:function(t){e.active=3,e.genreName="pop"}}},[e._v("MAKE YOUR REMIX")])])]):e._e(),0==e.active?i("div",{staticClass:"board__item"},[i("div",{staticClass:"board-video",staticStyle:{"background-image":"url('images/video-1.jpg')"}},[e._m(8),i("img",{staticClass:"board-video__play",attrs:{src:"images/play.svg",alt:""}}),i("a",{staticClass:"board-video__btn btn",attrs:{href:"#"},on:{click:function(t){e.active=3,e.genreName="pop"}}},[e._v("MAKE YOUR REMIX")])])]):e._e(),0==e.active?i("div",{staticClass:"board__item"},[i("div",{staticClass:"board-video",staticStyle:{"background-image":"url('images/video-1.jpg')"}},[e._m(9),i("img",{staticClass:"board-video__play",attrs:{src:"images/play.svg",alt:""}}),i("a",{staticClass:"board-video__btn btn",attrs:{href:"#"},on:{click:function(t){e.active=3,e.genreName="pop"}}},[e._v("MAKE YOUR REMIX")])])]):e._e(),0==e.active?i("div",{staticClass:"board__item"},[e._m(10)]):e._e(),0==e.active?i("div",{staticClass:"board__item board__item--main"},[e._m(11)]):e._e()])]),e._e(),e.active>0?i("main",{staticClass:"remix-page",attrs:{role:"main"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"remix-page__inner"},[i("Player",{attrs:{"genre-name":e.genreName}}),i("br")],1)])]):e._e(),e.active>0?i("footer",{staticClass:"footer"},[i("div",{staticClass:"container"},[i("div",{staticClass:"footer__holder"},[i("div",{staticClass:"footer__controls"},[i("div",{staticClass:"footer__navigation"},[i("a",{staticClass:"footer__prev",attrs:{href:"#"}},[i("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M10 9V5L3 12L10 19V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 10 9Z",fill:"white","fill-opacity":"0.45"}})])]),i("a",{staticClass:"footer__next",attrs:{href:"#"}},[i("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M14 9V5L21 12L14 19V14.9C9 14.9 5.5 16.5 3 20C4 15 7 10 14 9Z",fill:"white","fill-opacity":"0.45"}})])])]),i("a",{staticClass:"footer__to-home",attrs:{href:"#"},on:{click:function(t){e.active=0}}},[i("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M12 3L4 9V21H9V14H15V21H20V9L12 3Z",fill:"white"}})])])]),i("a",{staticClass:"footer__share btn btn-square",attrs:{href:"#"}},[i("span",[e._v("GET YOUR REMIX")]),i("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M16 5L14.58 6.42L12.99 4.83V16H11.01V4.83L9.42 6.42L8 5L12 1L16 5ZM20 10V21C20 22.1 19.1 23 18 23H6C4.89 23 4 22.1 4 21V10C4 8.89 4.89 8 6 8H9V10H6V21H18V10H15V8H18C19.1 8 20 8.89 20 10Z",fill:"white"}})])])])])]):e._e(),e._m(14)])},d=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"board__item board__item--main"},[i("div",{staticClass:"text-over-img"},[e._v("Welcome to Soundtastes")]),i("div",{staticClass:"board__img"},[i("img",{attrs:{src:"images/board-1.jpg",alt:""}})])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"board__item"},[i("a",{staticClass:"board__logo",attrs:{href:"#"}},[i("img",{attrs:{src:"images/logo.svg",alt:"logotype"}})])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"user-pane"},[i("div",{staticClass:"user-pane__avatar"},[i("img",{attrs:{src:"images/avatar.png",alt:"avatar"}})]),i("div",{staticClass:"user-pane__content"},[i("div",{staticClass:"user-pane__title"},[e._v(" Your user-paneor Name ")]),i("div",{staticClass:"board-video__name"},[e._v("EDM")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"user-pane"},[i("div",{staticClass:"user-pane__avatar"},[i("img",{attrs:{src:"images/avatar.png",alt:"avatar"}})]),i("div",{staticClass:"user-pane__content"},[i("div",{staticClass:"user-pane__title"},[e._v(" Your user-paneor Name ")]),i("div",{staticClass:"board-video__name"},[e._v("Instrumental")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"user-pane"},[i("div",{staticClass:"user-pane__avatar"},[i("img",{attrs:{src:"images/avatar.png",alt:"avatar"}})]),i("div",{staticClass:"user-pane__content"},[i("div",{staticClass:"user-pane__title"},[e._v("Inspired by Amber Selection")]),i("div",{staticClass:"board-video__name"},[e._v("Pop")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"user-pane"},[i("div",{staticClass:"user-pane__avatar"},[i("img",{attrs:{src:"images/avatar.png",alt:"avatar"}})]),i("div",{staticClass:"user-pane__content"},[i("div",{staticClass:"user-pane__title"},[e._v(" Your user-paneor Name ")]),i("div",{staticClass:"board-video__name"},[e._v("Rock")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"board-video"},[i("div",{staticClass:"user-pane"},[i("div",{staticClass:"user-pane__avatar"},[i("img",{attrs:{src:"images/avatar.png",alt:"avatar"}})]),i("div",{staticClass:"user-pane__content"},[i("div",{staticClass:"user-pane__title"},[e._v(" Your user-paneor Name ")]),i("div",{staticClass:"board-video__name"},[e._v("Song Name")])])]),i("img",{staticClass:"board-video__play",attrs:{src:"images/play.svg",alt:""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"user-pane"},[i("div",{staticClass:"user-pane__avatar"},[i("img",{attrs:{src:"images/avatar.png",alt:"avatar"}})]),i("div",{staticClass:"user-pane__content"},[i("div",{staticClass:"user-pane__title"},[e._v("Inspired by Amber Selection")]),i("div",{staticClass:"board-video__name"},[e._v("Pop")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"user-pane"},[i("div",{staticClass:"user-pane__avatar"},[i("img",{attrs:{src:"images/avatar.png",alt:"avatar"}})]),i("div",{staticClass:"user-pane__content"},[i("div",{staticClass:"user-pane__title"},[e._v("Inspired by Amber Selection")]),i("div",{staticClass:"board-video__name"},[e._v("Pop")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"user-pane"},[i("div",{staticClass:"user-pane__avatar"},[i("img",{attrs:{src:"images/avatar.png",alt:"avatar"}})]),i("div",{staticClass:"user-pane__content"},[i("div",{staticClass:"user-pane__title"},[e._v("Inspired by Amber Selection")]),i("div",{staticClass:"board-video__name"},[e._v("Pop")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"board__img"},[i("img",{attrs:{src:"images/board-2.jpg",alt:""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"board__welcome"},[i("div",{staticClass:"board__title"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"remix-intro__body",staticStyle:{"background-image":"url('images/remix-intro.jpg')"}},[i("div",{staticClass:"remix-intro__content"},[i("div",{staticClass:"user-pane user-pane--big"},[i("div",{staticClass:"user-pane__avatar"},[i("img",{attrs:{src:"images/avatar.png",alt:"avatar"}})]),i("div",{staticClass:"user-pane__content"},[i("div",{staticClass:"user-pane__title"},[e._v("Your Brand Collaborator Name")]),i("div",{staticClass:"user-pane__name"},[e._v("Song Name")])])]),i("h2",{staticClass:"remix-intro__title"},[e._v("Make your remix")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("aside",{staticClass:"remix-intro__aside"},[i("a",{staticClass:"remix-intro__logo",attrs:{href:"#"}},[i("img",{attrs:{src:"images/logo.svg",alt:"logotype"}})])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{staticClass:"email-button",attrs:{href:"#"}},[i("img",{attrs:{src:"images/email.svg",alt:"email"}})])}],v=i("cccf"),_={name:"Music",genreName:"",components:{Player:v["a"]},data:function(){return{active:0}}},h=_,f=(i("1fac"),Object(r["a"])(h,m,d,!1,null,null,null)),p=f.exports;a["a"].use(u["a"]);var g=[{path:"/",name:"Home",component:p},{path:"/about",name:"About",component:function(){return i.e("about").then(i.bind(null,"f820"))}},{path:"/music",name:"Music",component:p}],b=new u["a"]({mode:"history",base:"/",routes:g}),C=b,y=i("2f62");a["a"].use(y["a"]);var L=new y["a"].Store({state:{currentGenre:{},genres:{pop:{sounds:{rhythm:{icon:"3",file:"rhythm.mp3"},rhythm2:{icon:"2",file:"rhythm2.mp3"},synt:{icon:"6",file:"synt.mp3"},mainline:{icon:"main",file:"main.mp3"},voice:{icon:"4",file:"voice.mp3"}}},edm:{time:15e3,sounds:{fx:{icon:"4",file:"1.mp3"},melody:{icon:"4",file:"3.mp3"},mainline:{icon:"main",file:"1.mp3"},rhythm:{icon:"3",file:"5.mp3"},synthesizer:{icon:"6",file:"5.mp3"}}},popOld:{sounds:{rhythm:{icon:"3",file:"rhythm.mp3"},synthesizer:{icon:"6",file:"synt.mp3"},mainline:{icon:"main",file:"main.mp3"},voice:{icon:"4",file:"voice.mp3"}}},instrumental:{time:15e3,sounds:{guitar:{icon:"5",file:"1.mp3"},piano:{icon:"6",file:"1.mp3"},strings:{icon:"4",file:"1.mp3"},mainline:{icon:"main",file:"1.mp3"},pizzicato:{icon:"3",file:"5.mp3"}}},rock:{time:15e3,sounds:{bass:{icon:"3",file:"1.mp3"},mainline:{icon:"main",file:"1.mp3"},guitar:{icon:"5",file:"1.mp3"},drums:{icon:"2",file:"1.mp3"},voice:{icon:"4",file:"5.mp3"}}}}},getters:{genres:function(e){return e.genres}},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:C,store:L,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";i("9c0c")},"9c0c":function(e,t,i){},a454:function(e,t,i){},aa86:function(e,t,i){"use strict";i("a454")},cccf:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"remix"},[i("audio",{attrs:{id:"mainLine_"+e.genreName,src:"samples-mp3/"+e.genreName+"/"+e.mainLine.name+"/"+e.mainLine.file}}),i("div",{staticClass:"remix__header"},[i("div",{staticClass:"remix__block"},[i("div",{staticClass:"remix__author"},[e._v("DJ's name")]),i("div",{staticClass:"remix__name",staticStyle:{"text-transform":"uppercase"}},[e._v(e._s(e.genreName))]),i("input",{staticClass:"volume",attrs:{id:"volume_"+e.genreName,type:"range",name:"volume",min:"0",max:"1",step:"0.01"}}),i("button",{staticClass:"btn-play",on:{click:e.mainLinePlay}},[e.mainLine.playing?e._e():i("i",{staticClass:"fas fa-play"}),e.mainLine.playing?i("i",{staticClass:"fas fa-stop"}):e._e()])]),i("div",{staticClass:"remix__canvas"},[i("div",{staticClass:"remix__divider divider",class:{"slow-back":!e.mainLine.playing},style:{left:e.mainLine.slider+"%"}},[i("img",{staticClass:"divider__before",attrs:{src:"images/arrow-bottom.svg",alt:""}}),i("div",{staticClass:"divider__line"}),i("img",{staticClass:"divider__after",attrs:{src:"images/arrow-top.svg",alt:""}})]),i("div",{staticClass:"remix__analyser"},[i("canvas",{staticStyle:{width:"100%",height:"50px"},attrs:{id:"mainLineVis_"+e.genreName}})])])]),0!==e.sounds.length?i("div",{staticClass:"remix__body"},[i("div",{staticClass:"remix__list"},e._l(e.sounds,(function(t){return i("div",{key:t.id,staticClass:"remix-item"},[i("div",{staticClass:"remix-item__block"},[i("div",{staticClass:"remix-item__actions"},[e._m(0,!0),i("button",{staticClass:"remix-item__action",attrs:{type:"button"},on:{click:function(i){return e.clearSublineTimes(t)}}},[i("img",{attrs:{src:"images/trash.svg",alt:""}})])]),i("input",{staticClass:"volume",class:{"volume-block":e.mainLine.playing},attrs:{disabled:e.mainLine.playing,id:"volume_"+t.id+"_"+e.genreName,type:"range",name:"volume",min:"0",max:"1",step:"0.01"}})]),e._l(e.genre.sounds,(function(a,s){return i("audio",{key:t.id+"_"+s,attrs:{id:"line_"+t.id+"_"+a.icon+"_"+e.genreName,src:"samples-mp3/"+e.genreName+"/"+s+"/"+a.file}})})),i("div",{staticClass:"remix__canvas"},[e._l(t.playTimes,(function(t){return i("div",{key:t.start,staticClass:"sub-line-vis",style:{width:e.getLineWidth(t)+"%",left:e.getLineLeft(t)+"%"}})})),t.data?i("div",{staticClass:"remix__divider divider divider-simple",class:{"slow-back":!e.mainLine.playing},style:{left:e.mainLine.slider+"%"}},[i("div",{staticClass:"divider__line"})]):e._e()],2),0!==e.sounds.length?i("div",{staticClass:"remix-tools__block"},[i("ul",{staticClass:"remix-tools__items"},e._l(e.addSoundList,(function(a){return i("li",{key:a.icon,staticClass:"remix-tools__item",class:{"subline-block":e.mainLine.playing||t.subPlaying}},[i("a",{staticClass:"remix-tools__link",class:{"sound-activ":e.checkActiveSound(t,a),"sound-inactive":e.checkInactiveSound(t,a)},attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),e.addLine(t,a)}}},[i("span",{class:"remix-tools__icon remix-tools__icon--"+a.icon})])])})),0),t.data&&!e.mainLine.playing?i("div",[i("button",{staticClass:"remix-tools__record",on:{click:function(i){return e.subLinePlay(t)}}},[i("i",{directives:[{name:"show",rawName:"v-show",value:!t.subPlaying,expression:"!sound.subPlaying"}],staticClass:"fas fa-play"}),i("i",{directives:[{name:"show",rawName:"v-show",value:t.subPlaying,expression:"sound.subPlaying"}],staticClass:"fas fa-stop"})])]):e._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:t.data&&e.mainLine.playing,expression:"sound.data && mainLine.playing"}],staticClass:"remix-tools__actions"},[i("button",{directives:[{name:"show",rawName:"v-show",value:!t.record,expression:"!sound.record"}],staticClass:"remix-tools__record",on:{click:function(i){return e.lineRecord(t)}}},[i("img",{attrs:{src:"images/record.svg",alt:"record"}})]),i("button",{directives:[{name:"show",rawName:"v-show",value:t.record,expression:"sound.record"}],staticClass:"remix-tools__pause",on:{click:function(i){return e.lineStopRecord(t)}}},[i("img",{attrs:{src:"images/pause.svg",alt:"pause"}})])])]):e._e()],2)})),0)]):e._e(),i("div",{staticClass:"remix__footer"},[i("div",{staticClass:"remix-tools"},[i("button",{directives:[{name:"show",rawName:"v-show",value:e.addBtnStatus(),expression:"addBtnStatus()"}],staticClass:"remix-tools__button",on:{click:function(t){return e.addSound()}}},[i("img",{attrs:{src:"images/plus.svg",alt:"add remix"}})])])])])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"remix-item__action",attrs:{type:"button"}},[i("img",{attrs:{src:"images/volume-off.svg",alt:""}})])}],n=(i("159b"),i("b64b"),i("7db0"),i("b0c0"),i("d3b7"),i("5cc6"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7"),i("c740"),i("a434"),i("b680"),{name:"Player",props:{genreName:{type:String,required:!0}},computed:{addSoundList:function(){var e=this,t=[];return Object.keys(this.genre.sounds).forEach((function(i){"main"!==e.genre.sounds[i].icon&&t.push(Object.assign({soundName:i},e.genre.sounds[i]))})),t}},data:function(){return{genre:{},globalSoundsNumber:0,sounds:[],soundCounter:0,mainLine:{icon:"main",file:"",name:"",time:0,curTime:0,slider:0,playing:!1,source:{},track:{},gainNode:{},analyser:{},canvas:{}},auCon:{}}},created:function(){var e=this;this.genre=Object.assign({},this.$store.getters.genres[this.genreName]);var t=Object.keys(this.genre.sounds).find((function(t){if("main"===e.genre.sounds[t].icon)return!0}));this.mainLine.name=t,this.mainLine.file=this.$store.getters.genres[this.genreName].sounds[t].file},mounted:function(){var e=this;this.auCon=new AudioContext,this.mainLine.source=document.getElementById("mainLine_"+this.genreName),this.mainLine.track=this.auCon.createMediaElementSource(this.mainLine.source),this.mainLine.track.connect(this.auCon.destination),this.mainLine.volumeControl=document.getElementById("volume_"+this.genreName),this.mainLine.volumeControl.value=.1,this.mainLine.source.volume=.1,this.mainLine.volumeControl.addEventListener("input",(function(t){e.mainLine.source.volume=t.target.value}),!1),this.mainLine.source.addEventListener("ended",(function(){e.mainLinePlay()}),!1),this.mainLine.canvas=document.getElementById("mainLineVis_"+this.genreName).getContext("2d"),this.mainLine.analyser=this.auCon.createAnalyser(),this.mainLine.track.connect(this.mainLine.analyser),this.mainLine.analyser.connect(this.auCon.destination),this.mainLine.analyser.fftSize=1024,this.mainLine.bufferLength=this.mainLine.analyser.frequencyBinCount,this.mainLine.dataArray=new Uint8Array(this.mainLine.bufferLength),this.mainLine.canvasWidth=document.getElementById("mainLineVis_"+this.genreName).width,this.mainLine.canvasHeight=document.getElementById("mainLineVis_"+this.genreName).height,this.mainLine.barWidth=this.mainLine.canvasWidth/this.mainLine.bufferLength*2.5,this.mainLine.barHeight="",this.mainLine.x=0,this.preSetupSubLines(),this.loop()},methods:{addSound:function(){this.soundCounter++,this.sounds.push({id:this.soundCounter,data:null,playTimes:[],refresh:0,source:{},subPlaying:!1})},deleteSound:function(e){var t=this.sounds.findIndex((function(t){return t.id===e.id}));this.sounds.splice(t,1)},addLine:function(e,t){var i,a=this;return console.log(e,t),!this.sounds.find((function(e){var i;return(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.soundName)===t.soundName}))&&(!this.mainLine.playing&&(!e.subPlaying&&void((null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.icon)!==t.icon&&(e.playing=!1,e.record=!1,e.slider=1,e.data=t,e.playTimes=[],setTimeout((function(){a.lineGenerate(e)}),100)))))},checkActiveSound:function(e,t){var i;return(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.icon)===t.icon},checkInactiveSound:function(e,t){var i;return!(null===e||void 0===e||!e.data)&&(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.icon)!==t.icon},lineGenerate:function(e){e.source=document.getElementById("line_"+e.id+"_"+e.data.icon+"_"+this.genreName),e.track=this.auCon.createMediaElementSource(e.source),e.track.connect(this.auCon.destination),e.volumeControl=document.getElementById("volume_"+e.id+"_"+this.genreName),e.volumeControl.value=1,e.source.volume=1,e.volumeBack=1,e.volumeControl.addEventListener("input",(function(t){e.source.volume=t.target.value,e.volumeBack=t.target.value}),!1),e.source.addEventListener("ended",(function(){e.playing=!1,e.source.currentTime=0,e.subPlaying=!1}),!1)},lineRecord:function(e){e.record=!0,e.source.volume=e.volumeBack,e.playTimes.push({start:this.mainLine.source.currentTime,end:null,status:"wait"})},lineStopRecord:function(e){e.record=!1,e.source.currentTime=0,e.source.volume=0},getLineWidth:function(e){return(e.end-e.start)/this.mainLine.source.duration*100},getLineLeft:function(e){return e.start/this.mainLine.source.duration*100},mainLinePlay:function(){"suspended"===this.auCon.state&&this.auCon.resume(),this.mainLine.playing?(this.mainLine.source.pause(),this.mainLine.source.currentTime=0,this.mainLine.playing=!1,this.subLinesAllPlay(!1)):(this.mainLine.source.play(),this.mainLine.playing=!0,this.sounds.forEach((function(e){e.subPlaying=!1})),this.subLinesAllPlay())},subLinesAllPlay:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.sounds.forEach((function(t){t.data&&(e?(t.source.play(),t.source.volume=0,t.playing=!0):(t.source.pause(),t.source.currentTime=0,t.source.volume=t.volumeBack,t.playing=!1,t.record=!1,t.playTimes.forEach((function(e){e.status="wait"}))))}))},subLinePlay:function(e){"suspended"===this.auCon.state&&this.auCon.resume(),e.subPlaying?(e.subPlaying=!1,this.subLinesAllPlay(!1)):(e.subPlaying=!0,e.source.currentTime=0,e.source.volume=1,e.source.play())},clearSublineTimes:function(e){e.playTimes=[],e.filed=0},loop:function(){var e=this;window.requestAnimationFrame(this.loop),this.mainLine.slider=this.mainLine.source.currentTime/this.mainLine.source.duration*100,this.mainLine.curTime=this.mainLine.source.currentTime.toFixed(2),this.mainLine.time=this.mainLine.source.duration.toFixed(2),this.sounds.forEach((function(t){t.source&&t.playTimes.forEach((function(i){i.start!==i.end&&e.mainLine.playing&&!t.record&&(e.mainLine.source.currentTime>=i.start&&e.mainLine.source.currentTime<=i.end?"wait"===i.status&&(i.status="play",t.source.volume=t.volumeBack):"play"===i.status&&(i.status="done",t.source.volume=0))}))})),this.sounds.forEach((function(t){t.record&&(t.playTimes[t.playTimes.length-1].end=e.mainLine.source.currentTime)})),this.mainLineVis()},mainLineVis:function(){this.mainLine.x=0,this.mainLine.analyser.getByteFrequencyData(this.mainLine.dataArray),this.mainLine.canvas.fillStyle="#fecbc8",this.mainLine.canvas.fillRect(0,0,this.mainLine.canvasWidth,this.mainLine.canvasHeight);for(var e=0;e<this.mainLine.bufferLength;e++){this.mainLine.barHeight=this.mainLine.dataArray[e];var t=255,i=255,a=255;this.mainLine.canvas.fillStyle="rgb("+t+","+i+","+a+")",this.mainLine.canvas.fillRect(this.mainLine.x,this.mainLine.canvasHeight-this.mainLine.barHeight,this.mainLine.barWidth,this.mainLine.barHeight),this.mainLine.x+=this.mainLine.barWidth+1}},addBtnStatus:function(){var e=this,t=0;return Object.keys(this.genre.sounds).forEach((function(i){"main"!==e.genre.sounds[i].icon&&t++})),t>this.sounds.length},refreshSoundData:function(e){0===e.refresh?e.refresh=1:e.refresh=0},preSetupSubLines:function(){var e=this;this.addSoundList.forEach((function(t){e.addSound(),e.addLine(e.sounds[e.sounds.length-1],t)}))}},watch:{genreName:function(){var e=this;this.genre=Object.assign({},this.$store.getters.genres[this.genreName]);var t=Object.keys(this.genre.sounds).find((function(t){if("main"===e.genre.sounds[t].icon)return!0}));this.mainLine.name=t,this.mainLine.file=this.$store.getters.genres[this.genreName].sounds[t].file,this.sounds=[],this.soundCounter=0}}}),r=n,o=(i("4ff3"),i("aa86"),i("2877")),c=Object(o["a"])(r,a,s,!1,null,"5e0293f0",null);t["a"]=c.exports},d3dc:function(e,t,i){},e86c:function(e,t,i){}});
//# sourceMappingURL=app.1c81db13.js.map