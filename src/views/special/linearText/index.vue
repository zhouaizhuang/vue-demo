<!--blog.csdn.net/xw1680/article/details/118065460-->
<template>
  <div class="mh100vh">
    <div class="f ac fs40 pt50 tc">
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
    <div class="f ac mt50 fs40 tc">
      <div class="zebra__shadow__text">斑马投影</div>
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
    <div class="f ac mt50 fs20 tc">
      <svg width="1000" height="1000" >
        <dfs>
          <path id="textPath" d="M30,140 C130,240 330,240 330,140 S510,60 510,140"></path>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ff0000"></stop>
            <stop offset="50%" stop-color="#00ff00"></stop>
            <stop offset="100%" stop-color="#0000ff"></stop>
          </linearGradient>
        </dfs>
        <text dy="10">
          <textPath xlink:href="#textPath">曲线文字,请注意这是曲线文字，这是曲线文字
          </textPath>
        </text>
      </svg>
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
  /*设置方向为角度也是可以的： linear-gradient(180deg, #3ff9ff 0%, #409eff 72%, #78BEFF 100%);*/
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
.zebra__shadow__text {
  font-size: 50px;
  font-weight: bold;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-shadow: 6px -6px #000, 4px -4px #fff;
  background-image: linear-gradient(135deg, #fff 0%, #fff 25%, #000 25%, #000 50%, #fff 50%, #fff 75%, #000 75%, #000 100%);
  background-size: 6px 6px;
  background-repeat: repeat;
  -webkit-background-clip: text;
  background-clip: text;
}
</style>