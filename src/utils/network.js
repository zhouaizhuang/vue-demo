import axios from "axios"
import qs from 'qs'
import { JSON2url, formatJSON, showToast, getLocalStorage } from "../common.js"

// console.log(process.env.VUE_APP_BASE_URL)
/************配置axios****** */
let service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10e3
})
/*
* 设置请求拦截器
* token一般存在vuex/redux/本地存储中
*/
service.interceptors.request.use(
  config => {
    // const token = getLocalStorage('token')
    // if(token) {
    //   // config.headers.Authorization = token
    //   config.headers['token'] = token
    // }
    config.data = qs.stringify(formatJSON(config.data))
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
/*
* 响应拦截器
*/
// service.interceptors.response.use(
//   res => { return res.data },
//   err => {
//     const { response } = err
//     if (response) {
//       switch (response.status) {
//         case 401: break // 权限问题，未登录
//         case 403: window.localStorage.removeItem('token'); break// token过期
//         case 404: break // 找不到页面
//       }
//     } else {
//       // 服务器结果都没返回（可能服务器崩了，或者断网了
//       if (!window.navigator.onLine) {
//         // 跳转到断网页面
//         console.log('你的网络连接有问题')
//         return
//       }
//       return Promise.reject(err)
//     }
//   }
// )

// 响应拦截demo2
// service.interceptors.response.use(
//   res => {
//     const {code, data, msg} = res
//     if(code == '401') {
//       location.href = '/login'
//     }
//     return Promise.resolve(res)
//   },
//   err => Promise.reject(err)
// )
// 封装一个request请求
export const request = function (options) {
  return service.request({
    method: "GET",
    url: '',
    data: {},
    ...options
  }).then(res => {
    const {errcode, errmsg} = res
    if(errcode == 200) {
      return res
    } else if(errcode == 10200 || errcode == 10210) { // 未登录和token过期
      removeSessionStorage('token')
      removeSessionStorage('roleId')
      Message.info('请登录')
      router.replace({ path: "/login" }).catch(() => {})
      return false
    } else { // 其他异常
      Message.error(JSON.stringify(errmsg) || `${options.url}报错，errmsg为空`);
      return false
    }
  })
}
// 处理入参
const resolveParams = params => {
  params = formatJSON(params || {})
  let postParam = isDebug ? { ...params, ...commonParam, debug: 1 } : { data: DES3.encrypt(JSON.stringify({...params, ...commonParam})) }
  return Qs.stringify(postParam)
}
/**
 * 封装一个post请求
 * @param {*} url 请求的url地址
 * @param {*} params 请求参数
 * @param {*} type 返回数据类型  1代表只返回data    0代表不做任何处理直接返回格式：{code:xx, data:xx, msg:xx}
 * @returns 
 */
export const post = function (url, params, type = 1) {
  return new Promise((resolve, reject) => {
    return service.post(url, resolveParams(params)).then(res => processError(res, url, type, resolve, reject))
  })
}
// 处理异常
export const processError = function (res, url, type, resolve, reject) {
  res = safeGet(() => res.errcode, false) ? res : JSON.parse(DES3.decrypt(res))
  const  {errcode, data, errmsg} = res
  if(errcode == 10200 || errcode == 10210) {  // 未登录和token过期
    removeSessionStorage('token')
    removeSessionStorage('roleId')
    router.replace({ path: "/login" }).catch(() => {})
    Message.info('请登录')
    reject('请登录')
  } else if(type == 0) {
    resolve(res)
  } else if(errcode == 200) {
    resolve(data)
  } else { // 其他异常
    Message.error(JSON.stringify(errmsg) || `${url}报错，errmsg为空`);
    reject(JSON.stringify(errmsg) || `${url}报错，errmsg为空`)
  }
// https://juejin.cn/post/7033395086696136711#heading-12
/**************************************************************************************************** */
/******************************************分******************************************************** */
/******************************************割******************************************************** */
/******************************************线******************************************************** */
/**************************************************************************************************** */
/**
 * 防止重复渲染的promise，只使用最后一次请求的结果
 */
 class AllowCancelPromise {
  constructor() {
    this._reject = new Map()
  }
  // 只请求第一次，后面的跳过请求
  startRequest(requestFn, url) {
    if(this._reject.get(url)) { return new Promise((_, reject) => {reject(`取消当前请求${url}`)}) } // console.log(this._reject)
    this._reject.set(url, url)
    return requestFn().then(res => res).finally(() => this._reject.delete(url))
  }
  // 保留最后一次请求的渲染
  endRequest(requestFn, url) {
    if (this._reject.get(url)) {
      this._reject.get(url)(`放弃上次请求的渲染${url}`)
      this._reject.delete(url)
    }
    const promiseA = new Promise((_, reject) => this._reject.set(url, reject)) // console.log(this._reject)
    return Promise.race([requestFn(), promiseA]).then(res => res).finally(() => this._reject.delete(url))
  }
}
const allowCancelPms = new AllowCancelPromise()
/**
 * 只请求第一次，接口返回之前其他请求被屏蔽
 * @param {*} url 请求的url地址
 * @param {*} params 请求参数
 * @param {*} type 返回数据类型  1代表只返回data    0代表不做任何处理直接返回格式：{code:xx, data:xx, msg:xx}
 * @returns 
 */
export const startPost = function (url, params, type = 1) {
  const promiseA = () => service.post(url, resolveParams(params))
  return new Promise((resolve, reject) => {
    allowCancelPms.startRequest(promiseA, url).then(res => processError(res, url, type, resolve, reject))
  })
}
/**
 * 重复请求，但是保留最后一次的结果
 * @param {*} url 请求的url地址
 * @param {*} params 请求参数
 * @param {*} type 返回数据类型  1代表只返回data    0代表不做任何处理直接返回格式：{code:xx, data:xx, msg:xx}
 * @returns 
 */
export const endPost = function (url, params, type = 1) {
  const promiseA = () => service.post(url, resolveParams(params))
  return new Promise((resolve, reject) => {
    allowCancelPms.endRequest(promiseA, url).then(res => processError(res, url, type, resolve, reject))
  })
}