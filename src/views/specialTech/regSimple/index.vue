<template>
  <div class="abs trbl0 mh100vh">
    <div class="pl30 mb30 f pt30">
      <div class="fs16 b pt10 pb10 mr30">匹配字符：python、Python</div>
      <div class="rds5 gf pt10 pb10 pl50 pr50" style="background:#222;">
        /[pP]ython/
      </div>
       <div class="pl30 f1 f ac gred fs14">
        <div class="mr30">字符组包含在中括号中</div>
      </div>  
    </div>
    <div class="pl30 mb30 f">
      <div class="fs16 b pt10 pb10 mr30">匹配多个字符：Ruby、Rube、ruby、rube</div>
      <div class="rds5  pt10 pb10 pl30 pr30 gf" style="background:#333;">
        /[rR]ub[ye]/
      </div>
    </div>
    <div class="pl30 mb30 f">
      <div class="fs16 b pt10 pb10 mr30">匹配区间：abcdefg、012345678、987654321、ABCDEFG</div>
      <div class="rds5  pt10 pb10 pl30 pr30 gf" style="background:#333;">
        /[a-zA-Z0-9]/
      </div>
    </div>
    <div class="pl30 mb30 f">
      <div class="fs16 b pt10 pb10 mr30">匹配特殊字符：[]、-----、--、()</div>
      <div class="rds5  pt10 pb10 pl30 pr30 gf" style="background:#333;">
        /[\[\]\-\(\)]+/
      </div>
    </div>
    <div class="pl30 mb30 f">
      <div class="fs16 b pt10 pb10 mr30">匹配字母：a、b、y、z、B、A、F</div>
      <div class="rds5  pt10 pb10 pl30 pr30 gf" style="background:#333;">
        /[a-zA-F]/
      </div>
    </div>
    <div class="pl30 f">
      <div class="fs16 b pt10 pb10 mr30">找规律并匹配：abc01、ddd02、afcf01、acac11、321、acef33、acef33</div>
      <div class="rds5  pt10 pb10 pl30 pr30 gf" style="background:#333;">
        /[a-f]*[0-3]+/
      </div>
      <div class="pl30 f1 f ac gred fs14">
        <div class="mr30">*代表{0,}0到多次</div>
        <div class="mr30">?代表{0,1}0到1</div>
        <div class="mr30">+代表{1,}1到多次</div>
      </div>  
    </div>
    <div class="pl30 mb30 f">
      <div class="fs16 b pt10 pb10 mr30">匹配字母：a、b、y、z、B、A、F</div>
      <div class="rds5  pt10 pb10 pl30 pr30 gf" style="background:#333;">
        /[a-zA-F]/
      </div>
    </div>
    <div class="pl30 f mb30">
      <div class="fs16 b pt10 pb10 mr30">取反：爱吗、爱哦、爱我自己、爱了、我爱我</div>
      <div class="rds5  pt10 pb10 pl30 pr30 gf" style="background:#333;">
        /[我]?爱[^你]*/
      </div>
    </div>
    <div class="pl30 f mb30">
      <div class="fs16 b pt10 pb10 mr30">匹配空白：code snip</div>
      <div class="rds5  pt10 pb10 pl30 pr30 gf" style="background:#333;">
        /code[ ]snip/   或者使用  /code\ssnip/
      </div>
    </div>
    <div class="pl30 f mb30">
      <div class="fs16 b pt10 pb10 mr30">单词边界：code、code jiaonang、code.jiaonang、www.code、code-jiaonang</div>
      <div class="rds5  pt10 pb10 pl30 pr30 gf" style="background:#333;">
        /\bcode\b/
      </div>
      <div class="pl30 f1 f ac gred fs14">
        <div class="mr30">code旁边如果有其他字母的话，就无法被匹配上</div>
      </div>
    </div>
    <div class="pl30 f mb30">
      <div class="fs16 b pt10 pb10 mr30">开始和结束。匹配以OS结尾的字符串：windows OS、windows OS、LinuxOS、AppleOS</div>
      <div class="rds5  pt10 pb10 pl30 pr30 gf" style="background:#333;">
        /.+OS$/
      </div>
      <div class="pl30 f1 f ac gred fs14">
        <div class="mr30">.代表匹配任意字符（但是无法匹配\n）</div>
      </div>
    </div>
    <div class="pl30 f mb30">
      <div class="fs16 b pt10 pb10 mr30">匹配任意字母之后是ar的字符串。ear、ear、parked、garage、barked、rar、haarr</div>
      <div class="rds5  pt10 pb10 pl30 pr30 gf" style="background:#333;">
        /.+ar.*/
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>