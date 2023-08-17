<!--https://juejin.cn/post/6909287804510371847-->
<template>
  <div class="pt30 bgf5 h100vh auto" style="width:300px;">
    <transition-group 
      name="drag"
      tag="ul"
      class="rel tran5">
      <li
        @dragstart="e => dragstart(e, index)"
        @dragenter="e => dragenter(e, index)"
        @dragover="e => e.preventDefault()"
        draggable
        v-for="(item, index) in list"
        :key="item.id"
        class='pt10 pb10 bg1890ff gf fs22 rds5 f ac xc mb20'
      >
        {{item.id}}
      </li>
    </transition-group>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
.drag-move {
  transition: transform .3s;
}
</style>