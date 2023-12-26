<template>
  <div>
    <!--rbac菜单权限管理-->
    <div v-if="treeObj.rbacTree && treeObj.rbacTree.isShow">
      <MenuTree :treeObj="treeObj" @setTreeObj="e => $emit('setTreeObj', e)" @changeTree="e => $emit('changeTree', e)"></MenuTree>
    </div>
    <!--区划管理-->
    <div v-if="treeObj.areaTree && treeObj.areaTree.isShow">
      <AreaTree :treeObj="treeObj" @setTreeObj="e => $emit('setTreeObj', e)" @changeTree="e => $emit('changeTree', e)"></AreaTree>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>