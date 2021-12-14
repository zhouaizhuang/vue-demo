
<template>
  <div style="width:350px;" class="auto h100vh">
    <div class="box auto">半透明边框</div>
    <div class="innerRadius">边框内圆角</div>
  </div>
</template>
<script>
export default {
  name: 'transparentBorder',
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
.box{
  width:200px;
  padding: 12px;
  background: white;
  border: 10px solid rgba(255,0,0,0.3);
  background-clip: padding-box; /*这一行很重要* 改变背景的默认行为。默认情况下，背景的颜色会延伸至边框下层，这意味着我们设置的透明边框效果会被覆盖掉 */
}
.innerRadius{
  width: 209px;
  margin: 29px auto;
  padding: 8px 16px;
  border-radius: 8px;
  background: #f4f0ea;
  outline: 6px solid #b4a078;
  box-shadow: 0 0 0 5px #b4a078;
}
</style>