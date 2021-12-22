
<template>
  <div class="auto fs20r h100vh fs50r">
    <div class="w30 tc pt20r pb20r pl40r pr40r gf bg1890ff rds40r fs30r auto" @click="show = !show">切换动画</div>
    <!--1、使用过度类名-->
    <transition name='fade'>
      <h3 v-if="show">这是一个h3</h3>
    </transition>
    <!--2、使用第三方动画类名-->
    <!--引入入场使用的动画类名-->
    <!--引入出场使用的动画类名-->
    <transition
      enter-active-class='animated bounce'
      leave-active-class='animated bounce'
    >
      <h3 v-if="show">这是一个h3</h3>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'vueAni',
  data(){
    return {
      show: false
    }
  },
  methods:{

  },
  created(){
  },
  mounted(){
  },
}
</script>
<style scoped>
/*********1、使用过度类名****** */
/** 刚开始， 和结束的时候 */
.fade-enter, .fade-leave-to {
  opacity: 0;
}
/** 加载完成的时候， 准备结束的时候 */
.fade-enter-active, .fade-leave-active {
  transition: all .4s ease;
}


/*********2、使用三方动画类名****** */
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0); /* 跳回到原点*/
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);

    -webkit-transform: translate3d(0, -30px, 0); /* 向上跳30*/
    transform: translate3d(0, -30px, 0);
  }
  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);

    -webkit-transform: translate3d(0, -15px, 0); /* 向上跳15*/
    transform: translate3d(0, -15px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, -4px, 0); /* 向上跳4*/
    transform: translate3d(0, -4px, 0);
  }
}
.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}

</style>