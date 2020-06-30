export default {
  namespaced: true,
  state: {
    heart: []
  },
  actions: {
    addHeart (context, id) {
      context.commit('GETHEART')
      context.commit('ADDHEART', id)
      context.dispatch('updateMessage', { msg: '已加入關注', status: 'light' }, { root: true })
    },
    removeHeart (context, id) {
      context.commit('GETHEART')
      context.commit('REMOVEHEART', id)
      context.dispatch('updateMessage', { msg: '已取消關注', status: 'dark' }, { root: true })
    }
  },
  mutations: {
    GETHEART (state) {
      state.heart = JSON.parse(localStorage.getItem('heartStr')) || []
    },
    ADDHEART (state, id) {
      state.heart.push(id)
      localStorage.setItem('heartStr', JSON.stringify(state.heart))
    },
    REMOVEHEART (state, id) {
      state.heart.splice(state.heart.indexOf(id), 1)
      localStorage.setItem('heartStr', JSON.stringify(state.heart))
    }
  },
  getters: {
    heart: state => state.heart
  }
}
