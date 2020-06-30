<template>
  <div
    class="productlist-container fade"
    :class="{'mobile-view':mobileView,'show':isShow}"
    v-scroll="scrollPage"
  >
    <div class="productlist-sidebar" :class="{'fixed':isfixed}">
      <ul class="sidebar-menu">
        <li
          v-for="(item, index) in categoryData"
          :key="index"
          :class="{'active':category === item.en}"
        >
          <a href="#" @click.prevent="selcategory(item.cn,item.en)">{{ item.cn }}</a>
        </li>
      </ul>
    </div>
    <div class="card-block">
      <div class="d-flex pb-3">
        <div class="search">
          <input type="text" placeholder="請輸入關鍵字" v-model="keyword" v-on:keyup.enter="searchFun" />
          <button type="button" @click="searchFun">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div class="sort-block">
          <button type="button" class="btn price-sort-default" @click="priceSortFun">
            <span>價錢</span>
            <i class="fas fa-long-arrow-alt-up" v-if="priceSort.up"></i>
            <i class="fas fa-long-arrow-alt-down" v-if="priceSort.low"></i>
          </button>
        </div>
      </div>
      <div class="row align-items-stretch pb-5">
        <div class="product-list-card mb-4" v-for="card in productsList" :key="card.id">
          <div class="card border-0 h-100" @click="gotoProduct(card.id)">
            <div class="position-relative" style="height: 180px;">
              <div class="product-cover" :style="{'background-image': `url(${card.imageUrl})`}"></div>
              <AddHeartCart :productid="card.id"/>
            </div>

            <div class="py-3 px-3">
              <h5 class="card-title">
                <router-link
                  :to="'/product_page/'+card.id"
                  class="text-dark font-weight-bold"
                >{{ card.title }}</router-link>
              </h5>
              <div class="d-flex justify-content-between align-items-baseline">
                <del class="h6 text-black-50">{{ card.origin_price | currency }}</del>
                <div class="h5 text-danger">{{ card.price | currency }} 元</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/frontend/web_product_list.scss";
</style>

<script>
import AddHeartCart from '../../components/frontend/BtnAddHeartCart'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      productsList: [],
      categoryData: [
        { en: 'all', cn: '全部商品' },
        { en: 'coffee', cn: '咖啡' },
        { en: 'bread', cn: '麵包' },
        { en: 'jam', cn: '果醬' },
        { en: 'gummy', cn: '水果軟糖' }
      ],
      category: 'all',
      keyword: '',
      priceSort: {
        up: true,
        low: true
      },
      mobileView: false,
      isfixed: false
    }
  },
  components: {
    AddHeartCart
  },
  methods: {
    scrollPage (e) {
      if (e.srcElement.scrollingElement.scrollTop > 0 && this.mobileView) {
        this.isfixed = true
      } else {
        this.isfixed = false
      }
    },
    getProducts () {
      this.$store.commit('ISSHOW', false)
      this.$store.dispatch('productsModules/getProductsAll')
    },
    gotoProduct (id) {
      window.scroll(0, 0)
      this.$router.push(`/product_page/${id}`)
    },
    selcategory (cn, en) {
      const vm = this
      vm.priceSort.up = true
      vm.priceSort.low = true
      vm.$store.commit('LOADING', true)
      vm.category = en
      if (en === 'all') {
        vm.productsList = vm.products
      } else {
        vm.productsList = vm.products.filter(function (item) {
          return item.category === cn
        })
      }
      vm.$store.commit('LOADING', false)
    },
    searchFun () {
      this.priceSort.up = true
      this.priceSort.low = true
      this.category = ''
      this.productsList = this.products.filter(item => {
        return item.title.match(this.keyword)
      })
    },
    priceSortFun () {
      // 預設→價錢由低到高
      if (this.priceSort.up === this.priceSort.low) {
        this.priceSort.low = false

        this.productsList.sort(function (a, b) {
          a = a.price
          b = b.price
          return a - b
        })
      } else if (this.priceSort.up && this.priceSort.low === false) {
        // 價錢由高→低
        this.priceSort.up = !this.priceSort.up
        this.priceSort.low = !this.priceSort.low

        this.productsList.sort(function (a, b) {
          a = a.price
          b = b.price
          return b - a
        })
      } else if (this.priceSort.low && this.priceSort.up === false) {
        // 價錢由低→高
        this.priceSort.up = !this.priceSort.up
        this.priceSort.low = !this.priceSort.low

        this.productsList.sort(function (a, b) {
          a = a.price
          b = b.price
          return a - b
        })
      }
    },
    resetCart () {
      this.$emit('resetcart')
    },
    _isMobile () {
      const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    }
  },
  computed: {
    ...mapGetters('productsModules', ['products']),
    ...mapGetters(['isShow'])
  },
  watch: {
    products () {
      this.productsList = this.products
    }
  },
  created () {
    this.getProducts()
  },
  mounted () {
    if (this._isMobile()) {
      this.mobileView = true
    } else {
      this.mobileView = false
    }
  }
}
</script>
