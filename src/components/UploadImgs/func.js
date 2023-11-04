import { guID } from "@/common.js"
// 获取文件列表
export const getAndFormatFile = async function (files) {
  let formDatas = new FormData()
  const curFiles = Object.keys(files).map(v => files[v])
  const checkMsg = this.checkFile(curFiles)
  if(checkMsg) { return this.$Message.error(checkMsg) }
  // 本地图片显示, formData追加数据
  curFiles.forEach(v => {
    formDatas.append("file[]", v)
    const reader = new FileReader()
    reader.readAsDataURL(v)
    reader.onload = e => {
      // this.imgList = [...this.imgList, {id: guID(), url: e.target.result}] // 先显示本地图片
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
  // this.imgList = [...this.imgList.slice(0, -1), {...this.imgList.at(-1), url: res.fileName}]
  this.imgList = [...this.imgList, {id: guID(), url: res.fileName}]
  // console.log(this.imgList)
  this.$emit('setImgArr', this.imgList)
  // 清空表单的选中数据
  let inputDOM = this.$refs[this.refId]
  inputDOM.value = ''
}
