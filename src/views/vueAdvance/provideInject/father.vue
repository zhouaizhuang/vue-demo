
<template>
  <div class="auto fs20r h100vh fs50r">
    我是父组件:
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