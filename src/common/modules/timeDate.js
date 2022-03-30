import { isDate, isString } from "./check"
import { addZero } from "./string"
/**
 * 获取日期字符串。
 * @param AddDayCount 传0代表今天，传1代表明天
 * @param split 日期分割符
 * @举例 getDateStr(0) ---> 20200904    getDateStr(1) ---> 20200905
 * @举例 分割：getDateStr(1, '-')--->2020-09-05
 */
export const getDateStr = function (AddDayCount = 0, split = '') {
  const dt = new Date()
  dt.setDate(dt.getDate() + AddDayCount) // 获取AddDayCount天后的日期
  return `0000${dt.getFullYear()}`.slice(-4) + split + `00${(dt.getMonth() + 1)}`.slice(-2) + split + `00${dt.getDate()}`.slice(-2)
}
/**
 * 获取星期几， 不传默认是今天
 * @param t 时间格式字符串比如： '2021-10-01'   当然，也同时支持传入new date('2021-10-01')生成的对象
 * @举例 getDay('2020-03-05') ---> 返回的就是这个日期对应的星期几
 * @举例 getDay() // 默认返回当天星期几
 */
export const getDay = function (t = new Date()) {
  if(!isDate(t)) { t = t.replace(/[-]/g, "/") } // 为了兼容ios
  let day = t ? new Date(t).getDay() : new Date().getDay()
  return '星期' + "日一二三四五六"[day]
}
/**
 * 获取时间
 * @param t 时间格式字符串比如： '2021-10-01'   当然，也同时支持传入new date('2021-10-01')生成的对象
 * @举例 socketTime('2020-03-05') ---> 返回的就是2020年3月5日的年月日数据
 * @举例 socketTime() // 默认返回当天数据
 */
export const socketTime = function (t = new Date()) {
  if(!isDate(t) && isString(t)) { t = t.replace(/[-]/g, "/") }
  const dt = new Date(t)
  const year = String(dt.getFullYear())
  const _month = String(dt.getMonth() + 1)
  const month = addZero(_month, 2)
  const day = addZero(dt.getDate(), 2)
  const _day = String(dt.getDate())
  const weekDay = String(dt.getDay())
  const _weekDay = '星期' + "日一二三四五六"[weekDay]
  const hour = addZero(dt.getHours(), 2)
  const minutes = addZero(dt.getMinutes(), 2)
  const seconds = addZero(dt.getSeconds(), 2)
  return { year, month, _month, day, _day, weekDay, _weekDay, hour, minutes, seconds }
}
/**
 * 生成格式化时间字符串
 * @param {*} formater 时间格式
 * @param {*} t 传入的时间
 * @returns 处理之后的时间数据
 * @举例 dateFormater('YYYY-MM-DD hh:mm') ==> 2019-06-26 18:30
 * @举例 dateFormater('YYYYMMDD-hh:mm:ss', '2020-08-12 09:13:54') ==> 20200812-09:13:54
 */
export const dateFormater = function (formater = 'YYYY-MM-DD hh:mm:ss', t = new Date()){
  if(!isDate(t) && isString(t)) { t = t.replace(/[-]/g, "/") }
  const dt = new Date(t)
  const [Y, M, D, h, m, s] = [dt.getFullYear() + '', dt.getMonth() + 1, dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds()]
  return formater.replace(/YYYY|yyyy/g, Y)
    .replace(/YY/g, Y.slice(2, 4))
    .replace(/MM/g, addZero(M, 2))
    .replace(/DD/g, addZero(D, 2))
    .replace(/hh/g, addZero(h, 2))
    .replace(/mm/g, addZero(m, 2))
    .replace(/ss/g, addZero(s, 2))
}

/**得到当前时间之后N秒的时间
 * @param {*} after 多少秒之后的时间
 * @举例 afterNsecond(20)  // 20s之后的时间
 */
export const afterNsecond = function (after = 60) {
  const dt = new Date()
  return new Date(dt.getTime() + after * 1000)
}

/**
 * 将毫秒数转换成天、时、分、秒、毫秒
 * @param {Number} leftMs 剩余的时间，毫秒数
 * @param {String} formater 时间格式
 * @param {Number} strType 字符串的格式是否隐藏0。  0：隐藏0
 * @param {Number} timeType 时间类型是否补0。  1：补0     0：不需要补0
 * @returns 
 * @举例 ms2Dhs(62e3) ---> {formateStr: '01分钟02秒', d: 0, h: '00', m: '01', s: '02', ms: '500'}
 */
export const ms2Dhs = function (formater = 'dd天hh小时mm分钟ss秒', leftMs, strType = 0) {
  let d = Math.floor(leftMs / 1000 / 60 / 60 / 24)
  let h = Math.floor(leftMs / 1000 / 60 / 60 % 24)
  let m = Math.floor(leftMs / 1000 / 60 % 60)
  let s = Math.floor(leftMs / 1000 % 60)
  let ms = Math.floor(leftMs % 1000)
  if(strType == 0) { // 字符串类型，如果0则不显示
    let regStr = ''
    if(d > 0) { regStr = 'dd' }
    else if(h > 0) { regStr = 'hh' }
    else if(m > 0) { regStr = 'mm' }
    else if(s > 0) { regStr = 'ss' }
    else if(ms > 0) { regStr = 'ms' }
    else { formater = '' }
    formater = formater.slice(formater.indexOf(regStr))
  }
  ;[h, m, s, ms] = [addZero(h, 2), addZero(m, 2), addZero(s, 2), addZero(ms, 3)]
  return formater.replace(/dd/g, d)
    .replace(/hh/g, h)
    .replace(/mm/g, m)
    .replace(/ss/g, s)
    .replace(/ms/g, ms)
}
/**
 * 根据年和月，得出该年月有多少天。（原理：计算出他的下个月， 用它的下个月生成毫秒数-当前月毫秒数再除以一天的毫秒数===天数）
 * @param {String} year 
 * @param {String} month 
 * @returns 
 * @举例子 getDays(2021, 11) ---> 30
 */
 export const getDays = function(year, month) {
  let nextMoth = Number(month) + 1
  let nextYear = Number(year)
  if (nextMoth === 13) {
    nextMoth = 1
    nextYear++
  }
  let currentDate = year + '-' + month + '-1'
  let nextDate = nextYear + '-' + nextMoth + '-1'
  let yearObjOne = new Date(currentDate)
  let yearObjTwo = new Date(nextDate)
  let milliseconds = yearObjTwo.getTime() - yearObjOne.getTime()
  let daymilliseconds = 3600 * 24 * 1000
  return milliseconds / daymilliseconds
}
/**
 * 日期一和日期二之间的间隔的天数
 * @param {*} date1 日期一
 * @param {*} date2 日期二
 * @returns 
 * @举例 dayDif("2021-11-3", "2022-2-1") ----> 90
 */
 export const dayDiff = (date1, date2) => Math.ceil(Math.abs(new Date(date1.replace(/[-]/g, "/")).getTime() - new Date(date2.replace(/[-]/g, "/")).getTime()) / 86400000) // 86400 === 24 * 60 * 60 秒
 /**
  * 查出日期位于一年中的第多少天
  * @param {Date || String || Number} date 传入日期
  * @returns 传入的日期是一年中的第多少天
  * @举例 dayOfYear(new Date()) ----> 307
  */
 export const dayOfYear = date => Math.floor((date - new Date(date.slice(0, 4), 0, 0)) / 1000 / 60 / 60 / 24)