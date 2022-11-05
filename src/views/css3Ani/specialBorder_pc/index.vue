<!--参考链接：https://juejin.cn/post/6918921604160290830-->
<!--障眼法三大奥义：1、旋转让其动起来  2、裁剪出需要展示的部分  3、遮住不需要展示的部分-->
<!--动画三大奥义：1、动画有交错时间  2、ease in模拟现实曲线  3、分析基本元素-->
<template>
  <div class="auto bgf5 mh100vh">
    <div class="f rw">
    <!--1、案例：登录框-->
    <div class="auto mb30 mt30 rel ovh rds10" style="width:350px;height:350px;background:#232421;">
      <div class="abs zx1 w100 h100 aniRotateBorder" style="left:-50%;top:-50%;background:linear-gradient(0deg, transparent, #45f3ff, #45f3ff);"></div>
      <div class="abs zx1 w100 h100 aniRotateBorder" style="animation-delay:-3s;left:-50%;top:-50%;background:linear-gradient(0deg, transparent, #45f3ff, #45f3ff);"></div>
      <div @click="() => {nameState=!!name;passwordState=!!password}" class="abs rds10 zx10 gf pl30 pr30 pt20" style="top:2px;right:2px;left:2px;bottom:2px;background:#28292d;">
        <div class="fs30 tc mb10" style="color:#45f3ff;">登录</div>
        <div @click.stop="nameState=1" class="mb30 rel" style="height:65px;">
          <div class="fs16 abs zx1 trans3" :style="{bottom:'5px', transformOrigin: 'left top', transform: nameState==1 ? 'translateY(-40px) scale(.8)' : 'translateY(0px)', color: nameState==1 ? '#45f3ff' : '#ccc'}">用户名</div>
          <div class="abs b0 l0 r0 zx10 rds5 trans3" :style="{height:nameState==1 ? '40px' : '1px',background:'#45f3ff'}">
            <input type="text" v-model="name" class="abs l50 tx-50 w98 rds5 zx1" style="bottom:1px;height:40px;border:0;outline:0;background:transparent">
          </div>
        </div>   
        <div @click.stop="passwordState=1" class="mb30 rel" style="height:65px;">
          <div class="fs16 abs zx1 trans3" :style="{bottom:'5px', transformOrigin: 'left top', transform: passwordState == 1 ? 'translateY(-40px) scale(.8)' : 'translateY(0px)', color: passwordState == 1 ? '#45f3ff' : '#ccc'}">密码</div>
          <div class="abs b0 l0 r0 zx10 rds5 trans3" :style="{height:passwordState == 1 ? '40px' : '1px',background:'#45f3ff'}">
            <input type="text" v-model="password" class="abs l50 tx-50 w98 rds5 zx1" style="bottom:1px;height:40px;border:0;outline:0;background:transparent">
          </div>
        </div>   
        <div class="g0 f ac xc pt10 pb10 rds2 lt5" style="background:#45f3ff;width:90px;">登录</div>
      </div>
      </div>
      <!--2、流动边框-->
      <div class="rel auto ovh rds10 bgContent mt30" style="width:240px;height:100px;">
        <div class="abs rds10 f ac xc fs30 b g1890ff zx10 bgf" style="top:3px;right:3px;bottom:3px;left:3px;">流动边框</div>
      </div>
      <!--3、角向渐变-->
      <div class="rel auto ovh rds10 mt30 conic" style="width:240px;height:100px;">
        <div class="abs rds10 f ac xc fs30 b g1890ff zx10 bgf" style="top:3px;right:3px;bottom:3px;left:3px;">角向渐变</div>
      </div>
      <!--4、clip裁剪制作边框-->
      <div class="rel auto mt30 clipContent" style="width:240px;height:100px;">
        <div class="abs rds10 f ac xc fs30 b g1890ff zx10 bgf" style="top:2px;right:2px;bottom:2px;left:2px;">clip裁剪制作</div>
      </div>
      <!--5、渐变边框-->
      <div class="border-image-clip-path auto mt30 bgf f ac xc fs30 b g1890ff mb30">
        渐变边框
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css" scoped></style>