<template>
  <div>
    <select class="form-control form-control-sm" v-model="qty" @change="changeCart(id, qty)">
      <option :value="num" v-for="num in 10" :key="num" :selected="qty == num">{{ num }}</option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      id: this.productid,
      qty: this.cartqty
    }
  },
  props: {
    productid: {
      type: String,
      default: ''
    },
    cartqty: {
      type: Number,
      default: 1
    }
  },
  methods: {
    changeCart (item, num) {
      const vm = this
      const i = vm.cartsLocalstorageId.indexOf(item)
      const id = vm.cartsLocalstorage[i].id
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`

      // 刪除原本的數量
      vm.$store.commit('LOADING', true)
      vm.$http.delete(url).then(response => {
        if (response.data.success) {
          vm.addtoCart(item, num)
        }
      })
    },
    addtoCart (id, qty) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      const cart = {
        product_id: id,
        qty
      }
      vm.$http.post(url, { data: cart }).then(response => {
        if (response.data.success) {
          vm.getCarts()
        }
      })
    },
    ...mapActions('cartsModules', ['getCarts']),
    ...mapMutations('cartsModules', ['GETCARTSLOCALSTORAGE'])
  },
  computed: {
    ...mapGetters('cartsModules', ['cartsLocalstorage', 'cartsLocalstorageId'])
  },
  created () {
    this.GETCARTSLOCALSTORAGE()
  }
}
</script>
