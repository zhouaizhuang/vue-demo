
<template>
  <div>
    <div class="fs30 text" style="margin:200px auto;width:300px;">
      {{text}}
    </div>
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
  font-size: 50px;
}
</style>