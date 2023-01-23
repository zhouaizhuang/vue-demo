
<template>
  <div class="pl15 pr15" style="min-height:100vh;background:#FBF8F3;padding-bottom:100px;">
    <div v-for="bigItem in cusForm" :key="bigItem.id">
      <div class="pb10 pt10 fs15 b ">{{bigItem.name}}</div>
      <div class="bgf rds10 pl10 pr10 pb10" style="box-shadow: 0px 8px 15px rgba(143, 143, 143, 0.1);">
        <div v-for="(item, index) in bigItem.child" :key="item.id" :class="[bigItem.child.length === index + 1 ? '' : 'bdbe5']">
          <CusInput v-if="item.type == 'text'" :formInfo="item" :type="$route.query.type" @changeValue="changeValue" />
          <CusTextArea v-else-if="item.type == 'textarea'" :formInfo="item" :type="$route.query.type" @changeValue="changeValue" />
          <CusRadio v-else-if="item.type == 'radio'" :formInfo="item" :type="$route.query.type" @changeValue="changeValue" />
          <!-- <cusCheckBox v-else-if="item.type == 'checkbox'" :formInfo="item" :type="$route.query.type" @changeValue="changeValue" />
          <cusPickArea wx:elif="{{item.type == 'area'}}" formInfo="{{item}}" type="{{options.type}}" bind:changeValue="changeValue" />
          <cusPickDate wx:elif="{{item.type == 'date'}}" formInfo="{{item}}" type="{{options.type}}" bind:changeValue="changeValue" />
          <cusPickDateTime wx:elif="{{item.type == 'datetime'}}" formInfo="{{item}}" type="{{options.type}}" bind:changeValue="changeValue" />
          <cusSelect wx:elif="{{item.type == 'select'}}" formInfo="{{item}}" type="{{options.type}}" bind:changeValue="changeValue" />
          <cusIdentity wx:elif="{{item.type == 'person'}}" formInfo="{{item}}" type="{{options.type}}" bind:changeValue="changeValue" />
          <cusUploadImg wx:elif="{{item.type == 'image'}}" formInfo="{{item}}" type="{{options.type}}" bind:changeValue="changeValue" />
          <cusUploadImgs wx:elif="{{item.type == 'images'}}" formInfo="{{item}}" type="{{options.type}}" bind:changeValue="changeValue" /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { guID } from "@/common.js"
import CusInput from "@/components/CusInput/index.vue"
import CusTextArea from "@/components/CusTextArea/index.vue"
import CusRadio from "@/components/CusRadio/index.vue"

export default {
  name: 'cusForm',
  components: {
    CusInput,
    CusTextArea,
    CusRadio,
  },
  data(){
    return {
      cusForm: [], // 自定义表单列表
    }
  },
  methods:{
    changeValue(e){
      const {value, _id} = e.detail
      let cusForm = this.data.cusForm.map(item => {
        item.child = item.child.map(v => {
          if(v._id === _id) {
            v.defaultValue = value
          }
          return v
        })
        return item
      })
      this.setData({cusForm})
    },
    async getParamsList(){
      let cusForm = [
        {
          id:1,
          name:'基本信息',
          child: [
            {id: 1,defaultValue: "",field: "name", state:true, name: "姓名",options: null,required: 0,type: "text"}, 
            {id: 2,defaultValue: "",field: "description", state:true, name: "个人简介",options: null,required: 0,type: "textarea"}, 
            {id: 3,defaultValue: "男",field: "gender", state:true, name: "性别",options: ["男", "女"],required: 0,type: "radio"}, 
            {id: 4,defaultValue: "兴趣1",field: "like", state:true, name: "兴趣爱好", options: ['兴趣1', '兴趣2'], required: 0, type:"checkbox"}, 
            {id: 5,defaultValue: "",field: "area", state:true, name: "地区选择", options: null, required: 0, type:"area"}, 
            {id: 6,defaultValue: "",field: "date", state:true, name: "日期选择", options: null, required: 0, type:"date"}, 
            {id: 7,defaultValue: "",field: "dateTime", state:true, name: "日期时间选择", options: null, required: 0, type:"dateTime"}, 
            {id: 8,defaultValue: "",field: "select", state:true, name: "下拉选择", options: null, required: 0, type:"select"}, 
            {id: 9,defaultValue: "",field: "person", state:true, name: "身份证号", options: null, required: 0, type:"person"}, 
          ]
        },
        {
          id:2,
          name: '所需材料',
          child:[
            {id: 1,defaultValue: "",field: "idcard_front", state:true, name: "图片", options: null, required: 0, type:"image"}, 
            {id: 2,defaultValue: "",field: "idcards", state:true, name: "多张图片", options: null, required: 0, type:"images"}, 
          ]
        }
      ]
      this.cusForm = cusForm.map(item => {
        item._id = guID()
        item.child = item.child.map(v => {
          v._id = guID()
          return v
        })
        return item
      })
    },
  },
  created(){
    // console.log(this.$route.query.type) // 如果传入的type是detail，那么就不允许修改
    this.getParamsList()
  },
  mounted(){

  },
}
</script>
<style scoped>

</style>