<template>
  <div class="container mb-5 fade" :class="{'show':isShow}">
    <div class="text-center" v-if="heart.length === 0">
      <div class="no-sellection">
        <div>沒有關注的商品……</div>
        <div class="arrow"></div>
      </div>
      <router-link to="/product_list">
        快去看看吧
        <i>→</i>
      </router-link>
    </div>
    <div v-else>
      <div class="text-center h3 mb-4">關注商品</div>
      <div class="col-md-8 heart-list shadow-sm mx-auto">
        <table class="table mb-0">
          <tbody class="border-0-first-tr">
            <tr v-for="item in newHeartList" :key="item.id">
              <td v-if="mobileView" class="heart-img pl-0">
                <router-link
                  :to="'/product_page/'+item.id"
                  :style="{'background-image': `url(${item.imageUrl})`}"
                ></router-link>
              </td>
              <td class="pl-0">
                <router-link :to="'/product_page/'+item.id">{{ item.title }}</router-link>
              </td>
              <td class="text-right">{{ item.price | currency }}</td>
              <td width="50" class="pr-0">
                <AddHeartCart :productid="item.id" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table td {
  vertical-align: middle;
  color: #555;
}
.heart-list {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
}
.heart-img {
  width: 105px;
}
.heart-img a {
  display: block;
  width: 90px;
  height: 70px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.heart-list a {
  color: #555;
}
.heart-list a:hover {
  color: #212529;
  text-decoration: underline;
}
</style>

<style>
.heart-list .d-flex {
  flex-direction: row-reverse;
}
.heart-list .btn-heart,
.heart-list .btn-cart {
  display: inline-block;
  text-align: center;
  padding: 0;
  background-color: transparent;
  border: 0;
}
.heart-list .btn-heart:before {
  display: inline-block;
  content: "╳";
  color: #c0c0c0;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
}
.heart-list .btn-heart:hover:before {
  color: #e9af00;
}
.heart-list .btn-cart {
  border: 1px solid #079ea2;
  color: #079ea2;
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 20px;
  font-size: 1.125rem;
  margin-right: 8px;
}
.heart-list .btn-cart:hover {
  border: 1px solid #079ea2;
  background-color: #079ea2;
  color: #fff;
}
.heart-list .btn-heart span,
.heart-list .btn-cart span,
.heart-list .btn-heart i {
  display: none;
}

@media (max-width: 480px) {
.heart-list .btn-heart:before {
  font-size: 1.125rem;
}
}
</style>

<script>
import AddHeartCart from '../../components/frontend/BtnAddHeartCart'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      mobileView: false
    }
  },
  components: {
    AddHeartCart
  },
  methods: {
    _isMobile () {
      const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    }
  },
  computed: {
    ...mapGetters('heartModules', ['heart']),
    ...mapGetters('productsModules', ['products']),
    ...mapGetters(['isShow']),
    newHeartList () {
      const vm = this
      return vm.products.filter(function (item) {
        return vm.heart.indexOf(item.id) > -1
      })
    }
  },
  created () {
    this.$store.dispatch('productsModules/getProductsAll')
    this.$store.commit('heartModules/GETHEART')
    this.$store.commit('LOADING', true)
    this.$store.commit('ISSHOW', false)
    setTimeout(() => {
      this.$store.commit('LOADING', false)
      this.$store.commit('ISSHOW', true)
    }, 200)
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
