<template>
  <div class="abs trbl0 bgf pl30 pr30 pt30">
    <div class="rel" v-clickoutside="clickOutSide">
      <div class="" @click.stop="isShowOptions=!isShowOptions">
        <input :value="value" @input="e => value=e.target.value" class="fs14 f ac rds4 rel hoverBorder pl5 db w100 bdAndNone ivu-input" style="color:#515a6e;height:32px;" placeholder="请输入" />
        <svg t="1688200718474" :class="['abs zx10 t50 ty-50 poi trans3']" :style="{right:'10px', transform: isShowOptions ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)'}" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5782" width="14" height="14"><path d="M183.168 332.501333a42.666667 42.666667 0 0 1 57.621333-2.496l2.709334 2.496L512 600.96l268.501333-268.48a42.666667 42.666667 0 0 1 57.621334-2.496l2.709333 2.496a42.666667 42.666667 0 0 1 2.496 57.621333l-2.496 2.709334-298.666667 298.666666a42.666667 42.666667 0 0 1-57.621333 2.496l-2.709333-2.496-298.666667-298.666666a42.666667 42.666667 0 0 1 0-60.330667z" fill="#999" p-id="5783"></path></svg>
      </div>
      <div :class="['abs cardHover bgf rds4 rel l0 r0 ovya none', isShowOptions ? 'cardShadow' : '']" :style="{top:'32px', maxHeight: isShowOptions ? '200px' : '0', transition: 'max-height ease-in-out .3s -.1s' }">
        <div @click="value=item.name;isShowOptions=false" v-for="item in options" :key="item.id" :class="['pt5 pb5 pl10 pr10 hoverCurItemBg poi']">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>