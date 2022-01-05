<!--注意：这里如果按钮中存在文字，要加上禁止复制的样式控制。否则移动端会优先识别长按复制-->
<template>
  <div class="auto fs20r h100vh ovh rel">
    <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 auto mt30r noCopy" v-longpress="[longpress1, 1000]">长按1s</div>
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