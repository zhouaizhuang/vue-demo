
<template>
  <div class="h100vh ovh">
    <div class="f ac fs40 mt50 tc">
      <div class="f1 text">渐变文字1</div>
      <div class="f1 text-fill-gradient">渐变文字2</div>
    </div>
    <div class="f ac mt50 fs40 tc">
      <div class="f1 stroke">文字描边1</div>
      <div class="f1 text-stroke-out">文字描边2</div>
    </div>
    <div class="f ac mt50 fs40 tc">
      <div class="text-shadow-3d">阴影实现立体投影</div>
    </div>
    <div class="f ac mt50 fs40 tc">
      <div class="milky">文字阴影</div>
    </div>
    <div class="f ac mt50 fs40 tc">
      <div class="vague">文字模糊</div>
    </div>
    <div class="f mt50 fs40 tc gred rel">
      <div class="two-color">不同颜色</div>
      不同颜色
    </div>
    <div class="f ac mt50 fs40 tc">
      <div class="shine">文字荧光</div>
    </div>
    <div class="f ac mt50 fs40 tc">
      <div class="rotate-text">旋转文字</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'specialFont',
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
.text{
  background: linear-gradient(to right,deepskyblue, deeppink);
  background-clip: text;
  color: transparent;
}
.text-fill-gradient{
  background: linear-gradient(to right, skyblue, deeppink, deepskyblue);
  -webkit-text-fill-color:transparent;
  background-clip: text;
}
.stroke{
  color: #fff;
  -webkit-text-stroke: 2px red;
}
.text-shadow-3d{
  color:deepskyblue;
  text-shadow: 1px 1px #005a79, 2px 2px #005a79, 3px 3px #005a79, 4px 4px #005a79, 5px 5px #005a79, 6px 6px #005a79, 7px 7px #005a79;
}
.text-stroke-out{
  color:#fff;
  text-shadow: 0 2px deeppink, 2px 0 deeppink, 0 -2px deeppink, -2px 0 deeppink, 2px 2px deeppink, -2px -2px deeppink, -2px 2px deeppink, 2px -2px deeppink; 
}
.milky{
  font-size:50px;
  color: #3366ff;
  text-shadow: 0 8px 10px #6699ff;
  font-weight: bold;
  text-align: center;
}
.vague{
  font-size: 50px;
  color: transparent;
  text-shadow: 0 0 4px #66ff99;
}
.two-color{
  height:38px;
  position: absolute;
  overflow: hidden;
  color: orange;
  top:0;
}
.shine{
  color: #0000ff;
  text-decoration: none;
  font-size: 50px;;
  animation: aniShine 2.4s infinite ;
}
@keyframes aniShine {
  0%, 100%{
    color:#fff;
    text-shadow:0 0 10px #0000ff, 0 0 10px #0000ff;
  }
  50%{
    text-shadow: 0 0 10px #0000ff, 0 0 40px #0000ff;
  }
}
.rotate-text{
  color: #0000ff;
  font-size: 50x;
  transform-style: preserve-3d;
  animation: rotateText 5s ease-in-out infinite;
}
@keyframes rotateText {
  0%{
    transform: rotateX(-5deg) rotateY(0);
  }
  50%{
    transform: rotateX(0) rotateY(180deg);
  }
  100%{
    transform: rotateX(5deg) rotateY(360deg);
  }
}
</style>