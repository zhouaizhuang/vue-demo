// 鼠标进入
export const dropOver = function (e) {
  e.stopPropagation()
  e.preventDefault()
}
// 获取上传的文件
export const drop = function (e) {
  e.stopPropagation()
  e.preventDefault()
  this.getAndFormatFile(e.dataTransfer.files)
}
// 改变文件
export const changeFile = function (e) {
  this.getAndFormatFile(e.target.files)
}
// 选择目录
export const selectFile = function () {
  let inputDOM = this.$refs[this.refId]
  inputDOM.click()
}
// 拖拽开始
export const dragstart = function (e, index) {
  this.curIndex = index
}
// 拖拽进入
export const dragenter = function (e, index) {
  e.preventDefault()
  if(this.curIndex != index) {
    const source = this.imgList[this.curIndex]
    this.imgList.splice(this.curIndex, 1)
    this.imgList.splice(index, 0, source)
    this.curIndex = index
    this.$emit('setImgArr', this.imgList)
  }
}
// 拖拽
export const handleView = function (url){
  this.isShowPreview = true
  this.curImg = url
}
// 删除
export const handleRemove = function (id){
  this.imgList = this.imgList.filter(item => item.id !== id)
  this.$emit('setImgArr', this.imgList)
  this.curItem = {}
}
// 检查文件
export const checkFile = function (curFiles) {
  // 前端做基础的校验
  if(!curFiles.some(item => ['png', 'jpg', 'jpeg'].some(v => item.type.includes(v)))) {
    return '您上传的文件格式不对'
  } else if(curFiles.length + this.imgList.length > this.limit ){
    return `最多只能上传${this.limit}张图片`
  } else if(curFiles.some(v => v.size > this.maxSize)) {
    return '文件大小超过了限制'
  }
  return ''
}
// 编辑
export const handleEdit = function (item) {
  this.curItem = item
  this.isShowClip = true
}
// 设置是否显示
export const setIsShow = function (e) {
  this.isShowClip = e
  let inputDOM = this.$refs[this.refId]
  inputDOM.value = ''
}
// 设置当前条目
export const setItem = function (item) {
  this.imgList = _.searchCover(this.imgList, {id: item.id}, v => ({...v, url: item.url}))
  this.$emit('setImgArr', this.imgList)
  this.curItem = item
}