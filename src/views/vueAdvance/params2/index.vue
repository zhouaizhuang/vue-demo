
<template>
  <div class="auto fs20r h100vh fs50r">
    <div class="fs30r pt30r pb30r pl30r">这里是从路由获取的数据----->{{this.$route.params.id}}</div>
    <div class="fs30r g1890ff">优点----->url路径干净，没有乱七八糟的参数</div>
    <div class="fs30r gred pt30r pb30r">缺点----->刷新数据丢失</div>
  </div>
</template>
<script>
export default {
  name: 'params1',
  data(){
    return {
      name: '张三',
      age: 20
    }
  },
  methods:{
  },
  created(){
    console.log(this.$route.params.id)
  },
  mounted(){
  },
}
</script>
<style scoped>

</style>