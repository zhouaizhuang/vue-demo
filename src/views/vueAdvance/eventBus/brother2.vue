
<template>
  <div class="auto fs20r fs30r">
    兄弟组件二
  </div>
</template>
<script>
import { eventBus } from "./bus.js"
export default {
  name: 'brother2',
  data(){
    return {
      name: '兄弟组件2'
    }
  },
  methods:{
    brother2(){
      console.log('brother2')
    }
  },
  created() {
    eventBus.$emit('busClick', '我是来自A页面的信息')
  },
  mounted() {
    // const children = this.$children[0]
    // console.log('=====父组件开始操作======')
    // console.log(children.name) // 1、父组件访问子组件的数据
    // children.doChild() // 2、父组件调用子组件的方法
  },
}
</script>
<style scoped>

</style>