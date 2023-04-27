<!--参考链接：https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html-->
<template>
  <div class="abs trbl0" style="background: rgb(34, 35, 39);">
    <div class="mt50 f ac xc">
      <Button @click="clickBtn" v-outside="outside" type="primary">点我验证</Button>
    </div>
  </div>
</template>
<script>
import { repeat, chunk } from "../../../common"
export default {
  name: 'vReachBottom',
  data(){
    return {
      isShowModal: false
    }
  },
  methods: {
    clickBtn(){
      alert('点击按钮')
    },
    outside(){
      alert('点击按钮之外')
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