<template>
  <div>
    <div class="nav-cover" v-if="navIsActive" @click="closeMenu"></div>
    <nav class="navbar navbar-expand-md" :class="{'active':navIsActive}">
      <router-link
        class="navbar-brand d-flex align-items-center"
        to="/openseason_home"
        @click.native="scrollTop();closeMenu()"
      >
        <img src="../../assets/img/logo.svg" alt="角獵咖啡 logo" />
        <img src="../../assets/img/logo-text.svg" alt="角獵咖啡" />
        <img src="../../assets/img/logo-text-brown.svg" alt="角獵咖啡" />
      </router-link>
      <button
        class="navbar-toggler navbar-toggler-right collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="navIsActive = !navIsActive;"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto my-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/openseason_home#about"
              @click.native="scrollToHash('#about');closeMenu()"
            >關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/openseason_home#newslist"
              @click.native="scrollToHash('#newslist');closeMenu()"
            >角獵記事</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/product_list" @click.native="closeMenu">手作產品</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login" target="_blank" @click.native="closeMenu">商品管理</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      navIsActive: false
    }
  },
  methods: {
    scrollToHash (hashbang) {
      const vm = this
      if (document.querySelector(hashbang)) {
        vm.scrollFix(hashbang)
      } else {
        setTimeout(() => {
          vm.scrollFix(hashbang)
        }, 150)
      }
    },
    scrollFix (hashbang) {
      const rect = document.querySelector(hashbang).getBoundingClientRect()
      const elOffset = window.pageYOffset + rect.top - 62
      window.scroll(0, elOffset)
    },
    scrollTop () {
      if (this.$route.path === '/openseason_home') {
        window.scroll(0, 0)
      }
    },
    closeMenu () {
      $('#navbarResponsive').collapse('hide')
      this.navIsActive = false
    }
  },
  created () {
    this.navActive = false
  }
}
</script>
