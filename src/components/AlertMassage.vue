<template>
  <div class="message-alert">
    <div
      class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages"
      :key="i"
      :style="{top: fadeIn + 'px'}"
    >
      {{ item.msg }}
      <button
        type="button"
        class="close"
        @click="REMOVEMSG(i)"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['REMOVEMSG'])
  },
  computed: {
    ...mapGetters(['messages', 'fadeIn'])
  }
}
</script>

<style scoped>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 102px;
  right: 20px;
  z-index: 1100;
  opacity: 0.95;
}
.alert {
  top: 0;
  transition: top 0.35s ease;
}
</style>
