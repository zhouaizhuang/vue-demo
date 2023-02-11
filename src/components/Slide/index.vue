<template>
  <div @touchstart.capture="e => touchStart(e)" @touchend.capture="e => touchEnd(e)" @click="clickItem" class="ovh">
    <div :class="['rel trans3', item.slideType == -1 ? 'tx-60' : item.slideType == 1 ? 'tx30' : '']">
      <slot></slot>  <!-- 相当于<slot name="default"></slot>-->
      <slot name="leftSlot">
        <div style="width:30px;left:-30px;background:#1890ff" class="abs t0 b0 f ac xc gf">
          左侧
        </div>
      </slot>
      <slot name="rightSlot">
        <div style="width:60px;background:red;right:-60px;" class="abs t0 b0 gf f ac xc fs14">删除</div>
      </slot>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src="./index.css" scoped>
</style>