
<template>
  <div class="auto fs20r h100vh fs50r">
    <div class="fs40r pt30r pl30r">{{name}}</div>
    <div class="fs40r pt30r pl30r">{{age}}</div>
    <div class="f xs pl30r pr30r">
      <div class="f ac xc w30 pt10r pb10r gf fs40r b bg1890ff rds50r mr30r" @click="sayHello">事件一</div>
      <div class="f ac xc w30 pt10r pb10r gf fs40r b bg1890ff rds50r" @click="sayHi">事件二</div>
    </div>
  </div>
</template>
<script>
import myMixIn from "./myMixIn.js"
export default {
  name: 'mixIn',
  mixins: [myMixIn],
  data(){
    return {
      age: 18 // 当前组件可以覆盖mixIn中的数据
    }
  },
  methods:{
    sayHi() { // 这里是相当于覆盖了mixIn中的sayHi方法
      console.log('hi!!!!')
    }
  },
  created() {
    console.log(this.name)
  },
  mounted() {
 
  },
}
</script>
<style scoped>

</style>