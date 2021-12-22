
<template>
  <div class="auto fs20r h100vh ovh">
    <baseLayout>
      <!--插槽替换header部件-->
      <template v-slot:header="slopProps">
        <div class="bdc pt15r pb15r">{{slopProps.user.name}}</div> <!--使用原始组件定义的数据，进行渲染-->
      </template>
      <!--插槽替换默认部件-->
      <template v-slot:default>
        <div class="dib bg1890ff rds40r pl40r pr40r pt20r pb20r gf">{{123123}}</div>
      </template>
      <!--插槽替换footer部件-->
      <template v-slot:footer="{info}"> <!--传值的时候可以使用es6的解构-->
        <div class="g42b983 fs30r b pt20r pb20r">{{info.age}}</div>
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