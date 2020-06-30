import axios from 'axios'

export default {
  namespaced: true,
  state: {
    products: []
  },
  actions: {
    getProductsAll (context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      context.commit('LOADING', true, { root: true })
      axios.get(url).then(response => {
        context.commit('PRODUCTS', response.data.products)
        context.commit('ISSHOW', true, { root: true })
        context.commit('LOADING', false, { root: true })
      })
    }
  },
  mutations: {
    PRODUCTS (state, playload) {
      state.products = playload
      // 避免有些數字預設不是1，跟不會出現數字
      state.products.forEach(item => {
        item.num = 1
      })
    }
  },
  getters: {
    products: state => state.products
  }
}
