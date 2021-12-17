
<template>
  <div class="auto fs20r h100vh ovh pt30 rel">
    <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 abs" v-draggable>点我拖拽</div>
  </div>
</template>
<script>
export default {
  name: 'vDraggable',
  data(){
    return {
      debounceTimes: 0,
      throttieTimes: 0
    }
  },
  methods:{
    debounceRefresh(){
      this.debounceTimes++
    },
    throttieRefresh(){
      this.throttieTimes++
    }
  },
  created(){
   
  }
}
</script>
<style scoped>

</style>