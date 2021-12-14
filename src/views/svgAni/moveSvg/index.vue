<template>
  <div >
    <div class="rel auto h100vh ovh">
      <img class="abs run1" style="width:40px;height:40px;" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png">
      <svg width="300" height="150" viewBox="0 0 280 150">
        <path d="M10,80 q100,120 120,20 q140,-50 160,0" stroke="#cd0000" stroke-width="2" fill="none" />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: 'moveSvg',
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
.run1 {
  offset-anchor:0 0;
  offset-path: path("M10,80 q100,120 120,20 q140,-50 160,0");
  animation: motion 3s linear infinite;
}
@keyframes motion {
  100% { offset-distance: 100%;}
}
</style>