<template>
  <!-- https://juejin.cn/post/7223580639710281787 -->
  <div class="mh100vh pt100 bg2 ovya">
    <div class="f xc mb100">
      <div class="rel bgf" style="width:200px;height:60px;border-radius: 5px 5px 0 0;">
        <div class="abs t0 bg1890ff" style="left:-59px;width:60px;height:60px;">
          <div class="abs rds50" style="width:120px;height:120px;right:0;bottom:0;background:red;"></div>
        </div>  
        <div class="abs t0 bg1890ff" style="right:-59px;width:60px;height:60px;">
          <div class="abs rds50" style="width:120px;height:120px;left:0;bottom:0;background:red;"></div>
        </div>  
      </div>
    </div>
    <div class="f xc mb100">
      <div class="rel bgf" style="width:200px;height:60px;border-radius: 5px 5px 0 0;">
        <div class="abs t0 bgf" style="left:-60px;width:60px;height:60px;">
          <div class="abs rds50" style="width:120px;height:120px;right:0px;bottom:0px;background:red;"></div>
        </div>  
        <div class="abs t0 bgf" style="right:-59px;width:60px;height:60px;">
          <div class="abs rds50" style="width:120px;height:120px;left:0;bottom:0;background:red;"></div>
        </div>  
      </div> 
    </div>
     <div class="f xc mb100">
      <div class="rel bgf" style="width:200px;height:60px;border-radius: 5px 5px 0 0;">
        <div class="abs t0 bgf" style="left:-60px;width:60px;height:60px;">
          <div class="abs rds50" style="width:120px;height:120px;right:0px;bottom:0px;background:#222;"></div>
        </div>  
        <div class="abs t0 bgf" style="right:-59px;width:60px;height:60px;">
          <div class="abs rds50" style="width:120px;height:120px;left:0;bottom:0;background:#222;"></div>
        </div>  
      </div> 
    </div>
    <div class="f xc mb100">
      <div class="rel bgf" style="width:100px;height:30px;border-radius: 5px 5px 0 0;">
        <div class="abs t0 bgf" style="left:-30px;width:30px;height:30px;">
          <div class="abs rds50" style="width:60px;height:60px;right:0px;bottom:0px;background:#222;"></div>
        </div>  
        <div class="abs t0 bgf" style="right:-30px;width:30px;height:30px;">
          <div class="abs rds50" style="width:60px;height:60px;left:0;bottom:0;background:#222;"></div>
        </div>  
      </div> 
    </div>
    <!--小偏转角-->
    <div class="f xc mb100">
      <div class="rel bgf" style="width:100px;height:30px;border-radius: 5px 5px 0 0;">
        <div class="abs b0 bg1890ff" style="left:-20px;width:20px;height:20px;">
          <div class="abs rds50" style="width:40px;height:40px;right:0px;bottom:0px;background:red;"></div>
        </div>  
        <div class="abs b0 bg1890ff" style="right:-20px;width:20px;height:20px;">
          <div class="abs rds50" style="width:40px;height:40px;left:0;bottom:0;background:red;"></div>
        </div>  
      </div> 
    </div>
    <div class="gf">此法缺陷是：必须预留圆的底色与背景色一致，导致相邻的两个靠近就冲突</div>
    <div class="f xc mb100">
      <div class="rel bgf zx2 mr30" style="width:100px;height:30px;border-radius: 5px 5px 0 0;">
        <div class="abs b0 bgf ovh" style="left:-20px;width:20px;height:20px;">
          <div class="abs rds50" style="width:40px;height:40px;right:0px;bottom:0px;background:#222;"></div>
        </div>  
        <div class="abs b0 bgf ovh" style="right:-20px;width:20px;height:20px;">
          <div class="abs rds50" style="width:40px;height:40px;left:0;bottom:0;background:#222;"></div>
        </div>
        <div class="abs trbl0 f ac xc g0 fs13 b lt2 g1890ff">工作台</div>
      </div>
      <div class="rel bgf zx2 mr30" style="width:100px;height:30px;border-radius: 5px 5px 0 0;">
        <div class="abs b0 bgf ovh" style="left:-20px;width:20px;height:20px;">
          <div class="abs rds50" style="width:40px;height:40px;right:0px;bottom:0px;background:#222;"></div>
        </div>  
        <div class="abs b0 bgf ovh" style="right:-20px;width:20px;height:20px;">
          <div class="abs rds50" style="width:40px;height:40px;left:0;bottom:0;background:#222;"></div>
        </div>
        <div class="abs trbl0 f ac xc g0 fs13 b lt2 g1890ff">工作台</div>
      </div>
    </div>
    <div class="mt30 gf">方案二：采用svg路径裁剪</div>
    <div>裁剪svg</div>
    <div class="mb30">
      <svg width="100" height="100" style="background:#fff">
        <path d="M0,0L0,100L100,100A100,100,0,0,1,0,30" stroke="black" stroke-width="1" fill="none"></path>
      </svg>
    </div>
    <div class="mb100">
      <svg width="30" height="30" style="background:#fff">
        <path d="M0,0L0,30L30,30A30,30,0,0,1,0,15" stroke="black" stroke-width="1" fill="none"></path>
      </svg>
    </div>
    <div class="f xc mb100">
      <!--此处复制代码-->
      <div class="rel bgf zx2 mr30" style="width:100px;height:30px;border-radius: 5px 5px 0 0;">
        <div class="abs b0 bgf ovh" style="left:-19px;width:20px;height:20px;clip-path: path('M20,0L20,20L0,20A20,20,0,0,0,20,0')"></div>
        <div class="abs b0 bgf ovh" style="right:-19px;width:20px;height:20px;clip-path: path('M0,0L0,20L20,20A20,20,0,0,1,0,0')"></div>
        <div class="abs trbl0 f ac xc g0 fs13 b lt2 g1890ff">工作台</div>
      </div>
      <!--此处结束代码-->
      <!--注意手动调节被裁减的矩形的宽高 + 裁剪的svg形状(重点是弧度)-->
      <div class="rel bgf zx2 mr30" style="width:100px;height:30px;border-radius: 5px 5px 0 0;">
        <div class="abs b0 bgf ovh" style="left:-19.5px;width:20px;height:20px;clip-path: path('M20,0L20,20L8,20A20,20,0,0,0,20,0')"></div>
        <div class="abs b0 bgf ovh" style="right:-19.5px;width:20px;height:20px;clip-path: path('M0,0L0,20L10,20A20,20,0,0,1,0,0')"></div>
        <div class="abs trbl0 f ac xc g0 fs13 b lt2 g1890ff">工作台</div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>