<template>
  <div style="max-width:400px;" class="w100 auto bg2 h100vh pt100">
    <!--文字错落显示效果一-->
    <div class="f rw gf">
      <div v-for="(item, index) in textArr" :key="index" class="landIn fs30 lt5 b" :style="{animationDelay: `${index * 0.05}s`}">{{item}}</div>
    </div>
    <!--文字错落显示效果二-->
    <div class="mt100 f xc">
      <div class="bdlrf rel f g6ee1f5 fs30 lt3 uppercase di pl10 pr10">
        <div v-for="(item, index) in text2Arr" :key="index" class="innText fs30 lt5 b" :style="{animationDelay: `${Math.abs(middle - index) * 0.05}s`  }">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { chunk } from '../../../common'
export default {
  name: 'textStaggered',
  data(){
    return {
      // 效果一
      text:'Ano hi watashitachi mada shiranai no Fushigi no monogatari desu.',
      textArr: [],
      // 效果二
      text2: 'swordaasd',
      text2Arr: [],
      middle: 0, // 数组的中间的数据
    }
  },
  methods: {
  },
  created(){
    this.textArr = this.text.split('')
    this.text2Arr = this.text2.split('')
    this.middle = chunk(this.text2Arr, 2)[0].length
  }
}
</script>
<style scoped>
/*****效果一 */
@keyframes landIn {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.landIn{
  animation: landIn 0.8s ease-out both;
  line-height: 1.5;
}
/*****效果二 */
.bdlf{
  border-left:2px solid #fff;
}
.bdrf{
  border-right:2px solid #fff;
}
.bdlrf::before{
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  width: 2px;
  height: 100%;
  background: white;
  opacity: 0;
  transform: scale(0);
  left: 50%;
  animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
}
.bdlrf::after{
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  width: 2px;
  height: 100%;
  background: white;
  opacity: 0;
  transform: scale(0);
  right: 50%;
  animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
}
.innText{
  opacity: 0;
  transform: scale(0);
  animation: fadeIn 2.4s forwards;
}
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes slideLeft {
  to {
    left: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}
@keyframes slideRight {
  to {
    right: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}
</style>