
<template>
  <div>
    <!--自适应换行-->
    <div class="f rw">
      <div class="fs30 mt50 bdc auto g42b983 f ac" style="width:350px;">
        <div class="wfc mauto">不足一行自动居中</div>
      </div>
      <div class="fs30 mt50 bdc auto g42b983 f ac" style="width:350px;">
        <div class="wfc mauto">文字非常多的时超过了一行，那么就左对齐了</div>
      </div>
    </div>
    <!--程序员手动控住换行-->
    <div class="fs30 mt50 f xc auto g42b983" style="color:pink;">
      <div class="dib bdc pl15 pr15 wmc lba">竖排文字</div>
    </div>
    <!--溢出隐藏-->
    <div class="f rw">
      <div class="fs30 mt50 bdc auto g1890ff f ac" style="width:350px;">
        <div class="nowrap">这是一行文字溢出隐藏效果，后面的文字即将被隐藏</div>
      </div>
      <div class="fs30 mt50 bdc auto g1890ff f ac" style="width:350px;">
        <div class="nowrap2">这是超出两行，溢出隐藏效果，后面的文字即将被隐藏为省略号</div>
      </div>
    </div>
    <div class="fs22 tc mt50 gf10000">fit-content的高级运用。给未知宽高的元素赋予确定的尺寸。从而能水平垂直居中</div>
    <div class="bdc rel auto gf10000" style="width:200px;height:200px;">
      <div class="wfc hfc trbl0 abs mauto">ans</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'specialFont',
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
<style>
  .cw-content{
    width: fit-content;
    margin:auto;
  }
</style>