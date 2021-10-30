
<template>
  <div>
    <div class="fs30 mt50 bdc auto" style="width:400px;">
      <div class="wfc mauto">不足一行自动居中</div>
    </div>
    <div class="fs30 mt50 bdc auto" style="width:400px;">
      <div class="wfc mauto">文字非常多的时超过了一行，那么就左对齐了</div>
    </div>
    <div class="fs30 mt50 bdc auto" style="width:400px;">
      <div class="nowrap">这是一行文字溢出隐藏效果，后面的文字即将被隐藏</div>
    </div>
    <div class="fs30 mt50 bdc auto" style="width:400px;">
      <div class="nowrap2">这是超出两行，溢出隐藏效果，后面的文字即将被隐藏为省略号</div>
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