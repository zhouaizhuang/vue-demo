<template>
  <div :class="['fixed l0 t0 bgf bdc ovya h100vh borderBox p0', isShow ? 'zx1000' : 'zx-1 clip0']" :style="{width: pageWidth + 'px', transform: isShow ? '' : 'translate(-10000px)'}">
    <!--第一页-->
    <div ref="hainan1" class="w100 ovh bdc" :style="{height: pageHeight + 'px'}">
      <div class="pl20 pr20 pt20 pb20">
        <div class="f ac xs fs12">
          <div class="f1">{{renderData.hospital}}</div>
          <div class="f1 f"><div class="mr2">体检号</div><div class="f1">{{renderData.examNo}}</div></div>
          <div class="f1 f"><div class="mr2">姓名</div><div class="f1">{{renderData.name}}</div></div>
        </div>
        <div class="f ac fs12" style="border-bottom: 1px solid #ccc;">
          <div class="f1 f"><div class="mr2">性别</div><div class="f1">{{renderData.genderText}}</div></div>
          <div class="f1 f"><div class="mr2">年龄</div><div class="f1">{{renderData.age}}</div></div>
          <div class="f1 f"><div class="mr2">地址</div><div class="f1">{{renderData.address}}</div></div>
        </div>
        <div class="pt5 f ac xc fs20 b g0">
          <div class="mr2">{{renderData.hospital}}</div>
          <div>{{renderData.reportName}}</div>
        </div>
      </div>
      <img :src="renderData.icon1" style="width:50px;heihjt:50px;" alt="" />
      <img :src="renderData.icon2" style="width:50px;heihjt:50px;" alt="" />
      <img :src="renderData.icon3" style="width:50px;heihjt:50px;" alt="" />
      <img :src="renderData.icon4" style="width:50px;heihjt:50px;" alt="" />
      <img :src="renderData.icon5" style="width:50px;heihjt:50px;" alt="" />
      <img :src="renderData.icon6" style="width:50px;heihjt:50px;" alt="" />
      <img :src="renderData.icon7" style="width:50px;heihjt:50px;" alt="" />
      <img :src="renderData.icon8" style="width:50px;heihjt:50px;" alt="" />
      <img :src="renderData.icon9" style="width:50px;heihjt:50px;" alt="" />
      <img :src="renderData.icon10" style="width:50px;heihjt:50px;" alt="" />
      <img :src="renderData.icon11" style="width:50px;heihjt:50px;" alt="" />
      <img :src="renderData.icon12" style="width:50px;heihjt:50px;" alt="" />
      <img :src="renderData.icon13" style="width:50px;heihjt:50px;" alt="" />
    </div>
    <!--第二页-->
    <div ref="hainan2" class="w100 ovh bdc" :style="{height: pageHeight + 'px'}">
      <div class="pl20 pr20">
        <div class="bdc rds10 pt10 pb10 pl20" style="border:2px solid #000;border-radius: 10px 0 10px 0;">123</div>
        <div class="f ac xb pt20 pb20">
          <div class="w0 h0" style="transform:translateY(-20px);border-top:30px solid transparent;border-right:30px solid transparent;border-left:30px solid transparent;border-bottom:30px solid #000;"></div>
          <svg t="1685107083093" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2991" width="48" height="48"><path d="M0 0h1024v1024H0z" fill="#FFFFFF" p-id="2992"></path><path d="M228 80c-44.112 0-80 35.888-80 80v704c0 44.112 35.888 80 80 80h626c44.112 0 80-35.888 80-80V160c0-44.112-35.888-80-80-80H228m0-80h626c88.366 0 160 71.634 160 160v704c0 88.366-71.634 160-160 160H228c-88.366 0-160-71.634-160-160V160c0-88.366 71.634-160 160-160z" fill="#707070" p-id="2993"></path><path d="M310 432h464a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H310a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM310 626h464a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H310a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM310 238h464a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H310a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM22 250h178a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H22a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM22 694h178a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H22a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12z" fill="#707070" p-id="2994"></path></svg>
          <svg t="1685107103865" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4219" width="48" height="48"><path d="M993.534 77.766H30.466C13.64 77.766 0 91.406 0 108.232v652.166c0 16.826 13.64 30.466 30.466 30.466h335.126v94.438h-111.64c-16.826 0-30.466 13.64-30.466 30.466s13.64 30.466 30.466 30.466h516.112c16.826 0 30.466-13.64 30.466-30.466s-13.64-30.466-30.466-30.466h-111.64v-94.438h335.11c16.826 0 30.466-13.64 30.466-30.466V108.232c0-16.826-13.64-30.466-30.466-30.466zM597.488 885.302h-170.966v-94.438h170.966v94.438z m365.58-155.37H60.932v-51.89h902.134v51.89z m0-112.824H60.932V138.698h902.134v478.41z" p-id="4220"></path></svg>
        </div>
      </div>
      <div class="pl20 pr20">
        <div class="bdc rds10 pt10 pb10 pl20" style="border:2px solid #000;border-radius: 10px 0 10px 0;">123</div>
        <div class="f ac xb pt20 pb20">
          <div class="w0 h0" style="transform:translateY(-20px);border-top:30px solid transparent;border-right:30px solid transparent;border-left:30px solid transparent;border-bottom:30px solid #000;"></div>
          <svg t="1685107083093" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2991" width="48" height="48"><path d="M0 0h1024v1024H0z" fill="#FFFFFF" p-id="2992"></path><path d="M228 80c-44.112 0-80 35.888-80 80v704c0 44.112 35.888 80 80 80h626c44.112 0 80-35.888 80-80V160c0-44.112-35.888-80-80-80H228m0-80h626c88.366 0 160 71.634 160 160v704c0 88.366-71.634 160-160 160H228c-88.366 0-160-71.634-160-160V160c0-88.366 71.634-160 160-160z" fill="#707070" p-id="2993"></path><path d="M310 432h464a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H310a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM310 626h464a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H310a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM310 238h464a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H310a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM22 250h178a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H22a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM22 694h178a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H22a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12z" fill="#707070" p-id="2994"></path></svg>
          <svg t="1685107103865" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4219" width="48" height="48"><path d="M993.534 77.766H30.466C13.64 77.766 0 91.406 0 108.232v652.166c0 16.826 13.64 30.466 30.466 30.466h335.126v94.438h-111.64c-16.826 0-30.466 13.64-30.466 30.466s13.64 30.466 30.466 30.466h516.112c16.826 0 30.466-13.64 30.466-30.466s-13.64-30.466-30.466-30.466h-111.64v-94.438h335.11c16.826 0 30.466-13.64 30.466-30.466V108.232c0-16.826-13.64-30.466-30.466-30.466zM597.488 885.302h-170.966v-94.438h170.966v94.438z m365.58-155.37H60.932v-51.89h902.134v51.89z m0-112.824H60.932V138.698h902.134v478.41z" p-id="4220"></path></svg>
        </div>
      </div>
      <div>
        <div class="capitalize mb20">hello, I am Tom.测试首字母大写</div>
        <div class="ti2 mb20">测试首航缩进2字符</div>
        <div class="b mb20 fs24">24px文字加粗</div>
        <div class="tl mb20">文字右对齐</div>
        <div class="tc mb20">文字居中</div>
        <div class="tr mb20">文字右对齐</div>
        <div class="tdu mb20">文字下划线</div>
        <div class="tdl mb20">文字删除线</div>
        <!-- <div class="mb20" style="box-shadow:2px 2px 2px 2px rgba(0,0,0,.2);">文字阴影</div> -->
        <!-- background-image -->
        <!-- transform -->
      </div>
    </div>
    <!--第三页-->
    <div ref="hainan3" class="w100 ovh bdc" :style="{height: pageHeight + 'px'}">
      第三页
      <img :src="renderData.icon4" style="width:50px;heihjt:50px;" alt="" />
      <img :src="renderData.icon5" style="width:50px;heihjt:50px;" alt="" />
      <img :src="renderData.icon6" style="width:150px;heihjt:150px;" alt="" />
      <img :src="renderData.icon7" style="width:50px;heihjt:50px;" alt="" />
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src="../../../../../common.css">
</style>