
<template>
  <div class="auto fs14 h100vh fs25">
    我是父组件:
    <div @click="doClick" class="pl10 pb10 pt10 pl10 pr15 bg1890ff gf w40 rds20 f ac xc fs14 none">执行子组件方法</div>
    <child />
  </div>
</template>
<script>
import child from "./child.vue"
export default {
  name: 'father',
  components: {
    child
  },
  data(){
    return {
      name: '张三',
      age: 20
    }
  },
  methods:{
    doParent(){
      alert('执行了父组件方法')
    },
    doClick(){
      this.$children[0].doChild() // 2、父组件调用子组件的方法
    }
  },
  created(){
  },
  mounted(){
    const children = this.$children[0]
    console.log('=====父组件开始操作======')
    console.log(children.name) // 1、父组件访问子组件的数据
  },
}
</script>
<style scoped>

</style>