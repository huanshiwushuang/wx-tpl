(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(e,t,n){e.exports=n("56d7")},"001c":function(e,t,n){"use strict";n("b0fa")},2395:function(e,t,n){},4360:function(e,t,n){"use strict";n.r(t);var a=n("5530"),r=(n("4de4"),n("d3b7"),n("ddb0"),n("ac1f"),n("00b4"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("1276"),n("5319"),n("159b"),n("7db0"),n("e9c4"),n("b64b"),n("2b0e")),c=n("b893"),i=n("da19"),o=i.keys().filter((function(e){return!new RegExp("\\./index.js","i").test(e)})),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.defineProperties(e,Object(a["a"])({_children:{enumerable:!1,configurable:!1,writable:!1,value:[]}},t)),e},u=o.reduce((function(e,t){var n=t.replace(/^\.\//,"").replace(/\.\w+$/,"").split("/"),a=e;return n.forEach((function(e,r){var c=a._children.find((function(t){return t._nodeName===e}));if(c||(c=s({},{_nodeName:{enumerable:!1,configurable:!1,writable:!1,value:e}}),a._children.push(c)),r===n.length-1){var o=i(t).default;Object.assign(c,o)}a=c})),e}),s({},{_nodeName:{enumerable:!1,configurable:!0,writable:!1,value:"root"}}));c["a"].walkTree([u],{childrenProp:"_children",enter:function(e,t){if(t&&(t[e._nodeName]=e),e.state&&(Object.defineProperties(e,Object(a["a"])(Object(a["a"])({_cache:{enumerable:!1,configurable:!1,writable:!0,value:JSON.parse(JSON.stringify(e.state))},_reset:{enumerable:!1,configurable:!1,writable:!1,value:function(){e.state=r["a"].observable(JSON.parse(JSON.stringify(e._cache)))}},_resetChildren:{enumerable:!1,configurable:!1,writable:!1,value:function(){e._children.forEach((function(e){e._reset()}))}},_resetWithChildren:{enumerable:!1,configurable:!1,writable:!1,value:function(){e._reset(),e._resetChildren()}}},Object.keys(e.state).reduce((function(t,n){return t["_".concat(n,"Reset")]={enumerable:!1,configurable:!1,writable:!1,value:function(){e.state[n]=e._cache[n]}},t}),{})),Object.keys(e.state).reduce((function(t,n){return t["_".concat(n,"Cache")]={enumerable:!1,configurable:!1,writable:!1,value:function(){e._cache[n]=e.state[n]}},t}),{}))),e.state=r["a"].observable(e.state)),e.getters){var n={};Object.keys(e.getters).forEach((function(t){Object.defineProperty(n,[t],{enumerable:!1,configurable:!1,get:e.getters[t].bind(e)})})),e.getters=n}e.mutations&&(e.mutations=Object.keys(e.mutations).reduce((function(t,n){return t[n]=e.mutations[n].bind(e),t}),{})),e.actions&&(e.actions=Object.keys(e.actions).reduce((function(t,n){return t[n]=e.actions[n].bind(e),t}),{}))}}),t["default"]=u},5240:function(e,t,n){},"53ca":function(e,t,n){"use strict";n("5240")},"56d7":function(e,t,n){"use strict";n.r(t);n("6e75");var a=n("343b"),r=(n("da02"),n("6b41")),c=(n("93b0"),n("2bdd")),i=(n("2591"),n("3104")),o=(n("bca0"),n("543e")),s=(n("bf24"),n("44bf")),u=(n("8990"),n("5e46")),l=(n("558f"),n("0b33")),d=(n("4391"),n("58e6")),f=(n("b342"),n("ad06")),p=(n("4627"),n("2ed4")),v=(n("1318"),n("ac28")),b=(n("433b"),n("d399")),h=(n("c625"),n("b650")),m=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("159b"),n("b0c0"),n("a434"),n("6562"),n("758b"),n("f0e6"),n("db49")),g=n("7415"),k=n("b893"),_={page:null,json:null,local:g["a"],coms:[],bodyClass:[],cTheme:"#FF7904",isMobileUA:k["b"].isMobileUA()},w=_,y=n("2b0e"),x=n("a78e"),j=n.n(x),O=n("5530"),C=n("1da1"),S=(n("96cf"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("25f0"),n("bc3a")),E=n.n(S),$={baseURL:m["a"].axiosBaseUrl},P=E.a.create($);P.interceptors.request.use(function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=document.createElement("a"),n.href=t.url,a=new URL(n.href),a.searchParams.has("mock")||m["a"].isMock&&a.searchParams.set("mock",1),t.url=a.toString(),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),P.interceptors.response.use(function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var a,r,c,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!m["a"].isCheck){e.next=10;break}return a=t.data.json,e.next=4,n.e("chunk-23e860d7").then(n.bind(null,"cadb"));case 4:r=e.sent,c=r.default,i=document.createElement("a"),i.href=t.config.url,o=new URL(i.href),c({pathname:o.pathname,check_data:a});case 10:return e.abrupt("return",t.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}));var A={axios:P,get:function(e,t,n){return P.get(e,Object(O["a"])({params:t},n))},post:function(e,t,n){return P.post(e,t,n)}},T=n("4360"),q={$vue:y["a"],$win:window,$axios:A,$cookie:j.a,$get:A.get,$post:A.post,$strEncode:k["d"].encode,$strDecode:k["d"].decode,$toast:b["a"],$store:T["default"]},R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._l(e.coms,(function(t,a){return n(t,e._g(e._b({key:a,tag:"component"},"component",t.attrs,!1),t.listeners),e._l(t.slots,(function(t,r){return n(t,e._g(e._b({key:a+"_"+r,tag:"component"},"component",t.attrs,!1),t.listeners))})),1)})),n("div",{class:e.bodyClass,staticStyle:{display:"none"},attrs:{id:"ksh34m2s"}})],2)},N=[],L={name:"App",watch:{bodyClass:function(){this.$nextTick((function(){document.body.classList=document.querySelector("#ksh34m2s").classList}))}}},z=L,D=(n("7c55"),n("2877")),M=Object(D["a"])(z,R,N,!1,null,null,null),U=M.exports,J=(n("ac1f"),n("466d"),n("e9c4"),n("caad"),function(){var e=location.href.match(/_transfer=([^&#]+)/);return e&&(e=e[1]),e}),H=function(e){var t,n=k["d"].decode(e);try{t=JSON.parse(n)}catch(a){return void alert("JSON 反序列化失败---".concat(n))}if(t._timestamp)return t;alert("数据没有时间戳---".concat(JSON.stringify(t)))},I=Date.now(),B=0,F=0,W=!1,X=J();X&&(T["default"].uniapp.state.receiveData=H(X),I=T["default"].uniapp.state.receiveData._timestamp);var Y=window.addEventListener;window.addEventListener=function(e,t,n){if(["popstate","hashchange"].includes(e)){B++;var a=t;t=function(){if(F++,!W){var e=J();if(e){var t=H(e);if(t._timestamp>I)return void(F%B===0&&(I=t._timestamp,T["default"].uniapp.state.receiveData=t,W=!0,history.back()))}return a.apply(this,arguments)}F%B===0&&(W=!1)}}return Y.call(this,e,t,n)};var G=n("8c4f"),K=n("2909"),Q=n("ade3"),V=(n("5319"),n("d81d"),n("07ac"),n("6062"),n("4de4"),n("b64b"),n("99af"),n("a5d8"),n("323e")),Z=n.n(V),ee=(n("aa7a"),n("3c69")),te=n("a925");y["a"].use(te["a"]);var ne=new te["a"],ae=ne,re=null,ce={isLoaded:!1,waitLoaded:function(){return new Promise((function(e,t){if(ce.isLoaded)return e();re={resolve:e,reject:t}}))}};function ie(){var e=j.a.get("think_lang");return e||"zh-cn"}Object(C["a"])(regeneratorRuntime.mark((function e(){var t,a,r,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=ie(),e.t0=t,e.next="en-us"===e.t0?4:16;break;case 4:return ne.locale=t,a=n.e("chunk-2d21e554").then(n.bind(null,"d4b0")),r=n.e("chunk-2d0dde02").then(n.bind(null,"82f8")),e.next=9,a;case 9:return a=e.sent,e.next=12,r;case 12:return r=e.sent,ne.setLocaleMessage(t,Object(O["a"])({},r.default)),ee["a"].use(ne.locale,a.default),e.abrupt("break",27);case 16:return ne.locale="zh-cn",c=Promise.resolve().then(n.bind(null,"8c18")),i=n.e("chunk-2d229be6").then(n.bind(null,"df6d")),e.next=21,c;case 21:return c=e.sent,e.next=24,i;case 24:i=e.sent,ne.setLocaleMessage(ne.locale,Object(O["a"])({},i.default)),ee["a"].use(ne.locale,c.default);case 27:ce.isLoaded=!0,re&&re.resolve();case 29:case"end":return e.stop()}}),e)})))(),Z.a.configure({showSpinner:!1});var oe,se,ue={mode:m["a"].routerMode||"ast"},le=!1,de=null,fe=null,pe=null;function ve(){ke.beforeEach(function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t,a,r){var c,i,o,s,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c=ce.waitLoaded(),e.t0=ue.mode,e.next="refresh"===e.t0?4:9;break;case 4:if(se===G["a"].START_LOCATION){e.next=8;break}if(se.fullPath.replace(se.hash,"")===oe.fullPath.replace(oe.hash,"")){e.next=8;break}return location=oe.fullPath,e.abrupt("return");case 8:return e.abrupt("break",9);case 9:Z.a.done(),oe=t,se=a,de=null,T["default"].router.state.to=t,T["default"].router.state.from=a,fe=pe,e.t1=ue.mode,e.next="ast"===e.t1?19:21;break;case 19:return T["default"].page.state.savedPosition=Object(O["a"])(Object(O["a"])({},T["default"].page.state.savedPosition),{},Object(Q["a"])({},se.path,{x:window.scrollX,y:window.scrollY})),e.abrupt("break",21);case 21:if(T["default"].page.state.cancelTokenSource&&T["default"].page.state.cancelTokenSource.cancel("new page"),i=document.createElement("a"),i.href=$.baseURL,se!==G["a"].START_LOCATION||new URL(i.href).host!==location.host){e.next=39;break}if(o=k["c"].toAST(document.documentElement.outerHTML),e.prev=26,de=JSON.parse(o.page.str),!m["a"].isCheck){e.next=34;break}return e.next=31,n.e("chunk-23e860d7").then(n.bind(null,"cadb"));case 31:s=e.sent,u=s.default,u({pathname:oe.path,check_data:de.json});case 34:e.next=39;break;case 36:e.prev=36,e.t2=e["catch"](26),console.warn("首屏 page 数据解析失败");case 39:if(de||(l=T["default"].page.state.cache[oe.path],l&&(de=l)),de){e.next=52;break}return Z.a.start(),T["default"].page.state.cancelTokenSource=E.a.CancelToken.source(),e.prev=43,e.next=46,A.get(oe.fullPath,null,{cancelToken:T["default"].page.state.cancelTokenSource.token});case 46:de=e.sent,e.next=52;break;case 49:e.prev=49,e.t3=e["catch"](43),E.a.isCancel(e.t3);case 52:return e.next=54,c;case 54:r();case 55:case"end":return e.stop()}}),e,null,[[26,36],[43,49]])})));return function(t,n,a){return e.apply(this,arguments)}}()),ke.afterEach((function(){if(pe=history.state,w.page=de,w.json=w.page.json,fe&&pe&&!le){var e=fe.key,t=pe.key;parseFloat(t)<parseFloat(e)?T["default"].router.state.action="back":T["default"].router.state.action="forward"}switch(ue.mode){case"ast":switch(T["default"].page.state.cache=Object(O["a"])(Object(O["a"])({},T["default"].page.state.cache),{},Object(Q["a"])({},oe.path,de)),se!==G["a"].START_LOCATION&&(de.t&&(document.title=de.t),de.k&&document.querySelector("#k").setAttribute("content",de.k),de.d&&document.querySelector("#d").setAttribute("content",de.d)),oe.meta.exclude=[],T["default"].router.state.action){case"back":oe.meta.exclude=Object.values(se.matched[1].components).map((function(e){return e.name||console.error("此组件未配置 name, 无法在 back 时清除缓存",e),e.name})),Object(K["a"])(new Set(oe.meta.exclude)).length!==oe.meta.exclude.length&&console.error("组件名重复",oe.meta.exclude);var n=Object.keys(T["default"].page.state.cache).filter((function(e){return e!=="".concat(se.path)})).reduce((function(e,t){return e[t]=T["default"].page.state.cache[t],e}),{});T["default"].page.state.cache=n;break}break}Z.a.done(),le=!1})),ke.onError((function(){var e;Z.a.done(),T["default"].page.state.cancelTokenSource&&T["default"].page.state.cancelTokenSource.cancel("router.onError"),history.replaceState(history.state,"","".concat(null!==(e=ke.options.base)&&void 0!==e?e:"").concat(oe.path))}))}var be=ve,he=function(e){switch(e.type){case 8:return;case 16:return}console.error(e)};[{name:"push",func:G["a"].prototype.push},{name:"replace",func:G["a"].prototype.replace}].forEach((function(e){G["a"].prototype[e.name]=function(){return Z.a.done(),le=!0,T["default"].router.state.action=e.name,e.func.apply(this,arguments).catch(he)}})),y["a"].use(G["a"]);var me=[{path:"/",component:function(){return n.e("chunk-055842ec").then(n.bind(null,"50ea"))},children:[function(){var e;return null!==(e=w.page)&&void 0!==e&&e.kvpcjcl7_404?{path:"*",component:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e("chunk-123e17ea").then(n.bind(null,"8cdb"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),meta:{intercept:!0}}:{path:"kvdgktrh"}}(),{path:"/",name:"Home",components:{default:function(){return n.e("chunk-1621b6ea").then(n.bind(null,"bb51"))},footer:function(){return Promise.resolve().then(n.bind(null,"a17a"))}},children:[{path:"",name:"HomeNice",component:function(){return n.e("chunk-026ca0b5").then(n.bind(null,"69e6"))}},{path:"index/newest",name:"HomeNewest",component:function(){return n.e("chunk-026ca0b5").then(n.bind(null,"69e6"))}},{path:"index/popular",name:"HomePopular",component:function(){return n.e("chunk-e2ee513e").then(n.bind(null,"15a2"))}},{path:"index/rank",name:"HomeRank",component:function(){return n.e("chunk-5c01849f").then(n.bind(null,"5fff"))}}]},{path:"/daysign",name:"Daysign",components:{default:function(){return n.e("chunk-e796f7c8").then(n.bind(null,"8cd0"))},footer:function(){return Promise.resolve().then(n.bind(null,"a17a"))}}},{path:"/type",name:"Dype",components:{default:function(){return n.e("chunk-0513f1de").then(n.bind(null,"16f2"))},footer:function(){return Promise.resolve().then(n.bind(null,"a17a"))}}},{path:"/my",name:"My",components:{default:function(){return n.e("chunk-36fb9dd5").then(n.bind(null,"f400"))},footer:function(){return Promise.resolve().then(n.bind(null,"a17a"))}}},{path:"/settings",component:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e("chunk-9da73cd6").then(n.bind(null,"26d3"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{path:"/test",component:function(){return n.e("chunk-ba1f8a76").then(n.bind(null,"78c1"))}},{path:"*",component:function(){return n.e("chunk-123e17ea").then(n.bind(null,"8cdb"))}}]}],ge=new G["a"]({mode:"hash",routes:me,scrollBehavior:function(){var e=T["default"].page.state.savedPosition[T["default"].router.state.to.path]||{x:0,y:0};return e}}),ke=ge;be();var _e=n("d78d");_e.keys().forEach((function(e){var t=_e(e);y["a"].component(e.match(/[/\\]([^/\\]+)\.vue$/)[1],t.default)})),[h["a"],b["a"],v["a"],p["a"],f["a"],d["a"],l["a"],u["a"],{com:a["a"],options:{lazyComponent:!0}},s["a"],o["a"],i["a"],c["a"],r["a"]].forEach((function(e){e.options?y["a"].use(e.com,e.options):y["a"].use(e)})),b["a"].setDefaultOptions({duration:3e3}),y["a"].config.productionTip=!1,y["a"].mixin({data:function(){return w},beforeCreate:function(){if(m["a"].isAttachCom){var e=this.$options.name;e&&(this.$root[e]&&Array.isArray(this.$root[e])?this.$root[e].push(this):this.$root[e]=[this])}},beforeDestroy:function(){var e=this.$options.name;if(m["a"].isAttachCom&&e&&Array.isArray(this.$root[e])){var t=this.$root[e].indexOf(this);-1!=t&&this.$root[e].splice(t,1)}}}),Object.assign(y["a"].prototype,q);var we=new y["a"]({router:ke,i18n:ae,render:function(e){return e(U)}}).$mount("#app");t["default"]=we;if(m["a"].isAttachApp&&(window.app=we),m["a"].isRemoveDom)for(var ye=document.querySelectorAll(".data,.node_remove"),xe=0;xe<ye.length;xe++)ye[xe].parentNode.removeChild(ye[xe])},6562:function(e,t,n){},7415:function(e,t,n){"use strict";n("e9c4");var a=n("b893"),r="kvc4regy",c={get:function(){var e,t;try{t=localStorage.getItem("wuxuwang.com")}catch(n){return console.error(n)}try{if(t=t?a["d"].decode(t):"{}",e=JSON.parse(t),!e.v||parseInt(e.v,36)<parseInt(r,36))return c.reset(),c.get()}catch(n){return console.warn("local get JSON.parse error"),c.reset(),c.get()}return c.value=e,e},reset:function(){c.value={v:r},c.set()},set:function(e){e&&(this.value=Object.assign({},this.value,e));try{localStorage.setItem("wuxuwang.com",a["d"].encode(JSON.stringify(this.value)))}catch(t){return console.error(t)}}};Object.assign(c,{value:c.get()}),t["a"]=c},"758b":function(e,t){(function(e,t){var n=t.documentElement,a=e.devicePixelRatio||1;function r(){var e=n.clientWidth/10;n.style.fontSize=e+"px"}if(r(),e.addEventListener("resize",r),a>=2){var c=t.createElement("body"),i=t.createElement("div");i.style.border=".5px solid transparent",c.appendChild(i),n.appendChild(c),1===i.offsetHeight&&n.classList.add("hairlines"),n.removeChild(c)}})(window,document)},"78ad":function(e,t,n){},"7a5c":function(e,t,n){"use strict";n.r(t);var a={},r={},c={},i={};t["default"]={state:a,getters:r,mutations:c,actions:i}},"7c55":function(e,t,n){"use strict";n("2395")},"815d":function(e,t,n){"use strict";n.r(t);var a={from:"",to:"",isRouting:!1,action:""},r={},c={},i={};t["default"]={state:a,getters:r,mutations:c,actions:i}},"8c53":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"kwabf0q9_com"},[n("div",{staticClass:"df jcsb aic"},[n("div",{staticClass:"df aic"},[n("van-image",{staticClass:"kvl0avoo",attrs:{src:e.head,"lazy-load":"",round:""},scopedSlots:e._u([{key:"loading",fn:function(){return[n("div",{staticClass:"kvurdces_loading fs14"},[n("van-loading",{attrs:{color:e.cTheme}})],1)]},proxy:!0},{key:"error",fn:function(){return[n("div",{staticClass:"kvurf9qz_error"},[n("van-icon",{attrs:{name:"photo"}})],1)]},proxy:!0}])}),n("span",{staticClass:"ml20"},[e._v(" "+e._s(e.name)+" ")])],1),n("div",{staticClass:"kwafdwqz"},[e._v(" "+e._s(e.how_ago)+" ")])]),n("div",{staticClass:"kwactzqw df mt20"},[n("div",{staticClass:"kwacwc7h_date df fdc aic fls"},[n("div",{staticClass:"kwadx6j5"},[e._v(" "+e._s(e.release_time)+" ")]),n("div",{staticClass:"kwadrawm"},[e._v("句子迷日签")])]),n("div",{staticClass:"flg df aic jcc"},[n("div",{staticClass:"kwah6980"},[e._v(" "+e._s(e.content)+" ")])]),n("div",{staticClass:"kwacwgbc_kw fls"},[e._l(e.words,(function(t,a){return n("div",{key:a,staticClass:"kwai60bj df jcsb ma"},[n("span",[e._v(" "+e._s(t.word)+" ")]),n("span",{staticClass:"kwaifiie_py"},[e._v(" "+e._s(t.pinyin)+" ")])])})),n("div",{staticClass:"kwaib6dd tr ma fs28"},[e._v(" "+e._s(e.author_say)+" ")])],2)]),n("div",{staticClass:"tr kvl1cref"},[n("van-icon",{staticClass:"kvl1t4cc kwa2mwpr_id",class:[{is_love:e.is_love}],attrs:{name:e.is_love?"like":"like-o"},on:{click:function(t){return e.$emit("love")}}}),n("span",[e._v(" "+e._s(e.love_count)+" ")]),n("van-icon",{staticClass:"kvl1t4cc kvuqtyqk_id",attrs:{"class-prefix":"icon",name:"wenjianjia"},on:{click:function(t){return e.$emit("collect")}}}),n("van-icon",{staticClass:"kvl1t4cc kvuqw3j4_id",attrs:{"class-prefix":"icon",name:"fenxiang"},on:{click:function(t){return e.$emit("share")}}})],1)])},r=[],c=(n("a9e3"),{inheritAttrs:!1,name:"jz_card_daysign",props:{head:{type:String,required:!0},name:{type:String,required:!0},how_ago:{type:String,required:!0},release_time:{type:String,required:!0},content:{type:String,required:!0},words:{type:Array,required:!0},author_say:{type:String,required:!0},love_count:{type:Number,required:!0},is_love:{type:Boolean,required:!0}}}),i=c,o=(n("af37"),n("2877")),s=Object(o["a"])(i,a,r,!1,null,null,null);t["default"]=s.exports},9013:function(e,t,n){"use strict";n("78ad")},"9f53":function(e,t,n){"use strict";n.r(t),t["default"]={state:{},getters:{},mutations:{},actions:{}}},a17a:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"kvjmvqxx_com"},[n("van-tabbar",{attrs:{placeholder:!0},model:{value:e.tabbar_index,callback:function(t){e.tabbar_index=t},expression:"tabbar_index"}},[n("van-tabbar-item",{attrs:{icon:"wap-home-o",to:e.$store.views.Home.state.currentNav.href,replace:!0}},[e._v(" 首页 ")]),n("van-tabbar-item",{attrs:{"icon-prefix":"icon",icon:"biji",to:"/daysign",replace:!0}},[e._v(" 日签 ")]),n("div",{staticClass:"kw3416h9"},[n("div",{staticClass:"kvl4qag2 tc"},[n("van-icon",{attrs:{"class-prefix":"icon",name:"yongyan",color:"#fff"}})],1)]),n("van-tabbar-item",{attrs:{"icon-prefix":"icon",icon:"fenlei",to:"/type",replace:!0}},[e._v(" 分类 ")]),n("van-tabbar-item",{attrs:{"icon-prefix":"icon",icon:"wode",to:"/my",replace:!0}},[e._v(" 我的 ")])],1)],1)},r=[],c=(n("c740"),n("b0c0"),{name:"jzm_tab_bar",data:function(){return{tabbar_index:0}},methods:{init:function(){var e=this;this.tabbar_index=["home","daysign","type","my"].findIndex((function(t){return t===e.$route.matched[1].name}))}},created:function(){this.init()}}),i=c,o=(n("9013"),n("2877")),s=Object(o["a"])(i,a,r,!1,null,null,null);t["default"]=s.exports},a960:function(e,t,n){"use strict";n.r(t);var a={cache:{},savedPosition:{},cancelTokenSource:null},r={},c={},i={};t["default"]={state:a,getters:r,mutations:c,actions:i}},ae1d:function(e,t,n){"use strict";n.r(t),t["default"]={state:{currentNav:{}},getters:{},mutations:{},actions:{}}},af37:function(e,t,n){"use strict";n("f268")},b0fa:function(e,t,n){},b4ac:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"kvki5240_com"},[n("div",{staticClass:"kvl1c2t4"},[n("div",{staticClass:"df jcsb aic"},[n("div",{staticClass:"df aic"},[n("van-image",{staticClass:"kvl0avoo",attrs:{src:e.head,"lazy-load":"",round:""},scopedSlots:e._u([{key:"loading",fn:function(){return[n("div",{staticClass:"kvurdces_loading fs14"},[n("van-loading",{attrs:{color:e.cTheme}})],1)]},proxy:!0},{key:"error",fn:function(){return[n("div",{staticClass:"kvurf9qz_error"},[n("van-icon",{attrs:{name:"photo"}})],1)]},proxy:!0}])}),n("span",{staticClass:"ml20"},[e._v(" "+e._s(e.name)+" ")])],1),n("van-button",{staticClass:"kvl0dnb6",attrs:{plain:"",round:"",size:"small"},on:{click:function(t){return e.$emit("subscribe")}}},[e._v(" 关注 ")])],1),n("div",{staticClass:"mt20 tc"},[n("van-image",{staticClass:"kvl0hpfv",attrs:{src:e.pic,"lazy-load":""},scopedSlots:e._u([{key:"loading",fn:function(){return[n("div",{staticClass:"kvurdces_loading"},[n("van-loading",{attrs:{color:e.cTheme}})],1)]},proxy:!0},{key:"error",fn:function(){return[n("div",{staticClass:"kvurf9qz_error kw350amm_error"},[n("van-icon",{attrs:{name:"photo"}})],1)]},proxy:!0}])})],1),n("div",{staticClass:"kvl1vv1u"},[n("div",{staticClass:"kvl1xrv7"},[e._v(" "+e._s(e.content)+" ")]),n("div",{staticClass:"tr kvl120z0"},[e._v(" —— "+e._s(e.author)+" ")])])]),n("div",{staticClass:"kvl1cref df"},[n("div",{staticClass:"kwbfvmgp"},[n("van-icon",{staticClass:"kwa2mwpr_id",class:[{is_love:e.is_love}],attrs:{name:e.is_love?"like":"like-o"},on:{click:function(t){return e.$emit("love")}}}),n("span",[e._v(" "+e._s(e.love_count)+" ")])],1),n("div",{staticClass:"kwbfvmgp"},[n("van-icon",{staticClass:"kvuqtyqk_id",attrs:{"class-prefix":"icon",name:"wenjianjia"},on:{click:function(t){return e.$emit("collect")}}})],1),n("div",{staticClass:"kwbfvmgp"},[n("van-icon",{staticClass:"kvuqw3j4_id",attrs:{"class-prefix":"icon",name:"fenxiang"},on:{click:function(t){return e.$emit("share")}}})],1)])])},r=[],c=(n("a9e3"),{inheritAttrs:!1,name:"jzm_card_default",props:{head:{type:String,required:!0},name:{type:String,required:!0},pic:{type:String,required:!0},content:{type:String,required:!0},author:{type:String,required:!0},love_count:{type:Number,required:!0},is_love:{type:Boolean,required:!0}}}),i=c,o=(n("53ca"),n("2877")),s=Object(o["a"])(i,a,r,!1,null,null,null);t["default"]=s.exports},b893:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n("ade3"),r=n("2909"),c=(n("99af"),n("498a"),n("d3b7"),n("25f0"),n("caad"),n("b0c0"),n("d81d"),n("fb6a"),n("ac1f"),n("1276"),n("5319"),n("159b"),n("a434"),n("a15b"),n("4d63"),n("c607"),n("2c3e"),n("00b4"),n("eb11")),i=n.n(c),o=n("f9b5"),s={walkTree:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!Array.isArray(e))throw new Error("please input array");for(var n=function t(n,a,c,i){if(Object.defineProperties(n,{_root:{enumerable:!1,configurable:!0,writable:!1,value:e},_parent:{enumerable:!1,configurable:!0,writable:!1,value:a},_parents:{enumerable:!1,configurable:!0,get:function(){var e=[],t=n;while(t._parent)e.push(t._parent),t=t._parent;return e.reverse()}},_closest:{enumerable:!1,configurable:!0,get:function(){return[].concat(Object(r["a"])(this._parents),[this])}}}),i.enter&&i.enter(n,a,c),i.childrenProp=i.childrenProp||"children",Array.isArray(n[i.childrenProp]))for(var o=0;o<n[i.childrenProp].length;o++)t(n[i.childrenProp][o],n,o,i);i.leave&&i.leave(n,a,c)},a=0;a<e.length;a++)n(e[a],null,a,t)}},u={toAST:function(e){var t=[],n=Object(o["b"])(e);return Object(o["c"])(n,{enter:function(r,c){switch(Object.defineProperties(r,{parent:{enumerable:!1,configurable:!0,get:function(){return c}},v:{enumerable:!1,configurable:!0,writable:!0,value:function(e){return s.v(r,e)}}}),delete r.attributeMap,r.type){case o["a"].Text:var i=r.value.trim();""===i?t.push(r):(r.value=i,r.html=r.toString=function(){return r.value},Object.defineProperties(r,{str:{enumerable:!1,configurable:!0,get:function(){return r.toString()}}}));break;case o["a"].Tag:if(["!--"].includes(r.name))t.push(r);else{r.attr=r.attributes.map((function(e){return{key:e.name.value,val:e.value?u.getText(e.value.value):e.value,quote:e.value?e.value.quote:null}})),delete r.attributes,Object.defineProperties(r,{attr_map:{enumerable:!1,configurable:!0,get:function(){return r.attr.reduce((function(e,t){return e[t.key]=t.val,e}),{})}}}),r.close?r.html=function(){return e.slice(r.open.start,r.close.end)}:r.html=function(){return e.slice(r.open.start,r.open.end)},r.toString=function(){return u.getText(this.html())},Object.defineProperties(r,{str:{enumerable:!1,configurable:!0,get:function(){return r.toString()}}});var l=r.attr_map.id;if(l&&(n[l]=r),r.attr_map.class){var d=r.attr_map.class.trim().replace(/[\s\t\r\n]+/g," ").split(" ");d.forEach((function(e){Array.isArray(n[e])?n[e].push(r):n[e]=[r]}))}var f=r.attr_map["data-cid"];f&&(c.cid?c.cid[f]=r:c.cid=Object(a["a"])({},f,r))}break}}}),t.forEach((function(e){e.parent?e.parent.body.splice(e.parent.body.indexOf(e),1):n.splice(n.indexOf(e),1)})),n},getText:function(e){var t=document.createElement("div");return t.innerHTML=e,t.innerText.trim()}},l={encode:function(e){var t=["\\+"],n=["."],a=i.a.compressToEncodedURIComponent(e);return t.forEach((function(e,t){a=a.replace(new RegExp(e,"g"),n[t])})),a},decode:function(e){var t=["\\."],n=["+"],a=e;return t.forEach((function(e,t){a=a.replace(new RegExp(e,"g"),n[t])})),a=i.a.decompressFromEncodedURIComponent(a),a}},d={isMobileUA:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},isMobile:function(){return/Android|Linux|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)}}},b8e3:function(e,t,n){},d78d:function(e,t,n){var a={"./app/jzm-card-daysign.vue":"8c53","./app/jzm-card-default.vue":"b4ac","./app/jzm-navbar.vue":"d9e6","./app/jzm-tab-bar.vue":"a17a","./common/wx-router-link.vue":"ea22"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="d78d"},d8ad:function(e,t,n){"use strict";n("b8e3")},d9e6:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"kwa79j7s_com"},[n("van-nav-bar",e._b({scopedSlots:e._u([{key:"right",fn:function(){return[n("van-icon",{staticClass:"kwa74xo4_icon",attrs:{name:"search"}})]},proxy:!0}])},"van-nav-bar",e.attrs,!1))],1)},r=[],c={name:"jzm-navbar",computed:{attrs:function(){return this.$attrs}}},i=c,o=(n("d8ad"),n("2877")),s=Object(o["a"])(i,a,r,!1,null,null,null);t["default"]=s.exports},da19:function(e,t,n){var a={"./history.js":"7a5c","./index.js":"4360","./page.js":"a960","./router.js":"815d","./uniapp.js":"e4dc","./views/Home.js":"ae1d","./views/Home/Nice.js":"9f53"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="da19"},db49:function(e,t,n){"use strict";n("caad"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("25f0"),n("d81d"),n("b64b");var a=n("7415"),r={routerMode:function(){return["ast","refresh","api"].includes(a["a"].value.routerMode)?a["a"].value.routerMode:"ast"}(),isCheck:function(){return!![!0,!1].includes(a["a"].value.isCheck)&&a["a"].value.isCheck}(),isMock:function(){return!![!0,!1].includes(a["a"].value.isMock)&&a["a"].value.isMock}(),isPrintConfig:function(){return!![!0,!1].includes(a["a"].value.isPrintConfig)&&a["a"].value.isPrintConfig}(),isRemoveDom:function(){return![!0,!1].includes(a["a"].value.isRemoveDom)||a["a"].value.isRemoveDom}(),isAttachCom:function(){return!![!0,!1].includes(a["a"].value.isAttachCom)&&a["a"].value.isAttachCom}(),isAttachApp:function(){return!![!0,!1].includes(a["a"].value.isAttachApp)&&a["a"].value.isAttachApp}(),axiosBaseUrl:function(){return a["a"].value.axiosBaseUrl||location.origin}()};if(a["a"].set(r),t["a"]=r,r.isPrintConfig){var c=new URL(location.href);c.pathname="/settings",c.searchParams.set("jzm","1"),console.group("配置信息---".concat(c.toString())),console.table(Object.keys(r).map((function(e){return{key:e,value:r[e]}})),["key","value"]),console.groupEnd("配置信息")}},e4dc:function(e,t,n){"use strict";n.r(t);var a=n("5530"),r=(n("e9c4"),n("b893")),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])(Object(a["a"])({},e),{},{_from:"h5",_timestamp:Date.now()})};t["default"]={state:{sendData:null,receiveData:null},getters:{sendDataEncoded:function(){return r["d"].encode(JSON.stringify(this.state.sendData))}},mutations:{postMessage:function(e){this.state.sendData=Object(a["a"])({},c(e))}},actions:{}}},ea22:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",e._g(e._b({},"a",e.attrs,!1),e.listeners),[e._t("default")],2)},r=[],c=n("5530"),i={name:"wx_router_link",props:{},computed:{attrs:function(){var e="router-link",t=document.createElement("a");t.href=this.$attrs.href,location.host!==t.host&&(e="a");var n=Object(c["a"])({is:e},this.$attrs);switch(n.is){case"router-link":n.to=this.$attrs.href||this.$attrs.to,delete n.href;break;case"a":n.href=this.$attrs.href||this.$attrs.to,delete n.to;break}return n},listeners:function(){return Object(c["a"])({},this.$listeners)}}},o=i,s=(n("001c"),n("2877")),u=Object(s["a"])(o,a,r,!1,null,null,null);t["default"]=u.exports},f268:function(e,t,n){}}]);
//# sourceMappingURL=chunk-common.21cdc65e.js.map