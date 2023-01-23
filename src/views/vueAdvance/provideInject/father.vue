
<template>
  <div class="auto fs14 h100vh">
    我是父组件:
    <child @sayHello="sayHello" />
  </div>
</template>
<script>
import child from "./child.vue"
export default {
  name: 'father',
  components: {
    child
  },
  provide() {
    return {
      name: '张三',   //传入一个可监听的对象
      age: 20  //直接传值
    }
  },
  data(){
    return {
    }
  },
  methods:{
    sayHello(val){
      console.log(val);
      alert('hello, 父组件的函数被执行')
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