<template>
  <div class="pt25r pb25r fs32r text-area-box">
    <div :class="['mb20r', formInfo.required == 1 ? 'need' : '']">{{formInfo.name}}</div>
    <textarea class="rds20r bde5 w93 db fs26r" style="min-height:4.5rem;padding:0.2rem;" :value="formInfo.defaultValue" :placeholder="'请输入' + formInfo.name" placeholder-style=""
      placeholder-class="textarea-placeholder" :disabled="type == 'detail'" maxlength="300" :auto-focus="false" :focus="false"
      @input="changeField"
    >
    </textarea>
  </div>
</template>
<script>
export default {
  name: 'cusTextArea',
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
<style scoped>
  textarea{
    width: 300px;
    height: 30px;
    border: none;
    outline: none;
    display: block;
    border: solid 1px #dee0e9;
    background:transparent;
    padding: 0 15px;
    border-radius: 10px;
  }
  textarea::-webkit-input-placeholder{ 
    color: #babbc1;
    font-size:12px;
  }
</style>
