<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/all";
</style>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  watch: {
    $route (to) {
      const nowTitle = to.meta.title || '角獵咖啡'
      document.title = nowTitle
    }
  }
}
</script>
