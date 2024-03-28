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
    return { id:guID(), date, year, month, day, _day: Number(v), disabled: false, isChecked: date == `${this.year}-${this.month}-${this.day}` }
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
  this.dateList = [...prevDays, ...curMonthDays, ...nextDays]
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
  this.getDateArr(this.year, this.month)
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
  this.getDateArr(this.year, this.month)
}
// 下一年
export const prevYear = function () {
  this.year = Number(this.year) - 1
  this.getDateArr(this.year, this.month)
}
// 下一年
export const nextYear = function () {
  this.year = Number(this.year) + 1
  this.getDateArr(this.year, this.month)
}
// 选中当前天
export const selectCurDate = function (item) {
  this.$emit('setDate', item.date)
}