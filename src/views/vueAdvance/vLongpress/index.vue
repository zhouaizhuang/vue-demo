<!--注意：这里如果按钮中存在文字，要加上禁止复制的样式控制。否则移动端会优先识别长按复制-->
<template>
  <div class="auto fs12 h100vh ovh rel">
    <div class="fs15 gf bg1890ff rds40 f ac xc pt10 pb10 w40 auto mt15 none poi" v-longpress="[longpress1, 1000]">长按1s</div>
  </div>
</template>
<script>
export default {
  name: 'vLongPress',
  data(){
    return {
    }
  },
  methods:{
    longpress1(e){
      alert('触发长按事件')
    }
  },
  created(){
  }
}
</script>
<style scoped>
</style>