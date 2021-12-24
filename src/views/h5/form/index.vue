
<template>
  <div class="auto fs20r h100vh ovh">
    <div class="pt50r pb30r pl30r bgf">
       <!--文本键盘-->
      <div class="f f ac mb40r">
        <div class="f fs28r lt5r require" style="width:3rem;">姓名:</div>
        <div class="f1 rel fs28r rds10r bdc" style="height: 0.7rem;">
          <input  type="text" @input="inputName" v-model="nameObj.value" id='name' :class="['h90 bd0 abs borderBox w98 pl5r db b fs28r', nameObj.state ? 'g5e667a' : 'gred']" style="top:0.03rem;left:0.03rem;" />
          <label v-if="!nameObj.value " class="g5C6579 abs t50 ty-50 fs28r ga0aac0" for="name" style="left: 0.15rem;">请输入姓名</label>
        </div>
      </div>
      <!--电话键盘-->
      <div class="f f ac mb40r">
        <div class="f fs28r lt5r require" style="width:3rem;">电话:</div>
        <div class="f1 rel fs28r rds10r bdc" style="height: 0.7rem;">
          <input type="tel" @input="inputTel" v-model="telObj.value" id='tel' :class="['h90 bd0 abs borderBox w98 pl5r db b fs28r', telObj.state ? 'g5e667a' : 'gred']" style="top:0.03rem;left:0.03rem;" />
          <label v-if="!telObj.value " class="g5C6579 abs t50 ty-50 fs28r ga0aac0" for="tel" style="left: 0.15rem;">请输入电话</label>
        </div>
      </div>
      <!--数字键盘-->
      <div class="f f ac mb40r">
        <div class="f fs28r lt5r require" style="width:3rem;">数量:</div>
        <div class="f1 rel fs28r rds10r bdc" style="height: 0.7rem;">
          <input  type="number" pattern="\d*" @input="inputCount" v-model="countObj.value" id='countNum' :class="['h90 bd0 abs borderBox w98 pl5r db b fs28r', countObj.state ? 'g5e667a' : 'gred']" style="top:0.03rem;left:0.03rem;" />
          <label v-if="!countObj.value " class="g5C6579 abs t50 ty-50 fs28r ga0aac0" for="countNum" style="left: 0.15rem;">请输入数量</label>
        </div>
      </div>
      <!--禁止大写-->
      <div class="f f ac mb40r">
        <div class="f fs28r lt5r require" style="width:3rem;">禁止首字母大写:</div>
        <div class="f1 rel fs28r rds10r bdc" style="height: 0.7rem;">
          <input  type="text" autocapitalize="none" autocorrect="off" @input="inputLetter" v-model="letterObj.value" id='letter' :class="['h90 bd0 abs borderBox w98 pl5r db b fs28r', letterObj.state ? 'g5e667a' : 'gred']" style="top:0.03rem;left:0.03rem;" />
          <label v-if="!letterObj.value " class="g5C6579 abs t50 ty-50 fs28r ga0aac0" for="letter" style="left: 0.15rem;">请输入文字</label>
        </div>
      </div>
      <!--文本框-->
      <div class="f f ac mb40r">
        <div class="f fs28r lt5r require" style="width:3rem;">文本框:</div>
        <div class="f1 rel fs28r rds10r">
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