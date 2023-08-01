// 中文日期转数字
export const chineseDateToNumber = function (chineseDate) {
  const yearMap = {
    '0': 0, 'O': 0, '〇': 0, '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '十': 10, '十一': 11, '十二': 12,
  }
  const monthMap = {
    '正': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '十': 10, '十一': 11, '腊': 12, '冬': 11,
    '闰正': 1, '闰二': 2, '闰三': 3, '闰四': 4, '闰五': 5, '闰六': 6, '闰七': 7, '闰八': 8, '闰九': 9, '闰十': 10, '闰十一': 11, '闰冬': 11, '闰腊': 12,
  }
  const dayMap = {
    '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '十': 10, '十一': 11, '十二': 12,
    '十三': 13, '十四': 14, '十五': 15, '十六': 16, '十七': 17, '十八': 18, '十九': 19, '二十': 20, '廿一': 21, '廿二': 22,
    '廿三': 23, '廿四': 24, '廿五': 25, '廿六': 26, '廿七': 27, '廿八': 28, '廿九': 29, '三十': 30, '三十一': 31,
  }
  let [year, res1] = chineseDate.split('年')
  let [month, day] = res1.split('月')
  year = year.split('').map(v => yearMap[v]).join('')
  month = monthMap[month.replace('闰', '')]
  day = day.replace('初', '')
  day = dayMap[day]
  return { year: Number(year), month, day }
}
// 判断当前月有多少天
export const getDaysByMonth = function (year, month) {
  return new Date(year, month + 1, 0).getDate()
}
// 当前月的第一天是星期几
export const getFirstDayByMonths = function (year, month) {
  return new Date(year, month, 1).getDay()
}
// 当前月的最后一天是星期几
export const getLastDayByMonth = function (year, month) {
  // return new Date(year, month + 1, 0).getDay()
  const lastDay = new Date(year, month + 1, 0).getDate();
  return new Date(year, month, lastDay).getDay();
}