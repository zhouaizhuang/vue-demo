import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: {
      name:'张三',
      age: 20
    },
    count: 0
  },
  getters: {
    optCount: function (state) {
      return '当前最新count的值是' + state.count
    }
  },
  mutations: {
    increase(state){
      state.count++
    },
    substract(state, c = 1){
      state.count -= c
    }
  },
  actions: {
    substractAsync(context) {
      setTimeout(() => {
        context.commit('substract', 2)
      }, 500)
    }
  },
  modules: {
  }
})
