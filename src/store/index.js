import Vue from 'vue'
import Vuex from 'vuex'
import { getSessionStorage } from "../common.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: getSessionStorage('userInfo') || {}, // 解决刷新数据丢失问题！！！！---->初始化的时候。先从session会话中获取数据。无数据再使用默认值。  这样能保障页面刷新的时候能拿到上次设置的值
    count: 0
  },
  getters: {
    optCount: function (state) {
      return '当前最新count的值是' + state.count
    }
  },
  mutations: {
    setUserInfo(state, val) {
      setSessionStorage('userInfo', val) // 设置数据的时候，将数据进行存储
      state.userInfo = val
    },
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
