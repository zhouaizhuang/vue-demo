<template>
  <div class="ovh fs24 tc">
    <div class="f ac mt50">
      <div class="f1 f ac">
        <div style="width:120px;">原图</div>
        <img src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" style=""/>
      </div>
      <div class="f1 f ac"></div>
    </div>
    <div class="f rw ac mt50">
      <div class="f1 f ac mb30">
        <div style="width:120px;">阴影效果</div>
        <img style="filter:drop-shadow(0 0 10px #000);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac mb10">
        <div style="width:120px;">模糊2px</div>
        <img style="filter:blur(2px);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac">
        <div style="width:120px;">径向模糊</div>
        <div class="rel ovh" style="width:200px;height:190px;">
          <img class="abs trbl0 ts1-2" style="filter:blur(5px);mask-image:radial-gradient(transparent, transparent 10%, black 80%);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" alt="">
          <img style="width:200px;height:120px;" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" alt="">
        </div>
      </div>
    </div>
    <div class="f rw ac mt50">
      <div class="f1 f ac mb10">
        <div style="width:120px;">亮度2</div>
        <img style="filter:brightness(2);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac">
        <div style="width:120px;">对比度200%</div>
        <img style="filter:contrast(200%);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
    </div>
    <div class="f rw ac mt50">
      <div class="f1 f ac mb10">
        <div style="width:120px;">投影</div>
        <img style="filter:drop-shadow(4px 4px 8px blue);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac">
        <div style="width:120px;">(全站置灰)灰度100%</div>
        <img style="filter:grayscale(100%);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
    </div>
    <div class="f rw ac mt50">
      <div class="f1 f ac mb10">
        <div style="width:120px;">色调旋转90deg</div>
        <img style="filter:hue-rotate(90deg);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac">
        <div style="width:120px;">反相75%</div>
        <img style="filter:invert(75%);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
    </div>
    <div class="f rw ac mt50">
      <div class="f1 f ac mb10">
        <div style="width:120px;">透明度25%</div>
        <img style="filter:opacity(25%);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac">
        <div style="width:120px;">饱和度230%</div>
        <img style="filter:saturate(230%);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
    </div>
    <div class="f rw ac mt50">
      <div class="f1 f ac mb10">
        <div style="width:120px;">褐色60%</div>
        <img style="filter:sepia(60%);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac">
      </div>
    </div>
    <div class="f rw ac mt50 mb50">
      <div class="f1 f ac xc">
        <div @click="isShowBg = true" class="bg1890ff rds10 pt15 pb15 fs16 gf b pl10 pr10">点我显示毛玻璃背景</div>
      </div>
    </div>
    <!--背景滤镜-->
    <!--@touchmove.prevent禁止滚动穿透。但是缺点是，弹窗也无法滚动-->
    <div v-show="isShowBg" @touchmove.prevent id="bgModal" @click="isShowBg = false" class="fixed trbl0" style="background-color:rgba(0,0,0,.7);backdrop-filter:blur(5px);">
      <div class="abs bgf rds10 pt40 pb30" style="top:30%;left:10%;right:10%;">
        <div class="pb30 fs32 b">温馨提示</div>
        <div class="fs20 mb30">这是背景毛玻璃效果！</div>
        <div class="f xc">
          <div @click="isShowBg = false" class="w40 bg1890ff rds10 pt10 pb10 fs20 gf b">确实</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'filterImg',
  data(){
    return {
      isShowBg:false, // 是否显示背景毛玻璃
    }
  },
  methods:{
  },
  created(){
   
  },
  mounted(){
    // 上层的盒子没有滚动。可以用这种方法，禁止滚动穿透
    // var modal = document.getElementById('bgModal');
    // modal.addEventListener('touchmove', function(e) {
    //   e.preventDefault();
    // }, false);
  }
}
</script>
<style scoped>
img{
  width:200px;
}
</style>
