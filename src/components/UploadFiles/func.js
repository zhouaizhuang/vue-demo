import { guID } from "@/common.js"
// 检查文件
export const checkFile = function (curFiles) {
  // 前端做基础的校验
  // if(!curFiles.some(item => ['png','jpg','jpeg','gif','doc','docx','xls','xlsx','pdf','amr','mp3','mp4','avi','txt','zip','ppt','pptx'].some(v => item.type.includes(v)))) {
  //   return '您上传的文件格式不对'
  // } else
  if(curFiles.length + this.fileList.length > this.limit ){
    return `最多只能上传${this.limit}个文件`
  } else if(curFiles.some(v => v.size > this.maxSize)) {
    return '文件大小超过了限制'
  }
  return ''
}
// 读取文件
export const readFile = async function (files) {
  let formDatas = new FormData()
  const curFiles = Object.keys(files).map(v => files[v])
  if(curFiles.length > 1) {
    return this.$Message.error('每次只能上传一个文件')
  }
  const checkMsg = this.checkFile(curFiles)
  if(checkMsg) { return this.$Message.error(checkMsg) }
  // 本地图片显示, formData追加数据
  curFiles.forEach(v => {
    formDatas.append("file[]", v)
    const reader = new FileReader()
    reader.readAsDataURL(v)
    reader.onload = e => {
      // this.fileList = [...this.fileList, {id: guID(), url: e.target.result}] // 先显示本地图片
    }
  })
  formDatas.append("debug", 1)
  // 上传图片
  const res = await this.$request({
    method: "POST",
    url: '/admin-api/infra/file/upload',
    headers: { 'Content-Type': 'multipart/form-data' },
    transformRequest: [function (){return formDatas}],
    data: formDatas,
    params: formDatas
  })
  // 将最后上传的图片切换为网络图片
  // this.fileList = [...this.fileList.slice(0, -1), {...this.fileList.at(-1), url: res.fileName}]
  this.fileList = [...this.fileList, {id: guID(), url: res.fileName, name: curFiles[0].name}]
  this.$emit('setFileArr', this.fileList)
  // 清空表单的选中数据
  let inputDOM = this.$refs[this.refId]
  inputDOM.value = ''
}
// 改变文件
export const changeFile = function (e) {
  this.readFile(e.target.files)
}
// 鼠标进入
export const dropOver = function (e) {
  e.stopPropagation()
  e.preventDefault()
}
// 获取上传的文件
export const drop = function (e) {
  e.stopPropagation()
  e.preventDefault()
  this.readFile(e.dataTransfer.files)
}
// 删除
export const handleRemove = function (id){
  this.fileList = this.fileList.filter(item => item.id !== id)
  this.$emit('setFileArr', this.fileList)
}