<template>
  <div class="flex-shrink-0" v-scroll="scrollPage">
    <Nav :class="{'nav-bg':navBgColor,'fixed-top':fixedTop}" />
    <main role="main">
      <header class="masthead">
        <div class="carousel slide h-100">
          <div class="carousel-inner h-100">
            <div
              class="carousel-item h-100 active"
              style="background-image: url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1912&q=80);"
            ></div>
            <div
              class="carousel-item h-100"
              style="background-image: url(https://images.unsplash.com/photo-1497581175344-8a5f1a0142a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80);"
            ></div>
            <div
              class="carousel-item h-100"
              style="background-image: url(https://images.unsplash.com/photo-1472555950005-7fa40ece7f6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2050&q=80)"
            ></div>
          </div>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <img src="../../assets/img/logo.svg" alt="角獵咖啡 logo" />
          <router-link to="/product_list">
            來去購物
            <i>→</i>
          </router-link>
        </div>
      </header>
      <section class="page-section py-5 fade" :class="{'show':aboutShow}" id="about" @scroll.once="aboutAppear">
        <div class="container d-flex">
          <div class="about-img"></div>
          <div class="about">
            <div>
              <h2>About</h2>
              <div>
                新鮮簡單的食材
                <br />一顆對於料理誠摯的心
                <br />做出每一份好吃的料理
                <br />這份真誠給每一位來到角獵咖啡的您
              </div>
              <ul>
                <li>
                  <i class="fas fa-map-marker-alt"></i>臺東市開封街592巷18號
                </li>
                <li>
                  <i class="fas fa-phone"></i>
                  <a href="tel:089345005">08-934-5005</a>
                </li>
                <li>
                  <i class="fas fa-clock"></i>9:00am - 9:00pm | 週四公休
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section bg-yellow py-5" :class="{'minh-100vh':newsStatus.minHeight}" id="newslist">
        <div class="container fade" :class="{'show':newsStatus.newsShow, 'd-hidden':!newsStatus.newsShow}">
          <div class="grid">
            <div class="item" v-for="(card,index) in newNews" :key="index" @click="openNews(index)">
              <div class="card-body">
                <h5 class="card-title">
                  <a href="#" @click.prevent="openNews(index)">{{ card.title }}</a>
                </h5>
                <p v-if="mobileView">{{ card.content | wordCount }} <a href="#" class="more" @click.prevent="openNews(index)">看更多</a></p>
                <div>
                  <img :src="card.imgUrl" :alt="card.title" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button type="button" class="btn-prev" @click="newsPrev" v-if="newsStatus.nowPage > 1"><i>←</i>上一頁</button>
            <button type="button" class="btn-next" @click="newsNext" v-if="news.length >= newsStatus.showItems">下一頁<i>→</i></button>
          </div>
        </div>
      </section>
    </main>

    <!-- modal: news more -->
    <div class="modal fade" id="newsModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header border-0">
            <button type="button" class="close pb-1" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">╳</span>
            </button>
          </div>
          <div class="modal-body pt-0">
            <h5 class="card-title">{{ newsContent.title }}</h5>
            <span class="date">{{ newsContent.year+'/'+newsContent.month+'/'+newsContent.day }}</span>
            <p>{{ newsContent.content }}</p>
            <img :src="newsContent.imgUrl" :alt="newsContent.title" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/frontend/web_home.scss";
</style>

<script>
import Nav from '../../components/frontend/OpenSeasonNav'
import $ from 'jquery'
import News from '../../assets/json/news.json'

