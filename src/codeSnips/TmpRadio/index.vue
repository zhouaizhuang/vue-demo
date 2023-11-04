<template>
  <div class="abs trbl0 bgf">
    <!--单选开始位置-->
    <div class="f">
      <div @click="selectItem(item)" v-for="item in radioList" :key="item.id" class="f ac mr20 poi">
        <div :class="['rds50 f ac xc mr5 trans3']" :style="{width:'16px',height:'16px',border: item.isChecked ? '1px solid #1aada7' : '1px solid #dcdee2'}">
          <div v-show="item.isChecked" class="rds50" style="transform:translateX(0.2px);width:10px;height:10px;background:#1aada7;"></div>
        </div>
        {{item.name}}
      </div>
    </div>
    <!--单选代码片段结束位置-->
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>