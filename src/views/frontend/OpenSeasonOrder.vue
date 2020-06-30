<template>
  <div class="container fade" :class="{'show':isShow}">
    <ul class="step">
      <li class="active">
        <i>1</i>輸入寄送資訊
      </li>
      <li class="line active"></li>
      <li class="active">
        <i>2</i>確認繳費
      </li>
      <li class="line" :class="{'active': order.is_paid}"></li>
      <li :class="{'active': order.is_paid}">
        <i>3</i>訂單完成
      </li>
    </ul>
    <div class="col-md-6 paid-status" v-if="order.is_paid === true">
      <div>訂單已完成付款，<router-link to="/product_list">回購物頁面<i>→</i></router-link><span class="caret"></span></div>
      <i class="fas fa-check animate__rubberBand"></i>
    </div>
    <div class="col-md-6 mx-auto mb-5 px-0">
      <div class="order-list flex-column shadow-sm mb-3">
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
              <td colspan="2">
                <b>總計</b>
              </td>
              <td class="text-right">
                <b>{{ order.total | currency }}</b>
              </td>
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

<style lang="scss">
@import "../../assets/scss/frontend/order.scss";
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      orderId: '',
      order: {
        user: {}
      }
    }
  },
  methods: {
    getOrder () {
      document.title = '角獵咖啡 - 確認繳費'
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`
      vm.$store.commit('LOADING', true)
      vm.$store.commit('ISSHOW', false)
      vm.$http.get(url).then(response => {
        vm.order = response.data.order
        vm.$store.commit('LOADING', false)
        vm.$store.commit('ISSHOW', true)
      })
    },
    payOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`
      vm.$store.commit('LOADING', true)
      vm.$store.commit('ISSHOW', false)
      window.scroll(0, 0)
      vm.$http.post(url).then(response => {
        if (response.data.success) {
          vm.getOrder()
          vm.$bus.$emit('message:push', response.data.message, 'light')
          document.title = '角獵咖啡 - 訂單完成'
        }
      })
    }
  },
  computed: {
    ...mapGetters(['isShow'])
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
