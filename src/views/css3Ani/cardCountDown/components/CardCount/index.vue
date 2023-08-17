<template>
  <div class="f ac xc  rel hoverBox rds5" style="width:100px;height:100px;perspective: 200px;"> <!--增加透视效果，让3d更加逼真-->
    <!--上半部分中间一层-->
    <div :class="['abs zx3 l0 t0 r0 h50 f xc ovh g0 bgf card4',]" style="font-size:70px;line-height:100px;border-radius: 5px 5px 0 0;">{{newVal}}</div>
    <!--上半部分最里面一层-->
    <div :class="['abs zx2 l0 b0 r0 h50 f xc ovh g0 bgf card3',  showAnimate ? 'rotate0' : '']" style="font-size:70px;line-height:0px;border-radius: 5px 5px 0 0;">{{newVal}}</div>
    <!--上半部分最外边一层-->
    <div :class="['abs zx4 l0 t0 r0 h50 f xc ovh g0 bgf card1', showAnimate ? 'rotate180' : '']" style="font-size:70px;line-height:100px;border-radius: 5px 5px 0 0;">{{oldVal}}</div>
    <!--下半部分最外边一层-->
    <div :class="['abs zx1 l0 b0 r0 h50 f xc ovh g0 bgf card2']" style="font-size:70px;line-height:0px;border-radius: 0 0 5px 5px;">{{oldVal}}</div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>