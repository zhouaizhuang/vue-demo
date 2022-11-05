<!--参考链接：https://juejin.cn/post/6918921604160290830-->
<!--障眼法三大奥义：1、旋转让其动起来  2、裁剪出需要展示的部分  3、遮住不需要展示的部分-->
<!--动画三大奥义：1、动画有交错时间  2、ease in模拟现实曲线  3、分析基本元素-->
<template>
  <div style="" class="auto bgf5 h100vh ovh">
    <div class="f rw">
      <!--1、流动边框-->
      <div class="rel auto ovh rds10 bgContent mt30" style="width:240px;height:100px;">
        <div class="abs rds10 f ac xc fs30 b g1890ff zx10 bgf" style="top:3px;right:3px;bottom:3px;left:3px;">流动边框</div>
      </div>
      <!--2、角向渐变-->
      <div class="rel auto ovh rds10 mt30 conic" style="width:240px;height:100px;">
        <div class="abs rds10 f ac xc fs30 b g1890ff zx10 bgf" style="top:3px;right:3px;bottom:3px;left:3px;">角向渐变</div>
      </div>
      <!--3、clip裁剪制作边框-->
      <div class="rel auto  mt30 clipContent" style="width:240px;height:100px;">
        <div class="abs rds10 f ac xc fs30 b g1890ff zx10 bgf" style="top:2px;right:2px;bottom:2px;left:2px;">clip裁剪制作</div>
      </div>
      <!--4、渐变边框-->
      <div class="border-image-clip-path auto mt30 bgf f ac xc fs30 b g1890ff">
        渐变边框
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css" scoped></style>