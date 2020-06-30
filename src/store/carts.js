import axios from 'axios'

export default {
  namespaced: true,
  state: {
    carts: [],
    cartsSum: 0,
    cartsLocalstorage: [],
    cartsLocalstorageId: []
  },
  actions: {
    getCarts (context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true, { root: true })
      axios.get(url).then(response => {
        context.commit('CARTS', response.data.data)
        context.commit('UPDATECARTSLOCALSTORAGE')
        context.commit('LOADING', false, { root: true })
      })
    }
  },
  mutations: {
    CARTS (state, playload) {
      state.carts = playload

      // 算購物車裡的商品數量
      state.cartsSum = 0
      state.carts.carts.forEach(function (item) {
        state.cartsSum += item.qty
      })
    },
    GETCARTSLOCALSTORAGE (state) {
      state.cartsLocalstorage = JSON.parse(localStorage.getItem('cartItem')) || []
      state.cartsLocalstorageId = []
      state.cartsLocalstorage.forEach(item => {
        state.cartsLocalstorageId.push(item.product_id)
      })
    },
    UPDATECARTSLOCALSTORAGE (state) {
      const cartsLocalstorage = []
      state.carts.carts.forEach(function (item) {
        const itemObj = {
          id: item.id,
          product_id: item.product_id,
          qty: item.qty
        }
        cartsLocalstorage.push(itemObj)
      })
      localStorage.setItem('cartItem', JSON.stringify(cartsLocalstorage))
    }
  },
  getters: {
    carts: state => state.carts,
    cartsSum: state => state.cartsSum,
    cartsLocalstorageId: state => state.cartsLocalstorageId,
    cartsLocalstorage: state => state.cartsLocalstorage
  }
}
