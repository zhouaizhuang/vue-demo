
<template>
  <div class="auto fs20r h100vh fs50r">
    我是父组件:
    <div class="mt20r fs30r pl20r gred">下面是显示子组件接收的数据</div>
    <div class="pl50r pr30r">
      <child :msg="'我是来自父组件的数据'" :age="20" @sayHello="sayHello" />
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
    sayHello(val){
      console.log('hello', val)
    }
  },
  created(){
  },
  mounted(){
 
  },
}
</script>
<style scoped>

</style>