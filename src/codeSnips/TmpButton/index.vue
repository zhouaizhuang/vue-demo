<template>
  <div>
    <div class="f ac pt100 pl100">
      <div class="mr10 fs16 b">状态类按钮：</div>
      <div class="f1 f ac">
        <!--已检查-->
        <div class="rds2 pt2 pb2 pl10 pr10 fs12 none mr20" style="background: rgba(21,222,139,0.1);border: 1px solid #15DE8B;color:#15DE8B;">已检查</div>
        <!--待支付-->
        <div class="rds2 pt2 pb2 pl10 pr10 fs12 none mr20" style="background: rgba(255,164,57,0.1);border: 1px solid #FFA439;color:#FFA439;">待支付</div>
        <!--接诊中-->
        <div class="rds2 pt2 pb2 pl10 pr10 fs12 none mr20" style="background: rgba(195,100,231,0.1);border: 1px solid #C364E7;color:#C364E7;">接诊中</div>
      </div>
    </div>
    <div class="f ac pt100 pl100">
      <div class="mr10 fs16 b">大尺寸按钮：</div>
      <div class="f1 f ac">
        <!--取消-->
        <div class="rds4 f ac xc fs14 lt2 poi trans3 none mr20" style="height:32px;width:60px;border:1px solid #dcdee2;" onmouseover="this.style.background='#fff';this.style.color='#57a3f3';this.style.borderColor='#57a3f3'" onmouseout="this.style.color='#515a6e';this.style.borderColor='#dcdee2'">取消</div>
        <!--取消-->
        <div :class="['default', 'rds4 f ac xc fs14 lt2 poi trans3 none mr20']" style="height:32px;width:60px;border:1px solid #dcdee2;">取消</div>
        <!--新增-->
        <div :class="['primary', 'rds4 f ac xc fs14 lt2 poi trans3 gf none mr20']" style="height:32px;width:60px;border:1px solid #57a3f3;background:#2d8cf0;">新增</div>
        <!--删除-->
        <div :class="['error', 'rds4 f ac xc fs14 lt2 poi trans3 gf none mr20']" style="height:32px;width:60px;border:1px solid #ed4014;background:#ed4014;">删除</div>
        <!--警告-->
        <div :class="['warning', 'rds4 f ac xc fs14 lt2 poi trans3 gf none mr20']" style="height:32px;width:60px;border:1px solid #f90;background:#f90;">警告</div>
        <!--完成-->
        <div :class="['success', 'rds4 f ac xc fs14 lt2 poi trans3 none gf']" style="height:32px;width:60px;border:1px solid #19be6b;background:#19be6b;">完成</div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
/*大尺寸按钮*/
.default:hover{
  color: #57a3f3;
  background-color: #fff;
  border-color: #57a3f3 !important;
}
.primary:hover{background:#57a3f3 !important;}
.error:hover{background:#f16643 !important;}
.warning:hover{background:#ffad33 !important;}
.success:hover{background:#47cb89 !important;}
</style>