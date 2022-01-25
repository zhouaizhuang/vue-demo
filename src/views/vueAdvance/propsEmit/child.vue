
<template>
  <div class="ml30r mr30r pt30r pb30r pl30r pr30r bdc fs20r mt30r">
    <div class="fs30r b mb20r">子组件</div>
    <div class="mb20r">{{msg}}</div>
    <div class="mb20r">姓名: {{info.name}}</div>
    <div class="mb20r">学校: {{info.school}}</div>
    <div class="mb20r">年龄: {{info.age}}</div>
    <div class="mb20r">状态: {{state}}</div>
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
    doClick(){
      this.$emit('sayHello', '入学')
    }
  },
  created(){
  }
}
</script>
<style scoped>

</style>