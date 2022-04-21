<template>
  <div>
    {{text}}
  </div>
</template>
<script>
export default {
  name: 'z-text',
  props: {
    text:{ // 当前数据是否是detail，也就是是否可以编辑
      type: String, // 表单类型
      default: ''
    }
  },
  data(){
    return {}
  },
  methods:{
    
  },
  created(){
  }
}
</script>
<style scoped lang="less">

</style>
