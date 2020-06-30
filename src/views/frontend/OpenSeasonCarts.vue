<template>
  <div class="container mb-5 fade" :class="{'show':isShow}">
    <div class="mb-3 text-center" v-if="carts.total === 0">
      <div class="no-sellection">
        <div>您尚未選購任何商品唷～</div>
        <div class="arrow"></div>
      </div>
      <router-link to="/product_list">
        快去購物吧
        <i>→</i>
      </router-link>
    </div>
    <div v-else>
      <ul class="step">
        <li class="active">
          <i>1</i>輸入寄送資訊
        </li>
        <li class="line"></li>
        <li>
          <i>2</i>確認繳費
        </li>
        <li class="line"></li>
        <li>
          <i>3</i>訂單完成
        </li>
      </ul>
      <ValidationObserver ref="form" tag="div" v-slot="{ invalid, handleSubmit }">
        <div class="order-list shadow-sm mb-3">
          <div class="col-md-6">
            <form class="order-form">
              <validationProvider
                tag="div"
                class="form-group"
                name="Email"
                rules="required|email"
                v-slot="{failed, errors, classes}"
              >
                <label for="useremail">
                  <span class="text-danger">*</span>Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  :class="classes"
                  name="email"
                  id="useremail"
                  v-model="form.user.email"
                  placeholder="請輸入 Email"
                />
                <span v-if="failed" class="text-danger">{{ errors[0] }}</span>
              </validationProvider>
              <validationProvider
                tag="div"
                class="form-group"
                name="姓名"
                rules="required"
                v-slot="{failed, errors, classes}"
              >
                <label for="username">
                  <span class="text-danger">*</span>姓名
                </label>
                <input
                  type="text"
                  class="form-control"
                  :class="classes"
                  name="name"
                  id="username"
                  v-model="form.user.name"
                  placeholder="請輸入姓名"
                />
                <span v-if="failed" class="text-danger">{{ errors[0] }}</span>
              </validationProvider>
              <validationProvider
                tag="div"
                class="form-group"
                name="收件人電話"
                rules="required|numeric"
                v-slot="{failed, errors, classes}"
              >
                <label for="usertel">
                  <span class="text-danger">*</span>收件人電話
                </label>
                <input
                  type="tel"
                  class="form-control"
                  :class="classes"
                  name="tel"
                  id="usertel"
                  v-model="form.user.tel"
                  placeholder="請輸入收件人電話"
                />
                <span v-if="failed" class="text-danger">{{ errors[0] }}</span>
              </validationProvider>
              <validationProvider
                tag="div"
                class="form-group"
                name="收件人地址"
                rules="required"
                v-slot="{failed, errors, classes}"
              >
                <label for="useraddress">
                  <span class="text-danger">*</span>收件人地址
                </label>
                <input
                  type="text"
                  class="form-control"
                  :class="classes"
                  name="address"
                  id="useraddress"
                  v-model="form.user.address"
                  placeholder="請輸入收件人地址"
                />
                <span v-if="failed" class="text-danger">{{ errors[0] }}</span>
              </validationProvider>
              <div class="form-group">
                <label for="usermsg">留言</label>
                <textarea
                  name="massage"
                  id="usermsg"
                  class="form-control"
                  v-model="form.massage"
                  rows="3"
                ></textarea>
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <table class="table">
              <tbody class="border-0-first-tr">
                <tr v-for="item in carts.carts" :key="item.id">
                  <td v-if="mobileView" class="cart-img pl-0">
                    <router-link
                      :to="'/product_page/'+item.product_id"
                      :style="{'background-image': `url(${item.product.imageUrl})`}"
                    ></router-link>
                  </td>
                  <td class="pl-0">
                    <router-link :to="'/product_page/'+item.product_id">{{ item.product.title }}</router-link>
                    <br />
                    <span class="text-danger" v-if="item.coupon">已套用優惠券</span>
                  </td>
                  <td>
                    <EditQty
                      :productid="item.product_id"
                      :cartqty="item.qty"
                    />
                  </td>
                  <td class="text-right">{{ item.total | currency }}</td>
                  <td class="px-0 text-right">
                    <button
                      type="button"
                      @click="removeCartItem(item.id)"
                      class="btn btn-lg delete"
                      title="移除商品"
                    >
                      <i>╳</i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td class="pl-0">
                    <b>總計</b>
                  </td>
                  <td v-if="mobileView" colspan="3" class="text-right">
                    <b>{{ carts.total | currency }}</b>
                  </td>
                  <td v-else colspan="2"  class="text-right">
                    <b>{{ carts.total | currency }}</b>
                  </td>
                  <td></td>
                </tr>
                <tr v-if="carts.final_total !== carts.total">
                  <td class="pl-0">
                    <b class="text-danger">優惠價</b>
                  </td>
                  <td v-if="mobileView" colspan="3" class="text-right">
                    <b class="text-danger">{{ carts.final_total | currency }}</b>
                  </td>
                  <td v-else colspan="2" class="text-right">
                    <b class="text-danger">{{ carts.final_total | currency }}</b>
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
            <div>
              <div class="copy-coupon">
                <span class="mr-1">您有一張可以使用的優惠券</span>
                <span @click="copyCoupon" id="coupon">20percent<i class="far fa-copy"></i></span>
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="請輸入優惠券" v-model="coupon_code" />
                <div class="input-group-append">
                  <button
                    type="button"
                    @click="addCouponCode"
                    class="btn btn-outline-secondary"
                  >套用優惠券</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="action">
          <router-link to="/product_list" class="btn btn-outline-secondary">繼續購物</router-link>
          <button
            type="submit"
            class="btn btn-blue"
            :disabled="invalid"
            @click="handleSubmit(creatOrder)"
          >送出訂單</button>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/frontend/order.scss";
