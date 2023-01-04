<!--https://juejin.cn/post/6909287804510371847-->
<template>
  <div>
    <transition-group 
      name="drag"
      tag="ul"
      class="list auto pt30 bgf5 rel tran5" style="width:300px;height:100vh">
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
  transition: transform 1s;
}
</style>