export default {
  data () {
    return {
      navBgColor: false,
      fixedTop: true,
      news: [],
      newsContent: {},
      aboutShow: false,
      newsStatus: {
        newsShow: false,
        hadShown: false,
        rect: 0,
        minHeight: true,
        newsOffset: 0,
        showItems: 0,
        groupNum: 0,
        nowPage: 1,
        pageStart: 0
      },
      mobileView: false
    }
  },
  components: {
    Nav
  },
  filters: {
    wordCount (value) {
      if (value.length > 14) {
        return value.slice(0, 14) + '...'
      }

      return value
    }
  },
  methods: {
    scrollPage (e) {
      if (e.srcElement.scrollingElement.scrollTop > 0) {
        this.navBgColor = true
        this.aboutShow = true
      } else {
        this.navBgColor = false
      }

      if (this.newsStatus.hadShown === false && e.srcElement.scrollingElement.scrollTop > this.newsStatus.newsOffset) {
        this.newsStatus.newsShow = true
        this.newsStatus.hadShown = true
      }
    },
    getNews () {
      this.$store.commit('LOADING', true)
      this.newsStatus.minHeight = true
      this.news = News
      setTimeout(() => {
        /*
        global waterfall
        */
        waterfall('.grid')
        this.$store.commit('LOADING', false)
        this.newsStatus.minHeight = false
      }, 500)
    },
    openNews (i) {
      this.$store.commit('LOADING', true)
      this.newsContent = this.news[i]
      this.$store.commit('LOADING', false)
      $('#newsModal').modal('show')
    },
    newsNext () {
      const vm = this
      vm.newsStatus.newsShow = false
      setTimeout(() => {
        vm.newsStatus.minHeight = true
        vm.newsStatus.nowPage++
        vm.newsStatus.pageStart += this.newsStatus.groupNum
        vm.newsStatus.showItems = this.newsStatus.showItems * this.newsStatus.nowPage
      }, 200)
      setTimeout(() => {
        waterfall('.grid')
        window.scroll(0, vm.newsStatus.rect)
        vm.newsStatus.newsShow = true
        vm.newsStatus.minHeight = false
      }, 600)
    },
    newsPrev () {
      const vm = this
      vm.newsStatus.newsShow = false
      vm.newsStatus.minHeight = true
      setTimeout(() => {
        vm.newsStatus.nowPage--
        vm.newsStatus.pageStart -= this.newsStatus.groupNum
        vm.newsStatus.showItems = this.newsStatus.groupNum * this.newsStatus.nowPage
        if (vm.newsStatus.pageStart === 0) {
          vm.newsStatus.showItems = 8
        } else {
          vm.newsStatus.showItems = this.newsStatus.pageStart * this.newsStatus.nowPage
        }
      }, 200)
      setTimeout(() => {
        waterfall('.grid')
        window.scroll(0, vm.newsStatus.rect)
        vm.newsStatus.newsShow = true
        vm.newsStatus.minHeight = false
      }, 600)
    },
    _isMobile () {
      const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    }
  },
  computed: {
    newNews () {
      const subtract = this.news.length - this.newsStatus.showItems
      if (subtract <= 0) {
        return this.news.slice(this.newsStatus.pageStart)
      } else if (subtract > 0) {
        return this.news.slice(this.newsStatus.pageStart, this.newsStatus.showItems)
      } else {
        return []
      }
    }
  },
  created () {
    if (document.querySelector('.grid')) return
    const scriptTag = document.createElement('script')
    scriptTag.src =
      'https://cdnjs.cloudflare.com/ajax/libs/waterfall.js/1.0.2/waterfall.min.js'
    scriptTag.id = 'waterfall'
    document.getElementsByTagName('body')[0].appendChild(scriptTag)

    this.newsStatus.groupNum = 8
    this.newsStatus.showItems = this.newsStatus.groupNum * this.newsStatus.nowPage
    this.mobileView = this._isMobile()
    this.getNews()
  },
  mounted () {
    $('.carousel').carousel({
      interval: 4000,
      ride: true
    })
    const aboutRect = document.querySelector('#about').getBoundingClientRect()
    const newsRect = document.querySelector('#newslist').getBoundingClientRect()
    this.newsStatus.rect = window.pageYOffset + newsRect.top - 62
    this.newsStatus.newsOffset = window.pageYOffset + aboutRect.top
  }
}
</script>
