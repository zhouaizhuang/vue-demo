
<template>
  <div class="bdc fs14 mt15 ml15 mr15 mb15 pl15 pr15 pt15 pb15">
    <div class="fs14 b">孙子组件</div>
    <div>{{name}}</div>
    <div>{{age}}</div>
    <div @click="doClick" class="pl10 pb10 pt10 pl15 pr15 bg1890ff gf w70 rds10 f ac xc fs14">执行父组件事件</div>
  </div>
</template>
<script>
export default {
  name: 'sonOfChild',
  props: {
    name: {
      type: [Number, String], // 数据类型
      require: true, // 必填
      default: ''
    },
    age: {
      type: Number, // 数据类型
      default: 18
    },
  },
  data(){
    return {
    }
  },
  methods:{
    doClick(){
      this.$listeners.sayHello('我是孙子组件数据')
    }
  },
  created(){
  },
  mounted(){
    console.log()
  }
}
</script>
<style scoped>

</style>