<template>
  <div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th width="100">應負金額</th>
          <th width="100">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ item.create_at | date }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <div
              v-for="product in item.products"
              :key="product.id"
            >{{ product.product.title }} 數量：{{ product.qty + product.product.unit }}</div>
          </td>
          <td class="text-right">{{ item.total | currency }}</td>
          <td>
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else>尚未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
    <pager :pagerdata="pagination" @getpage="getOrders" />
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      products: [],
      tempProduct: {},
      orders: [],
      isNew: false,
      delItem: {},
      status: {
        fileUploading: false
      },
      pagination: {}
    }
  },
  created () {
    this.getOrders()
  },
  methods: {
    getOrders (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/orders?page=${page}`
      const vm = this
      vm.$store.commit('LOADING', true)
      vm.$http.get(api).then(response => {
        vm.orders = response.data.orders
        vm.$store.commit('LOADING', false)
        vm.pagination = response.data.pagination
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
        this.isNew = true
      } else {
        this.tempProduct = Object.assign({}, item)
        this.isNew = false
      }
      $('#productModal').modal('show')
    }
  }
}
</script>
