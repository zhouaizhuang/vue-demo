<template>
  <div>
    <slot></slot>  <!-- 相当于<slot name="default"></slot>-->
    <slot name="loadMode" :loadMode="loadMode">
      <div v-if="isShowLoadMore" v-reachBottom="getMoreData" id="" class="loadMore f ac xc tc pb25">
        <svg class="rotateSvg">
          <circle cx="20" cy="20" r="10" fill="none" class="circleDash"></circle>
        </svg>
        <div class="fs14 g3">上拉加载更多...</div>
      </div>
      <div v-else-if="!isShowLoadMore && list.length > pageSize" class="fs14 g6 tc pt10 pb25">沒有更多了</div>
    </slot> 
  </div>
</template>
<script src='./index.js'></script>
<style src="./index.css" scoped>
</style>