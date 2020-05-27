<template>
    <div class="mb-5">
        <div class="text-center h3" v-if="heart.length === 0">您沒有關注的商品喔～</div>
        <div v-else>
            <div class="text-center h3 mb-4">關注商品</div>
            <div class="col-md-8 heart-list shadow-sm mx-auto">
                <table class="table mb-0">
                    <tbody class="border-0-first-tr">
                        <tr v-for="item in heartList" :key="item.id">
                            <td class="heart-img pl-0"><router-link :to="'/product_page/'+item.id" :style="{'background-image': `url(${item.imageUrl})`}"></router-link></td>
                            <td class="pl-0">{{item.title}}</td>
                            <td class="text-right">{{item.price | currency}}</td>
                            <td width="50"><button type="button" class="btn btn-lg text-danger" @click="removeHeart(item.id)"><i class="fas fa-heart" title="取消關注"></i></button></td>
                        </tr>					
                    </tbody>
                </table>
            </div>	
        </div>        		
    </div>
</template>

<style scoped>
    .table td{
        vertical-align: middle;
    }
    .heart-list{
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
    }
    .heart-img{
        width: 105px;
    }
    .heart-img a{
        display: block;
        width: 90px;
        height: 70px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>

<script>
export default {
    data(){
        return{
            heart: [],
            heartList: []
        }
    },
    methods:{               
		getHeartList() {
			const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
            const vm = this;
            let products = [];
            vm.heart = JSON.parse(localStorage.getItem('heartStr')) || [];
			vm.$bus.$emit('loading',true);
			this.$http.get(api).then(response => {
				// console.log(response.data)
                products = response.data.products;	
                // console.log(products)
                vm.heartList = products.filter(function(item){
                    return vm.heart.indexOf(item.id) > -1
                });
				vm.$bus.$emit('loading',false);
			})
		}, 
		updateHeart() {
			localStorage.setItem('heartStr', JSON.stringify(this.heart));
			this.heart = JSON.parse(localStorage.getItem('heartStr'));
		},     
		removeHeart(id){
			this.heart.splice(this.heart.indexOf(id), 1);
            this.updateHeart();
            this.getHeartList();
			this.$bus.$emit('message:push','已取消關注','dark');
		},     
    },
    created(){
        document.title = '角獵咖啡 - 關注商品';
             
        this.getHeartList();
    }
}
</script>