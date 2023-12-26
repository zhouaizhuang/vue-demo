<template>
  <div class="">
    <div class="fs14 mb10">标签</div>
    <div class="f">
      <div v-for="item in item.value" :key="item.id">
        <div v-if="item.isChecked">
          <div class="pt4 pb4 pl12 pr12 rds2 mr10 f ac ovh" style="background: rgba(255,164,57,0.15);color:#FFA439;">
            <div class="mr5">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div @click="isShowTagModal = true" class="f ac xc pl12 pr12 rds2 mr10 poi" style="height:29px;background: rgba(255,164,57,0.15);color:rgb(255, 100, 100);">
        <svg t="1682580455567" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2897" width="14" height="14">
          <path d="M880.15737 447.719128H575.934072V143.49583c0-35.915501-29.109546-65.025048-65.025048-65.025048s-65.025048 29.109546-65.025047 65.025048v304.223298H141.660679a65.025048 65.025048 0 0 0 0 130.050095h304.223298v304.223298c0 35.915501 29.109546 65.025048 65.025047 65.025048s65.025048-29.109546 65.025048-65.025048V577.769223h304.216073a65.025048 65.025048 0 0 0 65.025047-65.025047 65.010598 65.010598 0 0 0-65.017822-65.025048z" fill="#FFA439" p-id="2898"></path>
        </svg>
      </div>
    </div>
    <TagManage
      :isShow="isShowTagModal"
      :chronicDieaseArr="item.value"
      @setIsShow="e=>isShowTagModal=e" 
      @setChronicDieaseArr="setChronicDieaseArr"
      @confirm="e => confirmTag(e)"
    ></TagManage>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>