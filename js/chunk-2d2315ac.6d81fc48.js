(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2315ac"],{efd9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.orders,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(t._f("date")(e.create_at)))]),a("td",[t._v(t._s(e.user.email))]),a("td",t._l(e.products,(function(e){return a("div",{key:e.id},[t._v(t._s(e.product.title)+" 數量："+t._s(e.qty+e.product.unit))])})),0),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))]),a("td",[e.is_paid?a("span",{staticClass:"text-success"},[t._v("已付款")]):a("span",[t._v("尚未付款")])])])})),0)]),a("pager",{attrs:{pagerdata:t.pagination},on:{getpage:t.getOrders}})],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v("購買時間")]),a("th",[t._v("Email")]),a("th",[t._v("購買款項")]),a("th",{attrs:{width:"100"}},[t._v("應負金額")]),a("th",{attrs:{width:"100"}},[t._v("是否付款")])])])}],i=(a("99af"),a("1157")),n=a.n(i),o={data:function(){return{products:[],tempProduct:{},orders:[],isNew:!1,delItem:{},status:{fileUploading:!1},pagination:{}}},created:function(){this.getOrders()},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("lalabear","/orders?page=").concat(t),a=this;a.$store.commit("LOADING",!0),a.$http.get(e).then((function(t){a.orders=t.data.orders,a.$store.commit("LOADING",!1),a.pagination=t.data.pagination}))},openModal:function(t,e){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object.assign({},e),this.isNew=!1),n()("#productModal").modal("show")}}},d=o,c=a("2877"),u=Object(c["a"])(d,s,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d2315ac.6d81fc48.js.map