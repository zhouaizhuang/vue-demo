<template>
  <div class="">
    <div :class="['nowrap mb2 borderBox', item.require ? 'need' : '', item.labelClass]" :style="item.labelStyle">{{item.label || '患者姓名'}}</div>
    <div :class="['rel rds5 borderBox', item.errmsg ? 'error' : 'textAreaBd', item.valueClass]" :style="item.valueStyle">
      <SearchPatient :keywords="item.value" @setKeywords="setKeywords" @confirm="confirmSelect" :isDisabled="isDisabled" :isShowClose="modalType != 2"></SearchPatient>
      <div class="abs l0 gred" v-if="item.errmsg" style="bottom:-20px;">{{item.errmsg}}</div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>