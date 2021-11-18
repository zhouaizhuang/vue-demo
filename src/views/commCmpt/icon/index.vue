<template>
  <div class="fixed trbl0" style="background: rgba(0,0,0,.8);">
    <div class="successIcon" />
    <div class="errorIcon" />
    <div class="closeIcon" />
  </div>
</template>
<script>
export default {
  name: 'icon',
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
/**正确 ***/
.successIcon{
  position: absolute;
  border-radius: 50%;
  left:10%;
  top:10%;
  width: 80px;
  height:80px;
  border: 4px solid #fff;
  background-color: #7abd3b;
  transform: rotate(-45deg);
}
.successIcon::after{
  content: '';
  width: 50%;
  height: 25%;
  border-radius: 5px;
  transform: translate(-40%, -60%);
  border: 7px solid #fff;
  border-top: none;
  border-right: none;
  background: transparent;
  position: absolute;
  left: 50%;
  top: 50%;
}
/*错误答案图标*/
.errorIcon{
  position: absolute;
  border-radius: 50%;
  left:40%;
  top:10%;
  width: 80px;
  height:80px;
  border: 4px solid #fff;
  background-color: #fd2f2d;
  transform: rotate(-45deg);
}
.errorIcon::before{
  content: '';
  width: 85%;
  height: 8%;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  background-color: #fff;
  border-radius: 5px;
}
.errorIcon::after{
  content: '';
  width: 8%;
  height: 85%;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  background-color: #fff;
  border-radius: 5px;
}
/**关闭 */
.closeIcon{
  position: absolute;
  border-radius: 50%;
  left:70%;
  top:10%;
  width: 80px;
  height:80px;
  border: 4px solid #fff;
  transform: rotate(-45deg);
}
.closeIcon::before{
  content: '';
  width: 85%;
  height: 8%;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  background-color: #fff;
  border-radius: 5px;
}
.closeIcon::after{
  content: '';
  width: 8%;
  height: 85%;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  background-color: #fff;
  border-radius: 5px;
}
</style>