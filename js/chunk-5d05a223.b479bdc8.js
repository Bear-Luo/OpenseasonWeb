(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d05a223"],{3751:function(t,a,s){},"466d":function(t,a,s){"use strict";var e=s("d784"),i=s("825a"),r=s("50c4"),o=s("1d80"),c=s("8aa5"),n=s("14c3");e("match",1,(function(t,a,s){return[function(a){var s=o(this),e=void 0==a?void 0:a[t];return void 0!==e?e.call(a,s):new RegExp(a)[t](String(s))},function(t){var e=s(a,t,this);if(e.done)return e.value;var o=i(t),d=String(this);if(!o.global)return n(o,d);var u=o.unicode;o.lastIndex=0;var l,h=[],f=0;while(null!==(l=n(o,d))){var p=String(l[0]);h[f]=p,""===p&&(o.lastIndex=c(d,r(o.lastIndex),u)),f++}return 0===f?null:h}]}))},"55fe":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-flex justify-content-end align-items-end"},[t.heartActive===t.id?s("button",{staticClass:"btn-heart",attrs:{type:"button",title:"取消關注"},on:{click:function(a){return a.stopPropagation(),t.removeHeart(t.id)}}},[s("i",{staticClass:"fas fa-heart"}),s("span",[t._v("取消關注")])]):s("button",{staticClass:"btn-heart",attrs:{type:"button",title:"加入關注"},on:{click:function(a){return a.stopPropagation(),t.addHeart(t.id)}}},[t.status.loadingItem===t.id?s("i",{staticClass:"fas fa-spinner fa-pulse"}):s("i",{staticClass:"far fa-heart"}),s("span",[t._v("加入關注")])]),t.cartsLocalstorageId.indexOf(t.id)>-1||t.isAdd?s("button",{staticClass:"btn-cart",attrs:{type:"button",title:"加入購物車"},on:{click:function(a){return a.stopPropagation(),t.checkCarts(t.id,t.qty)}}},[t.status.loadingItem===t.id?s("i",{staticClass:"fas fa-spinner fa-pulse"}):s("i",{staticClass:"fas fa-shopping-basket"}),s("span",[t._v("加入購物車")])]):s("button",{staticClass:"btn-cart",attrs:{type:"button",title:"加入購物車"},on:{click:function(a){return a.stopPropagation(),t.addtoCart(t.id,t.qty)}}},[t.status.loadingItem===t.id?s("i",{staticClass:"fas fa-spinner fa-pulse"}):s("i",{staticClass:"fas fa-shopping-basket"}),s("span",[t._v("加入購物車")])])])},i=[],r=(s("99af"),s("c975"),s("5530")),o=s("2f62"),c={data:function(){return{id:this.productid,qty:1,isAdd:!1,heartActive:"",status:{loadingItem:""}}},props:{productid:{type:String,default:""}},methods:{addtoCart:function(t,a){var s=this;this.isAdd=!0;var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("lalabear","/cart");this.$store.commit("LOADING",!0),this.status.loadingItem=t;var i={product_id:t,qty:a};this.$http.post(e,{data:i}).then((function(t){t.data.success?(s.status.loadingItem="",s.$store.dispatch("cartsModules/getCarts"),s.$store.dispatch("updateMessage",{msg:t.data.message,status:"light"},{root:!0})):s.$store.dispatch("updateMessage",{msg:t.data.message,status:"dark"},{root:!0})}))},checkCarts:function(t,a){this.$store.commit("cartsModules/GETCARTSLOCALSTORAGE"),this.changeCart(t,a)},changeCart:function(t,a){var s=this;s.$store.commit("LOADING",!0);var e=this.cartsLocalstorageId.indexOf(t),i=this.cartsLocalstorage[e].id,r=this.cartsLocalstorage[e].qty,o=r+a,c="".concat("https://vue-course-api.hexschool.io","/api/").concat("lalabear","/cart/").concat(i);if(o<=10)s.$http.delete(c).then((function(a){a.data.success&&s.addtoCart(t,o)}));else if(o>10){var n=10-r;0===n?(s.$store.commit("LOADING",!1),s.$store.dispatch("updateMessage",{msg:"不好意思本商品最多一次只能購買10個，您已購買10個此產品。",status:"dark"})):n>0&&(s.$http.delete(c).then((function(a){a.data.success&&s.addtoCart(t,10)})),s.$store.dispatch("updateMessage",{msg:"不好意思本商品最多一次只能購買10個, 大量購買請來電聯繫",status:"dark"}))}},addHeart:function(t){this.$store.dispatch("heartModules/addHeart",t),this.heartFun()},removeHeart:function(t){this.$store.dispatch("heartModules/removeHeart",t),this.heartFun()},heartFun:function(){var t=JSON.parse(localStorage.getItem("heartStr"))||[];t.indexOf(this.id)>-1?this.heartActive=this.id:-1===t.indexOf(this.id)&&(this.heartActive="")}},computed:Object(r["a"])({},Object(o["c"])("cartsModules",["cartsLocalstorageId","cartsLocalstorage"])),created:function(){var t=this;this.heartFun(),this.$store.commit("cartsModules/GETCARTSLOCALSTORAGE"),this.$bus.$on("addcart:qty",(function(a){t.qty=a}))}},n=c,d=(s("bdfb"),s("2877")),u=Object(d["a"])(n,e,i,!1,null,"6b816b4c",null);a["a"]=u.exports},"8f8c":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container mb-5 fade",class:{show:t.isShow}},[0===t.heart.length?s("div",{staticClass:"text-center"},[t._m(0),s("router-link",{attrs:{to:"/product_list"}},[t._v(" 快去看看吧 "),s("i",[t._v("→")])])],1):s("div",[s("div",{staticClass:"text-center h3 mb-4"},[t._v("關注商品")]),s("div",{staticClass:"col-md-8 heart-list shadow-sm mx-auto"},[s("table",{staticClass:"table mb-0"},[s("tbody",{staticClass:"border-0-first-tr"},t._l(t.newHeartList,(function(a){return s("tr",{key:a.id},[t.mobileView?s("td",{staticClass:"heart-img pl-0"},[s("router-link",{style:{"background-image":"url("+a.imageUrl+")"},attrs:{to:"/product_page/"+a.id}})],1):t._e(),s("td",{staticClass:"pl-0"},[s("router-link",{attrs:{to:"/product_page/"+a.id}},[t._v(t._s(a.title))])],1),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.price)))]),s("td",{staticClass:"pr-0",attrs:{width:"50"}},[s("AddHeartCart",{attrs:{productid:a.id}})],1)])})),0)])])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"no-sellection"},[s("div",[t._v("沒有關注的商品……")]),s("div",{staticClass:"arrow"})])}],r=(s("4de4"),s("c975"),s("ac1f"),s("466d"),s("5530")),o=s("55fe"),c=s("2f62"),n={data:function(){return{mobileView:!1}},components:{AddHeartCart:o["a"]},methods:{_isMobile:function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return t}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(c["c"])("heartModules",["heart"])),Object(c["c"])("productsModules",["products"])),Object(c["c"])(["isShow"])),{},{newHeartList:function(){var t=this;return t.products.filter((function(a){return t.heart.indexOf(a.id)>-1}))}}),created:function(){var t=this;this.$store.dispatch("productsModules/getProductsAll"),this.$store.commit("heartModules/GETHEART"),this.$store.commit("LOADING",!0),this.$store.commit("ISSHOW",!1),setTimeout((function(){t.$store.commit("LOADING",!1),t.$store.commit("ISSHOW",!0)}),200)},mounted:function(){this._isMobile()?this.mobileView=!1:this.mobileView=!0}},d=n,u=(s("d960"),s("b37b"),s("2877")),l=Object(u["a"])(d,e,i,!1,null,"285256c9",null);a["default"]=l.exports},a127:function(t,a,s){},b37b:function(t,a,s){"use strict";var e=s("3751"),i=s.n(e);i.a},bdfb:function(t,a,s){"use strict";var e=s("a127"),i=s.n(e);i.a},d960:function(t,a,s){"use strict";var e=s("e37e"),i=s.n(e);i.a},e37e:function(t,a,s){}}]);
//# sourceMappingURL=chunk-5d05a223.b479bdc8.js.map