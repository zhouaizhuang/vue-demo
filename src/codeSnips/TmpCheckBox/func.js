import { multipleChecked } from "@/common.js"
// 多选
export const checkedItem = function (item) {
  this.checkList = multipleChecked(this.checkList, {id: item.id})
}