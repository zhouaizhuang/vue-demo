
<template>
  <div class="auto fs14 h100vh">
    <div class="fs15 pt15 pb15 pl15">这里是从路由获取的数据----->{{this.$route.params.id}}</div>
    <div class="fs15 g1890ff">优点----->url路径干净，没有乱七八糟的参数</div>
    <div class="fs15 gred pt15 pb15">缺点----->刷新数据丢失</div>
  </div>
</template>
<script>
export default {
  name: 'params2',
  data(){
    return {
    }
  },
  methods:{
  },
  created(){
  },
  mounted(){
  },
}
</script>
<style scoped>

</style>