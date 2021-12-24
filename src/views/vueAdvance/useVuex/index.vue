
<template>
  <div class="auto fs20r h100vh fs50r">
    <!--使用方式一-->
    <div class="fs40r b">使用方式一</div>
    <div class="fs30r pt30r pl30r mb20r">{{optCount}}</div>
    <div class="fs30r pt30r pl30r mb20r">{{count}}</div>
    <div class="f xb pl30r pr30r">
      <div class="fs30r f ac xc w30 bg1890ff rds40r gf pt20r pb20r" @click="increase">+1</div>
      <div class="fs30r f ac xc w30 bg1890ff rds40r gf pt20r pb20r" @click="substract(2)">-2</div>
      <div class="fs30r f ac xc w30 bg1890ff rds40r gf pt20r pb20r" @click="substractAsync">异步-2</div>
    </div>
    <!--使用方式二-->
    <div class="fs40r b mt100r">使用方式二</div>
    <div class="fs30r pt30r pl30r mb20r">{{$store.getters.optCount}}</div>
    <div class="fs30r pt30r pl30r mb20r">{{$store.state.count}}</div>
    <div class="f xb pl30r pr30r">
      <div class="fs30r f ac xc w30 bg1890ff rds40r gf pt20r pb20r" @click="add">+1</div>
      <div class="fs30r f ac xc w30 bg1890ff rds40r gf pt20r pb20r" @click="remove">-2</div>
      <div class="fs30r f ac xc w30 bg1890ff rds40r gf pt20r pb20r" @click="removeAsync">异步-2</div>
    </div>
    <!--解决vuex刷新数据丢失问题-->
    <div class="fs40r b mt100r">解决vuex刷新数据丢失问题</div>
    <div class="fs30r f ac xc w40 bg1890ff rds40r gf pt20r pb20r" @click="getUserInfo">点击获取用户信息</div>
    <div class="fs30r pt30r pl30r mb20r">用户名--->{{$store.state.userInfo.name }}</div>
    <div class="fs30r pt30r pl30r mb20r">年龄--->{{$store.state.userInfo.age }}</div>
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