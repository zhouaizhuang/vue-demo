<template>
  <!--1、全局关闭右击的弹框-->
  <div class="bgf5 mh100vh" @click="rightObj.isShow=false">
    <div class="rel"> <!--2、这里必须要有定位，否则右击后的菜单的位置不好定位-->
      <!---3、写好右击的菜单-->
      <RightMenu :rightObj="rightObj">
        <template>
          <div @click.stop="startTask" class="f ac xc poi hoverBg-e0eeff" style="height:38px;border-bottom: 1px dashed #f0f0f0;">开启任务</div>
          <div @click.stop="stopTask" class="f ac xc poi hoverBg-e0eeff" style="height:38px;border-bottom: 1px dashed #f0f0f0;">中止任务</div>
          <div @click.stop="endTask" class="f ac xc poi hoverBg-e0eeff" style="height:38px;border-bottom: 1px dashed #f0f0f0;">继续任务</div>
        </template>
      </RightMenu>
      <!--数据列表-->
      <!--4、监听右击事件，右击拿到当前位置值和当前条目数据，并赋值。让其显示-->
      <div
        v-for="item in list"
        :key="item.value"
        @contextmenu.prevent="e => rightObj = {x: e.layerX, y: e.layerY, item, isShow:true}"
        class="fs16 b f ac xc gf"
        :style="{height:'100px', background: item.bgColor}"
      >
        {{item.value}}
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style>
.hoverBg-e0eeff:hover{
  background: #E0EEFF;
}
</style>