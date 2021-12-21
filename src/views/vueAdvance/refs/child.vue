
<template>
  <div class="fs20r mt30r pl30r bdc ml30r mr30r pt30r">
    <div class="fs30r b">子组件</div>
  </div>
</template>
<script>
export default {
  name: 'child',
  data(){
    return {
    }
  },
  methods:{
    doClick(){
      console.log('这是子组件方法调用')
    }
  },
  created(){
  },
  mounted(){
  }
}
</script>
<style scoped>

</style>