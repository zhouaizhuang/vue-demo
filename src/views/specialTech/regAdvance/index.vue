<template>
  <div class="abs trbl0 pb100 ovya">
    <div class="pl30 mb30 f rw pt30">
      <div class="fs16 b pt10 pb10 mr30 w100"><span class="gred">分组提取。</span>提取区号和号码：张三 0731-8283333</div>
      <div class="rds5 gf pt10 pb10 pl50 pr50" style="background:#222;">
        '张三 0731-8283333'.match(/(\d{4})-(\d{7})/) ---- 获取到匹配的数据
      </div>
      <div class="pl30 f1 f ac gred fs14">
        <div class="mr30">用括号进行分割</div>
      </div>  
    </div>
    <div class="pl30 mb30 f rw pt30">
      <div class="fs16 b pt10 pb10 mr30 w100"><span class="gred">非捕获分组。</span>提取目标数据中的电话号码（也就是75855）：01-75855、0731-75855、12345-75855、tel:75855</div>
      <div class="rds5 gf pt10 pb10 pl50 pr50" style="background:#222;">
       /(?:\d{2}|\d{4}|\d{5}|tel)[-:](\d{5})/
      </div>
      <div class="pl30 f1 f ac gred fs14">
        <div class="mr30">?:代表不需要捕获某个分组的内容，但是又想使用分组的特性</div>
      </div>  
    </div>
    <div class="pl30 mb30 f rw pt30">
      <div class="fs16 b pt10 pb10 mr30 w100">分组提取年月日。20200102、2020-01-02、2020-1-2、2020.01.02、2020 01 02、2020 1 2、2020/01/02</div>
      <div class="rds5 gf pt10 pb10 pl50 pr50" style="background:#222;">
       /(\d{4})[ -./]?(\d{1,2})[ -./]?(\d{1,2})/
      </div>
      <div class="pl30 f1 f ac gred fs14">
        <div class="mr30">使用?+*精确匹配</div>
      </div>  
    </div>
    <div class="pl30 mb30 f rw pt30">
      <div class="fs16 b pt10 pb10 mr30 w100"><span class="gred">分组回溯引用。</span>0123&lt;font&gt;提示&lt;/font&gt;abcd、0123&lt;font&gt;提示&lt;/bar&gt;abcd</div>
      <div class="rds5 gf pt10 pb10 pl50 pr50" style="background:#222;">
       /<(\w+).*?</\1>/
      </div>
      <div class="pl30 f1 f ac gred fs14">
        <div class="mr30">\1 就代表匹配到的第一个捕获组：font</div>
      </div>  
    </div>
    <div class="pl30 mb30 f rw pt30">
      <div class="fs16 b pt10 mr30 w100"><span class="gred">正向先行断言。</span>我喜欢你 我喜欢 我喜欢我 喜欢 喜欢你</div>
      <div class="fs16 b pt10 pb10 mr30 w100">如果要取出喜欢两个字，要求这个喜欢后面有你，这个时候就要这么写：喜欢(?=你)，这就是正向先行断言。</div>
      <div class="rds5 gf pt10 pb10 pl50 pr50" style="background:#222;">
       /喜欢(?=你)/
      </div>
      <div class="pl30 f1 f ac gred fs14">
        <div class="mr30">?=其实就是指至少包含</div>
      </div>  
    </div>
    <div class="pl30 mb30 f rw pt30">
      <div class="fs16 b pt10 mr30 w100"><span class="gred">反向先行断言。</span>我喜欢你 我喜欢 我喜欢我 喜欢 喜欢你</div>
      <div class="fs16 b pt10 pb10 mr30 w100">如果要取出喜欢两个字，要求这个喜欢后面没有你，这个时候就要这么写：喜欢(?!你)，这就是反向先行断言。</div>
      <div class="rds5 gf pt10 pb10 pl50 pr50" style="background:#222;">
       /喜欢(?!你)/
      </div>
      <div class="pl30 f1 f ac gred fs14">
        <div class="mr30">?!其实就是指不包含</div>
      </div>  
    </div>
    <div class="pl30 mb30 f rw pt30">
      <div class="fs16 b pt10 mr30 w100"><span class="gred">正向后行断言。</span>我喜欢你 我喜欢 我喜欢我 喜欢 喜欢你</div>
      <div class="fs16 b pt10 pb10 mr30 w100">正向后行断言：(?<=表达式)，指在某个位置向左看，表示所在位置左侧必须能匹配表达式</div>
      <div class="fs16 b pt10 pb10 mr30 w100">如果要取出喜欢两个字，要求喜欢的前面有我，后面有你，这个时候就要这么写：(?<=我)喜欢(?=你)。</div>
      <div class="rds5 gf pt10 pb10 pl50 pr50" style="background:#222;">
       /(?<=我)喜欢(?=你)/
      </div>
      <div class="pl30 f1 f ac gred fs14">
        <div class="mr30">?<=其实就是指前面必须包含</div>
      </div>  
    </div>
    <div class="pl30 mb30 f rw pt30">
      <div class="fs16 b pt10 mr30 w100"><span class="gred">反向后行断言。</span>我喜欢你 我喜欢 我喜欢我 喜欢 喜欢你</div>
      <div class="fs16 b pt10 pb10 mr30 w100">反向后行断言：(?&lt;!表达式)，指在某个位置向左看，表示所在位置左侧不能匹配表达式</div>
      <div class="fs16 b pt10 pb10 mr30 w100">例如：如果要取出喜欢两个字，要求喜欢的前面没有我，后面没有你，这个时候就要这么写：(?&lt;!我)喜欢(?!你)。</div>
      <div class="rds5 gf pt10 pb10 pl50 pr50" style="background:#222;">
       /(?&lt;!我)喜欢(?!你)/
      </div>
      <div class="pl30 f1 f ac gred fs14">
        <div class="mr30">?&lt;!其实就是指前面不包含</div>
      </div>  
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>