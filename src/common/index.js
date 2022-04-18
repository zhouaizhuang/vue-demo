import {
  shuffle, cached, toObject, sum, mean, adjust, array2Tree, once, makeMap, remove, repeat, sortByProp, noSame, getAreaFlat,
  getField, getChecked, chunk, splitAt, transformArr, splitWhen, intersect, difference, searchCover, groupBy
} from "./modules/array.js"
import {
  syncBgData, downloadFile, toFullScreen, exitFullscreen, random, randomColor, noCopy, getProps, safeGet, wait, deepCopy,
  guID, getScrollTop, scrollPos, getCookie, clearCookies,queryAll, query, getLocalStorage, setLocalStorage,
  getSessionStorage, setSessionStorage, getPosition, getViewHeight, getViewPos, showToast, removeCss, addCss, removeDom, addDom,
  show, hide, showLoading, hideLoading, setTitle, goUrl, checkPwd, c2f, f2s
} from "./modules/business.js"
import {
  isType,isArray,isObject, isEmptyObj, isReference, isNull, isUndefined, isFunction, isRegExp, isString, isNumber, isDate,
  isError, isGt0, isGtEq0, inBrowser, inWeex, weexPlatform, UA, isIE, isIE9, isEdge, isAndroid, isIOS, isWeChat, isChrome, isPhantomJS,
  isFF, isPhone, isIdentity, isEmail, getOS
} from "./modules/check.js"
import { compose, curry, debounce, throttling } from "./modules/func.js"
import { formatMoney, round, range, largeNumAdd } from "./modules/number.js"
import { extend, formatJSON, formatRes, checkJSON, JSON2url, invert, invertBy } from "./modules/object.js"
import { regTest } from "./modules/reg.js"
import { startWith, trim, sliceStr, addZero, length, copyLink, capitalize } from "./modules/string.js"
import { map2Obj, obj2Map } from "./modules/structure.js"
import { getDateStr, getDay, socketTime, dateFormater, afterNsecond, ms2Dhs, getDays, dayDiff, dayOfYear } from "./modules/timeDate.js"

export {
  // 数组
  shuffle, cached, toObject, sum, mean, adjust, array2Tree, once, makeMap, remove, repeat, sortByProp, noSame, getAreaFlat,
  getField, getChecked, chunk, splitAt, transformArr, splitWhen, intersect, difference, searchCover, groupBy,
  // 业务代码
  syncBgData, downloadFile, toFullScreen, exitFullscreen, random, randomColor, noCopy, getProps, safeGet, wait, deepCopy,
  guID, debounce, throttling, getScrollTop, scrollPos, getCookie, clearCookies,queryAll, query, getLocalStorage, setLocalStorage,
  getSessionStorage, setSessionStorage, getPosition, getViewHeight, getViewPos, showToast, removeCss, addCss, removeDom, addDom,
  show, hide, showLoading, hideLoading, setTitle, goUrl, checkPwd, c2f, f2s,
  // 校验
  isType, isArray, isObject, isEmptyObj, isReference, isNull, isUndefined, isFunction, isRegExp, isString, isNumber, isDate,
  isError, isGt0, isGtEq0, inBrowser, inWeex, weexPlatform, UA, isIE, isIE9, isEdge, isAndroid, isIOS, isWeChat, isChrome, isPhantomJS,
  isFF, isPhone, isIdentity, isEmail, getOS,
  // 高阶函数
  compose, curry,
  // 数字
  formatMoney, round, range, largeNumAdd,
  // 对象
  extend, formatJSON, formatRes, checkJSON, JSON2url, invert, invertBy,
  // 正则
  regTest,
  // 字符串
  startWith, trim, sliceStr, addZero, length, copyLink, capitalize,
  // 数据结构
  map2Obj, obj2Map,
  // 时间日期处理
  getDateStr, getDay, socketTime, dateFormater, afterNsecond, ms2Dhs, getDays, dayDiff, dayOfYear
}