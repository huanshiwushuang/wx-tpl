(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1621b6ea"],{"8d91":function(e,n,a){},bb51:function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("div",{staticClass:"kw0hjnhc pr tc"},[a("h1",{staticClass:"kw0h39r8"},[e._v("句子迷")]),a("van-icon",{staticClass:"fr kw0i22hw cp",attrs:{name:"search"}})],1),a("van-tabs",{staticClass:"kw8wvuaw",attrs:{swipeable:"",sticky:""},on:{change:e.on_tabs_change},model:{value:e.nav_index,callback:function(n){e.nav_index=n},expression:"nav_index"}},e._l(e.nav,(function(n){return a("van-tab",{key:n.href,attrs:{title:n.label}},[a("keep-alive",[n.name===e.$route.matched[2].name?a("router-view"):e._e()],1)],1)})),1)],1)},i=[],r=(a("c740"),a("b0c0"),a("ac1f"),a("5319"),{name:"home",data:function(){return{nav:[{name:"home_nice",label:"精选",href:"/"},{name:"home_newest",label:"最新",href:"/index/newest"},{name:"home_popular",label:"热门",href:"/index/popular"},{name:"home_rank",label:"排行",href:"/index/rank"}],nav_index:0}},methods:{init:function(){var e=this;this.nav_index=this.nav.findIndex((function(n){return e.$route.matched[2].name===n.name}));var n=this.nav[this.nav_index];n.href=this.$route.fullPath,this.$store.commit("views/Home/tabbar_url",this.$route.fullPath)},on_tabs_change:function(e){var n=this.nav[e];this.$router.replace(n.href),this.$store.commit("views/Home/tabbar_url",n.href)}},created:function(){this.init()}}),s=r,c=(a("de16"),a("2877")),h=Object(c["a"])(s,t,i,!1,null,null,null);n["default"]=h.exports},de16:function(e,n,a){"use strict";a("8d91")}}]);
//# sourceMappingURL=chunk-1621b6ea.a157bc26.js.map