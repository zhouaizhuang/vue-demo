import { printDom } from "@/utils/printDom.js"
// 打印模板
export const printTemplate = async function () {
  // 获取详情数据
  this.renderData = await this.$api.getPrintDetails()
  this.$nextTick(() => {
    printDom(this.$refs['hainan'], this.renderData)
  })
}