<template>
  <div class="ops-back">
    <Navbar />
    <Alert />
    <div class="container-fluid">
      <Sidebar />
      <div class="row">
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/backend/dashboard.scss";
</style>

<script>
import Navbar from '../../components/backend/Navbar'
import Sidebar from '../../components/backend/Sidebar'
import Alert from '../../components/AlertMassage'

export default {
  data () {
    return {}
  },
  components: {
    Navbar,
    Sidebar,
    Alert
  }
}
</script>
