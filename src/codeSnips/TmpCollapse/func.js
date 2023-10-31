import { searchCover, guID } from "@/common.js"
// 对数据进行加工
export const processList = function () {
  this.collapseList = this.collapseList.map(v => ({ ...v, _id: guID(), isSpread: true }))
}
// 展开或者收起折叠面板
export const toogleSpread = async function (item) {
  this.collapseList = searchCover(this.collapseList, {_id: item._id}, v => ({ ...v, isSpread: !v.isSpread }))
}