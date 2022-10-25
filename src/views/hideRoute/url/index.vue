<template>
  <div v-if="!isShowPage" @click="clickMe" class="fixed zx10 trbl0"></div>
  <div v-else class="pl80r pr80r pt50r mh100vh">
    <div class="fs26 b mb30 tc">收藏网站</div>
    <div class="f">
      <div class="b" style="width:150px;">工具</div>
      <div class="f1 f xs ac rw">
        <a class="db w20 pb30 min190px g42b983 poi"><router-link class="g42b983" to="/desc_pc">在线加密解密</router-link></a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://tool.lu/">在线工具网址</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://www.jiumodiary.com/">电子书查找</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://www.gaitubao.com/tupian-wenzi/">在线图片转文字</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://online.easyscreenocr.com/ZH?utm_source=hao.logosc.cn&utm_medium=referral">在线OCR识别</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://www.youyedoc.com/">PPT模板</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://recordscreen.io">在线录屏</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://zh.wikihow.com">生活技能</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://newhouse.fang.com/jsq/pg.htm">房产计算小工具</a>
      </div> 
    </div>
    <div class="f">
      <div class="b" style="width:150px;">前端类工具</div>
      <div class="f1 f xs ac rw">
        <a class="db w20 pb30 min190px g42b983 poi" href="https://tinypng.com/">在线图片压缩</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://regexr-cn.com/">在线正则测试工具</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://codejiaonang.com/">正则练习</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="http://www.iconfont.cn/">阿里矢量图标</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://tool.lu/color/index.html">在线颜色进制转换</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://caniuse.com/">代码兼容性查询</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://map.yanue.net/">在线经纬度和地址互转</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="http://www.hellofont.cn/">在线字体识别</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://www.toptal.com/developers/cssminifier">在线CSS压缩</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://web.dev/measure/">站点性能测试</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://codepen.io/">代码在线演示</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://www.shapedivider.app/">在线定制svg</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://tool.lu/">在线工具网址</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://feathericons.com/">svg图标</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://simpleicons.org/">常见品牌的svg</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="http://www.bitbug.net/">在线图片转icon</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://www.photopea.com/">在线PS</a>
      </div>
    </div>
    <div class="f">
      <div class="b" style="width:150px;">娱乐</div>
      <div class="f1 f xs ac rw">
        <a class="db w20 pb30 min190px g42b983 poi" href="http://mahua.jser.me/">动漫</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://www.videofk.com/">视频下载</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://www.yikm.net/">在线小霸王游戏机</a>
      </div>
    </div>
    <div class="f">
      <div class="b" style="width:150px;">教育</div>
      <div class="f1 f xs ac rw">
        <a class="db w20 pb30 min190px g42b983 poi" href="https://le.ouchn.cn/home">终身教育平台</a>
        <a class="db w20 pb30 min190px g42b983 poi" href="https://www.smartedu.cn/">国家中小学智慧教育平台</a>
      </div>
    </div>
    <div class="f">
      <div class="b" style="width:150px;">就业</div>
      <div class="f1 f xs ac rw">
        <a class="db w20 pb30 min190px g42b983 poi" href="https://www.gsxt.gov.cn/">国家企业信用信息公示系统</a>
      </div>
    </div>
    <div class="f">
      <div class="b" style="width:150px;">法律</div>
      <div class="f1 f xs ac rw">
        <a class="db w20 pb30 min190px g42b983 poi" href="http://www.12348.gov.cn/">中国法律服务网</a>
      </div>
    </div>
    <div class="f">
      <div class="b" style="width:150px;">医疗</div>
      <div class="f1 f xs ac rw">
        <a class="db w20 pb30 min190px g42b983 poi" href=" https://www.nmpa.gov.cn/">国家药监局</a>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
.min190px{min-width:190px;}
</style>