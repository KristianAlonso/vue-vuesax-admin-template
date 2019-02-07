const sidebar = {
  state: {
    active: false,
    notExpand: false,
    reduce: true
  },
  mutations: {
    TOGGLE_ACTIVE (state) {
      state.active = !state.active
    },
    TOGGLE_EXPAND (state) {
      state.notExpand = !state.notExpand
    },
    TOGGLE_REDUCE (state) {
      state.reduce = !state.reduce
    }
  },
  actions: {
    toggleSidebarActiveState ({ commit }) {
      commit('TOGGLE_ACTIVE')
    },
    toggleSidebarExpandState ({ commit }) {
      commit('TOGGLE_EXPAND')
    },
    toggleSidebarReduceState ({ commit }) {
      commit('TOGGLE_REDUCE')
    }
  }
}

export default sidebar
