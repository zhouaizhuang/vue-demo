import { base64ToFormData } from "@/utils/base64.js"
//初始化函数
export const imgLoad = function (msg) {
  console.log("工具初始化函数=====" + msg)
}
//图片缩放
export const changeScale = function (num) {
  num = num || 1
  this.$refs.cropper.changeScale(num)
}
//向左旋转
export const rotateLeft = function () {
  this.$refs.cropper.rotateLeft()
}
//向右旋转
export const rotateRight = function () {
  this.$refs.cropper.rotateRight()
}
//清除图片
export const removeImg = function () {
  this.$emit('setIsShow', false)
}
//实时预览函数
export const realTime = function (data) {
  this.previews = data
}
//选择图片
export const selectImg = function (e) {
  let file = e.target.files[0]
  let pos = file.name.lastIndexOf('.')
  let fileName = file.name.substring(0, pos);
  let fileType = file.name.substring(pos, file.name.length)
  this.fileObj = {
    ...this.fileObj,
    fileName,
    fileType
  }
  if (!/\.(jpg|jpeg|png|JPG|PNG|bmp|BMP)$/.test(e.target.value)) {
    this.$Message({
      message: '图片类型要求：jpeg、jpg、png',
      type: "error"
    });
    return false
  }
  //转化为blob
  let reader = new FileReader()
  reader.onload = (e) => {
    let data
    if (typeof e.target.result === 'object') {
      data = window.URL.createObjectURL(new Blob([e.target.result]))
    } else {
      data = e.target.result
    }
    this.option.img = data
    console.log(data)
  }
  console.log(file)
  reader.readAsDataURL(file)
}
//上传图片
export const uploadImg = function () {
  this.$refs.cropper.getCropData(async (data) => {
    // console.log(data)
    const formDatas = base64ToFormData(data)
    const res = await this.$request({
      method: "POST",
      url: '/admin-api/infra/file/upload',
      headers: { 'Content-Type': 'multipart/form-data' },
      transformRequest: [function (){return formDatas}],
      data: formDatas,
      params: formDatas
    })
    this.$emit('setItem', {...this.item, url:res.fileName})
    this.$emit('setIsShow', false)
  })
}
// 复原图片
export const toOrigin = function () {
  const oldItem = _.deepCopy(this.item)
  this.$emit('setItem', {})
  this.$emit('setIsShow', false)
  setTimeout(() => {
    this.$emit('setItem', oldItem)
    this.$emit('setIsShow', true)
  }, 100)
}
// 下载截图
export const downloadImg = function () {
  const url = this.item.url || ''
  _.downloadFile(url.split('/').pop(), url)
}
// 
export const changeModal = function () {
  
}