<template>
    <div class="product-content pt-4 pb-5 w-100">
        <div class="product-info">
            <div class="col-md-7 col-sm-6">
                <img class="img-fluid shadow-sm" :src="product.imageUrl" :alt="product.title">
            </div>
            <div class="col-md-5 col-sm-6 pb-3">
                <h2>{{product.title}}</h2>
                <p>{{product.content}}</p>
                <div class="price-block">
                    <del class="text-black-50">原價： {{product.origin_price | currency}}</del>
                    <span>優惠： {{product.price | currency}}</span>
                </div>
                <div>                    
                    <select name="" class="form-control mt-3" v-model="product.num" @change="sentNum">
                        <option :value="num" v-for="num in 10" :key="num">
                            選購 {{num}} {{product.unit}}
                        </option>
                    </select>
                    <div class="action">
                        <AddHeartCart :productid="productId" @heartadd="addHeart" @heartremove="removeHeart" @getcartupdate="resetCart"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    @import url(../../assets/css/product_page.css);
</style>

<script>
import AddHeartCart from '../BtnAddHeartCart';

export default {
    data(){
        return{
            heart: [],
            productId: '',
            product: {}
        }
    },
	components:{
		AddHeartCart
	},
    methods:{   
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
		getProduct(id) {
			const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
			const vm = this;
			vm.$bus.$emit('loading',true);
			this.$http.get(api).then(response => {
				// console.log(response.data)
				vm.product = response.data.product;
                vm.product.num = 1; // 避免有些數字預設不是1，跟不會出現數字
                document.title = '角獵咖啡 - ' + vm.product.title;
				vm.$bus.$emit('loading',false);
			})
        },
        sentNum(){            
            this.$bus.$emit('addcart:qty',this.product.num);
        },
		resetCart(){
			this.$emit('resetcart');
		}
    },
    created(){
        this.productId = this.$route.params.id;
        this.getProduct(this.productId);
        this.heart = JSON.parse(localStorage.getItem('heartStr')) || [];
    }
}
</script>