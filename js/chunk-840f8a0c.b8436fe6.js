(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-840f8a0c"],{"466d":function(t,e,a){"use strict";var s=a("d784"),r=a("825a"),o=a("50c4"),i=a("1d80"),c=a("8aa5"),n=a("14c3");s("match",1,(function(t,e,a){return[function(e){var a=i(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a):new RegExp(e)[t](String(a))},function(t){var s=a(e,t,this);if(s.done)return s.value;var i=r(t),l=String(this);if(!i.global)return n(i,l);var d=i.unicode;i.lastIndex=0;var u,m=[],p=0;while(null!==(u=n(i,l))){var v=String(u[0]);m[p]=v,""===v&&(i.lastIndex=c(l,o(i.lastIndex),d)),p++}return 0===p?null:m}]}))},a901:function(t,e,a){"use strict";var s=a("a924"),r=a.n(s);r.a},a924:function(t,e,a){},f8bc:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mb-5 fade",class:{show:t.isShow}},[0===t.carts.total?a("div",{staticClass:"mb-3 text-center"},[t._m(0),a("router-link",{attrs:{to:"/product_list"}},[t._v(" 快去購物吧 "),a("i",[t._v("→")])])],1):a("div",[t._m(1),a("ValidationObserver",{ref:"form",attrs:{tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid,r=e.handleSubmit;return[a("div",{staticClass:"order-list shadow-sm mb-3"},[a("div",{staticClass:"col-md-6"},[a("form",{staticClass:"order-form"},[a("validationProvider",{staticClass:"form-group",attrs:{tag:"div",name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.failed,r=e.errors,o=e.classes;return[a("label",{attrs:{for:"useremail"}},[a("span",{staticClass:"text-danger"},[t._v("*")]),t._v("Email ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:o,attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),s?a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))]):t._e()]}}],null,!0)}),a("validationProvider",{staticClass:"form-group",attrs:{tag:"div",name:"姓名",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.failed,r=e.errors,o=e.classes;return[a("label",{attrs:{for:"username"}},[a("span",{staticClass:"text-danger"},[t._v("*")]),t._v("姓名 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:o,attrs:{type:"text",name:"name",id:"username",placeholder:"請輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),s?a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))]):t._e()]}}],null,!0)}),a("validationProvider",{staticClass:"form-group",attrs:{tag:"div",name:"收件人電話",rules:"required|numeric"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.failed,r=e.errors,o=e.classes;return[a("label",{attrs:{for:"usertel"}},[a("span",{staticClass:"text-danger"},[t._v("*")]),t._v("收件人電話 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:o,attrs:{type:"tel",name:"tel",id:"usertel",placeholder:"請輸入收件人電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),s?a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))]):t._e()]}}],null,!0)}),a("validationProvider",{staticClass:"form-group",attrs:{tag:"div",name:"收件人地址",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.failed,r=e.errors,o=e.classes;return[a("label",{attrs:{for:"useraddress"}},[a("span",{staticClass:"text-danger"},[t._v("*")]),t._v("收件人地址 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:o,attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入收件人地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),s?a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))]):t._e()]}}],null,!0)}),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usermsg"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.massage,expression:"form.massage"}],staticClass:"form-control",attrs:{name:"massage",id:"usermsg",rows:"3"},domProps:{value:t.form.massage},on:{input:function(e){e.target.composing||t.$set(t.form,"massage",e.target.value)}}})])],1)]),a("div",{staticClass:"col-md-6"},[a("table",{staticClass:"table"},[a("tbody",{staticClass:"border-0-first-tr"},t._l(t.carts.carts,(function(e){return a("tr",{key:e.id},[t.mobileView?a("td",{staticClass:"cart-img pl-0"},[a("router-link",{style:{"background-image":"url("+e.product.imageUrl+")"},attrs:{to:"/product_page/"+e.product_id}})],1):t._e(),a("td",{staticClass:"pl-0"},[a("router-link",{attrs:{to:"/product_page/"+e.product_id}},[t._v(t._s(e.product.title))]),a("br"),e.coupon?a("span",{staticClass:"text-danger"},[t._v("已套用優惠券")]):t._e()],1),a("td",[a("EditQty",{attrs:{productid:e.product_id,cartqty:e.qty}})],1),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))]),a("td",{staticClass:"px-0 text-right"},[a("button",{staticClass:"btn btn-lg delete",attrs:{type:"button",title:"移除商品"},on:{click:function(a){return t.removeCartItem(e.id)}}},[a("i",[t._v("╳")])])])])})),0),a("tfoot",[a("tr",[a("td",{staticClass:"pl-0"},[a("b",[t._v("總計")])]),t.mobileView?a("td",{staticClass:"text-right",attrs:{colspan:"3"}},[a("b",[t._v(t._s(t._f("currency")(t.carts.total)))])]):a("td",{staticClass:"text-right",attrs:{colspan:"2"}},[a("b",[t._v(t._s(t._f("currency")(t.carts.total)))])]),a("td")]),t.carts.final_total!==t.carts.total?a("tr",[a("td",{staticClass:"pl-0"},[a("b",{staticClass:"text-danger"},[t._v("優惠價")])]),t.mobileView?a("td",{staticClass:"text-right",attrs:{colspan:"3"}},[a("b",{staticClass:"text-danger"},[t._v(t._s(t._f("currency")(t.carts.final_total)))])]):a("td",{staticClass:"text-right",attrs:{colspan:"2"}},[a("b",{staticClass:"text-danger"},[t._v(t._s(t._f("currency")(t.carts.final_total)))])]),a("td")]):t._e()])]),a("div",[a("div",{staticClass:"copy-coupon"},[a("span",{staticClass:"mr-1"},[t._v("您有一張可以使用的優惠券")]),a("span",{attrs:{id:"coupon"},on:{click:t.copyCoupon}},[t._v("20percent"),a("i",{staticClass:"far fa-copy"})])]),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠券"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v("套用優惠券")])])])])])]),a("div",{staticClass:"action"},[a("router-link",{staticClass:"btn btn-outline-secondary",attrs:{to:"/product_list"}},[t._v("繼續購物")]),a("button",{staticClass:"btn btn-blue",attrs:{type:"submit",disabled:s},on:{click:function(e){return r(t.creatOrder)}}},[t._v("送出訂單")])],1)]}}])})],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"no-sellection"},[a("div",[t._v("您尚未選購任何商品唷～")]),a("div",{staticClass:"arrow"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"step"},[a("li",{staticClass:"active"},[a("i",[t._v("1")]),t._v("輸入寄送資訊 ")]),a("li",{staticClass:"line"}),a("li",[a("i",[t._v("2")]),t._v("確認繳費 ")]),a("li",{staticClass:"line"}),a("li",[a("i",[t._v("3")]),t._v("訂單完成 ")])])}],o=(a("99af"),a("ac1f"),a("466d"),a("5530")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.qty,expression:"qty"}],staticClass:"form-control form-control-sm",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.qty=e.target.multiple?a:a[0]},function(e){return t.changeCart(t.id,t.qty)}]}},t._l(10,(function(e){return a("option",{key:e,domProps:{value:e,selected:t.qty==e}},[t._v(t._s(e))])})),0)])},c=[],n=(a("c975"),a("a9e3"),a("2f62")),l={data:function(){return{id:this.productid,qty:this.cartqty}},props:{productid:{type:String,default:""},cartqty:{type:Number,default:1}},methods:Object(o["a"])(Object(o["a"])({changeCart:function(t,e){var a=this,s=a.cartsLocalstorageId.indexOf(t),r=a.cartsLocalstorage[s].id,o="".concat("https://vue-course-api.hexschool.io","/api/").concat("lalabear","/cart/").concat(r);a.$store.commit("LOADING",!0),a.$http.delete(o).then((function(s){s.data.success&&a.addtoCart(t,e)}))},addtoCart:function(t,e){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("lalabear","/cart"),s=this,r={product_id:t,qty:e};s.$http.post(a,{data:r}).then((function(t){t.data.success&&s.getCarts()}))}},Object(n["b"])("cartsModules",["getCarts"])),Object(n["d"])("cartsModules",["GETCARTSLOCALSTORAGE"])),computed:Object(o["a"])({},Object(n["c"])("cartsModules",["cartsLocalstorage","cartsLocalstorageId"])),created:function(){this.GETCARTSLOCALSTORAGE()}},d=l,u=a("2877"),m=Object(u["a"])(d,i,c,!1,null,null,null),p=m.exports,v={data:function(){return{coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},massage:""},mobileView:!1}},components:{EditQty:p},methods:{removeCartItem:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("lalabear","/cart/").concat(t),a=this;a.$store.commit("LOADING",!0),a.$http.delete(e).then((function(t){t.data.success&&(a.$store.dispatch("updateMessage",{msg:t.data.message,status:"dark"}),a.$store.dispatch("cartsModules/getCarts"))}))},addCouponCode:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("lalabear","/coupon"),e=this,a={code:e.coupon_code};e.$store.commit("LOADING",!0),e.$http.post(t,{data:a}).then((function(t){e.$store.dispatch("cartsModules/getCarts"),t.data.success?e.$store.dispatch("updateMessage",{msg:t.data.message,status:"light"}):e.$store.dispatch("updateMessage",{msg:t.data.message,status:"dark"}),e.$store.commit("LOADING",!1)}))},creatOrder:function(){var t=this;this.$refs.form.validate().then((function(e){if(e){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("lalabear","/order"),s=t,r=s.form;s.$store.commit("LOADING",!0),s.$http.post(a,{data:r}).then((function(t){t.data.success?(s.$router.push("/order/".concat(t.data.orderId)),s.$store.dispatch("updateMessage",{msg:t.data.message,status:"light"}),s.$store.dispatch("cartsModules/getCarts")):s.$store.dispatch("updateMessage",{msg:t.data.message,status:"dark"}),s.$store.commit("LOADING",!1)}))}}))},_isMobile:function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return t},copyCoupon:function(){var t=document.createRange();t.selectNode(document.getElementById("coupon"));var e=window.getSelection();e.removeAllRanges(),e.addRange(t),document.execCommand("copy"),this.$store.dispatch("updateMessage",{msg:"已複製優惠券",status:"light"})}},computed:Object(o["a"])(Object(o["a"])({},Object(n["c"])("cartsModules",["carts"])),Object(n["c"])(["isShow"])),created:function(){var t=this;this.$store.commit("LOADING",!0),this.$store.commit("ISSHOW",!1),setTimeout((function(){t.$store.commit("LOADING",!1),t.$store.commit("ISSHOW",!0)}),300)},mounted:function(){this._isMobile()?this.mobileView=!1:this.mobileView=!0}},f=v,g=(a("a901"),Object(u["a"])(f,s,r,!1,null,null,null));e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-840f8a0c.b8436fe6.js.map