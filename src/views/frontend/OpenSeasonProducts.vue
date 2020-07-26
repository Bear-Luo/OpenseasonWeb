<template>
  <div class="flex-shrink-0 product-page" v-scroll="scrollPage">
    <Nav :class="{'nav-bg':navBgColor,'fixed-top':fixedTop}" />
    <div>
      <router-view></router-view>

      <!-- 查看購物車&關注 -->
      <ul class="shopping">
        <li
          v-if="this.$route.name === 'ProductList' || this.$route.name === 'OpenSeasonProductPage' || this.$route.name === 'OpenSeasonHeart'"
        >
          <router-link to="/carts" @click.native="scrollTop">
            <span v-if="cartsSum !== 0">{{ cartsSum }}</span>
            <i class="fas fa-shopping-basket"></i>
          </router-link>
        </li>
        <li
          v-if="this.$route.name === 'ProductList' || this.$route.name === 'OpenSeasonProductPage' || this.$route.name === 'OpenSeasonHeart' || this.$route.name === 'OpenSeasonCarts'"
        >
          <router-link to="/heart" @click.native="scrollTop">
            <i class="fas fa-heart"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/frontend/web_shopping.scss";
</style>

<script>
import Nav from '../../components/frontend/OpenSeasonNav'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'OpenSeasonProducts',
  data () {
    return {
      navBgColor: false,
      fixedTop: true
    }
  },
  components: {
    Nav
  },
  methods: {
    scrollPage (e) {
      if (e.srcElement.scrollingElement.scrollTop > 0) {
        this.navBgColor = true
      } else {
        this.navBgColor = false
      }
    },
    scrollTop () {
      window.scroll(0, 0)
    },
    ...mapActions('cartsModules', ['getCarts'])
  },
  computed: {
    ...mapGetters('cartsModules', ['carts', 'cartsSum'])
  },
  created () {
    this.getCarts()
  }
}
</script>
