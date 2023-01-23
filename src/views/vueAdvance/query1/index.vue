
<template>
  <div class="auto fs14 h100vh">
    <div class="fs15 pt30r pb15 pl15">这里是从路由获取的数据---->{{this.$route.query.id}}</div>
    <div class="fs15 g1890ff">优点---->页面刷新数据不会丢失</div>
    <div class="fs15 gred pt15 pb15">缺点---->问号方式传参，敏感信息不能这么玩</div>
  </div>
</template>
<script>
export default {
  name: 'query1',
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