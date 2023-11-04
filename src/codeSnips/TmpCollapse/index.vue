<template>
  <div>
    <!--折叠面板开始位置-->
    <div v-for="(item, index) in collapseList" :key="item._id" class="mt10 none ovh" :style="{borderTop:'1px solid #EBEEF5',borderLeft:'1px solid #EBEEF5',borderRadius: '5px 5px 0 0'}">
      <div @click="toogleSpread(item)" class="f ac g3 pl20 pr20 bg1aada7 poi" style="height:47px;">
        <div class="f1">折叠面板</div>
        <svg width="16" height="16" t="1682487153547" :class="['trans3', item.isSpread ? '' : 'tr180']" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6411"><path d="M506.4 275.8L82.8 710.5c-9.3 9.5-9.1 24.7 0.4 33.9 9.5 9.3 24.7 9.1 33.9-0.4l407-417.7 405.3 420.2c9.2 9.5 24.4 9.8 33.9 0.6 4.9-4.7 7.3-11 7.3-17.3 0-6-2.2-12-6.7-16.7L546.1 280c-1.6-1.7-3.4-3-5.3-4.1l-0.5-0.5c-9.5-9.3-24.7-9.1-33.9 0.4z" fill="#333" p-id="6412"></path></svg>
      </div>
      <div :ref="`contentRef${index}`" class="ovh trans3 bdc" :style="{maxHeight: item.isSpread ? '120px' : '0'}">
        <div class="f g6 pt10 mb10">
          <div class="tr" style="width:70px;">主诉：</div><div>患者感觉头晕</div>
        </div>
        <div v-if="index == 1" class="f g6 pt10 mb10">
          <div class="tr" style="width:70px;">过敏史：</div><div>花粉过敏</div>
        </div>
        <div class="f g6 pt10 mb10">
          <div class="tr" style="width:70px;">既往史：</div><div>曾经患有高血压</div>
        </div>
        <div class="f g6 pt10 mb10">
          <div class="tr" style="width:70px;">过敏史：</div><div>花粉过敏</div>
        </div>
      </div>
    </div>
    <!--折叠面板结束位置-->
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>