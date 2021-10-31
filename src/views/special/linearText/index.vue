
<template>
  <div>
    <div class="f ac fs50 mt50 tc">
      <div class="f1 text">渐变方式1</div>
      <div class="f1 text-fill-gradient">渐变方式2</div>
    </div>
    <div class="f ac mt50 fs50 tc">
      <div class="f1 stroke">描边方式1</div>
      <div class="f1 text-stroke-out">描边方式2</div>
    </div>
    <div class="f ac mt50 fs50 tc">
      <div class="text-shadow-3d">阴影实现立体投影</div>
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
<style>
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
</style>