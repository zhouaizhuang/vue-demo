
<template>
  <div class="auto fs14 h100vh">
    <!--使用方式一-->
    <div class="fs20 b">使用方式一</div>
    <div class="fs15 pt15 pl15 mb10">{{optCount}}</div>
    <div class="fs15 pt15 pl15 mb10">{{count}}</div>
    <div class="f xb pl15 pr15">
      <div class="fs15 f ac xc w30 bg1890ff rds40 gf pt10 pb10 poi none" @click="increase">+1</div>
      <div class="fs15 f ac xc w30 bg1890ff rds40 gf pt10 pb10 poi none" @click="substract(2)">-2</div>
      <div class="fs15 f ac xc w30 bg1890ff rds40 gf pt10 pb10 poi none" @click="substractAsync">异步-2</div>
    </div>
    <!--使用方式二-->
    <div class="fs20 b mt50">使用方式二</div>
    <div class="fs15 pt15 pl15 mb10">{{$store.getters.optCount}}</div>
    <div class="fs15 pt15 pl15 mb10">{{$store.state.count}}</div>
    <div class="f xb pl15 pr15">
      <div class="fs15 f ac xc w30 bg1890ff rds40 gf pt10 pb10 poi none" @click="add">+1</div>
      <div class="fs15 f ac xc w30 bg1890ff rds40 gf pt10 pb10 poi none" @click="remove">-2</div>
      <div class="fs15 f ac xc w30 bg1890ff rds40 gf pt10 pb10 poi none" @click="removeAsync">异步-2</div>
    </div>
    <!--解决vuex刷新数据丢失问题-->
    <div class="fs20 b mt50">解决vuex刷新数据丢失问题</div>
    <div class="fs15 f ac xc w40 bg1890ff rds40 gf pt10 pb10" @click="getUserInfo">点击获取用户信息</div>
    <div class="fs15 pt15 pl15 mb10">用户名--->{{$store.state.userInfo.name }}</div>
    <div class="fs15 pt15 pl15 mb10">年龄--->{{$store.state.userInfo.age }}</div>
  </div>
</template>
<script>
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'useVuex',
  data(){
    return {
    }
  },
  computed: {
    ...mapGetters(['optCount']),
    ...mapState(['count'])
  },
  methods:{
    ...mapMutations(['increase', 'substract']),
    ...mapActions(['substractAsync']),
    add(){
      this.$store.commit('increase')
    },
    remove(){
      this.$store.commit('substract', 2)
    },
    removeAsync(){
      this.$store.dispatch('substractAsync')
    },
    getUserInfo(){
      setTimeout(() => {
        this.$store.commit('setUserInfo', {name: '张三', age: 18})
      }, 600)
    }
  },
  created(){
    
  },
  mounted(){
  },
}
</script>
<style scoped>

</style>