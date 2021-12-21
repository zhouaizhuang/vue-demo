
<template>
  <div class="auto fs20r h100vh mt30r">
    <div class="mb20r">{{msg}}</div>
    <div class="mb20r">姓名: {{info.name}}</div>
    <div class="mb20r">学校: {{info.school}}</div>
    <div class="mb20r">年龄: {{info.age}}</div>
    <div class="mb20r">状态: {{state}}</div>
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
    info: {
      type: Object, // 数据类型
      default: function () { // 默认值
        return { name: '小明', school: '清华大学', age: 18}
      }
    },
    state: {
      validator: function (val) { // 可以写个函数做校验
        return ['毕业', '在读', '肄业'].includes(val)
      }
    }
  },
  data(){
    return {
    }
  },
  methods:{
    
  },
  created(){
  }
}
</script>
<style scoped>

</style>