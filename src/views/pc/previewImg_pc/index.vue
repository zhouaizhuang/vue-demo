<template>
  <div>
    <div class="f">
      <img @click="prevItem(item)" v-for="(item, index) in imgArr" :key="index" :src="item" alt="" class="mr30" style="width:100px;height:100px;">
    </div>
    <!--预览组件--->
    <PreviewImg
      :isShow="isShow"
      @setIsShow="e => isShow = e"
      :curImg="curImg"
      @setCurImg="e => curImg = e"
      :imgArr="imgArr"
    >
    </PreviewImg>
    <!-- <Image v-for="(url, index) in urlList" :key="index" :src="url" fit="contain" width="120px" height="80px" preview :preview-list="urlList" :initial-index="index" /> -->
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>