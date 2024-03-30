import { addZero, getDays, socketTime, getDateStr, guID } from "@/common.js"
// 获取所传递的日期所在月的天数数组数据，并将传入的日期选中
export const getDateArr = function (year, month) {
  const totalDays = getDays(year, month)
  const firstDayOfMon = socketTime(`${year}-${month}-01`)
  const endDayOfMon = socketTime(`${year}-${month}-${totalDays}`)
  // 当前所在月的天数数组
  const curMonthDays = new Array(totalDays).fill('').map((v, i) => String(i + 1)).map(v=>{
    const day = addZero(v,2)
    const date = `${year}-${month}-${day}`
    return { id:guID(), date, year, month, day, _day: Number(v), disabled: false, isChecked: date == `${this._year}-${this._month}-${this._day}` }
  })
  // 前面一段日期
  const prevDays = new Array(firstDayOfMon.week).fill('').map((v, i) => {
    const date = getDateStr(-1*i - 1, '-', firstDayOfMon.today)
    const [year, month, day] = date.split('-')
    return { id:guID(), date, year, month, day: addZero(day,2), _day: Number(day), disabled: true, isChecked: false }
  }).reverse()
  // 后面一段日期
  const nextDays = new Array(42 - prevDays.length - curMonthDays.length).fill('').map((v, i) => {
    const date = getDateStr(i + 1, '-', endDayOfMon.today)
    const [year, month, day] = date.split('-')
    return { id:guID(), date, year, month, day, _day: Number(day), disabled: true, isChecked: false }
  })
  return [...prevDays, ...curMonthDays, ...nextDays]
}
// 上一个月
export const prevMonth = function () {
  const prevMonth = addZero(Number(this.month) - 1, 2)
  if(prevMonth == 0) {
    this.year = Number(this.year) - 1
    this.month = 12
  } else {
    this.month = prevMonth
  }
  this.dateList = this.getDateArr(this.year, this.month)
}
// 下一个月
export const nextMonth = function () {
  const nextMonth = addZero(Number(this.month) + 1, 2)
  if(nextMonth == 13) {
    this.year = Number(this.year) + 1
    this.month = 1
  } else {
    this.month = nextMonth
  }
  this.dateList = this.getDateArr(this.year, this.month)
}
// 下一年
export const prevYear = function () {
  this.year = Number(this.year) - 1
  this.dateList = this.getDateArr(this.year, this.month)
}
// 下一年
export const nextYear = function () {
  this.year = Number(this.year) + 1
  this.dateList = this.getDateArr(this.year, this.month)
}
// 选中当前天
export const selectCurDate = function (item) {
  this.$emit('setDate', item.date)
}
// 更新日期
export const updateDateList = function () {
  this.dateListPrev = this.getDateArr(..._.afterNMonthDate(`${this.year}-${this.month}-01`, -1).split('-'))
  this.dateList = this.getDateArr(this.year, this.month)
  this.dateListNext = this.getDateArr(..._.afterNMonthDate(`${this.year}-${this.month}-01`, 1).split('-'))
}
//滑动开始
export const touchStart = function(e) {
  // 记录初始位置
  this.startX = e.touches[0].clientX
  this.startY = e.touches[0].clientX
}
// 移动
export const touchMove = function (e) {
  const { clientX: endX, clientY: endY } = e.changedTouches[0]
  this.slideType = 'move'
  this.translateX = endX - this.startX
}
//滑动结束
export const touchEnd = function (e) {
  const { clientX: endX, clientY: endY } = e.changedTouches[0]
  if(Math.abs(endY - this.startY) < 100) {
    if(endX - this.startX > 20) {
      this.slideType = 'right'
      const [year, month] = _.afterNMonthDate(`${this.year}-${this.month}-01`, -1).split('-')
      this.year = year
      this.month = month
    } else if(endX - this.startX < -20) {
      this.slideType = 'left'
      const [year, month] = _.afterNMonthDate(`${this.year}-${this.month}-01`, 1).split('-')
      this.year = year
      this.month = month
    }
    setTimeout(() => {
      this.updateDateList()
      this.slideType = ''
      this.translateX = 0
    },150)
  }
}