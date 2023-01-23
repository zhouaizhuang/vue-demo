
<template>
  <div class="auto fs20 h100vh">
    <baseLayout>
      <!--插槽替换header部件-->
      <template v-slot:header="slopProps">
        <div class="bdc pt10 pb10">{{slopProps.user.name}}</div> <!--使用原始组件定义的数据，进行渲染-->
      </template>
      <!--插槽替换默认部件-->
      <template v-slot:default>
        <div class="dib bg1890ff rds40 pl20 pr20 pt10 pb10 gf">{{123123}}</div>
      </template>
      <!--插槽替换footer部件-->
      <!-- <template #footer="{info}"> 等价-->
      <template v-slot:footer="{info}"> <!--传值的时候可以使用es6的解构-->
        <div class="g42b983 fs15 b pt10 pb10">{{info.age}}</div>
      </template>
    </baseLayout>
  </div>
</template>
<script>
import baseLayout from "./baseLayout.vue"
export default {
  name: 'vSlot',
  components: {
    baseLayout,
  },
  data(){
    return {
    }
  },
  methods:{
  },
  created(){
   
  }
}
</script>
<style scoped>

</style>