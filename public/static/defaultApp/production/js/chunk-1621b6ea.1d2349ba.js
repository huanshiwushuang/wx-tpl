(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1621b6ea"],{"8d91":function(e,a,n){},bb51:function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"df fdc flg"},[n("div",{staticClass:"kw0hjnhc pr tc"},[n("h1",{staticClass:"kw0h39r8"},[e._v("句子迷")]),n("van-icon",{staticClass:"fr kw0i22hw cp",attrs:{name:"search"}})],1),n("van-tabs",{staticClass:"kw8wvuaw",attrs:{swipeable:"",sticky:""},on:{change:e.on_tabs_change},model:{value:e.nav_index,callback:function(a){e.nav_index=a},expression:"nav_index"}},e._l(e.nav,(function(a){return n("van-tab",{key:a.href,attrs:{title:a.label}},[n("keep-alive",[n("router-view",{directives:[{name:"show",rawName:"v-show",value:a.name===e.$route.matched[2].name,expression:"v.name === $route.matched[2].name"}]})],1)],1)})),1)],1)},i=[],s=(n("c740"),n("b0c0"),n("ac1f"),n("5319"),{name:"home",data:function(){return{nav:[{name:"home_nice",label:"精选",href:"/"},{name:"home_newest",label:"最新",href:"/index/newest"},{name:"home_popular",label:"热门",href:"/index/popular"},{name:"home_rank",label:"排行",href:"/index/rank"}],nav_index:0}},methods:{init:function(){var e=this;this.nav_index=this.nav.findIndex((function(a){return e.$route.matched[2].name===a.name}));var a=this.nav[this.nav_index];a.href=this.$route.fullPath,this.$store.commit("views/Home/tabbar_url",this.$route.fullPath)},on_tabs_change:function(e){var a=this.nav[e];this.$router.replace(a.href),this.$store.commit("views/Home/tabbar_url",a.href)}},created:function(){this.init()}}),r=s,c=(n("de16"),n("2877")),o=Object(c["a"])(r,t,i,!1,null,null,null);a["default"]=o.exports},de16:function(e,a,n){"use strict";n("8d91")}}]);
//# sourceMappingURL=chunk-1621b6ea.1d2349ba.js.map