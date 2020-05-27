<template>	
	<div class="flex-shrink-0 product-page" v-scroll="scrollPage">
		<Nav :class="{'nav-bg':navBgColor,'fixed-top':fixedTop}"/>
		<div class="container">		
			<router-view :cartsdata="carts" @resetcart="getCarts"></router-view>

			<!-- 查看購物車&關注 -->			
			<ul class="shopping">
				<li><router-link to="/carts"><span v-if="cartsSum !== 0">{{cartsSum}}</span><i class="fas fa-shopping-basket"></i></router-link></li>
				<li><router-link to="/heart"><i class="fas fa-heart"></i></router-link></li>
			</ul>
		</div>
	</div>	
</template>

<style scoped>
	@import "../assets/css/web_shopping.css";
</style>

<script>
import Nav from './OpenSeasonNav';
import $ from 'jquery';

export default {
	data(){
		return{		
			carts: {},
			cartsSum: 0,
			navBgColor: false,
			fixedTop: true,
		}
	},
	components: {
		Nav
	},
	methods: {
	  	scrollPage(e){		
			if(e.srcElement.scrollingElement.scrollTop > 0){				
				this.navBgColor = true;	
			}else{
				this.navBgColor = false;
			}
		},
		getCarts() {
			const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
			const vm = this;
			vm.$bus.$emit('loading',true);
			this.$http.get(api).then(response => {
				vm.carts = response.data.data;
				vm.cartsSum = 0;
				vm.carts.carts.forEach(function(item){
					vm.cartsSum += item.qty;
				});	
				vm.$bus.$emit('loading',false);
			})
		}
	},
	created() {
		this.getCarts();
	}
}
</script>