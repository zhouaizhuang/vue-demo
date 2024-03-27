// 获取所传递的日期所在月的天数数组数据，并将传入的日期选中
export const getDateArr = function (year, month) {
  const totalDays = _.getDays(year, month)
  const firstDayOfMon = _.socketTime(`${year}-${month}-01`)
  const endDayOfMon = _.socketTime(`${year}-${month}-${totalDays}`)
  // 当前所在月的天数数组
  const curMonthDays = new Array(totalDays).fill('').map((v, i) => String(i + 1)).map(v=>{
    const date = `${year}-${month}-${_.addZero(v,2)}`
    return { date,day: v,week: _.socketTime(`${year}-${month}-${_.addZero(v,2)}`).week, isDisabled: false, isChecked: false }
  })
  // 前面一段日期
  const prevDays = new Array(firstDayOfMon.week).fill('').map((v, i) => {
    const date = _.getDateStr(-1*i - 1, '-', firstDayOfMon.today)
    return { date, day: date.split('-').pop(), week: _.socketTime(date).week, isDisabled: true,isChecked: false}
  }).reverse()
  // 后面一段日期
  const nextDays = new Array(42 - prevDays.length - curMonthDays.length).fill('').map((v, i) => {
    const date = _.getDateStr(i + 1, '-', endDayOfMon.today)
    return { date, day: date.split('-').pop(), week: _.socketTime(date).week, isDisabled: true,isChecked: false}
  })
  const dateList = [...prevDays, ...curMonthDays, ...nextDays]
  console.log(dateList)
  return dateList
}
// 上一个月
export const prevMonth = function () {
  const prevMonth = _.addZero(Number(this.month) - 1, 2)
  if(prevMonth == 0) {
    this.year -= 1
  } else {
    this.month = prevMonth
  }
  const dateList = this.getDateArr(this.year, this.month)
  this.dateList = dateList.map(v => ({...v, isChecked: _.dateFormater('YYYY-MM-DD', v.date) == _.dateFormater('YYYY-MM-DD', this.date)}))
}
// 下一个月
export const nextMonth = function () {
  const nextMonth = _.addZero(Number(this.month) + 1, 2)
  if(nextMonth == 13) {
    this.year += 1
  } else {
    this.month = nextMonth
  }
  const dateList = this.getDateArr(this.year, this.month)
  this.dateList = dateList.map(v => ({...v, isChecked: _.dateFormater('YYYY-MM-DD', v.date) == _.dateFormater('YYYY-MM-DD', this.date)}))
}
// 下一年
export const prevYear = function () {
  this.year = Number(this.year) - 1
  const dateList = this.getDateArr(this.year, this.month)
  this.dateList = dateList.map(v => ({...v, isChecked: _.dateFormater('YYYY-MM-DD', v.date) == _.dateFormater('YYYY-MM-DD', this.date)}))
}
// 下一年
export const nextYear = function () {
  this.year = Number(this.year) + 1
  const dateList = this.getDateArr(this.year, this.month)
  this.dateList = dateList.map(v => ({...v, isChecked: _.dateFormater('YYYY-MM-DD', v.date) == _.dateFormater('YYYY-MM-DD', this.date)}))
}
// 选中当前天
export const selectCurDate = function (item) {
  this.$emit('setDate', item.date)
}