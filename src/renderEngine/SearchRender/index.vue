<template>
  <div class="f ac mb20 tr rw">
    <div v-for="item in searchList" :key="item.id">
      <div v-if="item.isShow">
        <DateRangeCom v-if="item.type == 'dateRange'" :item="item" :searchList="searchList" @setSearchList="e=>$emit('setSearchList', e)"></DateRangeCom>
        <SelectCom v-if="item.type == 'select'" :item="item" :searchList="searchList" @setSearchList="e=>$emit('setSearchList', e)"></SelectCom>
        <InputCom v-if="item.type == 'input'" :item="item" :searchList="searchList" @setSearchList="e=>$emit('setSearchList', e)"></InputCom>
        <HighSelectCom v-if="item.type == 'highSelect'" :item="item" :searchList="searchList" @setSearchList="e=>$emit('setSearchList', e)"></HighSelectCom>
        <SecondSelet v-if="item.type == 'secondSelet'" :item="item" :searchList="searchList" @setSearchList="e=>$emit('setSearchList', e)"></SecondSelet>
      </div>
    </div>
    <div class="f ac mb10">
      <Button icon="ios-search" class="mr10 hoverBtn" style="background:#1AADA7;color:#fff;" @click="search">查询</Button>
      <Button v-if="isShowReste" icon="md-refresh" style="background:#fff;color:#1AADA7;border-color: #1AADA7;" @click="reset">重置</Button>
      <div v-if="isShowSpread" class="poi f ac g1aada7 ml10 none" @click="toogleSpread">
        <div>{{isSpread ? '收起' : '展开' }}</div>
        <div :class="['trans3 f ac', isSpread ? 'tr180' : '']" style="transform-origin:center center;"><Icon type="md-arrow-dropdown" size=18 /></div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css'></style>