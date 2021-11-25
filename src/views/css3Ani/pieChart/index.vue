<template>
  <div class="rel h100vh auto ovh" style="width:375px;">
    <!--饼图-->
    <div class="fs30 mb30 tc mt100">CSS实现简易饼图</div>
    <div class="rds50 auto" :style="{ background: `conic-gradient(#1890ff 0 ${percent}%, green ${percent}% 100%)`, width:'200px', height:'200px' }"></div>
  </div>
</template>
<script>
export default {
  name: 'pieChart',
  components: {
  },
  data(){
    return {
      percent: 0, // 占比例
    }
  },
  methods: {
  },
  created(){
    setInterval(() => {
      this.percent++
      if(this.percent > 100) {
        this.percent = 0
      }
    }, 16)
  }
}
</script>
<style scoped>
</style>
