# 角獵咖啡電商網站
> https://bear-luo.github.io/OpenseasonWeb/#/

## Skill
* Vue CLI 4
* Vuex
* Vue Router
* Vue Components
* API
* jQuery
* SCSS
* JS
* Webpack
* ESlint ( JavaScript Standard )
* RWD
* Bootstrap4

## Plugin
* [Vue-axios](https://github.com/axios/axios)
* [Vue-loading-overlay](https://github.com/ankurk91/vue-loading-overlay)
* [Vee-validate](https://github.com/baianat/vee-validate)
* [vue2-datepicker](https://github.com/mengxiong10/vue2-datepicker)
* [Waterfall.js](http://raphamorim.io/waterfall.js/)
* [Bootstrap 4](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com/)

## 前台介紹
### 首頁
* 以滿版的形象圖輪播，並引導客戶前往賣場

![](https://user-images.githubusercontent.com/61472045/89060646-f0b1e680-d395-11ea-99de-fe3182350baf.png)

* 最新消息的瀑布式排版使用 Waterfall.js
* 點選卡片後會有內容彈窗
* 可點選換頁查看舊的消息
* 使用 mobile 瀏覽最新消息時，卡片別於 PC 會顯示部分內文

![](https://user-images.githubusercontent.com/61472045/89059539-f4dd0480-d393-11ea-86fc-c3bde541f152.png)

### 商品列表頁
* 可點選左方類別與使用搜尋篩選商品
* 點選價錢排序按鈕可依金額作降冪或升冪排序
* PC 瀏覽時滑鼠滑至該商品卡片會顯示「加入關注」與「加入購物車」按鈕，mobile 瀏覽時則直接顯示，

![](https://user-images.githubusercontent.com/61472045/89060871-5605d780-d396-11ea-9ce8-f990653c2c72.png)

###商品詳細頁
* 加入關注、加入購物車按鈕與商品列表頁卡片的按鈕為同一 component
* 可選擇要加入的數量，因為角獵咖啡不方便接大訂單，所以購買數量最多到10

![](https://user-images.githubusercontent.com/61472045/89063890-8d2ab780-d39b-11ea-9174-9a8154d57cac.png)

* 下方相似商品為隨機取該類別中的三樣顯示，無顯示則代表該類別只有1樣商品

![](https://user-images.githubusercontent.com/61472045/89064604-df200d00-d39c-11ea-9544-629b0237eb51.png)

### 關注商品
* 使用 localStorage 記錄
* 取消關注、加入購物車按鈕與商品列表頁卡片的按鈕為同一 component

![](https://user-images.githubusercontent.com/61472045/89064934-6ff6e880-d39d-11ea-9035-e39096748100.png)

### 購物車
* 使用 Vee-validate 驗證，填完畢填資料才能按下「送出訂單」按鈕
* 提供優惠券，使用可打折

![](https://user-images.githubusercontent.com/61472045/89065237-de3bab00-d39d-11ea-86a0-2100d6e83e55.png)

## 後台介紹
* 提供商品、訂單、優惠券管理與查看功能
* 使用 vue2-datepicker 點選日期

![](https://user-images.githubusercontent.com/61472045/89065839-fc55db00-d39e-11ea-82a2-24e4e9844bfb.png)


