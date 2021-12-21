
<template>
  <div class="auto fs20r fs30r">
    兄弟组件一
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
      console.log(res, '监听到了')
    })
  },
  mounted() {
  },
}
</script>
<style scoped>

</style>