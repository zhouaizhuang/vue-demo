<template>
  <div>
    <!--融合案例效果-->
    <div class="auto mt50 mb50 bgf f ac xc" style="height: 140px;width: 400px;filter: contrast(30);    ">
      <div class="rds50 abs circle-1 txy-50" style="filter: blur(10px);"></div>
      <div class="rds50 abs circle-2 txy-50" style="filter: blur(10px);"></div>
    </div>

    <!--流汗效果-->
    <div class="rel mauto tc gc fs30 pt100 gf b lt5" style="width:350px;height:300px;background-color:#000;">
      <div style="transform: skewY(5deg);">
        <div>天气真热啊</div>
        <div class="auto rel" style="filter: blur(0.5px) contrast(10);width:220px;height:50px;background:#000;">
          <div class="abs l0 t0 auto zx10 bgf" style="filter:blur(1px);width:210px;height:4px;" />
          <div class="water1 abs bgf rds50" style="left:5px;filter:blur(2px);" />
          <div class="water2 abs bgf rds50" style="left:5px;filter:blur(2px);" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'textSweat',
  data(){
    return {
      
    }
  },
  methods:{
   
  },
  created(){
   
  }
}
</script>
<style scoped>
.circle-1{
  height: 90px;
  width: 90px;
  background: #03a9f4;
  animation: 2s moving linear infinite alternate-reverse;
}
.circle-2{
  height: 60px;
  width: 60px;
  background: #0000ff;
  animation: 2s moving linear infinite alternate;
}
@keyframes moving {    
  0%{
    transform: translate(50px)
  }
  100%{
    transform: translate(-50px)
  }
}

/******文字流汗**** */
@keyframes move{
  0% {transform: translate(0px, 0);}
  93% {transform: translate(200px, 4px);opacity: 1;}
  100% {transform: translate(200px, 100px);opacity: 0;}
}
.water1{
  width:10px;
  height:12px;
  top:-1px;
  background-color: #fff;
  animation: move 7.5s ease-in-out 0s infinite;
}
.water2{
  width:10px;
  height:12px;
  top:-1px;
  background-color: #fff;
  animation: move 7.5s ease-in-out 2s infinite;
}
</style>