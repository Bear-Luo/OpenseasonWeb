<template>
  <div class="d-flex flex-column min-vh-100 web-bg">
    <Alert />
    <router-view></router-view>
    <!-- footer -->
    <footer class="footer mt-auto py-4">
      <div class="container d-flex justify-content-center">
        <div class="text-center">
          <a href="https://www.facebook.com/%E8%A7%92%E7%8D%B5%E5%92%96%E5%95%A1-Open-Season-642663222541449/" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div class="small">
          Copyright © 2020 - Open Seasn
          <br>本網站為學習用途 | 感謝角獵咖啡素材提供
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/frontend/web.scss";
</style>

<script>
import Alert from '../../components/AlertMassage'

export default {
  data () {
    return {}
  },
  components: {
    Alert
  }
}
</script>
