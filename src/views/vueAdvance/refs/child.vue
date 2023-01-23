
<template>
  <div class="fs14 mt15 pl15 bdc ml15 mr15 pt15">
    <div class="fs15 b">子组件</div>
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
      alert('调用了子组件的方法')
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