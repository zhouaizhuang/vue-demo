import { dom2Img, printPdfAndImg } from "@/utils/printDom.js"
// 打印模板
export const printTemplate = async function () {
  // 获取详情数据
  this.renderData = await this.$api.getPrintDetails()
  await _.wait(200) // 需要等待图片渲染到对应的图片上传组件中，否则直接打印。页面尚未渲染完成
  const imageList = await dom2Img(this.$refs['hainan'], {}, false)
  if (imageList.length > 0) {
    await printPdfAndImg(imageList)
  }
}