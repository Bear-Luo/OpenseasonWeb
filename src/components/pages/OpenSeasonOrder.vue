<template>    
    <div>
        <ul class="step">
            <li class="active"><i>1</i>輸入寄送資訊</li>
            <li class="line active"></li>
            <li class="active"><i>2</i>確認繳費</li>
            <li class="line" :class="{'active': order.is_paid}"></li>
            <li :class="{'active': order.is_paid}"><i>3</i>訂單完成</li>
        </ul>
        <div class="col-md-6 mx-auto mb-5">
            <div class="order-list flex-column shadow-sm  mb-3">
                <h5 class="order-h5">訂單明細</h5>
                <table class="table">
                    <thead class="border-0-first-tr">
                        <tr>
                            <th>品名</th>
                            <th>數量</th>
                            <th>單價</th>
                        </tr>                    
                    </thead>
                    <tbody>
                        <tr v-for="item in order.products" :key="item.id">
                            <td class="align-middle">{{ item.product.title }}</td>
                            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                            <td class="align-middle text-right">{{ item.final_total | currency }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2"><b>總計</b></td>
                            <td class="text-right"><b>{{ order.total | currency }}</b></td>
                        </tr>
                    </tfoot>
                </table>

                <h5 class="order-h5">收件人資訊</h5>
                <table class="table">
                    <tbody class="border-0-first-tr">
                        <tr>
                            <th width="120">Email</th>
                            <td>{{ order.user.email }}</td>
                        </tr>
                        <tr>
                            <th>姓名</th>
                            <td>{{ order.user.name }}</td>
                        </tr>
                        <tr>
                            <th>收件人電話</th>
                            <td>{{ order.user.tel }}</td>
                        </tr>
                        <tr>
                            <th>收件人地址</th>
                            <td>{{ order.user.address }}</td>
                        </tr>
                        <tr>
                            <th>付款狀態</th>
                            <td>
                                <span v-if="!order.is_paid">尚未付款</span>
                                <span v-else class="text-success">付款完成</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="action text-right" v-if="order.is_paid === false">
                <button class="btn btn-blue" @click="payOrder">確認付款去</button>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    @import url(../../assets/css/order.css);
</style>

<script>
export default {
	data(){
		return{
			orderId: '',
			order: {
				user: {}
			}
		}
	},
	methods: {
		getOrder() {            
		    document.title = '角獵咖啡 - 確認繳費';
			const vm = this;
			const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
            vm.$bus.$emit('loading',true);
			this.$http.get(url).then((response) => {
				// console.log(response)
				vm.order = response.data.order;
                vm.$bus.$emit('loading',false);
			})
		},
		payOrder() {
			const vm = this;
			const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
			vm.$bus.$emit('loading',true);
			this.$http.post(url).then((response) => {
				// console.log(response)
				if(response.data.success){
					vm.getOrder();
				    vm.$bus.$emit('loading',false);
                    vm.$bus.$emit('message:push',response.data.message,'light');
		            document.title = '角獵咖啡 - 訂單完成';                    
				}
				// console.log(response)
            });
		}
	},
	created(){
		this.orderId = this.$route.params.orderId // orderId對應index.js的自定義的名稱;
		console.log(this.$route);
        this.getOrder();        
        this.$bus.$emit('getCart:update');
	}
}
</script>