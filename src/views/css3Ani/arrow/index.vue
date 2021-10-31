<template>
  <div>
    <div class="fs24 tc mt50">备注：<span class="gf10000">动画开始时间</span>可以设置<span class="gf10000">为负数</span>。这样能保证一进入页面动画已经在播放中</div>
    <div class="fs24 tc">在一些场景需要有时间差的开始动画，但是一进入页面又希望他们都在动起来了，就非常有用</div>
    <div class="rel" style="height:300px;width:700px;margin:100px auto;">
      <div style="width: 80px;height:80px;" class="rds50 bdc f ac xc">位置1</div>
      <div style="width: 80px;height:80px;bottom:0px;right:0px;" class="abs rds50 bdc f ac xc">位置2</div>
      <div class="abs dash-box">
        <div class="aniLen ">
          <div class="bdLight"></div>
          <img src="./arraw_light.png" alt="" class="abs l50 t0 arrow" :style="{'transform': 'translate(-50%, -48%) rotate(-4deg)'}">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
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
<style>
.dash-box{
  transform-origin:left top; /**基准旋转位置默认是中心的， 这里改为左上角 */
  height: 90px;
  left:100px;
  top:18%;
  width:530px;
  transform:rotate(20deg);
}
.bdLight{
  border-top:7px dashed #2DC4FE;
}
@keyframes len {
  0%{transform: scale(0, 1);}
  100%{transform: scale(1, 1);}
}
.aniLen{
  transform-origin:left top;
  /**当播放动画是负数的时候。提前开始播放动画。页面效果就变成一进
  *入页面动画已经在播放中了。有的尝尽需要错落播放，但是有希望一进入页面就动起来，就非常有用 
  */
  animation: len 1.5s ease -.3s 1 forwards; 
}
</style>