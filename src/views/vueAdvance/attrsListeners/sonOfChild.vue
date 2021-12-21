
<template>
  <div class="auto bdc fs20r mt30r">
    <div class="fs28r b">孙子组件</div>
    <div>{{msg}}</div>
    <div>{{age}}</div>
  </div>
</template>
<script>
export default {
  name: 'sonOfChild',
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