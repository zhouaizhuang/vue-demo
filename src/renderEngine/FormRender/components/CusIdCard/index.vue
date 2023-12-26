<template>
  <div>
    <div :class="['f nowrap mb2 borderBox', item.labelClass]" :style="item.labelStyle">
      <div class="need" style="width:120px;">{{item.label}}</div>
      <div class="ml5 need">证件号</div>
    </div>
    <div :class="['rel rds5 borderBox', item.errmsg ? 'error' : 'textAreaBd', item.valueClass]" :style="item.valueStyle">
      <div class="f">
        <div style="width:120px;" class="mr5">
          <Select v-model="item.value.idType" placeholder="证件类型" disabled>
            <Option value="1">居民身份证</Option>
          </Select>
        </div>
        <div class="f1">
          <Input :value="item.value.idCard" placeholder="请填写证件号" @on-change="idCardCheck" :disabled="item.disabled"></Input>
        </div>
      </div>
      <div class="abs l0 gred" v-if="item.errmsg" style="bottom:-20px;">{{item.errmsg}}</div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>