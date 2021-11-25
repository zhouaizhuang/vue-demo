<template>
  <div style="width:350px;" class="auto bg2 h100vh pt100">
    <div class="f xc ac">
      <div class="rel rds50 mr50" style="width:30px;height:30px;background-color:#7ef9ff;">
        <div class="abs w100 h100 wave-scale rds50" style="background: inherit;animation-delay: -0.2s;" />
      </div>
      <div class="rel rds50 mr50" style="width:30px;height:30px;background-color:#89cff0;">
        <div class="abs w100 h100 wave-scale rds50" style="background: inherit;animation-delay: -0.1s;" />
      </div>
      <div class="rel rds50 mr50" style="width:30px;height:30px;background-color:#4682b4;">
        <div class="abs w100 h100 wave-scale rds50" style="background: inherit;animation-delay: 0s;" />
      </div>
      <div class="rel rds50" style="width:30px;height:30px;background-color:#0f52ba;">
        <div class="abs w100 h100 wave-scale rds50" style="background: inherit;animation-delay: 0.1s;" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'aniDelay',
  data(){
    return {

    }
  },
  methods: {
   
  },
  created(){
  }
}
</script>
<style scoped>
.wave-scale{
  animation: wave1 2s ease-out infinite;
}
@keyframes wave1 {
  50%,
  75% { transform: scale(2.5); }
  80%,
  100% { opacity: 0; }
}
</style>