
<template>
  <div class="h100vh">
    <!--呼吸按钮-->
    <img src="./free_contract.png" class="breath-btn auto db mt50" style="width:370px;height:58px;" />
    <!-- <HelloWorld :msg="'123'" @sayName="sayName"></HelloWorld> -->
    <!--2、闪光按钮-->
    <div class="button3 gf fs18 tc rds30 rel mt50 auto">
      <span>立即下载</span>
    </div>
    <!--2、流光按钮-->
    <div class="button rel gf tc fs18 tdn mt50 auto rds10 ovh trans3">
      <div class="light abs bgf t0 op3" />
      流光按钮
    </div>
  </div>
</template>
<script>
// import HelloWorld from '../../../components/HelloWorld.vue'
export default {
  // components: { HelloWorld },
  name: 'breath',
  data(){
    return {
    }
  },
  methods: {
    // sayName(){
    //   console.log('myName')
    // }
  },
  created(){
  
  },
}
</script>
<style>
/***1、呼吸按钮 */
.breath-btn{
  animation: breathing 0.6s ease-in-out 0s infinite alternate;
}
@keyframes breathing {
  0%{
    transform: scale(0.93);
  }
  100%{
    transform: scale(1);
  }
}
/***2、闪光按钮 */
.button3 {
  width: 200px;
  height: 46px;
  line-height: 46px;
  background-color: #2e82ff;
}
.button3::before {
  content: "";
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 70%);
  /* background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 70%); */
  background-size: 200%;
  animation: wipes 1s infinite;
}
@keyframes wipes {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0% 0;
  }
}

/**3、流光按钮*/
.button {
  background: #00B16A;
  width: 160px;
  height: 50px;
  line-height: 50px;
} 
.light{
 content: ' ';
 width: 25px;
 height: 50px;
 left: -45px;
 transition: all 0.25s ease-out;
 transform: skewX(-25deg);
}
.button:hover {
  background: #26C281;
}
.button:hover .light {
  width: 45px;
  left: 205px;
}
</style>