<template>
  <div class="f ac pt25r pb25r fs32r">
    <div :class="['g2 mr10r', formInfo.required == 1 ? 'need' : '']">{{formInfo.name}}</div>
    <div class="f1 tr fs30r">
      <input class="f1 tr fs30r" type="text" :value="formInfo.defaultValue" disabled placeholder="请选择" placeholder-class="g9 tr fs30r" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'cusRadio',
  props: {
    formInfo: {
      type: Object, // 数据类型
      require: true, // 必填
      default: {}
    },
    type:{ // 当前数据是否是detail，也就是是否可以编辑
      type: String, // 表单类型
      default: ''
    }
  },
  data(){
    return {}
  },
  methods:{
    changeField(e){
      const { value } = e.detail
      const { _id } = this.data.formInfo
      this.$emit('changeValue', {value, _id})
    }
  },
  created(){
  }
}
</script>
<style scoped lang="less">

</style>
