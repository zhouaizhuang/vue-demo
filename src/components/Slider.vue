<template>
  <div v-if="isShowSlider" class="mask">
    <div class="silderStyle">
      <slide-verify
        :l="42"
        :r="10"
        :w="310"
        :h="155"
        slider-text="向右滑动"
        @success="onSuccess"
        @fail="onFail"
        @refresh="onRefresh"
        :imgs="[yanzheng1, yanzheng2, yanzheng3]"
      >
      </slide-verify>
      <div style="padding-top:3px;">{{msg}}</div>
      <svg @click="close" t="1652860117288" class="error" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1945" width="200" height="200"><path d="M509.866667 32C245.333333 32 32 247.466667 32 512s213.333333 480 477.866667 480S987.733333 776.533333 987.733333 512 774.4 32 509.866667 32z m0 896C281.6 928 96 742.4 96 512S281.6 96 509.866667 96 923.733333 281.6 923.733333 512s-185.6 416-413.866666 416z" fill="#ffffff" p-id="1946"></path><path d="M693.333333 330.666667c-12.8-12.8-32-12.8-44.8 0L512 467.2l-136.533333-136.533333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l136.533333 136.533333-136.533333 136.533333c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334l136.533333-136.533333 136.533334 136.533333c6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334c12.8-12.8 12.8-32 0-44.8L556.8 512l136.533333-136.533333c12.8-12.8 12.8-32 0-44.8z" fill="#ffffff" p-id="1947"></path></svg>
    </div>
  </div>
</template>
<script>
import yanzheng1 from "../assets/yanzheng1.png"
import yanzheng2 from "../assets/yanzheng2.png"
import yanzheng3 from "../assets/yanzheng3.png"
export default {
  name: 'slider',
  props: {
    isShowSlider: {type: Boolean, default: false}
  },
  data(){
    return {
      msg: '',
      yanzheng1,
      yanzheng2,
      yanzheng3
    }
  },
  methods: {
    async onSuccess(){
      this.msg = '操作成功'
      await this.$Z.wait(600)
      this.$emit('success')
    },
    onFail(){
      this.msg = ''
    },
    onRefresh(){
      this.msg = ''
    },
    close(){
      this.$emit('closeSlider')
    }
  }
};
</script>
<style scoped>
.mask{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(0,0,0,.7);
}
.silderStyle {
  position: absolute;
  top:30%;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid rgb(159, 163, 172);
  padding: 5px;
  background: #fff;
  width: 320px;
  height: 240px;
  text-align: center;
}
.silderStyle /deep/ .slide-verify {
  margin: auto;
}
.silderStyle /deep/ .slide-verify-slider {
  margin-top: -2px !important;
  /* border-radius: 25px !important; */
  font-size: 14px !important;
  line-height: 38px !important;
}
.silderStyle /deep/ .slide-verify-slider-mask-item {
  border-radius: 25px;
}
.silderStyle /deep/ .slide-verify-slider-mask-item:hover {
  background-color: #e8e7f8;
  border: 1px solid #fff;
}
.silderStyle /deep/ .container-success,
.silderStyle /deep/ .slide-verify-slider-mask,
.silderStyle /deep/ .container-success .slide-verify-slider-mask,
.silderStyle /deep/ .container-success .slide-verify-slider-mask-item,
.silderStyle /deep/ .container-acvtive .slide-verify-slider-mask-item {
  background: #e8e7f8;
  /* border-radius: 25px; */
  border: 1px solid #e8e7f8;
}
.iconButton {
  /* border-top: 1px solid rgb(159, 163, 172); */
  text-align: left;
  font-size: 30px;
  padding-left: 10px;
  margin-top: 5px;
  color: rgb(159, 163, 172);
}
.el-icon-circle-close,
.el-icon-refresh {
  cursor: pointer;
}
.error{
  position: absolute;
  top: -40px;
  right: -40px;
  width: 35px;
  height:35px;
}
</style>
