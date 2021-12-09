<template>
  <div style="width:7.5rem" class="auto h100vh">
    <div class="pl30r pr30r pt100r">
      <!--1、自带边框-->
      <div class="f ac mb40r">
        <div class="f fs28r lt5r require" style="width:1.2rem;">姓名:</div>
        <div class="f1 rel fs28r rds10r bdc" style="height: 0.7rem;">
          <input type="text" @input="inputName" v-model="nameObj.value" id='myName' :class="['h90 bd0 abs borderBox w98 pl5r db b fs28r', nameObj.state ? 'g5e667a' : 'gred']" style="top:0.03rem;left:0.03rem;" />
          <label v-if="!nameObj.value " class="g5C6579 abs t50 ty-50 fs28r ga0aac0" for="myName" style="left: 0.15rem;">请输入姓名</label>
        </div>
      </div>
      <!--2、只有底线的情况-->
      <div class="f ac mb40r">
        <div class="f fs28r lt5r require" style="width:1.2rem;">姓名:</div>
        <div class="f1 rel fs28r bde5" style="height: 0.7rem;">
          <input type="text" @input="inputName" v-model="nameObj.value" id='myName' :class="['h90 bd0 abs borderBox w98 pl5r db b fs28r', nameObj.state ? 'g5e667a' : 'gred']" style="top:0.03rem;left:0.03rem;" />
          <label v-if="!nameObj.value " class="g5C6579 abs t50 ty-50 fs28r ga0aac0" for="myName" style="left: 0.15rem;">请输入姓名</label>
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
    }
  },
  methods: {
    inputName(e){
      this.nameObj.value = e.target.value
    },
  },
  created(){
  }
}
</script>
<style scoped>
</style>