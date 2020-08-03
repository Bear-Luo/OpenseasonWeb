(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cec8398"],{"08e7":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.scrollPage,expression:"scrollPage"}],staticClass:"productlist-container fade",class:{"mobile-view":t.mobileView,show:t.isShow}},[e("div",{staticClass:"productlist-sidebar",class:{fixed:t.isfixed}},[e("ul",{staticClass:"sidebar-menu"},t._l(t.categoryData,(function(s,i){return e("li",{key:i,class:{active:t.category===s.en}},[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.selcategory(s.cn,s.en)}}},[t._v(t._s(s.cn))])])})),0)]),e("div",{staticClass:"card-block"},[e("div",{staticClass:"d-flex pb-3"},[e("div",{staticClass:"search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"請輸入關鍵字"},domProps:{value:t.keyword},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.searchFun(s)},input:function(s){s.target.composing||(t.keyword=s.target.value)}}}),e("button",{attrs:{type:"button"},on:{click:t.searchFun}},[e("i",{staticClass:"fas fa-search"})])]),e("div",{staticClass:"sort-block"},[e("button",{staticClass:"btn price-sort-default",attrs:{type:"button"},on:{click:t.priceSortFun}},[e("span",[t._v("價錢")]),t.priceSort.up?e("i",{staticClass:"fas fa-long-arrow-alt-up"}):t._e(),t.priceSort.low?e("i",{staticClass:"fas fa-long-arrow-alt-down"}):t._e()])])]),e("div",{staticClass:"row align-items-stretch pb-5"},t._l(t.productsList,(function(s){return e("div",{key:s.id,staticClass:"product-list-card mb-4"},[e("div",{staticClass:"card border-0 h-100",on:{click:function(e){return t.gotoProduct(s.id)}}},[e("div",{staticClass:"position-relative",staticStyle:{height:"180px"}},[e("div",{staticClass:"product-cover",style:{"background-image":"url("+s.imageUrl+")"}}),e("AddHeartCart",{attrs:{productid:s.id}})],1),e("div",{staticClass:"py-3 px-3"},[e("h5",{staticClass:"card-title"},[e("router-link",{staticClass:"text-dark font-weight-bold",attrs:{to:"/product_page/"+s.id}},[t._v(t._s(s.title))])],1),e("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[e("del",{staticClass:"h6 text-black-50"},[t._v(t._s(t._f("currency")(s.origin_price)))]),e("div",{staticClass:"h5 text-danger"},[t._v(t._s(t._f("currency")(s.price))+" 元")])])])])])})),0)])])},a=[],r=(e("4de4"),e("ac1f"),e("466d"),e("5530")),o=e("55fe"),c=e("2f62"),n={data:function(){return{productsList:[],categoryData:[{en:"all",cn:"全部商品"},{en:"coffee",cn:"咖啡"},{en:"bread",cn:"麵包"},{en:"jam",cn:"果醬"},{en:"gummy",cn:"水果軟糖"}],category:"all",keyword:"",priceSort:{up:!0,low:!0},mobileView:!1,isfixed:!1}},components:{AddHeartCart:o["a"]},methods:{scrollPage:function(t){t.srcElement.scrollingElement.scrollTop>0&&this.mobileView?this.isfixed=!0:this.isfixed=!1},getProducts:function(){this.$store.commit("ISSHOW",!1),this.$store.dispatch("productsModules/getProductsAll")},gotoProduct:function(t){window.scroll(0,0),this.$router.push("/product_page/".concat(t))},selcategory:function(t,s){var e=this;e.priceSort.up=!0,e.priceSort.low=!0,e.$store.commit("LOADING",!0),e.category=s,e.productsList="all"===s?e.products:e.products.filter((function(s){return s.category===t})),e.$store.commit("LOADING",!1)},searchFun:function(){var t=this;this.priceSort.up=!0,this.priceSort.low=!0,this.category="",this.productsList=this.products.filter((function(s){return s.title.match(t.keyword)}))},priceSortFun:function(){this.priceSort.up===this.priceSort.low?(this.priceSort.low=!1,this.productsList.sort((function(t,s){return t=t.price,s=s.price,t-s}))):this.priceSort.up&&!1===this.priceSort.low?(this.priceSort.up=!this.priceSort.up,this.priceSort.low=!this.priceSort.low,this.productsList.sort((function(t,s){return t=t.price,s=s.price,s-t}))):this.priceSort.low&&!1===this.priceSort.up&&(this.priceSort.up=!this.priceSort.up,this.priceSort.low=!this.priceSort.low,this.productsList.sort((function(t,s){return t=t.price,s=s.price,t-s})))},resetCart:function(){this.$emit("resetcart")},_isMobile:function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return t}},computed:Object(r["a"])(Object(r["a"])({},Object(c["c"])("productsModules",["products"])),Object(c["c"])(["isShow"])),watch:{products:function(){this.productsList=this.products}},created:function(){this.getProducts()},mounted:function(){this._isMobile()?this.mobileView=!0:this.mobileView=!1}},d=n,u=(e("edda"),e("2877")),l=Object(u["a"])(d,i,a,!1,null,null,null);s["default"]=l.exports},"466d":function(t,s,e){"use strict";var i=e("d784"),a=e("825a"),r=e("50c4"),o=e("1d80"),c=e("8aa5"),n=e("14c3");i("match",1,(function(t,s,e){return[function(s){var e=o(this),i=void 0==s?void 0:s[t];return void 0!==i?i.call(s,e):new RegExp(s)[t](String(e))},function(t){var i=e(s,t,this);if(i.done)return i.value;var o=a(t),d=String(this);if(!o.global)return n(o,d);var u=o.unicode;o.lastIndex=0;var l,p=[],h=0;while(null!==(l=n(o,d))){var f=String(l[0]);p[h]=f,""===f&&(o.lastIndex=c(d,r(o.lastIndex),u)),h++}return 0===h?null:p}]}))},"55fe":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex justify-content-end align-items-end"},[t.heartActive===t.id?e("button",{staticClass:"btn-heart",attrs:{type:"button",title:"取消關注"},on:{click:function(s){return s.stopPropagation(),t.removeHeart(t.id)}}},[e("i",{staticClass:"fas fa-heart"}),e("span",[t._v("取消關注")])]):e("button",{staticClass:"btn-heart",attrs:{type:"button",title:"加入關注"},on:{click:function(s){return s.stopPropagation(),t.addHeart(t.id)}}},[t.status.loadingItem===t.id?e("i",{staticClass:"fas fa-spinner fa-pulse"}):e("i",{staticClass:"far fa-heart"}),e("span",[t._v("加入關注")])]),t.cartsLocalstorageId.indexOf(t.id)>-1||t.isAdd?e("button",{staticClass:"btn-cart",attrs:{type:"button",title:"加入購物車"},on:{click:function(s){return s.stopPropagation(),t.checkCarts(t.id,t.qty)}}},[t.status.loadingItem===t.id?e("i",{staticClass:"fas fa-spinner fa-pulse"}):e("i",{staticClass:"fas fa-shopping-basket"}),e("span",[t._v("加入購物車")])]):e("button",{staticClass:"btn-cart",attrs:{type:"button",title:"加入購物車"},on:{click:function(s){return s.stopPropagation(),t.addtoCart(t.id,t.qty)}}},[t.status.loadingItem===t.id?e("i",{staticClass:"fas fa-spinner fa-pulse"}):e("i",{staticClass:"fas fa-shopping-basket"}),e("span",[t._v("加入購物車")])])])},a=[],r=(e("99af"),e("c975"),e("5530")),o=e("2f62"),c={data:function(){return{id:this.productid,qty:1,isAdd:!1,heartActive:"",status:{loadingItem:""}}},props:{productid:{type:String,default:""}},methods:{addtoCart:function(t,s){var e=this;this.isAdd=!0;var i="".concat("https://vue-course-api.hexschool.io","/api/").concat("lalabear","/cart");this.$store.commit("LOADING",!0),this.status.loadingItem=t;var a={product_id:t,qty:s};this.$http.post(i,{data:a}).then((function(t){t.data.success?(e.status.loadingItem="",e.$store.dispatch("cartsModules/getCarts"),e.$store.dispatch("updateMessage",{msg:t.data.message,status:"light"},{root:!0})):e.$store.dispatch("updateMessage",{msg:t.data.message,status:"dark"},{root:!0})}))},checkCarts:function(t,s){this.$store.commit("cartsModules/GETCARTSLOCALSTORAGE"),this.changeCart(t,s)},changeCart:function(t,s){var e=this;e.$store.commit("LOADING",!0);var i=this.cartsLocalstorageId.indexOf(t),a=this.cartsLocalstorage[i].id,r=this.cartsLocalstorage[i].qty,o=r+s,c="".concat("https://vue-course-api.hexschool.io","/api/").concat("lalabear","/cart/").concat(a);if(o<=10)e.$http.delete(c).then((function(s){s.data.success&&e.addtoCart(t,o)}));else if(o>10){var n=10-r;0===n?(e.$store.commit("LOADING",!1),e.$store.dispatch("updateMessage",{msg:"不好意思本商品最多一次只能購買10個，您已購買10個此產品。",status:"dark"})):n>0&&(e.$http.delete(c).then((function(s){s.data.success&&e.addtoCart(t,10)})),e.$store.dispatch("updateMessage",{msg:"不好意思本商品最多一次只能購買10個, 大量購買請來電聯繫",status:"dark"}))}},addHeart:function(t){this.$store.dispatch("heartModules/addHeart",t),this.heartFun()},removeHeart:function(t){this.$store.dispatch("heartModules/removeHeart",t),this.heartFun()},heartFun:function(){var t=JSON.parse(localStorage.getItem("heartStr"))||[];t.indexOf(this.id)>-1?this.heartActive=this.id:-1===t.indexOf(this.id)&&(this.heartActive="")}},computed:Object(r["a"])({},Object(o["c"])("cartsModules",["cartsLocalstorageId","cartsLocalstorage"])),created:function(){var t=this;this.heartFun(),this.$store.commit("cartsModules/GETCARTSLOCALSTORAGE"),this.$bus.$on("addcart:qty",(function(s){t.qty=s}))}},n=c,d=(e("bdfb"),e("2877")),u=Object(d["a"])(n,i,a,!1,null,"6b816b4c",null);s["a"]=u.exports},a127:function(t,s,e){},bdfb:function(t,s,e){"use strict";var i=e("a127"),a=e.n(i);a.a},dfdf:function(t,s,e){},edda:function(t,s,e){"use strict";var i=e("dfdf"),a=e.n(i);a.a}}]);
//# sourceMappingURL=chunk-0cec8398.44ac61f7.js.map