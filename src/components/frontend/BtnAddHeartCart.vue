<template>
  <div class="d-flex justify-content-end align-items-end">
    <button
      class="btn-heart"
      type="button"
      title="取消關注"
      @click.stop="removeHeart(id)"
      v-if="heartActive === id"
    >
      <i class="fas fa-heart"></i>
      <span>取消關注</span>
    </button>
    <button class="btn-heart" type="button" title="加入關注" @click.stop="addHeart(id)" v-else>
      <i class="fas fa-spinner fa-pulse" v-if="status.loadingItem === id"></i>
      <i class="far fa-heart" v-else></i>
      <span>加入關注</span>
    </button>

    <button class="btn-cart" type="button" @click.stop="checkCarts(id,qty)" title="加入購物車" v-if="cartsLocalstorageId.indexOf(id) > -1 || isAdd">
      <i class="fas fa-spinner fa-pulse" v-if="status.loadingItem === id"></i>
      <i class="fas fa-shopping-basket" v-else></i>
      <span>加入購物車</span>
    </button>
    <button class="btn-cart" type="button" @click.stop="addtoCart(id,qty)" title="加入購物車" v-else>
      <i class="fas fa-spinner fa-pulse" v-if="status.loadingItem === id"></i>
      <i class="fas fa-shopping-basket" v-else></i>
      <span>加入購物車</span>
    </button>
  </div>
</template>

<style scoped>
.btn-heart:focus,
.btn-cart:focus {
  outline: 0;
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      id: this.productid,
      qty: 1,
      isAdd: false,
      heartActive: '',
      status: {
        loadingItem: ''
      }
    }
  },
  props: {
    productid: {
      type: String,
      default: ''
    }
  },
  methods: {
    addtoCart (id, qty) {
      this.isAdd = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      this.$store.commit('LOADING', true)
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(url, { data: cart }).then(response => {
        if (response.data.success) {
          this.status.loadingItem = ''
          this.$store.dispatch('cartsModules/getCarts')
          this.$store.dispatch('updateMessage', { msg: response.data.message, status: 'light' }, { root: true })
        } else {
          this.$store.dispatch('updateMessage', { msg: response.data.message, status: 'dark' }, { root: true })
        }
      })
    },
    checkCarts (item, num) {
      this.$store.commit('cartsModules/GETCARTSLOCALSTORAGE')
      this.changeCart(item, num)
    },
    changeCart (item, num) {
      const vm = this
      vm.$store.commit('LOADING', true)
      const i = this.cartsLocalstorageId.indexOf(item)
      const id = this.cartsLocalstorage[i].id
      const qty = this.cartsLocalstorage[i].qty
      const sumQty = qty + num
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`

      if (sumQty <= 10) {
        vm.$http.delete(url).then(response => {
          if (response.data.success) {
            vm.addtoCart(item, sumQty)
          }
        })
      } else if (sumQty > 10) {
        const subtract = 10 - qty
        if (subtract === 0) {
          vm.$store.commit('LOADING', false)
          vm.$store.dispatch('updateMessage', { msg: '不好意思本商品最多一次只能購買10個，您已購買10個此產品。', status: 'dark' })
        } else if (subtract > 0) {
          vm.$http.delete(url).then(response => {
            if (response.data.success) {
              vm.addtoCart(item, 10)
            }
          })
          vm.$store.dispatch('updateMessage', { msg: '不好意思本商品最多一次只能購買10個, 大量購買請來電聯繫', status: 'dark' })
        }
      }
    },
    addHeart (id) {
      this.$store.dispatch('heartModules/addHeart', id)
      this.heartFun()
    },
    removeHeart (id) {
      this.$store.dispatch('heartModules/removeHeart', id)
      this.heartFun()
    },
    heartFun () {
      const heartAry = JSON.parse(localStorage.getItem('heartStr')) || []
      if (heartAry.indexOf(this.id) > -1) {
        this.heartActive = this.id
      } else if (heartAry.indexOf(this.id) === -1) {
        this.heartActive = ''
      }
    }
  },
  computed: {
    ...mapGetters('cartsModules', ['cartsLocalstorageId', 'cartsLocalstorage'])
  },
  created () {
    this.heartFun()
    this.$store.commit('cartsModules/GETCARTSLOCALSTORAGE')

    this.$bus.$on('addcart:qty', num => {
      this.qty = num
    })
  }
}
</script>
