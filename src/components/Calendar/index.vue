<template>
  <div>
    <div class="bgf rds5 ovh">
      <div class="f ac xc mb10 none" style="border-bottom:1px solid #ccc;">
        <!--上一年-->
        <div @click="prevYear" class="pl18 pr20 pt10 pb10 poi"><div class="rel innerLeftArrow" style="width:8px;height:8px;border-top:1px solid #666;border-left:1px solid #666;transform:rotate(-45deg)"></div></div>
        <!--上一月-->
        <div @click="prevMonth" class="ml10 pl20 pr20 pt10 pb10 poi"><div style="width:7px;height:7px;border-top:1px solid #666;border-left:1px solid #666;transform:rotate(-45deg)"></div></div>
        <!--当前日期-->
        <div class="f1 f ac xc fs16 b pt10 pb10">{{year}}年{{ month}}月</div>
        <!--下一月-->
        <div @click="nextMonth" class="mr10 pl20 pr20 pt10 pb10 poi"><div class="rel" style="width:7px;height:7px;border-top:1px solid #666;border-right:1px solid #666;transform:rotate(45deg)"></div></div>
        <!--下一年-->
        <div @click="nextYear" class="pl20 pr18 pt10 pb10 poi"><div class="rel innerRightArrow" style="width:8px;height:8px;border-top:1px solid #666;border-right:1px solid #666;transform:rotate(45deg)"></div></div>
      </div>
      <div class="f ac fs14 mb5 none">
        <div class="w14 f ac xc">日</div>
        <div class="w14 f ac xc">一</div>
        <div class="w14 f ac xc">二</div>
        <div class="w14 f ac xc">三</div>
        <div class="w14 f ac xc">四</div>
        <div class="w14 f ac xc">五</div>
        <div class="w14 f ac xc">六</div>
      </div>
      <div :class="['rel', slideType == '' ? '' : 'trans3']" @touchstart.capture="e => touchStart(e)" @touchmove.capture="e => touchMove(e)" @touchend.capture="e => touchEnd(e)"  :style="{transform: `translateX(${slideType == 'right' ? '100%' : slideType == 'left' ? '-100%' : slideType == 'move' ? translateX + 'px' : '0'})`}">
        <div class="abs w100 f ac rw fs14 trbl0" style="transform:translateX(-100%);"><!--上一个月日期数据。通过定位+平移-->
          <div v-for="item in dateListPrev" :key="item.id" @click="selectCurDate(item)" :class="['w14 f ac xc poi mb5', item.disabled ? 'op5' : '']">
            <div :class="['rds50 f ac xc none ovh', item.isChecked ? 'g42b983' : '']" :style="{width:'30px',height:'30px', background: item.isChecked ? 'rgba(19,189,135,.3)' : ''}">
              {{ item.day }}
            </div>
          </div>
        </div>
        <div class="f ac rw fs14"><!--当前年月数据，中间常规数据-->
          <div v-for="item in dateList" :key="item.id" @click="selectCurDate(item)" :class="['w14 f ac xc poi mb5', item.disabled ? 'op5' : '']">
            <div :class="['rds50 f ac xc none ovh', item.isChecked ? 'g42b983' : '']" :style="{width:'30px',height:'30px', background: item.isChecked ? 'rgba(19,189,135,.3)' : ''}">
              {{ item.day }}
            </div>
          </div>
        </div>
        <div class="abs w100 f ac rw fs14 trbl0" style="transform:translateX(100%);"><!--下一个年月数据，通过定位+平移-->
          <div v-for="item in dateListNext" :key="item.id" @click="selectCurDate(item)" :class="['w14 f ac xc poi mb5', item.disabled ? 'op5' : '']">
            <div :class="['rds50 f ac xc none ovh', item.isChecked ? 'g42b983' : '']" :style="{width:'30px',height:'30px', background: item.isChecked ? 'rgba(19,189,135,.3)' : ''}">
              {{ item.day }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>