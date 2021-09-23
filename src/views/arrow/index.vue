<template>
  <div class="rel" style="height:300px;width:700px;margin:100px auto;">
    <div style="width: 80px;height:80px;" class="rds50 bdc f ac xc">位置1</div>
    <div style="width: 80px;height:80px;bottom:0px;right:0px;" class="abs rds50 bdc f ac xc">位置2</div>
    <div class="abs dash-box">
      <div class="aniLen ">
        <div class="bdLight"></div>
        <img src="./arraw_light.png" alt="" class="abs l50 t0 arrow" :style="{'transform': 'translate(-50%, -53%) rotate(-4deg)'}">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
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
<style>
.dash-box{
  transform-origin:left top;
  height: 90px;
  left:100px;
  top:18%;
  width:530px;
  transform:rotate(20deg);
}
.bdLight{
  border-top:7px dashed #2DC4FE;
}
@keyframes len {
  0%{transform: scale(0, 1);}
  100%{transform: scale(1, 1);}
}
.aniLen{
  transform-origin:left top;
  animation: len 1.5s ease 0s 1 forwards;
}
</style>