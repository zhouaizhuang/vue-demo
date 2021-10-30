
<template>
  <div>
    <div class="fs50 mt100 tc auto text">
      我是渐变文字, 请看类名.text
    </div>
    <div class="mt50 fs50 auto stroke tc">我是描边文字,请看类名.stroke</div>
  </div>
</template>
<script>
export default {
  name: 'specialFont',
  data(){
    return {
      text: '我是渐变文字'
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
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.stroke{
  color: #fff;
  -webkit-text-stroke: 2px red;
}
</style>