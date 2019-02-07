import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from './modules/sidebar.js'
import getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sidebar
  },
  getters
})
