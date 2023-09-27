<template>
  <div class="abs trbl0">
    <div class="mb50 pl100 pt100">
      <!--外层盒子固定宽度，poptip自适应-->
      <div
        v-poptip="[
          {label:'设置标签', click: () => openSetTags(1)},
          {label:'快速签约', click: () => speedSign(2)},
          {label:'新增随访', click: () => addVisit(3)}
        ]"
        class="tc poi bdc mb30"
        style="width:100px;"
      >
        更多操作
      </div>

      <!--外层盒子不设宽度， poptip设置宽度-->
      <div
        v-poptip="{
          list: [
            {label:'设置标签', click: () => openSetTags(1) },
            {label:'快速签约', click: () => speedSign(2)},
            {label:'新增随访', click: () => addVisit(3)}
          ],
        }"
        class="tl poi bdc"
      >
        更多操作
      </div>
    </div>    
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>