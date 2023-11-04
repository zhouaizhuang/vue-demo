<template>
  <div class="trbl0  abs bgf pt30 pl30">
    <div class="f ac">
      <div @click="checkedItem(item)" v-for="item in checkList" :key="item.id" class="f ac mr30 poi">
        <div class="rds2 rel trans3 f ac xc mr5" :style="{width:'16px',height:'16px',background: item.isChecked ? '#1aada7' : '#fff', border: item.isChecked ? 'none' : '1px solid #dcdee2'}">
          <div v-show="item.isChecked" style="width:10px;height:5px;border-left:2px solid #fff;border-bottom:2px solid #fff;transform:translate(0, -1px) rotate(-45deg);"></div>
        </div>
        {{item.name}}
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>