<template>
    <div class="productlit-container" :class="{'mobile-view':mobileView}" v-scroll="scrollPage">
		<div class="productlist-sidebar" :class="{'fixed':isfixed}">
			<div class="coupon">
				<div><span>DISCOUNT CODE</span></div>
				<div><span id="coupon">20percent</span><a href="#" title="複製優惠碼" @click.prevent="copyCoupon"><i class="far fa-copy"></i></a></div>
			</div>
			<ul class="sidebar-menu">
				<li v-for="(item, index) in categoryData" :key="index" :class="{'active':category === item.en}"><a href="#" @click.prevent="selcategory(item.cn,item.en)">{{item.cn}}</a></li>
			</ul>
		</div>
		<div class="card-block">		
			<div class="d-flex pb-3">
				<div class="search">
					<input type="text" placeholder="請輸入關鍵字" v-model="keyword" v-on:keyup.enter="searchFun">
					<button type="button" @click="searchFun"><i class="fas fa-search"></i></button>
				</div>
				<div class="sort-block">
					<button type="button" class="btn price-sort-default" @click="priceSortFun">
						<span>價錢</span>
						<i class="fas fa-long-arrow-alt-up" v-if="priceSort.up"></i>
						<i class="fas fa-long-arrow-alt-down" v-if="priceSort.low"></i>
					</button>
				</div>
			</div>		
			<div class="row align-items-stretch pb-5">
				<div class="col-md-4 col-sm-6 mb-4" v-for="card in productsList" :key="card.id">
					<div class="card border-0 h-100" @click="gotoProduct(card.id)">
						<div class="position-relative" style="height: 180px;">
							<div class="product-cover" :style="{'background-image': `url(${card.imageUrl})`}">	
							</div>
							<AddHeartCart :productid="card.id" @heartadd="addHeart" @heartremove="removeHeart" @getcartupdate="resetCart"/>
						</div>
							
						<div class="py-3 px-3">
							<h5 class="card-title">
								<router-link :to="'/product_page/'+card.id" class="text-dark font-weight-bold">{{card.title}}</router-link>
							</h5>
							<div class="d-flex justify-content-between align-items-baseline">
								<del class="h6 text-black-50">{{card.origin_price | currency}}</del>
								<div class="h5 text-danger">{{card.price | currency}} 元</div>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<style>
	@import "../../assets/css/web_product_list.css";
</style>

<script>
import AddHeartCart from '../BtnAddHeartCart';

export default {
	data(){
		return{
			heart: [],
			products: [],
			productsList: [],
			categoryData: [{en:'all',cn:'全部商品'},{en:'coffee',cn:'咖啡'},{en:'bread',cn:'麵包'},{en:'jam',cn:'果醬'},{en:'gummy',cn:'水果軟糖'}],
			category: 'all',
			keyword: '',
			priceSort:{
				up: true,
				low: true
			},
			mobileView: false,
			isfixed: false
        }
	},
	components:{
		AddHeartCart
	},
    methods:{   
	  	scrollPage(e){		
			if(e.srcElement.scrollingElement.scrollTop > 0 && this.mobileView){				
				this.isfixed = true;	
			}else{
				this.isfixed = false;
			}
		},
		updateHeart() {
			localStorage.setItem('heartStr', JSON.stringify(this.heart));
			this.heart = JSON.parse(localStorage.getItem('heartStr'));
		},     
		addHeart(id){
			this.heart.push(id);
            this.updateHeart();
			this.$bus.$emit('message:push','已加入關注','light');
		},
		removeHeart(id){
			this.heart.splice(this.heart.indexOf(id), 1);
            this.updateHeart();
			this.$bus.$emit('message:push','已取消關注','dark');
		},
		getProducts() {
			const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
			const vm = this;
			vm.$bus.$emit('loading',true);
			this.$http.get(api).then(response => {
				// console.log(response.data)
				vm.products = response.data.products;
				vm.pagination = response.data.pagination;	
				vm.productsList = vm.products;				
				vm.$bus.$emit('loading',false);
			})
		},
		gotoProduct(id){
			this.$router.push(`/product_page/${id}`)
		},
		selcategory(cn,en){
			const vm = this;	
			vm.priceSort.up = true;
			vm.priceSort.low = true;		
			vm.$bus.$emit('loading',true);
			this.category = en;
			if (en === 'all') {
				this.productsList = this.products
			}else{
				this.productsList = this.products.filter(function(item){
					return item.category === cn;
				})
			}							
			vm.$bus.$emit('loading',false);
		},
		copyCoupon(){
			var TextRange = document.createRange();
			TextRange.selectNode(document.getElementById('coupon'));
			const sel = window.getSelection();
			sel.removeAllRanges();
			sel.addRange(TextRange);
			document.execCommand("copy");
		},
		searchFun(){
			this.priceSort.up = true;
			this.priceSort.low = true;
			this.category = '';
			this.productsList = this.products.filter(item => {
				return item.title.match(this.keyword);
			})
		},
		priceSortFun(){
			// 預設→價錢由低到高
			if(this.priceSort.up === this.priceSort.low){
				this.priceSort.low = false;

				this.productsList.sort(function(a, b) {
					a = a['price'];
					b = b['price'];
					return a - b;	
				});
			}else if(this.priceSort.up && this.priceSort.low === false){ 
				// 價錢由高→低
				this.priceSort.up = !this.priceSort.up;
				this.priceSort.low = !this.priceSort.low;

				this.productsList.sort(function(a, b) {
					a = a['price'];
					b = b['price'];
					return b - a;	
				});
			}else if(this.priceSort.low && this.priceSort.up === false){ 
				// 價錢由低→高
				this.priceSort.up = !this.priceSort.up;
				this.priceSort.low = !this.priceSort.low;

				this.productsList.sort(function(a, b) {
					a = a['price'];
					b = b['price'];
					return a - b;	
				});
			}
		},
		resetCart(){
			this.$emit('resetcart');
		},
		_isMobile() {  
			let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)  
			return flag;  
		}  
    },
	created() {
		this.getProducts();
        this.heart = JSON.parse(localStorage.getItem('heartStr')) || [];

		document.title = '角獵咖啡 - products';
	},
	mounted(){
		if (this._isMobile()) {  
			this.mobileView = true;
		} else {  
			this.mobileView = false;
		} 
	}
}
</script>