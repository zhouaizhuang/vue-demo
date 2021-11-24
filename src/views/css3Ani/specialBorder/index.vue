<!--参考链接：https://juejin.cn/post/6918921604160290830-->
<!--障眼法三大奥义：1、旋转让其动起来  2、裁剪出需要展示的部分  3、遮住不需要展示的部分-->
<!--动画三大奥义：1、动画有交错时间  2、ease in模拟现实曲线  3、分析基本元素-->
<template>
  <div style="width:390px;" class="auto bgf5 h100vh ovh">
    <!--1、流动边框-->
    <div class="rel auto ovh rds10 bgContent mt30" style="width:240px;height:100px;">
      <div class="abs rds10 f ac xc fs30 b g1890ff zx10 bgf" style="top:3px;right:3px;bottom:3px;left:3px;">流动边框</div>
    </div>
    <!--2、角向渐变-->
    <div class="rel auto ovh rds10 mt30 conic" style="width:240px;height:100px;">
      <div class="abs rds10 f ac xc fs30 b g1890ff zx10 bgf" style="top:3px;right:3px;bottom:3px;left:3px;">角向渐变</div>
    </div>
    <!--3、clip裁剪制作边框-->
    <div class="rel auto  mt30 clipContent" style="width:240px;height:100px;">
      <div class="abs rds10 f ac xc fs30 b g1890ff zx10 bgf" style="top:2px;right:2px;bottom:2px;left:2px;">clip裁剪制作</div>
    </div>
    <!--4、渐变边框-->
    <div class="border-image-clip-path auto mt30 bgf f ac xc fs30 b g1890ff">
      渐变边框
    </div>
  </div>
</template>
<script>
export default {
  name: 'specialButton',
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
<style scoped>
/**1、流动边框 */
.bgContent::before{
  content:'';
  position: absolute;
  left:-150%;
  top:-150%;
  width: 400%;
  height: 400%;
  background-repeat: no-repeat;
  background-size: 50% 50%, 50% 50%;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
  animation: rotate 4s linear infinite;
}
@keyframes rotate {
	100% { transform: rotate(1turn); }
}
/***2、角向渐变*/
.conic::before {
  content: '';
  position: absolute;
  left: -150%;
  top: -150%;
  width: 400%;
  height: 400%;
  background: conic-gradient(transparent,rgba(168, 239, 255, 1), transparent 30%);
  animation: rotate 4s linear infinite;
}
@keyframes rotate {
	100% { transform: rotate(1turn); }
}
/**3、clip裁剪制作边框 */
.clipContent::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 4px solid gold;
  border-radius:10px;
  animation: clippath 3s infinite linear;
}
@keyframes clippath {
  0%,
  100% {
    clip-path: inset(0 0 95% 0);
  }
  25% {
    clip-path: inset(0 95% 0 0);
  }
  50% {
    clip-path: inset(95% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 95%);
  }
}
/***渐变边框 */
.border-image-clip-path {
  width: 200px;
  height: 100px;
  border: 10px solid;
  border-image: linear-gradient(45deg, gold, deeppink) 1;
  clip-path: inset(0px round 10px);
  filter: hue-rotate(360deg);
}

@keyframes huerotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>