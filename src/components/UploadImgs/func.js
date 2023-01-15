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
    this.$emit('change', this.imgList)
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
  this.$emit('change', this.imgList)
}
// 获取文件列表
export const getAndFormatFile = async function () {
  let formDatas = new FormData()
  let inputDOM = this.$refs.uploadInput
  const files = inputDOM.files
  const curFiles = Object.keys(files).map(v => files[v])
  // 前端做基础的校验
  if(!curFiles.some(item => ['png', 'jpg', 'jpeg'].some(v => item.type.includes(v)))) {
    return this.$Message.error('您上传的文件格式不对')
  } else if(curFiles.length + this.imgList.length > this.limit ){
    return this.$Message.error(`最多只能上传${this.limit}张图片`)
  } else if(curFiles.some(v => v.size > this.max_size)) {
    return this.$Message.error('文件大小超过了限制')
  }
  // 本地图片显示, formData追加数据
  curFiles.forEach(v => {
    formDatas.append("file[]", v)
    const reader = new FileReader()
    reader.readAsDataURL(v)
    reader.onload = e => {
      const imgObj = {id: guID(), url: e.target.result}
      this.imgList = [...this.imgList, imgObj]
    }
  })
  formDatas.append("debug", 1)
  const res = await this.$request({
    method: "POST",
    headers: { 'Content-Type': 'multipart/form-data' },
    url:'/api/enclosure',
    transformRequest: [function (){
      return formDatas
    }],
    data: formDatas,
    params: formDatas
  })
  let { data = []} = res
  this.imgList = this.imgList.map((v, i) => {
    if(i == this.imgList.length - 1) {
      v.pathName = data[0].pathName
    }
    return v
  })
  inputDOM.value = ''
  this.$emit('change', this.imgList)
}
// 选择目录
export const selectFile = function () {
  let inputDOM = this.$refs.uploadInput
  inputDOM.click()
}