
<template>
  <div class="h100vh">
    <div class="f ac rw pt50">
      <div class="f1 f ac">
        <div style="width:120px;">下倒影</div>
        <img style="-webkit-box-reflect:below;" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac">
        <div style="width:120px;">右倒影</div>
        <img style="-webkit-box-reflect:right;" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
    </div>
    <div class="f ac rw mt50">
      <div class="f1 f ac">
        <div style="width:120px;">下倒影+间距10px</div>
        <img style="-webkit-box-reflect:below 10px;" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac">
        <div style="width:120px;">右倒影+间距30px</div>
        <img style="-webkit-box-reflect:right 30px;" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
    </div>
    <div class="f ac rw" style="margin-top:150px;">
      <div class="f1 f ac">
        <div style="width:120px;">下倒影 + 线性渐变（遮罩）</div>
        <img style="-webkit-box-reflect:below 0 linear-gradient(transparent, white);;" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac">
        <div style="width:120px;">下倒影 + 遮罩图片裁剪</div>
        <img style=" -webkit-box-reflect: below 0 url(https://www.zhangxinxu.com/study/201608/shuai2.png);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
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
img{width:200px;}

</style>