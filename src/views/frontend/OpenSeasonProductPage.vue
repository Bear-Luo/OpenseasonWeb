<template>
  <div class="container product-content fade" :class="{'show':isShow}">
    <div class="product-info">
      <div class="col-md-7 pl-0">
        <img class="img-fluid shadow-sm" :src="product.imageUrl" :alt="product.title" />
      </div>
      <div class="col-md-5 col-sm-6 pb-3">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.content }}</p>
        <div class="price-block">
          <del class="text-black-50">原價： {{ product.origin_price | currency }}</del>
          <span>優惠： {{ product.price | currency }}</span>
        </div>
        <div>
          <select name class="form-control mt-3" v-model="product.num" @change="sentNum">
            <option :value="num" v-for="num in 10" :key="num">選購 {{ num }} {{ product.unit }}</option>
          </select>
          <div class="action">
            <AddHeartCart :productid="productId" />
          </div>
        </div>
      </div>
    </div>
    <div class="faq">
      <div>常見問答</div>
      <ul>
        <li>
          <div>
            <i class="far fa-question-circle"></i>商品寄出時間？
          </div>
          <div>
            商品如有現貨則當日寄出，如沒有現貨，因商品需要製作時間，待3-7天的製作完成後會寄出。
            <br />有急需的客戶，可來電與店面人員詢問是否能提早寄送。
          </div>
        </li>
        <li>
          <div>
            <i class="far fa-question-circle"></i>商品保存方式及保存期限？
          </div>
          <div>
            咖啡：於包裝印有保存期限與保存方式。
            <br />果醬：於包裝印有保存期限與保存方式，開封後請冷藏。
            <br />水果軟糖：當日製作完成即冷藏寄出，冷藏可放1禮拜，冷凍可放2禮拜，冷凍後建議取出靜放至稍軟再食用。
            <br />麵包：當日製作完成即冷藏寄出，冷藏可放1禮拜，冷凍可放2禮拜。烤麵包前建議於麵包表面噴點水可避免變太乾。
          </div>
        </li>
        <li>
          <div>
            <i class="far fa-question-circle"></i>退換貨須知
          </div>
          <div>
            由於考量食品衛生安全，除了商品本身瑕疵、損壞、作業疏失或運送過程而造成的損毀，才能申請退換貨。一經個人拆封、食用、失溫及保存不良等情形而導致商品變質，恕無法處理您的退換貨申請。
            <br />退貨時請保持包裝完整寄回！
            <br />此外，水果軟糖與麵包因保存期限較短，除非為上述可供退換貨之原因，否出貨後恕不退換。
            <br />訂購前，請詳閱商品頁面說明，或來電與人員確認細項後，再行下單喔！
          </div>
        </li>
      </ul>
    </div>
    <div class="similar" v-if="similarProducts.length > 0">
      <div>相似商品</div>
      <ul>
        <li v-for="item in similarProducts" :key="item.id">
          <router-link
            :to="'/product_page/'+item.id"
            @click.native="routerRefresh(item.id)"
            :style="{'background-image': `url(${item.imageUrl})`}"
          >
            <img src="../../assets/img/similar.gif" alt="" class="d-hidden">
            <div>{{ item.title }}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/frontend/product_page.scss";
</style>

<script>
import AddHeartCart from '../../components/frontend/BtnAddHeartCart'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      productId: '',
      product: {},
      test: ''
    }
  },
  components: {
    AddHeartCart
  },
  methods: {
    getProduct () {
      const vm = this
      vm.products.forEach(item => {
        if (item.id === vm.productId) {
          vm.product = item
        }
      })
      document.title = '角獵咖啡 - ' + vm.product.title
      this.$store.commit('ISSHOW', true)
    },
    sentNum () {
      this.$bus.$emit('addcart:qty', this.product.num)
    },
    routerRefresh (id) {
      const vm = this
      this.$store.commit('ISSHOW', false)
      vm.$store.commit('LOADING', true)
      window.scroll(0, 0)
      setTimeout(() => {
        vm.productId = id
        vm.getProduct()
        vm.$store.commit('LOADING', false)
      }, 300)
    }
  },
  computed: {
    similarProducts () {
      const vm = this
      const similarAry = vm.products.filter(item => {
        return (
          item.category === vm.product.category && item.id !== vm.product.id
        )
      })

      if (similarAry.length <= 3) {
        return similarAry
      } else if (similarAry.length > 3) {
        similarAry.sort(function () {
          // 隨機打亂這個陣列
          return Math.random() - 0.5
        })

        similarAry.length = 3 // 改寫長度
        return similarAry
      } else {
        return []
      }
    },
    ...mapGetters('heartModules', ['heart']),
    ...mapGetters('productsModules', ['products']),
    ...mapGetters(['isShow'])
  },
  watch: {
    products () {
      this.getProduct()
    }
  },
  created () {
    this.productId = this.$route.params.id
    this.$store.commit('ISSHOW', false)
    this.$store.dispatch('productsModules/getProductsAll')
  }
}
</script>
