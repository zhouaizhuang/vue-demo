<template>
  <div class="auto pt50" style="width:1000px">
    <!--方案一：这里是通过css变量传参的-->
    <!--方案二：通过js去改变数值：在slider组件监听事件拿到滚动的值e, 然后js设置this.$refs.ball.style.setProperty('--delay', `${e.target.value * -1}s`)-->
    <div ref="ball" class="rds50 mb50 aniTx100" :style="{width:'50px',height:'50px',background:'red','--delay': `${-1 * value1 / 100}s`, marginLeft: '-25px'}"></div>
    <Slider v-model="value1"></Slider>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' ></style>