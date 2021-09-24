
<template>
  <div class="f xc ac h100vh">
     <div class="rds50 abs l50 t50 txy-50 p10" style="width:200px;height:200px;border:3px solid darkslateblue;">
        <div class="wave rds50 abs ovh l50 t50 txy-50 "></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'buttery',
  data(){
    return {
    }
  },
  methods: {
   
  },
  created(){
  
  },
}
</script>
<style>
.wave{
  width: 200px;
  height: 200px;
  background: darkturquoise;
}
.wave::after{
  content: '';
  width: 300px;
  height: 300px;
  background: rgba(255,255,255,0.8);
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%,-60%);
  border-radius: 40%;
  animation: wave 5s linear infinite;
}
@keyframes wave {
  100%{
    transform: translate(-50%,-60%) rotate(360deg)
  }
}
</style>