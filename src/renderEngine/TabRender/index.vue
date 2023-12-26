<template>
  <div>
    <!---圆角类型tab-->
    <div v-if="tabObj.roundTab && tabObj.roundTab.isShow">
      <RoundTab :tabObj="tabObj" @setTabObj="e => $emit('setTabObj', e)" @changeTab="e => $emit('changeTab', e)"></RoundTab>
    </div>
    <!---UI组件库类型的tab-->
    <div v-if="tabObj.paneTab && tabObj.paneTab.isShow">
      <PaneTab :tabObj="tabObj" @setTabObj="e => $emit('setTabObj', e)" @changeTab="e => $emit('changeTab', e)"></PaneTab>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>