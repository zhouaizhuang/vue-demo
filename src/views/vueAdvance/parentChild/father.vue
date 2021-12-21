
<template>
  <div class="auto fs20r h100vh fs50r">
    我是父组件:
    <div class="mt20r fs30r pl20r gred">下面是显示子组件接收的数据</div>
    <div class="pl50r pr30r">
      <child :msg="'我是来自父组件的数据'" :age="20" />
    </div>
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
      name: '父组件名称'
    }
  },
  methods:{
    doParent(){
      console.log('doParent')
    }
  },
  created(){
  },
  mounted(){
    const children = this.$children[0]
    console.log('=====父组件开始操作======')
    console.log(children.name) // 1、父组件访问子组件的数据
    children.doChild() // 2、父组件调用子组件的方法
  },
}
</script>
<style scoped>

</style>