
<template>
  <div class="auto fs20r h100vh fs50r">
    事件总线
    <div class="pl30r pr30r pt30r">
      <brother1 />
      <brother2 />
    </div>
  </div>
</template>
<script>
import brother1 from "./brother1.vue"
import brother2 from "./brother2.vue"
import {eventBus} from "./bus.js"
export default {
  name: 'event',
  components: {
    brother1,
    brother2
  },
  data(){
    return {
      name: '事件总线'
    }
  },
  methods:{
 
  },
  created() {
    eventBus.$emit('busClick', '我是来自A页面的信息')
  },
  mounted() {
  },
}
</script>
<style scoped>

</style>