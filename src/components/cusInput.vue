<template>
  <div class="f ac pt20r fs32r bdbe">
    <div :class="['g2 mr10r fs28r lt5r', formInfo.required == 1 ? 'need' : '']">{{formInfo.name}}</div>
    <div class="f1 rel fs28r rds10r" style="height: 0.7rem;">
      <input type="text" @input="changeField" :value="formInfo.defaultValue" :id="formInfo.field" :disabled="type == 'detail'" :class="['h90 bd0 abs borderBox w98 pl5r db b fs28r t3r l3r', formInfo.state ? 'g5e667a' : 'gred']" />
      <label v-if="!formInfo.value " class="g5C6579 abs t50 ty-50 fs28r ga0aac0 l15r" :for="formInfo.field">请输入{{formInfo.name}}</label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cusInput',
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
