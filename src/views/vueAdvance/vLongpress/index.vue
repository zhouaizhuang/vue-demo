
<template>
  <div class="auto fs20r h100vh ovh rel">
    <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 auto mt30r" v-longpress="longpress1">长按1s</div>
  </div>
</template>
<script>
export default {
  name: 'vDraggable',
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
    // 禁止复制
    ['contextmenu', 'selectstart', 'copy'].forEach(function(ev){
      document.addEventListener(ev, function(event){
        return event.returnValue = false
      })
    })
  }
}
</script>
<style scoped>

</style>