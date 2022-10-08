import { setLocalStorage } from "../../../common.js"
// 点我
export const clickMe = function () {
  this.clickTimes += 1
  if(!this.isShowPage) {
    if(this.clickTimes >= 20) {
      setLocalStorage('isShowPage', true)
      this.isShowPage = true
    }
  }
}