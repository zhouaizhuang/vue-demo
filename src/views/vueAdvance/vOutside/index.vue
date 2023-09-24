<!--参考链接：https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html-->
<template>
  <div class="abs trbl0" style="background: rgb(34, 35, 39);">
    <div class="mt50 f ac xc">
      <Button @click="clickBtn" v-clickoutside="clickoutside" type="primary">点我验证</Button>
    </div>
    <div class="fs16 gf b tc mt20">{{msg}}</div>
  </div>
</template>
<script>
import { repeat, chunk } from "../../../common"
export default {
  name: 'vReachBottom',
  data(){
    return {
      isShowModal: false,
      msg:''
    }
  },
  methods: {
    clickBtn(){
      this.msg = '点击了当前按钮'
    },
    clickoutside(){
      this.msg = '点击了按钮之外的元素'
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