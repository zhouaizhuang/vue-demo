
<template>
  <div class="ml30r mr30r pt30r pr30r pb30r pl30r bdc fs20r mt30r">
    <div class="fs30r b mb20r">子组件</div>
    <div class="mb20r">{{$parent.name}}</div>
    <div class="mb20r">年龄: {{$parent.age}}</div>
    <div @click="doClick" class="pl20r pb20r pt20r pl30r pr30r bg1890ff gf w40 rds20r f ac xc fs28r">执行父组件事件</div>
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