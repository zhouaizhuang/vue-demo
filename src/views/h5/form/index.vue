
<template>
  <div class="auto fs14 h100vh ovh">
    <div class="pt25 pb15 pl15 bgf">
       <!--文本键盘-->
      <div class="f f ac mb20">
        <div class="f fs14 lt2 require" style="width:60px;">姓名:</div>
        <div class="f1 rel fs14 rds10 bdc" style="height: 38px;">
          <input  type="text" @input="inputName" v-model="nameObj.value" id='name' :class="['h90 bd0 abs borderBox w98 pl5 db b fs14', nameObj.state ? 'g5e667a' : 'gred']" style="top:2px;left:3px;" />
          <label v-if="!nameObj.value " class="g5C6579 abs t50 ty-50 fs14 ga0aac0" for="name" style="left: 10px;">请输入姓名</label>
        </div>
      </div>
      <!--电话键盘-->
      <div class="f f ac mb20">
        <div class="f fs14 lt2 require" style="width:60px;">电话:</div>
        <div class="f1 rel fs14 rds10 bdc" style="height: 38px;">
          <input type="tel" @input="inputTel" v-model="telObj.value" id='tel' :class="['h90 bd0 abs borderBox w98 pl5r db b fs14', telObj.state ? 'g5e667a' : 'gred']" style="top:2px;left:3px;" />
          <label v-if="!telObj.value " class="g5C6579 abs t50 ty-50 fs14 ga0aac0" for="tel" style="left: 10px;">请输入电话</label>
        </div>
      </div>
      <!--数字键盘-->
      <div class="f f ac mb40r">
        <div class="f fs14 lt2 require" style="width:60px;">数量:</div>
        <div class="f1 rel fs14 rds10 bdc" style="height: 38px;">
          <input type="number" pattern="\d*" @input="inputCount" v-model="countObj.value" id='countNum' :class="['h90 bd0 abs borderBox w98 pl5 db b fs14', countObj.state ? 'g5e667a' : 'gred']" style="top:2px;left:3px;" />
          <label v-if="!countObj.value " class="g5C6579 abs t50 ty-50 fs14 ga0aac0" for="countNum" style="left: 10px;">请输入数量</label>
        </div>
      </div>
      <!--禁止大写-->
      <div class="f f ac mb20">
        <div class="f fs14 lt5 require" style="width:60px;">取消首字母大写:</div>
        <div class="f1 rel fs14 bde5" style="height: 38px;">
          <input  type="text" autocapitalize="none" autocorrect="off" @input="inputLetter" v-model="letterObj.value" id='letter' :class="['h90 bd0 abs borderBox w98 pl5 db b fs14', letterObj.state ? 'g5e667a' : 'gred']" style="top:2px;left:3px;" />
          <label v-if="!letterObj.value " class="g5C6579 abs t50 ty-50 fs14 ga0aac0" for="letter" style="left: 10px;">请输入文字</label>
        </div>
      </div>
      <!--文本框-->
      <div class="f f ac mb20">
        <div class="f fs14 lt2 require" style="width:60px;">文本框:</div>
        <div class="f1 rel fs14 rds10">
            <textarea name="" id="" cols="50" rows="10" class="db w100" v-model="textAreaObj.value" placeholder="请输入文字" />
        </div>
      </div>
      <input type="file" acccect="image/*" /> <!--选择照片、拍摄照片-->
      <input type="file" accept="video/" /> <!--选择视频或拍摄视频-->
      <input type="file" multiple /> <!--多选文件-->
    </div>
  </div>
</template>
<script>
export default {
  name: 'email',
  data(){
    return {
      nameObj: {
        value: '', // 姓名
        state: true, // 输入的值的状态是false还是true。将来可以用于判断是否显示为红色
      },
      telObj: {
        value: '', // 电话
        state: true, // 输入的值的状态是false还是true。将来可以用于判断是否显示为红色
      },
      countObj: {
        value: '', // 数量
        state: true, // 输入的值的状态是false还是true。将来可以用于判断是否显示为红色
      },
      letterObj: {
        value: '', // 字符
        state: true, // 输入的值的状态是false还是true。将来可以用于判断是否显示为红色
      },
      textAreaObj: {
        value: '', // 字符
        state: true, // 输入的值的状态是false还是true。将来可以用于判断是否显示为红色
      }
    }
  },
  methods:{
    inputName(e){
      this.nameObj.value = e.target.value
    },
    inputTel(e) {
      this.telObj.value = e.target.value
    },
    inputCount(e){
      this.countObj.value = e.target.value
    },
    inputLetter(e) {
      this.letterObj.value = e.target.value
    }
  },
  created(){
  },
  mounted(){
  },
}
</script>
<style scoped>

</style>