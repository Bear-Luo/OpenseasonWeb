import Vue from 'vue'
import Vuex from 'vuex'

import productsModules from './products'
import cartsModules from './carts'
import heartModules from './heart'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    messages: [],
    fadeIn: 15,
    isShow: false
  },
  actions: {
    updateMessage (context, { msg, status }) {
      const timestamp = Math.floor(new Date() / 1000)
      context.commit('GETMSG', { msg, status, timestamp })
      context.dispatch('removeMessageWithTiming', timestamp)
    },
    removeMessageWithTiming (context, timestamp) {
      setTimeout(() => {
        context.commit('REMOVEMSGWITHTIMING', timestamp)
      }, 3000)
      setTimeout(() => {
        context.commit('MSGFADEOUT')
      }, 50)
    }
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    },
    GETMSG (state, { msg, status, timestamp }) {
      state.fadeIn = 15
      state.messages.push({
        msg,
        status,
        timestamp
      })
    },
    REMOVEMSG (state, num) {
      state.messages.splice(num, 1)
    },
    REMOVEMSGWITHTIMING (state, playload) {
      state.messages.forEach((item, i) => {
        if (item.timestamp === playload) {
          state.messages.splice(i, 1)
        }
      })
    },
    MSGFADEOUT (state) {
      state.fadeIn = 0
    },
    ISSHOW (state, status) {
      state.isShow = status
    }
  },
  getters: {
    messages: state => state.messages,
    fadeIn: state => state.fadeIn,
    isShow: state => state.isShow
  },
  modules: {
    cartsModules,
    heartModules,
    productsModules
  }
})
