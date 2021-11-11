
<!--参考链接地址： https://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/-->
<!--【公众号SVG路径跟随动画案例之码语奇遇记-哔哩哔哩】https://b23.tv/AUXhT4-->
<template>
  <div class="auto mt30" style="width:350px;">
    <div class="mb30">参考链接：<a href="https://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/">张鑫旭的博客</a></div>
    <div class="mb30">参考链接：<a href="https://b23.tv/AUXhT4">【公众号SVG路径跟随动画案例之码语奇遇记-哔哩哔哩】</a></div>
    <svg width="350" height="300" xmlns="http://www.w3.org/2000/svg">
      <text font-family="microsoft yahei" font-size="40" x="0" y="0" fill="#cd0000">马
        <animateMotion
          id="xsq"   
          path="M10,80 q100,120 120,20 q140,-50 160,0"
          begin="0s"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate attributeName="opacity" from="1" to="0" begin="xsq.end-1" dur="3s" repeatCount="indefinite" />
      </text>
      <path d="M10,80 q100,120 120,20 q140,-50 160,0" stroke="#1890ff" stroke-width="2" fill="none" />
    </svg>
  </div>
  
</template>
<script>
export default {
  name: 'breath',
  data(){
    return {
    }
  },
  methods: {
   
  },
  created(){
  
  },
}
</script>
<style>

</style>