</style>

<script>
import EditQty from '../../components/frontend/EditQty'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
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
  components: {
    EditQty
  },
  methods: {
    removeCartItem (id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      const vm = this
      vm.$store.commit('LOADING', true)
      vm.$http.delete(url).then(response => {
        if (response.data.success) {
          vm.$store.dispatch('updateMessage', { msg: response.data.message, status: 'dark' })
          vm.$store.dispatch('cartsModules/getCarts')
        }
      })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const vm = this
      const coupon = {
        code: vm.coupon_code
      }
      vm.$store.commit('LOADING', true)
      vm.$http.post(url, { data: coupon }).then(response => {
        vm.$store.dispatch('cartsModules/getCarts')
        if (response.data.success) {
          vm.$store.dispatch('updateMessage', { msg: response.data.message, status: 'light' })
        } else {
          vm.$store.dispatch('updateMessage', { msg: response.data.message, status: 'dark' })
        }
        vm.$store.commit('LOADING', false)
      })
    },
    creatOrder () {
      this.$refs.form.validate().then(success => {
        if (success) {
          const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
          const vm = this
          const order = vm.form
          vm.$store.commit('LOADING', true)
          vm.$http.post(url, { data: order }).then(response => {
            if (response.data.success) {
              vm.$router.push(`/order/${response.data.orderId}`)
              vm.$store.dispatch('updateMessage', { msg: response.data.message, status: 'light' })
              vm.$store.dispatch('cartsModules/getCarts')
            } else {
              vm.$store.dispatch('updateMessage', { msg: response.data.message, status: 'dark' })
            }
            vm.$store.commit('LOADING', false)
          })
        }
      })
    },
    _isMobile () {
      const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    },
    copyCoupon () {
      var TextRange = document.createRange()
      TextRange.selectNode(document.getElementById('coupon'))
      const sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(TextRange)
      document.execCommand('copy')
      this.$store.dispatch('updateMessage', { msg: '已複製優惠券', status: 'light' })
    }
  },
  computed: {
    ...mapGetters('cartsModules', ['carts']),
    ...mapGetters(['isShow'])
  },
  created () {
    this.$store.commit('LOADING', true)
    this.$store.commit('ISSHOW', false)

    setTimeout(() => {
      this.$store.commit('LOADING', false)
      this.$store.commit('ISSHOW', true)
    }, 300)
  },
  mounted () {
    if (this._isMobile()) {
      this.mobileView = false
    } else {
      this.mobileView = true
    }
  }
}
</script>
