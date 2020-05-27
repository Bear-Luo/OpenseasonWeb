<template>    
    <div class="mb-5">
        <ul class="step">
            <li class="active"><i>1</i>輸入寄送資訊</li>
            <li class="line"></li>
            <li><i>2</i>確認繳費</li>
            <li class="line"></li>
            <li><i>3</i>訂單完成</li>
        </ul>
        <ValidationObserver ref="form" tag="div" v-slot="{ invalid, handleSubmit }" v-if="cartsdata.total !== 0">
            <div class="order-list shadow-sm mb-3">
                <div class="col-md-6">
                    <form class="order-form">
                        <validationProvider tag="div" class="form-group" name="Email" rules="required|email" v-slot="{failed, errors, classes}">
                            <label for="useremail">Email</label>
                            <input type="email" class="form-control" :class="classes" name="email" id="useremail" v-model="form.user.email" placeholder="請輸入 Email">
                            <span v-if="failed" class="text-danger">{{errors[0]}}</span>
                        </validationProvider>
                        <validationProvider tag="div" class="form-group" name="姓名" rules="required" v-slot="{failed, errors, classes}">
                            <label for="username">姓名</label>
                            <input type="text" class="form-control" :class="classes" name="name" id="username" v-model="form.user.name" placeholder="請輸入姓名">
                            <span v-if="failed" class="text-danger">{{errors[0]}}</span>
                        </validationProvider>
                        <validationProvider tag="div" class="form-group" name="收件人電話" rules="required|numeric" v-slot="{failed, errors, classes}">
                            <label for="usertel">收件人電話</label>
                            <input type="tel" class="form-control" :class="classes" name="tel" id="usertel" v-model="form.user.tel" placeholder="請輸入收件人電話">
                            <span v-if="failed" class="text-danger">{{errors[0]}}</span>
                        </validationProvider>
                        <validationProvider tag="div" class="form-group" name="收件人地址" rules="required" v-slot="{failed, errors, classes}">
                            <label for="useraddress">收件人地址</label>
                            <input type="text" class="form-control" :class="classes" name="address" id="useraddress" v-model="form.user.address" placeholder="請輸入收件人地址">
                            <span v-if="failed" class="text-danger">{{errors[0]}}</span>
                        </validationProvider>
                        <div class="form-group">
                            <label for="usermsg">留言</label>
                            <textarea name="massage" id="usermsg" class="form-control" v-model="form.massage" rows="5"></textarea>
                        </div>
                    </form>
                </div>
                <div class="col-md-6">
                    <table class="table">
                        <tbody class="border-0-first-tr">
                            <tr v-for="item in cartsdata.carts" :key="item.id">
                                <td v-if="mobileView" class="cart-img pl-0"><router-link :to="'/product_page/'+item.product_id" :style="{'background-image': `url(${item.product.imageUrl})`}"></router-link></td>
                                <td class="pl-0">{{item.product.title}}<br><span class="text-danger" v-if="item.coupon">已套用折扣碼</span></td>
                                <td>{{item.qty}}/{{item.product.unit}}</td>
                                <td class="text-right">{{item.product.price | currency}}</td>
                                <td width="50" class="px-0"><button type="button" @click="removeCartItem(item.id)" class="btn btn-lg" title="移除商品"><i class="fas fa-times"></i></button></td>
                            </tr>					
                        </tbody>
                        <tfoot>
                            <tr>
                                <td v-if="mobileView" colspan="3"><b>總計</b></td>
                                <td colspan="2" v-else><b>總計</b></td>
                                <td class="text-right"><b>{{cartsdata.total | currency}}</b></td>
                                <td></td>
                            </tr>
                            <tr v-if="cartsdata.final_total !== cartsdata.total">
                                <td colspan="3"><b class="text-danger">折扣價</b></td>
                                <td class="text-right"><b class="text-danger">{{cartsdata.final_total | currency}}</b></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="請輸入折扣碼" v-model="coupon_code">
                        <div class="input-group-append"><button type="button" @click="addCouponCode" class="btn btn-outline-secondary">套用折扣碼</button></div>
                    </div>
                </div>            
            </div>		
            <div class="text-right w-100">
                <router-link to="/product_list" class="btn btn-outline-secondary">繼續購物</router-link>
                <button type="submit" class="btn btn-blue" :disabled="invalid" @click="handleSubmit(creatOrder)">送出訂單</button>
            </div>	
        </ValidationObserver>
        <div class="h3 mb-3 text-center" style="line-height:200px" v-else>您尚未選購任何商品唷～</div>
    </div>
</template>

<style scoped>
    @import url(../../assets/css/order.css);
</style>

<script>
export default {
    data(){
        return{            
			coupon_code: '',
			form: {
				user: {
					name: '',
					email: '',
					tel: '',
					address: ''
				},
				massage: ''
            },
            mobileView: false
        }
    },
	props: {
		cartsdata: {
			type: Object,
			default: {}
		}
	},
    methods:{
		resetCart(){
			this.$emit('resetcart');
		},
        removeCartItem(id) {
			const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
			const vm = this;
			vm.$bus.$emit('loading',true);
			this.$http.delete(url).then(response => {				
				vm.resetCart();		
				vm.$bus.$emit('message:push',response.data.message,'dark');	
				vm.$bus.$emit('loading',false);		
			})
		},
		addCouponCode() {
			const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
			const vm = this;
			const coupon = {
				code: vm.coupon_code
			}
            vm.$bus.$emit('loading',true);
			this.$http.post(url,{data: coupon}).then(() => {
				vm.$bus.$emit('getCart:update');
                vm.$bus.$emit('loading',false);
			})
		},
		creatOrder() {
			this.$refs.form.validate().then((success) => {
				if (success) {
					const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
					const vm = this;
					const order = vm.form;
                    vm.$bus.$emit('loading',true);
					this.$http.post(url,{data: order}).then(response => {
						if(response.data.success){
							vm.$router.push(`/order/${response.data.orderId}`)
					
							// vm.form.user.name = vm.form.user.email = vm.form.user.tel = vm.form.user.address = vm.form.massage = '';
							// this.$nextTick(() => {
							// 	this.$refs.form.reset();
							// });
							vm.$bus.$emit('message:push',response.data.message,'light');
						}else {
							vm.$bus.$emit('message:push',response.data.message,'dark');
						}	
                        vm.$bus.$emit('loading',false);				
					})
				}else {return}	
			})
		},
		_isMobile() {  
			let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)  
			return flag;  
		}  
    },
    created(){        
		document.title = '角獵咖啡 - 輸入寄送資訊';
    },
	mounted(){
		if (this._isMobile()) {  
			this.mobileView = false;
		} else {  
			this.mobileView = true;
		} 
	}
}
</script>