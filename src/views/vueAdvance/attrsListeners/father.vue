
<template>
  <div class="auto fs20r h100vh fs50r">
    父组件
    <child :name="'张三'" :age="20" @sayHello="sayHello" />
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
    }
  },
  methods:{
    sayHello(val){
      console.log(val)
      alert('hello，我是父组件的方法')
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