
<template>
  <div class="auto fs20r h100vh">
    <!--v-copy复制数据-->
    <div class="fs40r tc mb20r pt30">v-copy复制数据</div>
    <div class="fs30r tc mb30r">点击下面的按钮以复制这个链接: https://github.com/zhouaizhuang</div>
    <div class="fs30r mb20r">1、自定义指令方式实现</div>
    <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 mb30r auto" v-copy="'https://github.com/zhouaizhuang'">点我复制</div>

    <!--如果不采用自定义指令-->
    <div class="fs30r mb20r">1、js函数实现</div>
    <div class="fs30r gf bg1890ff rds50r f ac xc pt20r pb20r w40 auto mt30r" @click="() => copyLink(`https://github.com/zhouaizhuang`)">点击复制</div>
  </div>
</template>
<script>
export default {
  name: 'vCopy',
  data(){
    return {
    }
  },
  methods:{
    copyLink(e){
      // if(!e) {
      //   return this.$Message.error('链接地址为空')
      // }
      // var input = document.createElement("input")   // js创建一个input输入框
      // input.value = e  // 将需要复制的文本赋值到创建的input输入框中
      // document.body.appendChild(input)    // 将输入框暂时创建到实例里面
      // input.select()   // 选中输入框中的内容
      // document.execCommand("Copy")   // 执行复制操作
      // document.body.removeChild(input) // 最后删除实例中临时创建的input输入框，完成复制操作
      // this.$Message.success('复制成功')
      if(!e) {
        return alert('链接地址为空')
      }
      var input = document.createElement("input")   // js创建一个input输入框
      input.value = e  // 将需要复制的文本赋值到创建的input输入框中
      document.body.appendChild(input)    // 将输入框暂时创建到实例里面
      input.select()   // 选中输入框中的内容
      document.execCommand("Copy")   // 执行复制操作
      document.body.removeChild(input) // 最后删除实例中临时创建
      alert('复制成功')
    }
  },
  created(){
  }
}
</script>
<style scoped>

</style>