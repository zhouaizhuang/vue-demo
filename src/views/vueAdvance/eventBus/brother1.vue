
<template>
  <div class="auto fs15">
    兄弟组件一：注册事件到事件中心
  </div>
</template>
<script>
import { eventBus } from "./bus.js"
export default {
  name: 'brother1',
  data(){
    return {
      name: '兄弟组件1'
    }
  },
  methods:{
 
  },
  created() {
    eventBus.$on('busClick', res => {
      alert(res)
    })
  },
  mounted() {
  },
}
</script>
<style scoped>

</style>