import { radioChecked } from "@/common.js"
// 单选
export const selectItem = function (item) {
  this.radioList = radioChecked(this.radioList, {id: item.id})
}