
<template>
  <div class="auto pb100">
    <div class="f ac mt50">
      <div class="f1 f ac">
        <div style="width:120px;">原图</div>
        <img src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac"></div>
    </div>
    <div class="f ac mt50">
      <div class="f1 f ac">
        <div style="width:120px;">方形裁剪</div>
        <img style="clip-path:inset(30px 10px 10px 20px);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac">
        <div style="width:120px;">圆角裁剪</div>
        <img style="clip-path:inset(15% round 10% 50% 10% 50%);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
    </div>
    <div class="f ac mt50">
      <div class="f1 f ac">
        <div style="width:120px;">圆形裁剪</div>
        <img style="clip-path:circle();" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac">
        <div style="width:120px;">指定半径和圆心</div>
        <img style="clip-path:circle(100px at right bottom);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
    </div>
    <div class="f ac mt50">
      <div class="f1 f ac">
        <div style="width:120px;">椭圆裁剪</div>
        <img style="clip-path:ellipse();" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac">
        <div style="width:120px;">指定长轴短轴+圆心</div>
        <img style="clip-path:ellipse(15% 50% at 75% 50%);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
    </div>
    <div class="f ac mt50">
      <div class="f1 f ac">
        <div style="width:120px;">多边形裁剪(polygon)</div>
        <img style="clip-path:polygon(10px 10px, 100px 10px,110px 100px, 80px 180px);" src="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png" />
      </div>
      <div class="f1 f ac">
        <div style="width:120px;">底部多描绘几个点近似实现圆角</div>
        <div class="tips">感谢大家购买我的书</div>
      </div>
    </div>
    <div class="f ac mt50">
      <div class="f1 f ac">
        <div style="width:120px;">曲线路径裁剪(path)</div>
        <div class="icon-arrow"></div>
      </div>
      <div class="f1 f ac">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'clipImg',
  data(){
    return {
    }
  },
  methods:{
  },
  created(){
   
  }
}
</script>
<style scoped>
img{
  width:200px;
}
.tips{
   display: inline-block;
  max-width: 250px;
  padding: 10px 15px 26px;
  color: #fff;
  background: linear-gradient(45deg, deepskyblue, deeppink);
  border-radius: 6px 6px 0 0;
  --clip-path: polygon(0 0, 100% 0, 100% calc(100% - 22px), calc(100% - 2px) calc(100% - 18px), calc(100% - 6px) calc(100% - 16px), calc(15% + 18px) calc(100% - 16px), calc(15% + 9px) calc(100% - 6px), 15% calc(100% - 16px), 0 calc(100% - 16px), 6px calc(100% - 16px), 2px calc(100% - 18px), 0 calc(100% - 22px));
  -webkit-clip-path: var(--clip-path);
  clip-path: var(--clip-path);
}
.icon-arrow {
  width: 32px; height: 32px;
  background: linear-gradient(45deg, deepskyblue, deeppink);
  clip-path: path("M16.016 1.157l-15.015 15.015h9.009v16.016h12.012v-16.016h9.009z");
  transition: .2s;
}
</style>