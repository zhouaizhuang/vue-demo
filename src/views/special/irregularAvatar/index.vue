
<template>
  <div>
    <div class="f xc">
      <img style="width:150px;height:150px;border-radius:70% 30% 30% 70% / 60% 40% 60% 40%;object-fit:cover;object-position:right;" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
    </div>
    <div class="f xc mt50">
      <img class="avatar" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" alt="">
      <img class="avatar" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" alt="">
      <img class="avatar" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" alt="">
      <img class="avatar" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" alt="">
      <img class="avatar" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'IrregularAvatar',
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
  .avatar {
    width:100px;
    height:100px;
    border-radius: 50%;
    object-fit: cover;
    animation: morph 6s paused linear;
    border:solid deepskyblue;
    margin-right:30px;
  }
  @keyframes morph {
    0%{
      border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
      transform: rotate(-5deg);
    }
    100%{
      border-radius: 40% 60%;
      transform: rotate(5deg);
    }
  }
  .avatar:nth-child(4n) {
    animation-delay: -3.5s;;
  }
  .avatar:nth-child(2n + 1) {
    animation-delay: -1s;;
  }
  .avatar:nth-child(3n + 2) {
    animation-delay: -2s;;
  }
  .avatar:nth-child(5n + 3) {
    animation-delay: -3s;;
  }
  .avatar:nth-child(7n + 5) {
    animation-delay: -4s;;
  }
  .avatar:nth-child(11n + 7) {
    animation-delay: -5s;;
  }
</style>