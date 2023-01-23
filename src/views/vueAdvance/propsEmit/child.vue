<template>
  <div class="ml15 mr15 pt15 pb15 pl15 pr15 bdc fs14 mt15">
    <div class="fs15 b mb10">子组件</div>
    <div class="mb10">{{ msg }}</div>
    <div class="mb10">姓名: {{ info.name }}</div>
    <div class="mb10">学校: {{ info.school }}</div>
    <div class="mb10">年龄: {{ info.age }}</div>
    <div class="mb10">状态: {{ state }}</div>
    <div @click="doClick" class="pl10 pb10 pt10 pl15 pr15 bg1890ff gf w40 rds10 f ac xc fs14 poi none">
      执行父组件事件
    </div>
  </div>
</template>
<script>
export default {
  name: 'child',
  props: {
    // text: String,
    text: { // 字符串类型
      type: String,
      required: true
    },
    msg: {
      type: [Number, String], // 数据类型
      require: true, // 必填
      default: ''
    },
    info: {
      type: Object, // 数据类型
      default: function() {
        // 默认值
        return { name: '小明', school: '清华大学', age: 18 }
      }
    },
    state: {
      validator: function(val) {
        // 可以写个函数做校验
        return ['毕业', '在读', '肄业'].includes(val)
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    doClick() {
      this.$emit('sayHello', '入学')
    }
  },
  created() {}
}
</script>
<style scoped></style>
