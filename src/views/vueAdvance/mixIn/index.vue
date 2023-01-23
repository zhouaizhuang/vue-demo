
<template>
  <div class="auto fs20r h100vh fs50r">
    <div class="fs20 pt15 pl15">{{name}}</div>
    <div class="fs20 pt15 pl15">{{age}}</div>
    <div class="f xs pl15 pr15">
      <div class="f ac xc w30 pt5 pb5 gf fs20 b bg1890ff rds40 mr15" @click="sayHello">事件一</div>
      <div class="f ac xc w30 pt5 pb5 gf fs20 b bg1890ff rds40" @click="sayHi">事件二</div>
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
      alert('hi!!!!')
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