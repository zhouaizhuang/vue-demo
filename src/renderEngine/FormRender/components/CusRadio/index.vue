<template>
  <div>
    <div :class="['nowrap mb2 borderBox', item.require ? 'need' : '', item.labelClass]" :style="item.labelStyle">{{item.label}}</div>
    <div :class="['f1 f ac rel rds5 borderBox', item.errmsg ? 'error' : 'textAreaBd', item.valueClass]">
      <div @click="item.disabled ? '' : selectItem(optItem)" v-for="optItem in item.options" :key="optItem.id" :class="['f ac mr30 poi', item.disabled ? 'disabled' : '']">
        <div
          :class="['rds50 f ac xc mr5 trans3']"
          :style="{
            width:'16px',
            height:'16px',
            border: item.errmsg ? '1px solid #ff0000' : optItem.isChecked ? '1px solid #1aada7' : '1px solid #dcdee2',
          }"
        >
          <div v-show="optItem.isChecked" class="rds50" :style="{ transform:'translateX(0.2px)',width:'10px',height:'10px',background: '#1aada7'}"></div>
        </div>
        <div class="nowrap">{{optItem.name}}</div>
      </div>
      <div class="abs l0 gred" style="bottom:-20px;">{{item.errmsg}}</div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>