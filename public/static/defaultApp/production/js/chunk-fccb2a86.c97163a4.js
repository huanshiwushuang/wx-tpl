(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fccb2a86"],{"1e10":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"kvkh7nuy_com"},[n("van-pull-refresh",{on:{refresh:e.on_refresh},model:{value:e.refreshing,callback:function(t){e.refreshing=t},expression:"refreshing"}},[n("van-list",{attrs:{finished:e.finished,error:e.error,"error-text":"请求失败，点击重新加载","finished-text":"没有更多了"},on:{"update:error":function(t){e.error=t},load:e.on_load},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.json.list,(function(t,r){return n("jzm-card-default",e._b({key:r,staticClass:"kvl2074f"},"jzm-card-default",t,!1))})),1)],1)],1)},a=[],s=n("ade3"),i=n("2909"),c=n("5530"),o=n("1da1"),u=(n("99af"),n("ac1f"),n("841c"),n("96cf"),{name:"home_newest",data:function(){return{loading:!1,finished:!1,refreshing:!1,error:!1,qs:{}}},methods:{init:function(){this.loading=!1,this.finished=this.json.finished,this.refreshing=!1,this.error=!1,Object.assign(this.qs,{page:1,pagesize:10},this.$route.query)},on_load:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$get(e.$route.path,Object(c["a"])(Object(c["a"])({},e.qs),{},{page:e.qs.page-0+1}));case 3:r=t.sent,(n=e.json.list).push.apply(n,Object(i["a"])(r.json.list)),e.$store.commit("page/cache",Object(c["a"])(Object(c["a"])({},e.$store.state.page.cache),{},Object(s["a"])({},e.$route.path,e.page))),e.qs.page++,e.finished=r.json.finished,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),e.error=!0;case 13:e.loading=!1;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},on_refresh:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$get("".concat(e.$route.path).concat(location.search));case 3:n=t.sent,Object.assign(e.json,n.json),e.$store.commit("page/cache",Object(c["a"])(Object(c["a"])({},e.$store.state.page.cache),{},Object(s["a"])({},e.$route.path,e.page))),e.init(),e.finished=n.json.finished;case 8:return t.prev=8,e.refreshing=!1,t.finish(8);case 11:case"end":return t.stop()}}),t,null,[[0,,8,11]])})))()}},created:function(){this.init()}}),h=u,f=(n("35e6"),n("2877")),l=Object(f["a"])(h,r,a,!1,null,null,null);t["default"]=l.exports},"35e6":function(e,t,n){"use strict";n("d916")},d916:function(e,t,n){}}]);
//# sourceMappingURL=chunk-fccb2a86.c97163a4.js.map