(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfb045c2"],{5600:function(e,t,n){},"5fff":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"kw4q8hp0"},[e._v("每周三 12:00 更新")]),n("van-pull-refresh",{on:{refresh:e.on_refresh},model:{value:e.refreshing,callback:function(t){e.refreshing=t},expression:"refreshing"}},[n("van-list",{attrs:{finished:e.finished,error:e.error,"error-text":"请求失败，点击重新加载","finished-text":"没有更多了"},on:{"update:error":function(t){e.error=t},load:e.on_load},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.json.list,(function(t){return n("div",{key:t.id,staticClass:"df"},[n("div",[e._v(" "+e._s(t.rank)+" ")]),n("div",[n("div",{staticClass:"df"},[n("div",[e._v(" "+e._s(t.love)+" ")]),n("div",[e._v(" "+e._s(t.is_love)+" ")])]),n("div",[e._v(" "+e._s(t.content)+" ")]),n("div",[e._v(" "+e._s(t.author)+" ")])])])})),0)],1)],1)},s=[],a=n("ade3"),i=n("2909"),o=n("5530"),c=n("1da1"),u=(n("99af"),n("ac1f"),n("841c"),n("96cf"),{name:"home_rank",data:function(){return{loading:!1,finished:!1,refreshing:!1,error:!1,qs:{}}},methods:{init:function(){this.loading=!1,this.finished=this.json.finished,this.refreshing=!1,this.error=!1,Object.assign(this.qs,{page:1,pagesize:10},this.$route.query)},on_load:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$get(e.$route.path,Object(o["a"])(Object(o["a"])({},e.qs),{},{page:e.qs.page-0+1}));case 3:r=t.sent,(n=e.json.list).push.apply(n,Object(i["a"])(r.json.list)),e.$store.commit("page/cache",Object(o["a"])(Object(o["a"])({},e.$store.state.page.cache),{},Object(a["a"])({},e.$route.path,e.page))),e.qs.page++,e.finished=r.json.finished,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),e.error=!0;case 13:e.loading=!1;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},on_refresh:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$get("".concat(e.$route.path).concat(location.search));case 3:n=t.sent,Object.assign(e.json,n.json),e.$store.commit("page/cache",Object(o["a"])(Object(o["a"])({},e.$store.state.page.cache),{},Object(a["a"])({},e.$route.path,e.page))),e.init(),e.finished=n.json.finished;case 8:return t.prev=8,e.refreshing=!1,t.finish(8);case 11:case"end":return t.stop()}}),t,null,[[0,,8,11]])})))()}}}),h=u,f=(n("75fb"),n("2877")),l=Object(f["a"])(h,r,s,!1,null,null,null);t["default"]=l.exports},"75fb":function(e,t,n){"use strict";n("5600")}}]);
//# sourceMappingURL=chunk-dfb045c2.d68b28d4.js.map