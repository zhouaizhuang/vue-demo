<template>
  <div class="f">
    <div
      v-for="(item, index) in tabObj.list"
      :key="item.id"
      @click="changeTab(item)"
      :class="['f ac xc pl15 pr15 pt5 pb5 fs14 poi trans3 none', item.isChecked ? 'bg1aada7 gf' : 'bgf g7', index == 0 ? 'rdsl2 bdtc bdbc bdlc bdrc' : index == tabObj.list.length - 1 ? 'rdsr2 bdtc bdbc bdrc' : 'bdtc bdbc bdrc']"
      :style="tabObj.roundTab ? tabObj.roundTab.style : ''"
    >
      {{ item.name }}<span v-if="item.count!=='' && item.count!=undefined && item.count!=null">({{item.count}})</span>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>