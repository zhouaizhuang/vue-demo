
import { downloadFile } from "@/common.js"
export const readExcel = async function (files) {
  // console.log(files)
  this.files = files
  if(files.length <= 0){//如果没有文件名
    return false;
  } else if(!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())){
    this.$Message.error('上传格式不正确，请上传xls或者xlsx格式')
    return false;
  }
  let formDatas = new FormData()
  formDatas.append("file",files[0])
  this.$emit('setModalType', 2)
  this.$request({
    method: "POST",
    headers: { 'Content-Type': 'multipart/form-data' },
    url: this.modalObj.importUrl,
    transformRequest: [function (){
      return formDatas
    }],
    data: formDatas,
    params: formDatas
  }).then(res =>{
    if(res) {
      this.$emit('setModalType', 3)
      this.importResult = res
    }
  }).catch(e => this.$emit('setModalType', 1))
}
// 下载文件
export const downloadExcel = function () {
  downloadFile(this.modalObj.failFileName, this.importResult.fileId)
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
  this.readExcel(e.dataTransfer.files)
}
// 改变文件
export const changeFile = function (e) {
  this.readExcel(e.target.files)
}
// 下载模板
export const downLoadTemplate = async function () {
  const res = await this.$request({
    method: "POST",
    url: this.modalObj.templateUrl,
    responseType: 'blob'
  }, 0)
  downloadFile(this.modalObj.templateFileName, res)
}
// 确认
export const confirm = function () {
  
}
// 关闭弹框
export const closeModal = function () {
  this.$emit('setModalType', 0)
}