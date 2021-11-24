
<template>
  <div class="h100vh">
    <img src="./free_contract.png" class="breath-btn auto db mt50" style="width:370px;height:58px;" />
    <!-- <HelloWorld :msg="'123'" @sayName="sayName"></HelloWorld> -->
    <div class="button3 gf fs18 tc rds30 rel mt50 auto">
      <span>立即下载</span>
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
/***呼吸按钮 */
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
/***闪光按钮 */
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
  background-image: linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 70%);
  /* background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 70%); */
  background-size: 200%;
  animation: wipes 1s infinite;
}
@keyframes wipes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}
</style>