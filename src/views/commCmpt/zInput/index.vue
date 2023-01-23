<template>
  <div style="" class="auto h100vh bgf">
    <div class="pl15 pr15 pt50">
      <!--1、自带边框-->
      <div class="f ac mb20">
        <div class="f fs14 lt5 require" style="width:60px;">姓名:</div>
        <div class="f1 rel fs12 rds5 bdc" style="height: 35px;">
          <input type="text" @input="inputName" v-model="nameObj.value" id='myName' :class="['h88 bd0 abs borderBox w98 pl2 db b fs14', nameObj.state ? 'g5e667a' : 'gred']" style="top:2px;left:3px;" />
          <label v-if="!nameObj.value " class="g5C6579 abs t50 ty-50 fs14 ga0aac0" for="myName" style="left: 7px;">请输入姓名</label>
        </div>
      </div>
      <!--2、只有底线的情况-->
      <div class="f ac mb20">
        <div class="f fs14 lt5 require" style="width:60px;">昵称:</div>
        <div class="f1 rel fs14 bdbe5" style="height:30px;">
          <input type="text" @input="inputNickName" v-model="nickNameObj.value" id='nickName' :class="['h90 bd0 abs borderBox w98 pl5 db b fs14', nickNameObj.state ? 'g5e667a' : 'gred']" style="top:3px;left:3px;" />
          <label v-if="!nickNameObj.value " class="g5C6579 abs t50 ty-50 fs14 ga0aac0" for="nickName" style="left: 15px;">请输入昵称</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zInput',
  data(){
    return {
      nameObj: {
        value: '', // 姓名
        state: true, // 输入的值的状态是false还是true。将来可以用于判断是否显示为红色
      },
      nickNameObj: {
        value: '',
        state: true
      }
    }
  },
  methods: {
    inputName(e){
      this.nameObj.value = e.target.value
    },
    inputNickName(e){
      this.nickNameObj.value = e.target.value
    }
  },
  created(){
  }
}
</script>
<style scoped>
.bdbe5{
  border-bottom: 1px solid #e5e5e5;
}
</style>