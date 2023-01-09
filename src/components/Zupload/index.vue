<template>
  <div>
    <div class="f">
      <div
        class="mr20 rel rds5 ovh" style="width:80px;height:80px;"
        v-for="item in imgList" :key="item.id"
      >
        <div class="h100 topBg" :style="{backgroundImage: 'url(' + item.url + ')' }">
          <div class="trbl0 abs topMask zx100" style="background: rgba(0, 0, 0, 0.6);">
            <div class="h100 f ac xc">
              <Icon type="ios-eye-outline" class="gf poi" size="28"  @click.native="handleView(item.url)" />
              <Icon type="ios-trash-outline" class="gf poi" size="28" @click.native="handleRemove(item.id)"></Icon>
            </div>
          </div>
        </div>
      </div>
      <div class="f1 uploadBox">
        <Upload
          v-if="this.limit > this.imgList.length"
          ref="upload"
          :show-upload-list="false"
          :action="uploadUrl"
          :default-file-list="imgList"
          :before-upload="handleBeforeUpload"
          :on-success="handleSuccess"
          :on-error="handleError"
          :data="uploadData"
          :format="['jpg','jpeg','png']"
          :on-format-error="handleFormatError"
          :multiple="false"
          :headers="headers"
        >
          <div class='picture'></div>
        </Upload>
      </div>
      <Modal title="预览图" v-model="isShowPreview">
        <img :src="previewUrl" v-if="isShowPreview" style="width: 100%">
      </Modal>
    </div>
    <div class='gc fs12' v-if="max_size > 1024 * 1024">大小 {{Math.round(max_size/1024/1024)}}M 以下，建议尺寸 {{width}} x {{height}} px，(最多{{limit}}张)</div>
    <div class='gc fs12' v-else>大小 {{Math.round(max_size/1024)}}KB 以下，建议尺寸 {{width}} x {{height}} px，(最多{{limit}}张)</div>
  </div>
</template>
<script>
import { safeGet, guID } from "@/common.js"
import { getLocalStorage } from '../../common'
export default {
  props: {
    imgArr: {type: Array, default: function(){ return [] } },
    max_size: { type: Number, default: -1 },
    width: { type: Number, default: -1 },
    height: { type: Number, default: -1 },
    limit: { type: Number, default: -1 },
    format: { type: Array, default: function () { return ['jpg', 'jpeg', 'png'] } },
    fileType: { type: [Number, String], default: function(){ return 0 } }, // 0图片 1视频
  },
  data () {
    return {
      uploadData: {
        token: '',
        type: ''
      },
      imgList: [],
      isShowPreview: false, // 是否预览图片
      previewUrl: '', // 预览的大图
    }
  },
  methods: {
    getToken(){
      return getLocalStorage('token')
    },
    getTokenInfo() {
      const token = getLocalStorage('token')
      this.uploadData = { token, type: this.fileType }
    },
    handleBeforeUpload(event, file, fileList) {
      if (this.limit > 0 && this.imgList.length >= this.limit) {
        this.$Notice.info({ title: '无法上传', desc: `最多只能上传${this.limit}张图片` })
        return false
      }
      if (this.max_size > 0 && event.size > this.max_size) {
        this.$Notice.warning({ title: '文件大小超限', desc: `文件 ${event.name} 大小超过了限制` })
        return false
      }
      if (!this.uploadData.token) {
        let token = this.getToken()
        if (!token) {
          this.getTokenInfo()
        } else {
          this.uploadData.token = token
        }
      }
    },
    handleSuccess(event, file, fileList) {
      if (this.limit > 0 && this.imgList.length >= this.limit) {
        this.$Notice.info({ title: '上传失败', desc: `最多只能上传 ${this.limit} 张图片` })
        return false
      }
      const { url, size, height, width } = safeGet(() => file.response.data, {})
      if(!url) {
        this.$Notice.error({ title: '上传失败', desc: `没有获取到图片地址` })
        return false
      }
      this.imgList.push({ name: file.name, url, id: guID() })
      // 这行代码可以解决删除图片后上传一样的图片无法触发change事件，导致无法上传问题
      // this.$refs.upload.value = ''
      this.$emit('change', this.imgList)
      this.$Notice.success({ title: '文件上传成功', desc: `文件 ${file.name} 上传成功` })
    },
    handleError(event, file){
      this.$Notice.error({ title: '文件上传失败', desc: `文件 ${file.name} 上传失败` })
      this.getTokenInfo()
    },
    handleFormatError(file){
      this.$Notice.warning({ title: '文件格式不正确', desc: `文件 ${file.name} 格式不正确，请选择图片文件` })
    },
    handleView(url){
      this.isShowPreview = true
      this.previewUrl = url
    },
    handleRemove(id){
      this.imgList = this.imgList.filter(item => item.id !== id)
      this.$emit('change', this.imgList)
    }
  },
  watch: {
    imgArr: function(newVal, oldVal){
      this.imgList = newVal
    }
  },
  computed: {
    uploadUrl() {
      return process.env.BASE_URL + "/backend/common/upload"
    },
    headers () {
      return {
        Authorization: "Bearer " + this.getToken(),
      }
    },
  },
  created(){
    this.getTokenInfo()
  }
}
</script>
<style scoped>
  .uploadBox .ivu-form-item-content{
    line-height:1;
  }
  .topBg{
    background-repeat: no-repeat;      /*是否平铺,repeat-x横  repeat-y纵*/
    background-position: left top;    /*left right top bottom center 像素*/
    background-size:100% 100%;
  }
  .picture{
    display: inline-block;
    width:80px;
    height:80px;
    border:2px dashed #ccc;
    border-radius: 5px;
    position: relative;
  }
  .picture::before{
    content:'';
    position: absolute;
    width: 20px;
    height:2px;
    background-color: #ccc;
    border-radius:5px;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
  }
  .picture::after{
    content:'';
    position: absolute;
    width: 2px;
    height:20px;
    background-color: #ccc;
    border-radius:5px;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
  }
  .picture:hover::before{
    background-color: #1890ff;
  }
  .picture:hover::after{
    background-color: #1890ff;
  }
  .picture:hover{
    border-color: #1890ff;
  }
  .text{
    color: #ccc;
    font-size: 12px;
  }
  .topMask{
    display: none;
  }
  .topBg:hover .topMask{
    display: block;
  }
</style>
