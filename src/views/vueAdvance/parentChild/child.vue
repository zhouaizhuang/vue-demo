
<template>
  <div class="auto fs20r h100vh mt30r">
    <div class="mb20r">{{msg}}</div>
    <div class="mb20r">年龄: {{age}}</div>

  </div>
</template>
<script>
export default {
  name: 'child',
  props: {
    msg: {
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
      name:'子组件名称'
    }
  },
  methods:{
    doChild(){
      console.log('doChild')
    }
  },
  created(){
  },
  mounted(){
    console.log('=====子组件开始操作======')
    console.log(this.$parent.name) // 1、子组件调用父组件的数据
    this.$parent.doParent() // 2、子组件调用父组件的方法
  }
}
</script>
<style scoped>

</style>