(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(e,t,n){e.exports=n("56d7")},"001c":function(e,t,n){"use strict";n("b0fa")},2395:function(e,t,n){},4360:function(e,t,n){"use strict";n.r(t),n.d(t,"process_module",(function(){return u}));var a=n("5530"),r=(n("d3b7"),n("4de4"),n("ddb0"),n("ac1f"),n("00b4"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("1276"),n("5319"),n("159b"),n("a15b"),n("fb6a"),n("b64b"),n("caad"),n("2532"),n("e9c4"),n("2b0e")),c=n("2f62");r["a"].use(c["a"]);var o=n("da19"),i={},s=o.keys().filter((function(e){return!new RegExp("\\./index.js","i").test(e)})).reduce((function(e,t){var n=t.replace(/^\.[/\\]/,"").replace(/\.js$/,"").replace(/\\/,"/").split("/");return n.forEach((function(r,c){var s=n.slice(0,c).join("/"),l=n.slice(0,c+1).join("/");if(c===n.length-1){var d=Object(a["a"])({state:{},getters:{},mutations:{},actions:{},modules:{}},o(t).default);u(d),i[l]=d}else i[l]=i[l]||{modules:{}};i[l].namespaced=!0,i[s]?i[s].modules[r]=i[l]:e[r]=i[l]})),e}),{});function u(e){for(var t=Object.keys(e.state),n=["_cache"],a=0,r=n;a<r.length;a++){var c=r[a];if(t.includes(c))return console.error("state 中禁止使用保留字",n)}t.forEach((function(t){t in e.mutations||(e.mutations[t]=function(e,n){e[t]=n});var n="".concat(t,"_reset");n in e.actions||(e.actions[n]=function(n){var a=n.commit;a(t,JSON.parse(JSON.stringify(e.state._cache[t])))})})),e.actions.reset_self=function(e){var n=e.dispatch;t.forEach((function(e){n("".concat(e,"_reset"))}))},e.state._cache=JSON.parse(JSON.stringify(e.state))}var l={strict:!1,modules:s};t["default"]=new c["a"].Store(l)},5240:function(e,t,n){},"53ca":function(e,t,n){"use strict";n("5240")},"56d7":function(e,t,n){"use strict";n.r(t);n("6e75");var a=n("343b"),r=(n("93b0"),n("2bdd")),c=(n("2591"),n("3104")),o=(n("bca0"),n("543e")),i=(n("bf24"),n("44bf")),s=(n("8990"),n("5e46")),u=(n("558f"),n("0b33")),l=(n("4391"),n("58e6")),d=(n("b342"),n("ad06")),f=(n("4627"),n("2ed4")),p=(n("1318"),n("ac28")),h=(n("433b"),n("d399")),m=(n("c625"),n("b650")),b=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("159b"),n("b0c0"),n("a434"),n("6562"),n("758b"),n("f0e6"),n("db49")),v=n("d2f6"),_=n("b893"),k={page:null,json:null,local:v["a"],coms:[],bodyClass:[],c_theme:"#FF7904",is_mobile_ua:_["a"].is_mobile_ua()};window.res=k;var g=k,y=n("2b0e"),x=n("a78e"),w=n.n(x),j=n("5530"),O=n("1da1"),S=(n("96cf"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("25f0"),n("bc3a")),E=n.n(S),C={baseURL:b["a"].axios_base_url},$=E.a.create(C);$.interceptors.request.use(function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=document.createElement("a"),n.href=t.url,a=new URL(n.href),a.searchParams.has("mock")||b["a"].is_mock&&a.searchParams.set("mock",1),t.url=a.toString(),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),$.interceptors.response.use(function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var a,r,c,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!b["a"].is_check){e.next=10;break}return a=t.data.json,e.next=4,n.e("chunk-4dfb4ca6").then(n.bind(null,"cadb"));case 4:r=e.sent,c=r.default,o=document.createElement("a"),o.href=t.config.url,i=new URL(o.href),c({pathname:i.pathname,check_data:a});case 10:return e.abrupt("return",t.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}));var P={axios:$,get:function(e,t,n){return $.get(e,Object(j["a"])({params:t},n))},post:function(e,t,n){return $.post(e,t,n)}},R={$vue:y["a"],$win:window,$axios:P,$cookie:w.a,$get:P.get,$post:P.post,$str_encode:_["c"].encode,$str_decode:_["c"].decode,$toast:h["a"]},L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._l(e.coms,(function(t,a){return n(t,e._g(e._b({key:a,tag:"component"},"component",t.attrs,!1),t.listeners),e._l(t.slots,(function(t,r){return n(t,e._g(e._b({key:a+"_"+r,tag:"component"},"component",t.attrs,!1),t.listeners))})),1)})),n("div",{class:e.bodyClass,staticStyle:{display:"none"},attrs:{id:"ksh34m2s"}})],2)},A=[],q={name:"App",watch:{bodyClass:function(){this.$nextTick((function(){document.body.classList=document.querySelector("#ksh34m2s").classList}))}}},N=q,T=(n("7c55"),n("2877")),z=Object(T["a"])(N,L,A,!1,null,null,null),U=z.exports,J=n("4360"),I=(n("ac1f"),n("841c"),n("8c4f")),M=n("2909"),F=n("ade3"),D=(n("99af"),n("5319"),n("fb6a"),n("d81d"),n("07ac"),n("6062"),n("4de4"),n("b64b"),n("323e")),H=n.n(D),B=(n("a5d8"),n("aa7a"),n("3c69")),W=n("a925");y["a"].use(W["a"]);var X,Y=new W["a"],G=Y,K=null,Q={isLoaded:!1,waitLoaded:function(){return new Promise((function(e,t){if(Q.isLoaded)return e();K={resolve:e,reject:t}}))}};function V(){var e=w.a.get("think_lang");return e?e.replace("-","_"):"zh_cn"}Object(O["a"])(regeneratorRuntime.mark((function e(){var t,a,r,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=V(),e.t0=t,e.next="en_us"===e.t0?4:16;break;case 4:return Y.locale=t,a=n.e("chunk-2d21e554").then(n.bind(null,"d4b0")),r=n.e("chunk-2d0dde02").then(n.bind(null,"82f8")),e.next=9,a;case 9:return a=e.sent,e.next=12,r;case 12:return r=e.sent,Y.setLocaleMessage(t,Object(j["a"])({},r.default)),B["a"].use(Y.locale,a.default),e.abrupt("break",27);case 16:return Y.locale="zh-cn",c=Promise.resolve().then(n.bind(null,"8c18")),o=n.e("chunk-2d229be6").then(n.bind(null,"df6d")),e.next=21,c;case 21:return c=e.sent,e.next=24,o;case 24:o=e.sent,Y.setLocaleMessage(Y.locale,Object(j["a"])({},o.default)),B["a"].use(Y.locale,c.default);case 27:Q.isLoaded=!0,K&&K.resolve();case 29:case"end":return e.stop()}}),e)})))(),H.a.configure({showSpinner:!1});var Z=I["a"].prototype.replace;I["a"].prototype.replace=function(){return J["default"].commit("history/action","replace"),Z.apply(this,arguments)};var ee=I["a"].prototype.push;I["a"].prototype.push=function(){return J["default"].commit("history/action","push"),ee.apply(this,arguments)},window.addEventListener("popstate",(function(e){var t,n,a,r,c=null!==(t=null===(n=e.state)||void 0===n?void 0:n.key)&&void 0!==t?t:-1,o=null!==(a=null===(r=X)||void 0===r?void 0:r.key)&&void 0!==a?a:-1;parseFloat(o)>parseFloat(c)?J["default"].commit("history/action","back"):J["default"].commit("history/action","forward")}));var te,ne,ae,re,ce={mode:b["a"].router_mode||"ast"},oe=null;function ie(){de.beforeEach(function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t,a,r){var c,o,i,s,u,l,d,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=Q.waitLoaded(),ae=t,re=a,i=document.createElement("a"),i.href=a.path,te=location.pathname,J["default"].commit("page/from_pathname",te),i.href="".concat(null!==(c=de.options.base)&&void 0!==c?c:"").concat(t.path),ne=new URL(i.href).pathname,J["default"].commit("page/to_pathname",ne),e.t0=ce.mode,e.next="refresh"===e.t0?13:21;break;case 13:if(a===I["a"].START_LOCATION){e.next=20;break}if(a.fullPath.replace(a.hash,"")!==t.fullPath.replace(t.hash,"")){e.next=18;break}return e.abrupt("return",r());case 18:return location=ne,e.abrupt("return");case 20:return e.abrupt("break",21);case 21:if(i.href=C.baseURL,re!==I["a"].START_LOCATION||new URL(i.href).host!==location.host){e.next=37;break}if(s=_["b"].to_ast(document.documentElement.outerHTML),e.prev=24,oe=JSON.parse(null===(u=s.page)||void 0===u?void 0:u.str),!b["a"].is_check){e.next=32;break}return e.next=29,n.e("chunk-4dfb4ca6").then(n.bind(null,"cadb"));case 29:l=e.sent,d=l.default,d({pathname:ae.path,check_data:oe.json});case 32:e.next=37;break;case 34:e.prev=34,e.t1=e["catch"](24),console.warn("首屏 page 数据解析失败");case 37:if(oe){e.next=49;break}e.t2=ce.mode,e.next="ast"===e.t2?41:44;break;case 41:return f=J["default"].state.page.cache[ne],f&&(oe=f),e.abrupt("break",44);case 44:if(oe){e.next=49;break}return H.a.start(),e.next=48,P.get(t.fullPath);case 48:oe=e.sent;case 49:e.t3=ce.mode,e.next="ast"===e.t3?52:54;break;case 52:return J["default"].commit("page/saved_position",Object(j["a"])(Object(j["a"])({},J["default"].state.page.saved_position),{},Object(F["a"])({},te,{x:window.scrollX,y:window.scrollY}))),e.abrupt("break",54);case 54:return e.next=56,o;case 56:r();case 57:case"end":return e.stop()}}),e,null,[[24,34]])})));return function(t,n,a){return e.apply(this,arguments)}}()),de.afterEach((function(){switch(X=history.state,g.page=oe,g.json=g.page.json,ce.mode){case"ast":switch(J["default"].commit("page/cache",Object(j["a"])(Object(j["a"])({},J["default"].state.page.cache),{},Object(F["a"])({},ne,oe))),re!==I["a"].START_LOCATION&&(oe.t&&(document.title=oe.t),oe.k&&document.querySelector("#k").setAttribute("content",oe.k),oe.d&&document.querySelector("#d").setAttribute("content",oe.d)),J["default"].state.history.action){case"replace":J["default"].commit("history/stack",[].concat(Object(M["a"])(Object(M["a"])(J["default"].state.history.stack).slice(0,-1)),[{to:ae,from:re}]));break;case"back":J["default"].commit("history/stack",Object(M["a"])(J["default"].state.history.stack).slice(0,-1)),J["default"].commit("history/pointer",J["default"].state.history.pointer-1);break;case"forward":case"push":default:J["default"].commit("history/stack",[].concat(Object(M["a"])(J["default"].state.history.stack),[{to:ae,from:re}])),J["default"].commit("history/pointer",J["default"].state.history.pointer+1)}switch(ae.meta.exclude=[],J["default"].state.history.action){case"back":ae.meta.exclude=Object.values(re.matched[1].components).map((function(e){return e.name||console.error("此组件未配置 name, 无法在 back 时清除缓存",e),e.name})),Object(M["a"])(new Set(ae.meta.exclude)).length!==ae.meta.exclude.length&&console.error("组件名重复",ae.meta.exclude),J["default"].commit("page/cache",Object(j["a"])({},Object.keys(J["default"].state.page.cache).filter((function(e){return e!=="".concat(C.baseURL).concat(re.fullPath)})).reduce((function(e,t){return e[t]=J["default"].state.page.cache[t],e}),{})));break}break}oe=null,H.a.done()})),de.onError((function(){H.a.done(),history.replaceState({},"",ne)}))}var se=ie;y["a"].use(I["a"]);var ue=[{path:"/",component:function(){return n.e("chunk-055842ec").then(n.bind(null,"50ea"))},children:[function(){var e;return null!==(e=g.page)&&void 0!==e&&e.kvpcjcl7_404?{path:"*",component:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e("chunk-123e17ea").then(n.bind(null,"8cdb"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),meta:{intercept:!0}}:{path:"kvdgktrh"}}(),{path:"/",name:"home",components:{default:function(){return n.e("chunk-4bc099c9").then(n.bind(null,"bb51"))},footer:function(){return Promise.resolve().then(n.bind(null,"a17a"))}},children:[{path:"",name:"home_nice",component:function(){return n.e("chunk-700b5d16").then(n.bind(null,"69e6"))}},{path:"index/newest",name:"home_newest",component:function(){return n.e("chunk-fccb2a86").then(n.bind(null,"1e10"))}},{path:"index/popular",name:"home_popular",component:function(){return n.e("chunk-e2ee513e").then(n.bind(null,"15a2"))}},{path:"index/rank",name:"home_rank",component:function(){return n.e("chunk-dfb045c2").then(n.bind(null,"5fff"))}}]},{path:"/daysign",name:"daysign",components:{default:function(){return n.e("chunk-e66d5670").then(n.bind(null,"c6070"))},footer:function(){return Promise.resolve().then(n.bind(null,"a17a"))}}},{path:"/type",name:"type",components:{default:function(){return n.e("chunk-0513f1de").then(n.bind(null,"16f2"))},footer:function(){return Promise.resolve().then(n.bind(null,"a17a"))}}},{path:"/my",name:"my",components:{default:function(){return n.e("chunk-36fb9dd5").then(n.bind(null,"f400"))},footer:function(){return Promise.resolve().then(n.bind(null,"a17a"))}}},{path:"/settings",component:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!new URLSearchParams(location.search).has("jzm")){e.next=4;break}return e.next=3,n.e("chunk-9da73cd6").then(n.bind(null,"26d3"));case 3:return e.abrupt("return",e.sent);case 4:return e.next=6,n.e("chunk-123e17ea").then(n.bind(null,"8cdb"));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{path:"/test",component:function(){return n.e("chunk-9da73cd6").then(n.bind(null,"26d3"))}},{path:"*",component:function(){return n.e("chunk-123e17ea").then(n.bind(null,"8cdb"))}}]}],le=new I["a"]({mode:"history",routes:ue,scrollBehavior:function(){var e=J["default"].state.page.saved_position[J["default"].state.page.to_pathname];return e}}),de=le;se();n("466d");var fe=n("d78d");fe.keys().forEach((function(e){var t=fe(e);y["a"].component(e.match(/[/\\]([^/\\]+)\.vue$/)[1],t.default)})),[m["a"],h["a"],p["a"],f["a"],d["a"],l["a"],u["a"],s["a"],{com:a["a"],options:{lazyComponent:!0}},i["a"],o["a"],c["a"],r["a"]].forEach((function(e){e.options?y["a"].use(e.com,e.options):y["a"].use(e)})),h["a"].setDefaultOptions({duration:3e3}),y["a"].config.productionTip=!1,y["a"].mixin({data:function(){return g},beforeCreate:function(){if(b["a"].is_attach_com){var e=this.$options.name;e&&(this.$root[e]&&Array.isArray(this.$root[e])?this.$root[e].push(this):this.$root[e]=[this])}},beforeDestroy:function(){var e=this.$options.name;if(b["a"].is_attach_com&&e&&Array.isArray(this.$root[e])){var t=this.$root[e].indexOf(this);-1!=t&&this.$root[e].splice(t,1)}}}),Object.assign(y["a"].prototype,R);var pe=new y["a"]({router:de,store:J["default"],i18n:G,render:function(e){return e(U)}}).$mount("#app");t["default"]=pe;if(b["a"].is_attach_app&&(window.app=pe),b["a"].is_remove_dom)for(var he=document.querySelectorAll(".data,.node_remove"),me=0;me<he.length;me++)he[me].parentNode.removeChild(he[me])},6562:function(e,t,n){},"758b":function(e,t){(function(e,t){var n=t.documentElement,a=e.devicePixelRatio||1;function r(){var e=n.clientWidth/10;n.style.fontSize=e+"px"}if(r(),e.addEventListener("resize",r),a>=2){var c=t.createElement("body"),o=t.createElement("div");o.style.border=".5px solid transparent",c.appendChild(o),n.appendChild(c),1===o.offsetHeight&&n.classList.add("hairlines"),n.removeChild(c)}})(window,document)},"78ad":function(e,t,n){},"7a5c":function(e,t,n){"use strict";n.r(t);n("fb6a");var a={stack:[],pointer:-1,action:""},r={current:function(e){return e.stack[e.pointer]},last:function(e){return e.stack.slice(-1)[0]}},c={},o={};t["default"]={state:a,getters:r,mutations:c,actions:o}},"7c55":function(e,t,n){"use strict";n("2395")},9013:function(e,t,n){"use strict";n("78ad")},"9f53":function(e,t,n){"use strict";n.r(t);var a={},r={},c={},o={};t["default"]={state:a,getters:r,mutations:c,actions:o}},a17a:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"kvjmvqxx_com"},[n("van-tabbar",{attrs:{placeholder:!0},model:{value:e.tabbar_index,callback:function(t){e.tabbar_index=t},expression:"tabbar_index"}},[n("van-tabbar-item",{attrs:{icon:"wap-home-o",to:["pathname","search","hash"].map((function(t){return e.$store.state.views.Home.tabbar_url[t]})).join(""),replace:!0}},[e._v(" 首页 ")]),n("van-tabbar-item",{attrs:{"icon-prefix":"icon",icon:"biji",to:"/daysign",replace:!0}},[e._v(" 日签 ")]),n("div",{staticClass:"kw3416h9"},[n("div",{staticClass:"kvl4qag2 tc"},[n("van-icon",{attrs:{"class-prefix":"icon",name:"yongyan",color:"#fff"}})],1)]),n("van-tabbar-item",{attrs:{"icon-prefix":"icon",icon:"fenlei",to:"/type",replace:!0}},[e._v(" 分类 ")]),n("van-tabbar-item",{attrs:{"icon-prefix":"icon",icon:"wode",to:"/my",replace:!0}},[e._v(" 我的 ")])],1)],1)},r=[],c=(n("c740"),n("b0c0"),{name:"jzm_tab_bar",data:function(){return{tabbar_index:0}},methods:{init:function(){var e=this;this.tabbar_index=["home","daysign","type","my"].findIndex((function(t){return t===e.$route.matched[1].name}))}},created:function(){this.init()}}),o=c,i=(n("9013"),n("2877")),s=Object(i["a"])(o,a,r,!1,null,null,null);t["default"]=s.exports},a960:function(e,t,n){"use strict";n.r(t);n("e9c4");var a={cache:{},saved_position:{},from_pathname:"",to_pathname:""},r={},c={cache:function(e,t){e.cache=JSON.parse(JSON.stringify(t))}},o={};t["default"]={state:a,getters:r,mutations:c,actions:o}},ae1d:function(e,t,n){"use strict";n.r(t);n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861");var a={tabbar_url:new URL(location.origin)},r={},c={tabbar_url:function(e,t){if("string"===typeof t){var n=document.createElement("a");n.href=t,t=new URL(n.href)}e.tabbar_url=t}},o={};t["default"]={state:a,getters:r,mutations:c,actions:o}},b0fa:function(e,t,n){},b4ac:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"kvki5240"},[n("div",{staticClass:"kvl1c2t4"},[n("div",{staticClass:"df jcsb aic"},[n("div",{staticClass:"df aic"},[n("van-image",{staticClass:"kvl0avoo",attrs:{src:e.head,"lazy-load":"",round:""},scopedSlots:e._u([{key:"loading",fn:function(){return[n("div",{staticClass:"kvurdces_loading fs14"},[n("van-loading",{attrs:{color:e.c_theme}})],1)]},proxy:!0},{key:"error",fn:function(){return[n("div",{staticClass:"kvurf9qz_error"},[n("van-icon",{attrs:{name:"photo"}})],1)]},proxy:!0}])}),n("span",{staticClass:"ml20"},[e._v(" "+e._s(e.name)+" ")])],1),n("van-button",{staticClass:"kvl0dnb6",attrs:{plain:"",round:"",size:"small"},on:{click:function(t){return e.$emit("subscribe")}}},[e._v(" 关注 ")])],1),n("div",{staticClass:"mt20 tc"},[n("van-image",{staticClass:"kvl0hpfv",attrs:{src:e.pic,"lazy-load":""},scopedSlots:e._u([{key:"loading",fn:function(){return[n("div",{staticClass:"kvurdces_loading"},[n("van-loading",{attrs:{color:e.c_theme}})],1)]},proxy:!0},{key:"error",fn:function(){return[n("div",{staticClass:"kvurf9qz_error kw350amm_error"},[n("van-icon",{attrs:{name:"photo"}})],1)]},proxy:!0}])})],1),n("div",{staticClass:"kvl1vv1u"},[n("div",{staticClass:"kvl1xrv7"},[e._v(" "+e._s(e.content)+" ")]),n("div",{staticClass:"tr kvl120z0"},[e._v("—— "+e._s(e.author))])])]),n("div",{staticClass:"tr kvl1cref"},[n("van-icon",{staticClass:"kvl1t4cc",attrs:{"class-prefix":"icon",name:"xihuan",color:"#9c9c9c"},on:{click:function(t){return e.$emit("love")}}}),n("span",[e._v(" "+e._s(e.love)+" ")]),n("van-icon",{staticClass:"kvl1t4cc kvuqtyqk_id",attrs:{"class-prefix":"icon",name:"wenjianjia",color:"#9c9c9c"},on:{click:function(t){return e.$emit("collect")}}}),n("van-icon",{staticClass:"kvl1t4cc kvuqw3j4_id",attrs:{"class-prefix":"icon",name:"fenxiang",color:"#9c9c9c"},on:{click:function(t){return e.$emit("share")}}})],1)])},r=[],c=(n("a9e3"),{inheritAttrs:!1,name:"jzm-jingxuan",props:{head:{type:String,required:!0},name:{type:String,required:!0},pic:{type:String,required:!0},content:{type:String,required:!0},author:{type:String,required:!0},love:{type:Number,required:!0}},mounted:function(){setTimeout((function(){}),1e3)}}),o=c,i=(n("53ca"),n("2877")),s=Object(i["a"])(o,a,r,!1,null,null,null);t["default"]=s.exports},b893:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return d}));var a=n("ade3"),r=n("b85c"),c=(n("ac1f"),n("1276"),n("caad"),n("498a"),n("d3b7"),n("25f0"),n("b0c0"),n("d81d"),n("fb6a"),n("5319"),n("159b"),n("a434"),n("a15b"),n("99af"),n("5b81"),n("4d63"),n("c607"),n("2c3e"),n("00b4"),n("eb11")),o=n.n(c),i=n("f9b5"),s={walk_tree:function(e,t){if(!Array.isArray(e))throw new Error("please input array");for(var n=function e(t,n,a,r){if(r.enter&&r.enter(t,n,a),r.childrenProp=r.childrenProp||"children",Array.isArray(t[r.childrenProp]))for(var c=0;c<t[r.childrenProp].length;c++)e(t[r.childrenProp][c],t,c,r);r.leave&&r.leave(t,n,a)},a=0;a<e.length;a++)n(e[a],null,a,t)},v:function(e,t){var n=t.split(".");try{var a,c=e,o=Object(r["a"])(n);try{for(o.s();!(a=o.n()).done;){var i=a.value;c=c[i]}}catch(s){o.e(s)}finally{o.f()}return[void 0,null].includes(c)&&(console.error("_.v 访问返回 ".concat(c)),console.error("访问数据",e),console.error("访问路径",t)),c}catch(u){console.error("访问数据: ",e),console.error("访问路径: ",t),console.error("错误: ",u)}},random_num:function(e,t){var n=t-e,a=Math.random(),r=e+Math.round(a*(n+1));return r}},u={to_ast:function(e){var t=[],n=Object(i["b"])(e);return Object(i["c"])(n,{enter:function(r,c){switch(Object.defineProperties(r,{parent:{enumerable:!1,configurable:!0,get:function(){return c}},v:{enumerable:!1,configurable:!0,writable:!0,value:function(e){return s.v(r,e)}}}),delete r.attributeMap,r.type){case i["a"].Text:var o=r.value.trim();""===o?t.push(r):(r.value=o,r.html=r.toString=function(){return r.value},Object.defineProperties(r,{str:{enumerable:!1,configurable:!0,get:function(){return r.toString()}}}));break;case i["a"].Tag:if(["!--"].includes(r.name))t.push(r);else{r.attr=r.attributes.map((function(e){return{key:e.name.value,val:e.value?u.get_text(e.value.value):e.value,quote:e.value?e.value.quote:null}})),delete r.attributes,Object.defineProperties(r,{attr_map:{enumerable:!1,configurable:!0,get:function(){return r.attr.reduce((function(e,t){return e[t.key]=t.val,e}),{})}}}),r.close?r.html=function(){return e.slice(r.open.start,r.close.end)}:r.html=function(){return e.slice(r.open.start,r.open.end)},r.toString=function(){return u.get_text(this.html())},Object.defineProperties(r,{str:{enumerable:!1,configurable:!0,get:function(){return r.toString()}}});var l=r.attr_map.id;if(l&&(n[l]=r),r.attr_map.class){var d=r.attr_map.class.trim().replace(/[\s\t\r\n]+/g," ").split(" ");d.forEach((function(e){Array.isArray(n[e])?n[e].push(r):n[e]=[r]}))}var f=r.attr_map["data-cid"];f&&(c.cid?c.cid[f]=r:c.cid=Object(a["a"])({},f,r))}break}}}),t.forEach((function(e){e.parent?e.parent.body.splice(e.parent.body.indexOf(e),1):n.splice(n.indexOf(e),1)})),n},get_text:function(e){var t=document.createElement("div");return t.innerHTML=e,t.innerText.trim()}},l={encode:function(e){var t=["-","\\+"],n=["__","_"],a=o.a.compressToEncodedURIComponent(e);return t.forEach((function(e,t){a=a.replaceAll(new RegExp(e,"g"),n[t])})),a},decode:function(e){var t=["__","_"],n=["-","+"],a=e;return t.forEach((function(e,t){a=a.replace(new RegExp(e,"g"),n[t])})),a=o.a.decompressFromEncodedURIComponent(a),a}},d={is_mobile_ua:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},is_mobile:function(){return/Android|Linux|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)}}},d2f6:function(e,t,n){"use strict";n("e9c4");var a=n("b893"),r="kvc4regy",c={get:function(){var e,t;try{t=localStorage.getItem("wuxuwang.com")}catch(n){return console.error(n)}try{if(t=t?a["c"].decode(t):"{}",e=JSON.parse(t),!e.v||parseInt(e.v,36)<parseInt(r,36))return c.reset(),c.get()}catch(n){return console.error("local get JSON.parse error"),c.reset(),c.get()}return c.value=e,e},reset:function(){c.value={v:r},c.set()},set:function(e){e&&(this.value=Object.assign({},this.value,e));try{localStorage.setItem("wuxuwang.com",a["c"].encode(JSON.stringify(this.value)))}catch(t){return console.error(t)}}};Object.assign(c,{value:c.get()}),t["a"]=c},d78d:function(e,t,n){var a={"./app/jzm-card-default.vue":"b4ac","./app/jzm-tab-bar.vue":"a17a","./common/wx-router-link.vue":"ea22"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="d78d"},da19:function(e,t,n){var a={"./history.js":"7a5c","./index.js":"4360","./page.js":"a960","./views/Home.js":"ae1d","./views/Home/Nice.js":"9f53"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="da19"},db49:function(e,t,n){"use strict";n("caad"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("25f0"),n("d81d"),n("b64b");var a=n("d2f6"),r={router_mode:function(){return["ast","refresh","api"].includes(a["a"].value.router_mode)?a["a"].value.router_mode:"ast"}(),is_check:function(){return!![!0,!1].includes(a["a"].value.is_check)&&a["a"].value.is_check}(),is_mock:function(){return!![!0,!1].includes(a["a"].value.is_mock)&&a["a"].value.is_mock}(),is_print_config:function(){return!![!0,!1].includes(a["a"].value.is_print_config)&&a["a"].value.is_print_config}(),is_remove_dom:function(){return![!0,!1].includes(a["a"].value.is_remove_dom)||a["a"].value.is_remove_dom}(),is_attach_com:function(){return!![!0,!1].includes(a["a"].value.is_attach_com)&&a["a"].value.is_attach_com}(),is_attach_app:function(){return!![!0,!1].includes(a["a"].value.is_attach_app)&&a["a"].value.is_attach_app}(),axios_base_url:function(){return a["a"].value.axios_base_url||location.origin}()};if(a["a"].set(r),t["a"]=r,r.is_print_config){var c=new URL(location.href);c.pathname="/settings",c.searchParams.set("jzm","1"),console.group("配置信息---".concat(c.toString())),console.table(Object.keys(r).map((function(e){return{key:e,value:r[e]}})),["key","value"]),console.groupEnd("配置信息")}},ea22:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",e._g(e._b({},"a",e.attrs,!1),e.listeners),[e._t("default")],2)},r=[],c=n("5530"),o={name:"wx_router_link",props:{},computed:{attrs:function(){var e="router-link",t=document.createElement("a");t.href=this.$attrs.href,location.host!==t.host&&(e="a");var n=Object(c["a"])({is:e},this.$attrs);switch(n.is){case"router-link":n.to=this.$attrs.href,delete n.href;break;case"a":break;default:delete n.href}return n},listeners:function(){return Object(c["a"])({},this.$listeners)}}},i=o,s=(n("001c"),n("2877")),u=Object(s["a"])(i,a,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-common.dcc78492.js.map