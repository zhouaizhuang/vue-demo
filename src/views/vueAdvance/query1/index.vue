
<template>
  <div class="auto fs20r h100vh fs50r">
    <div class="fs30r pt30r pb30r pl30r">这里是从路由获取的数据---->{{this.$route.query.id}}</div>
    <div class="fs30r g1890ff">优点---->页面刷新数据不会丢失</div>
    <div class="fs30r gred pt30r pb30r">缺点---->问号方式传参，敏感信息不能这么玩</div>
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