
<template>
  <div class="auto fs20r h100vh ovh">
    <!--v-permission权限控制-->
    <div class="fs40r tc mb20r pt30">v-permission权限控制</div>
    <div class="f ac pl50r mb30r">
      <div class="fs30r mr20r b">首页权限:</div>
      <div class="f1 f ac xs">
        <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40" v-permission="'/index'">进入首页</div>
      </div>
    </div>
    <div class="mt60r mb60r bg2" style="height:0.5px;"></div>

    <div class="mb20r tl fs28r gred">备注：商机权限确实没有。所以这个dom页面上没有显示</div>
    <div class="f ac pl50r mb30r">
      <div class="fs30r mr20r b">商机权限:</div>
      <div class="f1 f ac xs">
        <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 " v-permission="'/saleChance'">进入商机</div>
      </div>
    </div>
    <div class="mt60r mb60r bg2" style="height:0.5px;"></div>

    <div class="f ac pl50r mb30r">
      <div class="fs30r mr20r b">客户详情页权限:</div>
      <div class="f1 f ac xs">
        <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w70 " v-permission="'/customer/detail'">进入客户详情页权限</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vPermission',
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