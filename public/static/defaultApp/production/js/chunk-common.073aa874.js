(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(e,t,a){e.exports=a("56d7")},"001c":function(e,t,a){"use strict";a("b0fa")},2395:function(e,t,a){},4360:function(e,t,a){"use strict";a.r(t);var n=a("5530"),r=(a("4de4"),a("d3b7"),a("ddb0"),a("ac1f"),a("00b4"),a("4d63"),a("c607"),a("2c3e"),a("25f0"),a("1276"),a("5319"),a("159b"),a("7db0"),a("e9c4"),a("b64b"),a("2b0e")),c=a("b893"),i=a("da19"),s=i.keys().filter((function(e){return!new RegExp("\\./index.js","i").test(e)})),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.defineProperties(e,Object(n["a"])({_children:{enumerable:!1,configurable:!1,writable:!1,value:[]}},t)),e},u=s.reduce((function(e,t){var a=t.replace(/^\.\//,"").replace(/\.\w+$/,"").split("/"),n=e;return a.forEach((function(e,r){var c=n._children.find((function(t){return t._nodeName===e}));if(c||(c=o({},{_nodeName:{enumerable:!1,configurable:!1,writable:!1,value:e}}),n._children.push(c)),r===a.length-1){var s=i(t).default;Object.assign(c,s)}n=c})),e}),o({},{_nodeName:{enumerable:!1,configurable:!0,writable:!1,value:"root"}}));c["a"].walkTree([u],{childrenProp:"_children",enter:function(e,t){if(t&&(t[e._nodeName]=e),e.state&&(Object.defineProperties(e,Object(n["a"])(Object(n["a"])({_cache:{enumerable:!1,configurable:!1,writable:!0,value:JSON.parse(JSON.stringify(e.state))},_reset:{enumerable:!1,configurable:!1,writable:!1,value:function(){e.state=r["a"].observable(JSON.parse(JSON.stringify(e._cache)))}},_resetChildren:{enumerable:!1,configurable:!1,writable:!1,value:function(){e._children.forEach((function(e){e._reset()}))}},_resetWithChildren:{enumerable:!1,configurable:!1,writable:!1,value:function(){e._reset(),e._resetChildren()}}},Object.keys(e.state).reduce((function(t,a){return t["_".concat(a,"Reset")]={enumerable:!1,configurable:!1,writable:!1,value:function(){e.state[a]=e._cache[a]}},t}),{})),Object.keys(e.state).reduce((function(t,a){return t["_".concat(a,"Cache")]={enumerable:!1,configurable:!1,writable:!1,value:function(){e._cache[a]=e.state[a]}},t}),{}))),e.state=r["a"].observable(e.state)),e.getters){var a={};Object.keys(e.getters).forEach((function(t){Object.defineProperty(a,[t],{enumerable:!1,configurable:!1,get:e.getters[t].bind(e)})})),e.getters=a}e.mutations&&(e.mutations=Object.keys(e.mutations).reduce((function(t,a){return t[a]=e.mutations[a].bind(e),t}),{})),e.actions&&(e.actions=Object.keys(e.actions).reduce((function(t,a){return t[a]=e.actions[a].bind(e),t}),{}))}}),t["default"]=u},5240:function(e,t,a){},"53ca":function(e,t,a){"use strict";a("5240")},"56d7":function(e,t,a){"use strict";a.r(t);a("6e75");var n=a("343b"),r=(a("da02"),a("6b41")),c=(a("93b0"),a("2bdd")),i=(a("2591"),a("3104")),s=(a("bca0"),a("543e")),o=(a("bf24"),a("44bf")),u=(a("8990"),a("5e46")),l=(a("558f"),a("0b33")),d=(a("4391"),a("58e6")),f=(a("b342"),a("ad06")),p=(a("4627"),a("2ed4")),v=(a("1318"),a("ac28")),b=(a("433b"),a("d399")),h=(a("c625"),a("b650")),m=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("d3b7"),a("159b"),a("b0c0"),a("a434"),a("6562"),a("758b"),a("f0e6"),a("db49")),g=a("7415"),k=a("b893"),_={page:null,json:null,local:g["a"],coms:[],bodyClass:[],cTheme:"#FF7904",isMobileUA:k["b"].isMobileUA()},w=_,y=a("2b0e"),j=a("a78e"),x=a.n(j),O=a("5530"),C=a("1da1"),S=(a("96cf"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("25f0"),a("bc3a")),E=a.n(S),$={baseURL:m["a"].axiosBaseUrl},A=E.a.create($);A.interceptors.request.use(function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=document.createElement("a"),a.href=t.url,n=new URL(a.href),n.searchParams.has("mock")||m["a"].isMock&&n.searchParams.set("mock",1),t.url=n.toString(),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),A.interceptors.response.use(function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!m["a"].isCheck){e.next=10;break}return n=t.data.json,e.next=4,a.e("chunk-6321901e").then(a.bind(null,"cadb"));case 4:r=e.sent,c=r.default,i=document.createElement("a"),i.href=t.config.url,s=new URL(i.href),c({pathname:s.pathname,check_data:n});case 10:return e.abrupt("return",t.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}));var T={axios:A,get:function(e,t,a){return A.get(e,Object(O["a"])({params:t},a))},post:function(e,t,a){return A.post(e,t,a)}},P=a("4360"),q={$vue:y["a"],$win:window,$axios:T,$cookie:x.a,$get:T.get,$post:T.post,$strEncode:k["d"].encode,$strDecode:k["d"].decode,$toast:b["a"],$store:P["default"]},R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),e._l(e.coms,(function(t,n){return a(t,e._g(e._b({key:n,tag:"component"},"component",t.attrs,!1),t.listeners),e._l(t.slots,(function(t,r){return a(t,e._g(e._b({key:n+"_"+r,tag:"component"},"component",t.attrs,!1),t.listeners))})),1)})),a("div",{class:e.bodyClass,staticStyle:{display:"none"},attrs:{id:"ksh34m2s"}})],2)},N=[],L={name:"App",watch:{bodyClass:function(){this.$nextTick((function(){document.body.classList=document.querySelector("#ksh34m2s").classList}))}}},z=L,D=(a("7c55"),a("2877")),M=Object(D["a"])(z,R,N,!1,null,null,null),U=M.exports,J=(a("ac1f"),a("466d"),a("e9c4"),a("caad"),function(){var e=location.href.match(/_transfer=([^&#]+)/);return e&&(e=e[1]),e}),I=function(e){var t,a=k["d"].decode(e);try{t=JSON.parse(a)}catch(n){return void alert("JSON 反序列化失败---".concat(a))}if(t._timestamp)return t;alert("数据没有时间戳---".concat(JSON.stringify(t)))},B=Date.now(),F=0,H=0,W=0,V=!1,X=J();X&&(P["default"].uniapp.state.receiveData=I(X),B=P["default"].uniapp.state.receiveData._timestamp);var Y=window.addEventListener;window.addEventListener=function(e,t,a){if(["popstate","hashchange"].includes(e)){F++;var n=t;t=function(){if(V)return W++,void(W%F===0&&(V=!1));var e=J();if(H++,e&&e!==X){var t=I(e);if(t._timestamp>B)return void(H%F===0&&(B=t._timestamp,P["default"].uniapp.state.receiveData=t,V=!0,history.back()))}return n.apply(this,arguments)}}return Y.call(this,e,t,a)};var G=a("8c4f"),K=a("2909"),Q=a("ade3"),Z=(a("5319"),a("d81d"),a("07ac"),a("6062"),a("4de4"),a("b64b"),a("99af"),a("a5d8"),a("323e")),ee=a.n(Z),te=(a("aa7a"),a("3c69")),ae=a("a925");y["a"].use(ae["a"]);var ne=new ae["a"],re=ne,ce=null,ie={isLoaded:!1,waitLoaded:function(){return new Promise((function(e,t){if(ie.isLoaded)return e();ce={resolve:e,reject:t}}))}};function se(){var e=x.a.get("think_lang");return e||"zh-cn"}Object(C["a"])(regeneratorRuntime.mark((function e(){var t,n,r,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=se(),e.t0=t,e.next="en-us"===e.t0?4:16;break;case 4:return ne.locale=t,n=a.e("chunk-2d21e554").then(a.bind(null,"d4b0")),r=a.e("chunk-2d0cfb22").then(a.bind(null,"658e")),e.next=9,n;case 9:return n=e.sent,e.next=12,r;case 12:return r=e.sent,ne.setLocaleMessage(t,Object(O["a"])({},r.default)),te["a"].use(ne.locale,n.default),e.abrupt("break",27);case 16:return ne.locale="zh-cn",c=Promise.resolve().then(a.bind(null,"8c18")),i=a.e("chunk-2d222754").then(a.bind(null,"cf61")),e.next=21,c;case 21:return c=e.sent,e.next=24,i;case 24:i=e.sent,ne.setLocaleMessage(ne.locale,Object(O["a"])({},i.default)),te["a"].use(ne.locale,c.default);case 27:ie.isLoaded=!0,ce&&ce.resolve();case 29:case"end":return e.stop()}}),e)})))(),ee.a.configure({showSpinner:!1});var oe,ue,le={mode:m["a"].routerMode||"ast"},de=!1,fe=null,pe=null,ve=null;function be(){_e.beforeEach(function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t,n,r){var c,i,s,o,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.t0=le.mode,e.next="refresh"===e.t0?3:8;break;case 3:if(ue===G["a"].START_LOCATION){e.next=7;break}if(ue.fullPath.replace(ue.hash,"")===oe.fullPath.replace(oe.hash,"")){e.next=7;break}return location=oe.fullPath,e.abrupt("return");case 7:return e.abrupt("break",8);case 8:c=ie.waitLoaded(),ee.a.done(),oe=t,ue=n,fe=null,P["default"].router.state.to=t,P["default"].router.state.from=n,pe=ve,e.t1=le.mode,e.next="ast"===e.t1?19:21;break;case 19:return P["default"].page.state.savedPosition=Object(O["a"])(Object(O["a"])({},P["default"].page.state.savedPosition),{},Object(Q["a"])({},ue.path,{x:window.scrollX,y:window.scrollY})),e.abrupt("break",21);case 21:if(P["default"].page.state.cancelTokenSource&&P["default"].page.state.cancelTokenSource.cancel("new page"),i=document.createElement("a"),i.href=$.baseURL,ue!==G["a"].START_LOCATION||new URL(i.href).host!==location.host){e.next=39;break}if(s=k["c"].toAST(document.documentElement.outerHTML),e.prev=26,fe=JSON.parse(s.page.str),!m["a"].isCheck){e.next=34;break}return e.next=31,a.e("chunk-6321901e").then(a.bind(null,"cadb"));case 31:o=e.sent,u=o.default,u({pathname:oe.path,check_data:fe.json});case 34:e.next=39;break;case 36:e.prev=36,e.t2=e["catch"](26),console.warn("首屏 page 数据解析失败");case 39:if(fe||(l=P["default"].page.state.cache[oe.path],l&&(fe=l)),fe){e.next=52;break}return ee.a.start(),P["default"].page.state.cancelTokenSource=E.a.CancelToken.source(),e.prev=43,e.next=46,T.get(oe.fullPath,null,{cancelToken:P["default"].page.state.cancelTokenSource.token});case 46:fe=e.sent,e.next=52;break;case 49:e.prev=49,e.t3=e["catch"](43),E.a.isCancel(e.t3);case 52:return e.next=54,c;case 54:r();case 55:case"end":return e.stop()}}),e,null,[[26,36],[43,49]])})));return function(t,a,n){return e.apply(this,arguments)}}()),_e.afterEach((function(){var e;if(ve=(null===(e=P["default"].history.getters.stackMap[oe.path])||void 0===e?void 0:e.state)||history.state,w.page=fe,w.json=w.page.json,pe&&ve&&!de){var t=pe.key,a=ve.key;parseFloat(a)<parseFloat(t)?P["default"].router.state.action="back":parseFloat(a)>parseFloat(t)&&(P["default"].router.state.action="forward")}switch(le.mode){case"ast":switch(P["default"].page.state.cache=Object(O["a"])(Object(O["a"])({},P["default"].page.state.cache),{},Object(Q["a"])({},oe.path,fe)),ue!==G["a"].START_LOCATION&&(fe.t&&(document.title=fe.t),fe.k&&document.querySelector("#k").setAttribute("content",fe.k),fe.d&&document.querySelector("#d").setAttribute("content",fe.d)),ue===G["a"].START_LOCATION&&(P["default"].router.state.action="push"),oe.meta.exclude=[],P["default"].router.state.action){case"push":P["default"].history.state.stack.push(Object(O["a"])(Object(O["a"])({},oe),{},{state:ve}));break;case"replace":P["default"].history.state.stack.splice(-1,1,Object(O["a"])(Object(O["a"])({},oe),{},{state:ve}));break;case"forward":P["default"].history.state.stack.push(Object(O["a"])(Object(O["a"])({},oe),{},{state:ve}));break;case"back":oe.meta.exclude=Object.values(ue.matched[1].components).map((function(e){return e.name||console.error("此组件未配置 name, 无法在 back 时清除缓存",e),e.name})),Object(K["a"])(new Set(oe.meta.exclude)).length!==oe.meta.exclude.length&&console.error("组件名重复",oe.meta.exclude);var n=Object.keys(P["default"].page.state.cache).filter((function(e){return e!=="".concat(ue.path)})).reduce((function(e,t){return e[t]=P["default"].page.state.cache[t],e}),{});P["default"].page.state.cache=n,P["default"].history.state.stack.pop();break}break}ee.a.done(),de=!1})),_e.onError((function(){var e;ee.a.done(),P["default"].page.state.cancelTokenSource&&P["default"].page.state.cancelTokenSource.cancel("router.onError"),history.replaceState(history.state,"","".concat(null!==(e=_e.options.base)&&void 0!==e?e:"").concat(oe.path))}))}var he=be,me=function(e){switch(e.type){case 8:return;case 16:return}console.error(e)};[{name:"push",func:G["a"].prototype.push},{name:"replace",func:G["a"].prototype.replace}].forEach((function(e){G["a"].prototype[e.name]=function(){return ee.a.done(),de=!0,P["default"].router.state.action=e.name,e.func.apply(this,arguments).catch(me)}})),y["a"].use(G["a"]);var ge=[{path:"/",component:function(){return a.e("chunk-055842ec").then(a.bind(null,"50ea"))},children:[function(){var e;return null!==(e=w.page)&&void 0!==e&&e.kvpcjcl7_404?{path:"*",component:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.e("chunk-123e17ea").then(a.bind(null,"8cdb"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),meta:{intercept:!0}}:{path:"kvdgktrh"}}(),{alias:"/",path:"/home",name:"Home",components:{default:function(){return a.e("chunk-5611ca54").then(a.bind(null,"bb51"))}}},{path:"/settings",component:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.e("chunk-9da73cd6").then(a.bind(null,"26d3"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{path:"/test",component:function(){return a.e("chunk-ba1f8a76").then(a.bind(null,"78c1"))}},{path:"*",component:function(){return a.e("chunk-123e17ea").then(a.bind(null,"8cdb"))}}]}],ke=new G["a"]({mode:"hash",routes:ge,scrollBehavior:function(){var e=P["default"].page.state.savedPosition[P["default"].router.state.to.path]||{x:0,y:0};return e}}),_e=ke;he();var we=a("d78d");we.keys().forEach((function(e){var t=we(e);y["a"].component(e.match(/[/\\]([^/\\]+)\.vue$/)[1],t.default)})),[h["a"],b["a"],v["a"],p["a"],f["a"],d["a"],l["a"],u["a"],{com:n["a"],options:{lazyComponent:!0}},o["a"],s["a"],i["a"],c["a"],r["a"]].forEach((function(e){e.options?y["a"].use(e.com,e.options):y["a"].use(e)})),b["a"].setDefaultOptions({duration:3e3}),y["a"].config.productionTip=!1,y["a"].mixin({data:function(){return w},beforeCreate:function(){if(m["a"].isAttachCom){var e=this.$options.name;e&&(this.$root[e]&&Array.isArray(this.$root[e])?this.$root[e].push(this):this.$root[e]=[this])}},beforeDestroy:function(){var e=this.$options.name;if(m["a"].isAttachCom&&e&&Array.isArray(this.$root[e])){var t=this.$root[e].indexOf(this);-1!=t&&this.$root[e].splice(t,1)}}}),Object.assign(y["a"].prototype,q);var ye=new y["a"]({router:_e,i18n:re,render:function(e){return e(U)}}).$mount("#app");t["default"]=ye;if(window.app=ye,m["a"].isRemoveDom)for(var je=document.querySelectorAll(".data,.node_remove"),xe=0;xe<je.length;xe++)je[xe].parentNode.removeChild(je[xe])},6562:function(e,t,a){},7415:function(e,t,a){"use strict";a("e9c4");var n=a("b893"),r="kvc4regy",c={get:function(){var e,t;try{t=localStorage.getItem("wuxuwang.com")}catch(a){return console.error(a)}try{if(t=t?n["d"].decode(t):"{}",e=JSON.parse(t),!e.v||parseInt(e.v,36)<parseInt(r,36))return c.reset(),c.get()}catch(a){return console.warn("local get JSON.parse error"),c.reset(),c.get()}return c.value=e,e},reset:function(){c.value={v:r},c.set()},set:function(e){e&&(this.value=Object.assign({},this.value,e));try{localStorage.setItem("wuxuwang.com",n["d"].encode(JSON.stringify(this.value)))}catch(t){return console.error(t)}}};Object.assign(c,{value:c.get()}),t["a"]=c},"758b":function(e,t){(function(e,t){var a=t.documentElement,n=e.devicePixelRatio||1;function r(){var e=a.clientWidth/10;a.style.fontSize=e+"px"}if(r(),e.addEventListener("resize",r),n>=2){var c=t.createElement("body"),i=t.createElement("div");i.style.border=".5px solid transparent",c.appendChild(i),a.appendChild(c),1===i.offsetHeight&&a.classList.add("hairlines"),a.removeChild(c)}})(window,document)},"78ad":function(e,t,a){},"7a5c":function(e,t,a){"use strict";a.r(t);a("d3b7");t["default"]={state:{stack:[]},getters:{stackMap:function(){return this.state.stack.reduce((function(e,t){return e[t.path]=t,e}),{})}},mutations:{},actions:{}}},"7c55":function(e,t,a){"use strict";a("2395")},"815d":function(e,t,a){"use strict";a.r(t);var n={from:"",to:"",isRouting:!1,action:""},r={},c={},i={};t["default"]={state:n,getters:r,mutations:c,actions:i}},"8c53":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"kwabf0q9_com"},[a("div",{staticClass:"df jcsb aic"},[a("div",{staticClass:"df aic"},[a("van-image",{staticClass:"kvl0avoo",attrs:{src:e.head,"lazy-load":"",round:""},scopedSlots:e._u([{key:"loading",fn:function(){return[a("div",{staticClass:"kvurdces_loading fs14"},[a("van-loading",{attrs:{color:e.cTheme}})],1)]},proxy:!0},{key:"error",fn:function(){return[a("div",{staticClass:"kvurf9qz_error"},[a("van-icon",{attrs:{name:"photo"}})],1)]},proxy:!0}])}),a("span",{staticClass:"ml20"},[e._v(" "+e._s(e.name)+" ")])],1),a("div",{staticClass:"kwafdwqz"},[e._v(" "+e._s(e.how_ago)+" ")])]),a("div",{staticClass:"kwactzqw df mt20"},[a("div",{staticClass:"kwacwc7h_date df fdc aic fls"},[a("div",{staticClass:"kwadx6j5"},[e._v(" "+e._s(e.release_time)+" ")]),a("div",{staticClass:"kwadrawm"},[e._v("句子迷日签")])]),a("div",{staticClass:"flg df aic jcc"},[a("div",{staticClass:"kwah6980"},[e._v(" "+e._s(e.content)+" ")])]),a("div",{staticClass:"kwacwgbc_kw fls"},[e._l(e.words,(function(t,n){return a("div",{key:n,staticClass:"kwai60bj df jcsb ma"},[a("span",[e._v(" "+e._s(t.word)+" ")]),a("span",{staticClass:"kwaifiie_py"},[e._v(" "+e._s(t.pinyin)+" ")])])})),a("div",{staticClass:"kwaib6dd tr ma fs28"},[e._v(" "+e._s(e.author_say)+" ")])],2)]),a("div",{staticClass:"tr kvl1cref"},[a("van-icon",{staticClass:"kvl1t4cc kwa2mwpr_id",class:[{is_love:e.is_love}],attrs:{name:e.is_love?"like":"like-o"},on:{click:function(t){return e.$emit("love")}}}),a("span",[e._v(" "+e._s(e.love_count)+" ")]),a("van-icon",{staticClass:"kvl1t4cc kvuqtyqk_id",attrs:{"class-prefix":"icon",name:"wenjianjia"},on:{click:function(t){return e.$emit("collect")}}}),a("van-icon",{staticClass:"kvl1t4cc kvuqw3j4_id",attrs:{"class-prefix":"icon",name:"fenxiang"},on:{click:function(t){return e.$emit("share")}}})],1)])},r=[],c=(a("a9e3"),{inheritAttrs:!1,name:"jz_card_daysign",props:{head:{type:String,required:!0},name:{type:String,required:!0},how_ago:{type:String,required:!0},release_time:{type:String,required:!0},content:{type:String,required:!0},words:{type:Array,required:!0},author_say:{type:String,required:!0},love_count:{type:Number,required:!0},is_love:{type:Boolean,required:!0}}}),i=c,s=(a("af37"),a("2877")),o=Object(s["a"])(i,n,r,!1,null,null,null);t["default"]=o.exports},9013:function(e,t,a){"use strict";a("78ad")},"9f53":function(e,t,a){"use strict";a.r(t),t["default"]={state:{},getters:{},mutations:{},actions:{}}},a17a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"kvjmvqxx_com"},[a("van-tabbar",{attrs:{placeholder:!0},model:{value:e.tabbar_index,callback:function(t){e.tabbar_index=t},expression:"tabbar_index"}},[a("van-tabbar-item",{attrs:{icon:"wap-home-o",to:e.$store.views.Home.state.currentNav.href,replace:!0}},[e._v(" 首页 ")]),a("van-tabbar-item",{attrs:{"icon-prefix":"icon",icon:"biji",to:"/daysign",replace:!0}},[e._v(" 日签 ")]),a("div",{staticClass:"kw3416h9"},[a("div",{staticClass:"kvl4qag2 tc"},[a("van-icon",{attrs:{"class-prefix":"icon",name:"yongyan",color:"#fff"}})],1)]),a("van-tabbar-item",{attrs:{"icon-prefix":"icon",icon:"fenlei",to:"/type",replace:!0}},[e._v(" 分类 ")]),a("van-tabbar-item",{attrs:{"icon-prefix":"icon",icon:"wode",to:"/my",replace:!0}},[e._v(" 我的 ")])],1)],1)},r=[],c=(a("c740"),a("b0c0"),{name:"jzm_tab_bar",data:function(){return{tabbar_index:0}},methods:{init:function(){var e=this;this.tabbar_index=["home","daysign","type","my"].findIndex((function(t){return t===e.$route.matched[1].name}))}},created:function(){this.init()}}),i=c,s=(a("9013"),a("2877")),o=Object(s["a"])(i,n,r,!1,null,null,null);t["default"]=o.exports},a960:function(e,t,a){"use strict";a.r(t);var n={cache:{},savedPosition:{},cancelTokenSource:null},r={},c={},i={};t["default"]={state:n,getters:r,mutations:c,actions:i}},ae1d:function(e,t,a){"use strict";a.r(t),t["default"]={state:{currentNav:{}},getters:{},mutations:{},actions:{}}},af37:function(e,t,a){"use strict";a("f268")},b0fa:function(e,t,a){},b4ac:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"kvki5240_com"},[a("div",{staticClass:"kvl1c2t4"},[a("div",{staticClass:"df jcsb aic"},[a("div",{staticClass:"df aic"},[a("van-image",{staticClass:"kvl0avoo",attrs:{src:e.head,"lazy-load":"",round:""},scopedSlots:e._u([{key:"loading",fn:function(){return[a("div",{staticClass:"kvurdces_loading fs14"},[a("van-loading",{attrs:{color:e.cTheme}})],1)]},proxy:!0},{key:"error",fn:function(){return[a("div",{staticClass:"kvurf9qz_error"},[a("van-icon",{attrs:{name:"photo"}})],1)]},proxy:!0}])}),a("span",{staticClass:"ml20"},[e._v(" "+e._s(e.name)+" ")])],1),a("van-button",{staticClass:"kvl0dnb6",attrs:{plain:"",round:"",size:"small"},on:{click:function(t){return e.$emit("subscribe")}}},[e._v(" 关注 ")])],1),a("div",{staticClass:"mt20 tc"},[a("van-image",{staticClass:"kvl0hpfv",attrs:{src:e.pic,"lazy-load":""},scopedSlots:e._u([{key:"loading",fn:function(){return[a("div",{staticClass:"kvurdces_loading"},[a("van-loading",{attrs:{color:e.cTheme}})],1)]},proxy:!0},{key:"error",fn:function(){return[a("div",{staticClass:"kvurf9qz_error kw350amm_error"},[a("van-icon",{attrs:{name:"photo"}})],1)]},proxy:!0}])})],1),a("div",{staticClass:"kvl1vv1u"},[a("div",{staticClass:"kvl1xrv7"},[e._v(" "+e._s(e.content)+" ")]),a("div",{staticClass:"tr kvl120z0"},[e._v(" —— "+e._s(e.author)+" ")])])]),a("div",{staticClass:"kvl1cref df"},[a("div",{staticClass:"kwbfvmgp"},[a("van-icon",{staticClass:"kwa2mwpr_id",class:[{is_love:e.is_love}],attrs:{name:e.is_love?"like":"like-o"},on:{click:function(t){return e.$emit("love")}}}),a("span",[e._v(" "+e._s(e.love_count)+" ")])],1),a("div",{staticClass:"kwbfvmgp"},[a("van-icon",{staticClass:"kvuqtyqk_id",attrs:{"class-prefix":"icon",name:"wenjianjia"},on:{click:function(t){return e.$emit("collect")}}})],1),a("div",{staticClass:"kwbfvmgp"},[a("van-icon",{staticClass:"kvuqw3j4_id",attrs:{"class-prefix":"icon",name:"fenxiang"},on:{click:function(t){return e.$emit("share")}}})],1)])])},r=[],c=(a("a9e3"),{inheritAttrs:!1,name:"jzm_card_default",props:{head:{type:String,required:!0},name:{type:String,required:!0},pic:{type:String,required:!0},content:{type:String,required:!0},author:{type:String,required:!0},love_count:{type:Number,required:!0},is_love:{type:Boolean,required:!0}}}),i=c,s=(a("53ca"),a("2877")),o=Object(s["a"])(i,n,r,!1,null,null,null);t["default"]=o.exports},b893:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return d}));var n=a("ade3"),r=a("2909"),c=(a("99af"),a("498a"),a("d3b7"),a("25f0"),a("caad"),a("b0c0"),a("d81d"),a("fb6a"),a("ac1f"),a("1276"),a("5319"),a("159b"),a("a434"),a("a15b"),a("4d63"),a("c607"),a("2c3e"),a("00b4"),a("eb11")),i=a.n(c),s=a("f9b5"),o={walkTree:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!Array.isArray(e))throw new Error("please input array");for(var a=function t(a,n,c,i){if(Object.defineProperties(a,{_root:{enumerable:!1,configurable:!0,writable:!1,value:e},_parent:{enumerable:!1,configurable:!0,writable:!1,value:n},_parents:{enumerable:!1,configurable:!0,get:function(){var e=[],t=a;while(t._parent)e.push(t._parent),t=t._parent;return e.reverse()}},_closest:{enumerable:!1,configurable:!0,get:function(){return[].concat(Object(r["a"])(this._parents),[this])}}}),i.enter&&i.enter(a,n,c),i.childrenProp=i.childrenProp||"children",Array.isArray(a[i.childrenProp]))for(var s=0;s<a[i.childrenProp].length;s++)t(a[i.childrenProp][s],a,s,i);i.leave&&i.leave(a,n,c)},n=0;n<e.length;n++)a(e[n],null,n,t)}},u={toAST:function(e){var t=[],a=Object(s["b"])(e);return Object(s["c"])(a,{enter:function(r,c){switch(Object.defineProperties(r,{parent:{enumerable:!1,configurable:!0,get:function(){return c}},v:{enumerable:!1,configurable:!0,writable:!0,value:function(e){return o.v(r,e)}}}),delete r.attributeMap,r.type){case s["a"].Text:var i=r.value.trim();""===i?t.push(r):(r.value=i,r.html=r.toString=function(){return r.value},Object.defineProperties(r,{str:{enumerable:!1,configurable:!0,get:function(){return r.toString()}}}));break;case s["a"].Tag:if(["!--"].includes(r.name))t.push(r);else{r.attr=r.attributes.map((function(e){return{key:e.name.value,val:e.value?u.getText(e.value.value):e.value,quote:e.value?e.value.quote:null}})),delete r.attributes,Object.defineProperties(r,{attr_map:{enumerable:!1,configurable:!0,get:function(){return r.attr.reduce((function(e,t){return e[t.key]=t.val,e}),{})}}}),r.close?r.html=function(){return e.slice(r.open.start,r.close.end)}:r.html=function(){return e.slice(r.open.start,r.open.end)},r.toString=function(){return u.getText(this.html())},Object.defineProperties(r,{str:{enumerable:!1,configurable:!0,get:function(){return r.toString()}}});var l=r.attr_map.id;if(l&&(a[l]=r),r.attr_map.class){var d=r.attr_map.class.trim().replace(/[\s\t\r\n]+/g," ").split(" ");d.forEach((function(e){Array.isArray(a[e])?a[e].push(r):a[e]=[r]}))}var f=r.attr_map["data-cid"];f&&(c.cid?c.cid[f]=r:c.cid=Object(n["a"])({},f,r))}break}}}),t.forEach((function(e){e.parent?e.parent.body.splice(e.parent.body.indexOf(e),1):a.splice(a.indexOf(e),1)})),a},getText:function(e){var t=document.createElement("div");return t.innerHTML=e,t.innerText.trim()}},l={encode:function(e){var t=["\\+"],a=["."],n=i.a.compressToEncodedURIComponent(e);return t.forEach((function(e,t){n=n.replace(new RegExp(e,"g"),a[t])})),n},decode:function(e){var t=["\\."],a=["+"],n=e;return t.forEach((function(e,t){n=n.replace(new RegExp(e,"g"),a[t])})),n=i.a.decompressFromEncodedURIComponent(n),n}},d={isMobileUA:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},isMobile:function(){return/Android|Linux|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)}}},b8e3:function(e,t,a){},c100:function(e,t,a){"use strict";a.r(t),t["default"]={state:{},getters:{},mutations:{},actions:{}}},d78d:function(e,t,a){var n={"./app/jzm-card-daysign.vue":"8c53","./app/jzm-card-default.vue":"b4ac","./app/jzm-navbar.vue":"d9e6","./app/jzm-tab-bar.vue":"a17a","./common/wx-router-link.vue":"ea22"};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id="d78d"},d8ad:function(e,t,a){"use strict";a("b8e3")},d9e6:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"kwa79j7s_com"},[a("van-nav-bar",e._b({scopedSlots:e._u([{key:"right",fn:function(){return[a("van-icon",{staticClass:"kwa74xo4_icon",attrs:{name:"search"}})]},proxy:!0}])},"van-nav-bar",e.attrs,!1))],1)},r=[],c={name:"jzm-navbar",computed:{attrs:function(){return this.$attrs}}},i=c,s=(a("d8ad"),a("2877")),o=Object(s["a"])(i,n,r,!1,null,null,null);t["default"]=o.exports},da19:function(e,t,a){var n={"./history.js":"7a5c","./index.js":"4360","./page.js":"a960","./router.js":"815d","./uniapp.js":"e4dc","./views/Base.js":"c100","./views/Home.js":"ae1d","./views/Home/Nice.js":"9f53"};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id="da19"},db49:function(e,t,a){"use strict";a("caad"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("25f0"),a("d81d"),a("b64b");var n=a("7415");window.requirejs.config({paths:{jweixin:"https://res.wx.qq.com/open/js/jweixin-1.4.0.js?noext",uniWebview:"https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js?noext"}});var r={routerMode:function(){return["ast","refresh","api"].includes(n["a"].value.routerMode)?n["a"].value.routerMode:"ast"}(),isCheck:function(){return!![!0,!1].includes(n["a"].value.isCheck)&&n["a"].value.isCheck}(),isMock:function(){return!0}(),isPrintConfig:function(){return!![!0,!1].includes(n["a"].value.isPrintConfig)&&n["a"].value.isPrintConfig}(),isRemoveDom:function(){return![!0,!1].includes(n["a"].value.isRemoveDom)||n["a"].value.isRemoveDom}(),isAttachCom:function(){return!![!0,!1].includes(n["a"].value.isAttachCom)&&n["a"].value.isAttachCom}(),isAttachApp:function(){return!![!0,!1].includes(n["a"].value.isAttachApp)&&n["a"].value.isAttachApp}(),axiosBaseUrl:function(){return n["a"].value.axiosBaseUrl||location.origin}()};if(n["a"].set(r),t["a"]=r,r.isPrintConfig){var c=new URL(location.href);c.pathname="/settings",c.searchParams.set("jzm","1"),console.group("配置信息---".concat(c.toString())),console.table(Object.keys(r).map((function(e){return{key:e,value:r[e]}})),["key","value"]),console.groupEnd("配置信息")}},e4dc:function(e,t,a){"use strict";a.r(t);var n=a("5530"),r=(a("e9c4"),a("b893")),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])(Object(n["a"])({},e),{},{_from:"h5",_toPage:"indexIndex",_timestamp:Date.now()})};t["default"]={state:{sendData:{},receiveData:{},canPostData:!1},getters:{sendDataEncoded:function(){return r["d"].encode(JSON.stringify(this.state.sendData))}},mutations:{postData:function(e){this.state.sendData=Object(n["a"])({},c(e)),window.uni&&uni.webView.navigateTo({url:"/pages/index/transfer?_transfer=".concat(this.getters.sendDataEncoded)})}},actions:{}}},ea22:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",e._g(e._b({},"a",e.attrs,!1),e.listeners),[e._t("default")],2)},r=[],c=a("5530"),i={name:"wx_router_link",props:{},computed:{attrs:function(){var e="router-link",t=document.createElement("a");t.href=this.$attrs.href,location.host!==t.host&&(e="a");var a=Object(c["a"])({is:e},this.$attrs);switch(a.is){case"router-link":a.to=this.$attrs.href||this.$attrs.to,delete a.href;break;case"a":a.href=this.$attrs.href||this.$attrs.to,delete a.to;break}return a},listeners:function(){return Object(c["a"])({},this.$listeners)}}},s=i,o=(a("001c"),a("2877")),u=Object(o["a"])(s,n,r,!1,null,null,null);t["default"]=u.exports},f268:function(e,t,a){}}]);
//# sourceMappingURL=chunk-common.073aa874.js.map