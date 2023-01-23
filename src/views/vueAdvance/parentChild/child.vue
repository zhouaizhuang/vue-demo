
<template>
  <div class="ml15 mr15 pt15 pr15 pb15 pl15 bdc fs14 mt15">
    <div class="fs30r b mb10">子组件</div>
    <div class="mb10">{{$parent.name}}</div>
    <div class="mb10">年龄: {{$parent.age}}</div>
    <div @click="doClick" class="pl10 pb10 pt10 pl15 pr15 bg1890ff gf w40 rds20 f ac xc fs14 poi none">执行父组件事件</div>
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
      alert('执行了子组件方法')
    },
    doClick(){
      this.$parent.doParent() // 2、子组件调用父组件的方法
    }
  },
  created(){
  },
  mounted(){
  }
}
</script>
<style scoped>

</style>