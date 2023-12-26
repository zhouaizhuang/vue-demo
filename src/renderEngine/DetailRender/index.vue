<template>
  <div class="f rw">
    <template v-for="item in detailList">
      <div v-if="item.isShow" class="f" :style="item.style" :key="item.id">
        <!--插槽-->
        <div v-if="item.slot" class="mb20">
          <slot :name="item.slot ? item.slot : ''" :row="item"></slot>
        </div>
        <!--非插槽-->
        <div v-else class="f mb20">
          <div class="nowrap tr" :style="item.labelStyle">{{item.label}}：</div>
          <div class="f1 tl f">
            <div v-range="item.range" :style="item.valueStyle">{{item.value || item._value}}</div>
            <span v-if="item.unit" class="ml2">{{ item.unit}}</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>