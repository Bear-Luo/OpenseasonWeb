<template>
    <div class="d-flex justify-content-end align-items-end">         
        <button class="btn-heart" type="button" title="取消關注" @click.stop="removeItemHeart(id)" v-if="heartActive === id">
            <i class="fas fa-heart"></i>
            <span>取消關注</span>
        </button>     
        <button class="btn-heart" type="button" title="加入關注" @click.stop="addItemHeart(id)" v-else>
            <i class="fas fa-spinner fa-pulse" v-if="status.loadingItem === id"></i>
            <i class="far fa-heart" v-else></i>
            <span>加入關注</span>
        </button> 
        <button class="btn-cart" type="button" @click.stop="addtoCart(id,qty)" title="加入購物車">
            <i class="fas fa-spinner fa-pulse" v-if="status.loadingItem === id"></i>
            <i class="fas fa-shopping-basket" v-else></i>
            <span>加入購物車</span>
        </button>
    </div>
</template>

<style scoped>
    .btn-heart:focus,.btn-cart:focus{
        outline: 0;
    }
</style>

<script>
export default {
    data(){
        return{
            id: this.productid,
            qty: 1,
            heartActive: '',
            status: {
                loadingItem: ''
            }
        }
    },
    props:{
        productid:{
            type: String,
            default: ''
        }
    },
    methods:{
		addtoCart(id,qty) {
			const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
			const vm = this;
			vm.status.loadingItem = id;
			const cart = {
				product_id: id,
				qty
			}
			this.$http.post(url,{data: cart}).then(response => {
				vm.status.loadingItem = '';	
                vm.$emit('getcartupdate');
				vm.$bus.$emit('message:push',response.data.message,'light');                
			})
		},
		addItemHeart(id){
            this.$emit('heartadd',id);
            this.heartFun();
		},
		removeItemHeart(id){
            this.$emit('heartremove',id);
            this.heartFun();
        },
        heartFun(){
            const heartAry = JSON.parse(localStorage.getItem('heartStr')) || [];
            if(heartAry.indexOf(this.id) > -1){
                this.heartActive = this.id;
            }else if(heartAry.indexOf(this.id) === -1){
                this.heartActive = '';
            }
        }
    },
    created(){
        this.heartFun();
        
		this.$bus.$on('addcart:qty', num => {
			this.qty = num;
		});
    }
}
</script>