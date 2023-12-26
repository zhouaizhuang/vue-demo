<template>
  <div class="f ac">
    <div style="width:140px;" class="ovh mr5">
      <Select :value="provinceCode" @on-change="changeProvinceCode" placeholder="请选择省">
        <Option v-for="(item,index) in provinceList" :key="index" :value="item.id">{{item.name}}</Option>
      </Select>
    </div>
    <div style="width:140px;" class="ovh mr5">
      <Select :value="cityCode" @on-change="changeCityCode" placeholder="请选择市">
        <Option v-for="(item,index) in cityList" :key="index" :value="item.id">{{item.name}}</Option>
      </Select>
    </div>
    <div style="width:140px;" class="ovh mr5">
      <Select :value="areaCode" @on-change="changeAreaCode" placeholder="请选择区">
        <Option v-for="(item,index) in areaList" :key="index" :value="item.id">{{item.name}}</Option>
      </Select>
    </div>
     <!-- && ((areaCode && streetList.length) || !areaCode) -->
    <div v-if="isShowStreet" style="width:140px;" class="ovh mr5">
      <Select :value="streetCode" @on-change="changeStreetCode" placeholder="请选择街道">
        <Option v-for="(item,index) in streetList" :key="index" :value="item.id">{{item.name}}</Option>
      </Select>
    </div>
    <div class="f1 f ac xc">
      <Input class="mr5" :value="address" @on-change="changeAddress" maxlength="100" style="min-width:180px;" placeholder="请输入详细地址"></Input>
      <div @click="clearAddress" :class="['default', 'rds4 f ac xc fs14 lt2 poi trans3 none nowrap']" style="color:#1aada7;height:32px;width:60px;border:1px solid #1aada7;">清空</div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
.default:hover{color: #57a3f3;background-color: #fff;border-color: #57a3f3 !important;}
</style>