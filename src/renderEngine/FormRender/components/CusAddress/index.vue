<template>
  <div>
    <div :class="['nowrap mb2 borderBox', item.require ? 'need' : '', item.labelClass]" :style="item.labelStyle">{{item.label}}</div>
    <div :class="['f1 rel rds5 borderBox', item.errmsg ? 'error' : 'textAreaBd', item.valueClass]">
      <SelectAddress
        :isShowStreet="item.isShowStreet"
        :provinceCode="item.value.provinceCode"
        :cityCode="item.value.cityCode"
        :areaCode="item.value.areaCode"
        :streetCode="item.value.streetCode"

        :address="item.value.address"
        @setProvinceCode="setPovinceCode"
        @setCityCode="setCityCode"
        @setAreaCode="setAreaCode"
        @setStreetCode="setStreetCode"
        @setAddress="setAddress"
      >
      </SelectAddress>
      <div class="abs l0 gred" style="bottom:-20px;">{{item.errmsg}}</div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>