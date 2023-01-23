
<template>
  <div class="auto fs12 h100vh ovh pt100">
    <svg viewBox="0 0 100 100">
      <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
      <text>
        <textPath xlink:href="#circle">
          环形文字效果-----环形文字效果
        </textPath>
      </text>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'circleText',
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
svg {
  overflow: visible;
  animation: circular-text-rotate 5s linear paused infinite;
}
svg:hover {
  animation-play-state: running;
}
path {
  fill: none;
}
text {
  fill: #b4a078;
}
@keyframes circular-text-rotate {
  to {
    transform: rotate(1turn);
  }
}
</style>