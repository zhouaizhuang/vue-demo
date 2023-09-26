<template>
  <div class="abs trbl0">
    <div class="f mb50 pl100 pt100">
      <div
        v-poptip="[
          {label:'设置标签', click: () => openSetTags(1)},
          {label:'快速签约', click: () => speedSign(2)},
          {label:'新增随访', click: () => addVisit(3)}
        ]"
        class="tc poi"
        style="width:100px;"
      >
        更多操作
      </div>
    </div>    
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>