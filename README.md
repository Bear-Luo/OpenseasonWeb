# 角獵咖啡電商網站
> https://bear-luo.github.io/openseasonweb/#/

## Skill
* Vue CLI
* Vuex
* VueRouter
* VueComponents
* API
* JS
* jQuery
* RWD
* Bootstrap 4
* SCSS
* Webpack
* ESlint ( JavaScript Standard )

## Plugin
* [Vue-router](https://github.com/vuejs/vue-router#readme)
* [Vuex](https://vuex.vuejs.org/zh/guide/)
* [Vue-axios](https://www.npmjs.com/package/vue-axios)
* [Vue-loading-overlay](https://github.com/ankurk91/vue-loading-overlay)
* [Vee-validate](https://github.com/baianat/vee-validate)
* [vue2-datepicker](https://github.com/mengxiong10/vue2-datepicker)
* [Bootstrap 4](https://getbootstrap.com/)
* [FontAwesome](https://fontawesome.com/)
* [Waterfall.js](http://raphamorim.io/waterfall.js/)

## 前端畫面
### 首頁
* 使用全螢幕的形象圖輪播來強調主題
* 引導使用者前往購物頁面

![](https://user-images.githubusercontent.com/61472045/89060646-f0b1e680-d395-11ea-99de-fe3182350baf.png)

* 最新消息的瀑布式排版為使用 waterfall.js 套件
* 可點選換頁按鈕查看舊消息

![](https://user-images.githubusercontent.com/61472045/89059539-f4dd0480-d393-11ea-86fc-c3bde541f152.png)


### 商品列表頁
* 可點選左方的類別或使用搜尋欄作商品篩選
* PC 瀏覽時，滑鼠滑至商品卡片時可看到「加入關注」與「加入購物車」按鈕；Mobile 瀏覽時，按鈕則直接顯示
* 點選價錢排序按鈕後可依價錢作升冪與降冪排序

![](https://user-images.githubusercontent.com/61472045/89060871-5605d780-d396-11ea-9ce8-f990653c2c72.png)


### 商品詳細頁
* 「加入關注」與「加入購物車」按鈕與商品列表頁為同一 component
* 使用 EventBus 傳遞欲加入購物車的數量
* 因角獵咖啡大訂單得事先打電話詢問，所以每個商品一次最多只能放入購物車 10 個

![](https://user-images.githubusercontent.com/61472045/89063890-8d2ab780-d39b-11ea-9174-9a8154d57cac.png)

* 相似商品為同類別商品隨機取三個，如該類別只有一個商品則此區域不顯示

![](https://user-images.githubusercontent.com/61472045/89064604-df200d00-d39c-11ea-9544-629b0237eb51.png)


### 關注商品
* 使用 localStorage 來記錄關注的商品
* 「取消關注」與「加入購物車」按鈕與商品列表頁為同一 component

![](https://user-images.githubusercontent.com/61472045/89064934-6ff6e880-d39d-11ea-9035-e39096748100.png)


### 購物車頁面
* 使用 Vee-validate 驗證資料後才能送出訂單
* 放入購物車的商品可透過此頁面修改訂購數量
* 複製優惠券後經套用可享有折扣

![](https://user-images.githubusercontent.com/61472045/89065237-de3bab00-d39d-11ea-86a0-2100d6e83e55.png)


## 後台畫面
* 提供商品管理、查看訂單資訊與優惠券管理功能
* 使用 vue2-datepicker 選擇日期

![](https://user-images.githubusercontent.com/61472045/89065839-fc55db00-d39e-11ea-82a2-24e4e9844bfb.png)


## 聲明
* 圖片來源： [Unsplash](https://unsplash.com/) 與 [角獵咖啡粉絲頁](https://www.facebook.com/%E8%A7%92%E7%8D%B5%E5%92%96%E5%95%A1-Open-Season-642663222541449/)
* 本網站為學習用，無任何商業用途
