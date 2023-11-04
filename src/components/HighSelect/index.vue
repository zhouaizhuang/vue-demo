<template>
  <div class="rel tl cusHightSelect w100" v-clickoutside="clickoutside">
    <div @click="isSpread = !isSpread" class="f n ivu-select-selection hoverBorder trans3 pl5 pr7 bgf rds4 pr10 borderBox bddcdee2 w100" style="min-height:32px;color:#515a6e;min-width:220px;max-width:420px;">
      <div class="f ac rw pr10">
        <div v-if="!selectedItems.length" class="none" style="color:#c5c8ce;">{{placeholder}}</div>
        <template v-else-if="isMutiple">
          <div v-for="item in selectedItems" :key="item.id" class="none pl10 pr10 fs12 f ac rds2 mr5 pr20 rel mt2 mb2 g1aada7" style="background:rgba(26, 173, 167, 0.2);height:26px;">
            <div>{{item.name}}</div>
            <svg @click.stop="delItem(item)" t="1687010378065" class="abs r5 t50 ty-50 poi" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2592" width="10" height="10"><path d="M557.3 512l329.3-329.4a32 32 0 1 0-45.2-45.2L512 466.7 182.6 137.4a32 32 0 1 0-45.2 45.2L466.7 512 137.4 841.4a31.9 31.9 0 0 0 0 45.2 31.9 31.9 0 0 0 45.2 0L512 557.3l329.4 329.3a31.9 31.9 0 0 0 45.2 0 31.9 31.9 0 0 0 0-45.2z" fill="#1aada7" p-id="2593"></path></svg>
          </div>
        </template>
        <template v-else>
          <div>{{selectedItems[0] ? selectedItems[0].name : ''}}</div>
        </template>
      </div>
    </div>
    <svg @click="isSpread = !isSpread" :class="['abs trans3 zx10 poi t50', isSpread ? 'tr180ty-50' : 'ty-50']" style="right:10px" t="1686885104353" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2375" width="12" height="12"><path d="M512 704c8.288 0 15.776-3.232 21.456-8.4l0.064 0.08 352-320-0.08-0.08c6.448-5.856 10.56-14.208 10.56-23.6a32 32 0 0 0-32-32c-8.288 0-15.76 3.232-21.456 8.4l-0.08-0.08L512 628.752 181.536 328.32l-0.08 0.08A31.776 31.776 0 0 0 160 320a32 32 0 0 0-32 32c0 9.376 4.112 17.744 10.544 23.6l-0.08 0.08 352 320 0.08-0.08c5.68 5.168 13.168 8.4 21.456 8.4z" p-id="2376" fill="#666666"></path></svg>
    <div
      :class="['abs l0 r0 bgf trans3 ovya zx10 none', isSpread ? ' ' : ' op0']"
      :style="{bottom: '-302px', borderRadius: '0 0 5px 5px', boxShadow: '0 0 2px 2px rgb(0,0,0,.1)', transformOrigin: 'center top', height: isSpread ? '300px' : '0' }"
    >
      <div class="abs trbl0 pt5" style="">
        <div v-for="item in options" :key="item.id" class="" >
          <div class="n pl10 fs13 g8">{{item.name}}</div>
          <div @click="clickItem(k)" v-for="k in item.children" :key="k.id" class="poi f ac n pl30 pr10 hoverCurItemBg" :style="{background: k.isChecked ? '' : '', color: k.isChecked ? '#1aada7' : ''}">
            <div :class="['f1 fs14 mb3 mt3', k.isChecked ? '' : '']">{{k.name}}</div>
            <svg v-if="k.isChecked" t="1686885480322" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3471" width="16" height="16"><path d="M377.8 832.3c-12.5 0-25-4.8-34.5-14.3L76.5 551.2c-19.1-19.1-19.1-50 0-69.1 19.1-19.1 50-19.1 69.1 0L412.4 749c19.1 19.1 19.1 50 0 69.1-9.6 9.5-22.1 14.2-34.6 14.2z" fill="#1aada7" p-id="3472"></path><path d="M377.8 832.3c-12.5 0-25-4.8-34.5-14.3-19.1-19.1-19.1-50 0-69.1L877 215.3c19.1-19.1 50-19.1 69.1 0s19.1 50 0 69.1L412.4 818c-9.6 9.6-22.1 14.3-34.6 14.3z" fill="#1aada7" p-id="3473"></path></svg>
          </div>
          <div style="border-bottom: 1px solid #ddd;" class="ml30 mt10 mb10 mr30"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src="./index.css"></style>