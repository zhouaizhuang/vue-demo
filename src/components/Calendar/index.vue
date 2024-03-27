<template>
  <div class="mh100vh pl10 pr10 pt10">
    <div class="bgf">
      <div class="f ac xc pl10 pr10 pt10 pb10" style="border-bottom:1px solid #ccc;">
        <div @click="prevYear" class="mr25">{{'<<'}}</div>
        <div @click="prevMonth">{{'<'}}</div>
        <div class="f1 f ac xc">{{year}}年{{ month}}月</div>
        <div @click="nextMonth">{{'>'}}</div>
        <div @click="nextYear" class="ml25">{{'>>'}}</div>
      </div>
      <div class="f ac fs16 mb5">
        <div class="w14 f ac xc">日</div>
        <div class="w14 f ac xc">一</div>
        <div class="w14 f ac xc">二</div>
        <div class="w14 f ac xc">三</div>
        <div class="w14 f ac xc">四</div>
        <div class="w14 f ac xc">五</div>
        <div class="w14 f ac xc">六</div>
      </div>
      <div :class="['f ac rw fs14 none']">
        <div v-for="item in dateList" :key="item.date" @click="selectCurDate(item)" :class="['w14 f ac xc poi mb5', item.isDisabled ? 'disabled' : '']">
          <div :class="['rds50 f ac xc', item.isChecked ? 'g42b983' : '']" :style="{width:'25px',height:'25px', background: item.isChecked ? 'rgba(19,189,135,.3)' : ''}">
            {{ item.day}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>