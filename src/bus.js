import Vue from 'vue';

Vue.prototype.$bus = new Vue;

// AlertMessage,Dashboard
// vm.$bus.$emit('messsage:push', message, status);
// message(String): 訊息內容
// status(String): Alert 的樣式

// Loading,OpenSeason
// vm.$bus.$emit('loading', para);
// para(true or false): loading 動畫的顯示與關閉

// BtnAddHeartCart,OpenSeasonProductPage
// vm.$bus.$emit('addcart:qty',num);
// num: 該商品購賣的數量
