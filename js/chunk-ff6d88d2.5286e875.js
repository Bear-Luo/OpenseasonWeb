(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff6d88d2"],{3852:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container product-content fade",class:{show:t.isShow}},[i("div",{staticClass:"product-info"},[i("div",{staticClass:"col-md-7 pl-0"},[i("img",{staticClass:"img-fluid shadow-sm",attrs:{src:t.product.imageUrl,alt:t.product.title}})]),i("div",{staticClass:"col-md-5 col-sm-6 pb-3"},[i("h2",[t._v(t._s(t.product.title))]),i("p",[t._v(t._s(t.product.description))]),i("p",[t._v(t._s(t.product.content))]),i("div",{staticClass:"price-block"},[i("del",{staticClass:"text-black-50"},[t._v("原價： "+t._s(t._f("currency")(t.product.origin_price)))]),i("span",[t._v("優惠： "+t._s(t._f("currency")(t.product.price)))])]),i("div",[i("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.product,"num",a.target.multiple?s:s[0])},t.sentNum]}},t._l(10,(function(a){return i("option",{key:a,domProps:{value:a}},[t._v("選購 "+t._s(a)+" "+t._s(t.product.unit))])})),0),i("div",{staticClass:"action"},[i("AddHeartCart",{attrs:{productid:t.productId}})],1)])])]),t._m(0),t.similarProducts.length>0?i("div",{staticClass:"similar"},[i("div",[t._v("相似商品")]),i("ul",t._l(t.similarProducts,(function(a){return i("li",{key:a.id},[i("router-link",{style:{"background-image":"url("+a.imageUrl+")"},attrs:{to:"/product_page/"+a.id},nativeOn:{click:function(s){return t.routerRefresh(a.id)}}},[i("img",{staticClass:"d-hidden",attrs:{src:s("be58"),alt:""}}),i("div",[t._v(t._s(a.title))])])],1)})),0)]):t._e()])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"faq"},[s("div",[t._v("常見問答")]),s("ul",[s("li",[s("div",[s("i",{staticClass:"far fa-question-circle"}),t._v("商品寄出時間？ ")]),s("div",[t._v(" 商品如有現貨則當日寄出，如沒有現貨，因商品需要製作時間，待3-7天的製作完成後會寄出。 "),s("br"),t._v("有急需的客戶，可來電與店面人員詢問是否能提早寄送。 ")])]),s("li",[s("div",[s("i",{staticClass:"far fa-question-circle"}),t._v("商品保存方式及保存期限？ ")]),s("div",[t._v(" 咖啡：於包裝印有保存期限與保存方式。 "),s("br"),t._v("果醬：於包裝印有保存期限與保存方式，開封後請冷藏。 "),s("br"),t._v("水果軟糖：當日製作完成即冷藏寄出，冷藏可放1禮拜，冷凍可放2禮拜，冷凍後建議取出靜放至稍軟再食用。 "),s("br"),t._v("麵包：當日製作完成即冷藏寄出，冷藏可放1禮拜，冷凍可放2禮拜。烤麵包前建議於麵包表面噴點水可避免變太乾。 ")])]),s("li",[s("div",[s("i",{staticClass:"far fa-question-circle"}),t._v("退換貨須知 ")]),s("div",[t._v(" 由於考量食品衛生安全，除了商品本身瑕疵、損壞、作業疏失或運送過程而造成的損毀，才能申請退換貨。一經個人拆封、食用、失溫及保存不良等情形而導致商品變質，恕無法處理您的退換貨申請。 "),s("br"),t._v("退貨時請保持包裝完整寄回！ "),s("br"),t._v("此外，水果軟糖與麵包因保存期限較短，除非為上述可供退換貨之原因，否出貨後恕不退換。 "),s("br"),t._v("訂購前，請詳閱商品頁面說明，或來電與人員確認細項後，再行下單喔！ ")])])])])}],c=(s("4de4"),s("4160"),s("159b"),s("5530")),r=s("55fe"),o=s("2f62"),n={data:function(){return{productId:"",product:{},test:""}},components:{AddHeartCart:r["a"]},methods:{getProduct:function(){var t=this;t.products.forEach((function(a){a.id===t.productId&&(t.product=a)})),document.title="角獵咖啡 - "+t.product.title,this.$store.commit("ISSHOW",!0)},sentNum:function(){this.$bus.$emit("addcart:qty",this.product.num)},routerRefresh:function(t){var a=this;this.$store.commit("ISSHOW",!1),a.$store.commit("LOADING",!0),window.scroll(0,0),setTimeout((function(){a.productId=t,a.getProduct(),a.$store.commit("LOADING",!1)}),300)}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({similarProducts:function(){var t=this,a=t.products.filter((function(a){return a.category===t.product.category&&a.id!==t.product.id}));return a.length<=3?a:a.length>3?(a.sort((function(){return Math.random()-.5})),a.length=3,a):[]}},Object(o["c"])("heartModules",["heart"])),Object(o["c"])("productsModules",["products"])),Object(o["c"])(["isShow"])),watch:{products:function(){this.getProduct()}},created:function(){this.productId=this.$route.params.id,this.$store.commit("ISSHOW",!1),this.$store.dispatch("productsModules/getProductsAll")}},d=n,u=(s("58a3"),s("2877")),l=Object(u["a"])(d,i,e,!1,null,null,null);a["default"]=l.exports},"55fe":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-flex justify-content-end align-items-end"},[t.heartActive===t.id?s("button",{staticClass:"btn-heart",attrs:{type:"button",title:"取消關注"},on:{click:function(a){return a.stopPropagation(),t.removeHeart(t.id)}}},[s("i",{staticClass:"fas fa-heart"}),s("span",[t._v("取消關注")])]):s("button",{staticClass:"btn-heart",attrs:{type:"button",title:"加入關注"},on:{click:function(a){return a.stopPropagation(),t.addHeart(t.id)}}},[t.status.loadingItem===t.id?s("i",{staticClass:"fas fa-spinner fa-pulse"}):s("i",{staticClass:"far fa-heart"}),s("span",[t._v("加入關注")])]),t.cartsLocalstorageId.indexOf(t.id)>-1||t.isAdd?s("button",{staticClass:"btn-cart",attrs:{type:"button",title:"加入購物車"},on:{click:function(a){return a.stopPropagation(),t.checkCarts(t.id,t.qty)}}},[t.status.loadingItem===t.id?s("i",{staticClass:"fas fa-spinner fa-pulse"}):s("i",{staticClass:"fas fa-shopping-basket"}),s("span",[t._v("加入購物車")])]):s("button",{staticClass:"btn-cart",attrs:{type:"button",title:"加入購物車"},on:{click:function(a){return a.stopPropagation(),t.addtoCart(t.id,t.qty)}}},[t.status.loadingItem===t.id?s("i",{staticClass:"fas fa-spinner fa-pulse"}):s("i",{staticClass:"fas fa-shopping-basket"}),s("span",[t._v("加入購物車")])])])},e=[],c=(s("99af"),s("c975"),s("5530")),r=s("2f62"),o={data:function(){return{id:this.productid,qty:1,isAdd:!1,heartActive:"",status:{loadingItem:""}}},props:{productid:{type:String,default:""}},methods:{addtoCart:function(t,a){var s=this;this.isAdd=!0;var i="".concat("https://vue-course-api.hexschool.io","/api/").concat("lalabear","/cart");this.$store.commit("LOADING",!0),this.status.loadingItem=t;var e={product_id:t,qty:a};this.$http.post(i,{data:e}).then((function(t){t.data.success?(s.status.loadingItem="",s.$store.dispatch("cartsModules/getCarts"),s.$store.dispatch("updateMessage",{msg:t.data.message,status:"light"},{root:!0})):s.$store.dispatch("updateMessage",{msg:t.data.message,status:"dark"},{root:!0})}))},checkCarts:function(t,a){this.$store.commit("cartsModules/GETCARTSLOCALSTORAGE"),this.changeCart(t,a)},changeCart:function(t,a){var s=this;s.$store.commit("LOADING",!0);var i=this.cartsLocalstorageId.indexOf(t),e=this.cartsLocalstorage[i].id,c=this.cartsLocalstorage[i].qty,r=c+a,o="".concat("https://vue-course-api.hexschool.io","/api/").concat("lalabear","/cart/").concat(e);if(r<=10)s.$http.delete(o).then((function(a){a.data.success&&s.addtoCart(t,r)}));else if(r>10){var n=10-c;0===n?(s.$store.commit("LOADING",!1),s.$store.dispatch("updateMessage",{msg:"不好意思本商品最多一次只能購買10個，您已購買10個此產品。",status:"dark"})):n>0&&(s.$http.delete(o).then((function(a){a.data.success&&s.addtoCart(t,10)})),s.$store.dispatch("updateMessage",{msg:"不好意思本商品最多一次只能購買10個, 大量購買請來電聯繫",status:"dark"}))}},addHeart:function(t){this.$store.dispatch("heartModules/addHeart",t),this.heartFun()},removeHeart:function(t){this.$store.dispatch("heartModules/removeHeart",t),this.heartFun()},heartFun:function(){var t=JSON.parse(localStorage.getItem("heartStr"))||[];t.indexOf(this.id)>-1?this.heartActive=this.id:-1===t.indexOf(this.id)&&(this.heartActive="")}},computed:Object(c["a"])({},Object(r["c"])("cartsModules",["cartsLocalstorageId","cartsLocalstorage"])),created:function(){var t=this;this.heartFun(),this.$store.commit("cartsModules/GETCARTSLOCALSTORAGE"),this.$bus.$on("addcart:qty",(function(a){t.qty=a}))}},n=o,d=(s("bdfb"),s("2877")),u=Object(d["a"])(n,i,e,!1,null,"6b816b4c",null);a["a"]=u.exports},"58a3":function(t,a,s){"use strict";var i=s("9a17"),e=s.n(i);e.a},"9a17":function(t,a,s){},a127:function(t,a,s){},bdfb:function(t,a,s){"use strict";var i=s("a127"),e=s.n(i);e.a},be58:function(t,a){t.exports="data:image/gif;base64,R0lGODlhKAAkAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OERDRTZEMEVBRDMwMTFFQUE5QzZFRUEzMkZCMEQwRUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OERDRTZEMEZBRDMwMTFFQUE5QzZFRUEzMkZCMEQwRUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RENFNkQwQ0FEMzAxMUVBQTlDNkVFQTMyRkIwRDBFQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RENFNkQwREFEMzAxMUVBQTlDNkVFQTMyRkIwRDBFQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAAoACQAAAIlhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jedNAQA7"}}]);
//# sourceMappingURL=chunk-ff6d88d2.5286e875.js.map