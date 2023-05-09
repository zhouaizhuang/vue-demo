import * as XLSX from 'xlsx/xlsx.mjs'
export const readExcel = function (files) {
  if(files.length <= 0){//如果没有文件名
    return false;
  } else if(!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())){
    this.$Message.error('上传格式不正确，请上传xls或者xlsx格式')
    return false;
  }
  const fileReader = new FileReader()
  fileReader.onload = (ev) => {
    try {
      const data = ev.target.result
      const workbook = XLSX.read(data, {type: 'binary'})
      const wsname = workbook.SheetNames[0] //取第一张表
      const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]) //生成json表格内容
      console.log(ws)
      this.outputs = [] //清空接收数据
      //编辑数据
      for(var i= 0;i<ws.length;i++){
        var sheetData = {address: ws[i].addr, value: ws[i].value }
        this.outputs.push(sheetData)
      }
      this.$refs.upload.value = ''
    } catch (e) {
      return false
    }
  }
  fileReader.readAsBinaryString(files[0])
}
// 改变文件
export const changeFile = function (e) {
  this.readExcel(e.target.files)
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
