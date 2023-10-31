<template>
  <div ref="drag-box" class="abs l0 r0 b0 rds5 ovh bdc bgf" :style="{top: top +'px'}">
    <div class="abs l0 t0 b0 ovya" :style="{width: left * this.dragBox.width + dragX +'px'}">
      <slot name="left"></slot>
    </div>
    <div @mousedown="mousedown" class="abs t0 b0" :style="{width:'20px',left: left * this.dragBox.width + dragX +'px',cursor: 'col-resize'}">
      <div class="abs t0 b0 bgc l50 tx-50 f ac xc" style="width:6px;background:#f8f8f9;border-left:1px solid #dcdee2;border-right:1px solid #dcdee2;">
        <div class="f1">
          <div class="mb3" style="border-top:1px solid rgba(23,35,61,.25);"></div>
          <div class="mb3" style="border-top:1px solid rgba(23,35,61,.25);"></div>
          <div class="mb3" style="border-top:1px solid rgba(23,35,61,.25);"></div>
          <div class="mb3" style="border-top:1px solid rgba(23,35,61,.25);"></div>
          <div class="mb3" style="border-top:1px solid rgba(23,35,61,.25);"></div>
          <div class="mb3" style="border-top:1px solid rgba(23,35,61,.25);"></div>
          <div class="mb3" style="border-top:1px solid rgba(23,35,61,.25);"></div>
          <div class="mb3" style="border-top:1px solid rgba(23,35,61,.25);"></div>
          <div class="mb3" style="border-top:1px solid rgba(23,35,61,.25);"></div>
          <div class="mb3" style="border-top:1px solid rgba(23,35,61,.25);"></div>
          <div class="mb3" style="border-top:1px solid rgba(23,35,61,.25);"></div>
          <div class="mb3" style="border-top:1px solid rgba(23,35,61,.25);"></div>
        </div>
      </div>
    </div>
    <div class="abs trbl0 ovya" :style="{left: left  * this.dragBox.width + dragX + 20 +'px'}">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>