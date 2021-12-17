
<template>
  <div class="auto fs20r h100vh ovh rel">
    <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 auto mt30r" v-longpress="longpress1">长按1s</div>
  </div>
</template>
<script>
import { noCopy } from '../../../common'
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
    // noCopy()
  }
}
</script>
<style scoped>

</style>