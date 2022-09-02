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

// https://juejin.cn/post/7033395086696136711#heading-12
export class AllowCancelPromise {
  constructor() {
    this._pendingPromise = new Map()
    this._reject = new Map()
  }
  request(requestFn, url) {
    url = url.replace('/', '_')
    if (this._pendingPromise.get(url)) { this.cancel('取消重复请求', url) }
    const promiseA = new Promise((_, reject) => this._reject.set(url, reject))
    this._pendingPromise.set(url, Promise.race([requestFn(), promiseA]))
    return Promise.race([requestFn(), promiseA]).then(res => res).finally(() => {
      this._pendingPromise.delete(url)
      this._reject.delete(url)
    })
  }
  cancel(reason, url) {
    this._reject.get(url) && this._reject.get(url)(reason)
    this._pendingPromise.delete(url)
    this._reject.delete(url)
  }
}
const allowCancelPms = new AllowCancelPromise()
// 封装一个request请求
export const request = function (options) {
  return service.request({
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", // multipart/form-data
    },
    url: '',
    data: {},
    ...options
  }).then(res => res.data)
}
// 封装一个get请求
export const get = function (url, params){
  const promiseA = seservice.get(JSON2url(url, params))
  return allowCancelPms.request(promiseA, url).then(res => res).catch(console.log)
}
// 封装一个前置不做处理的post请求
export const prevPost = function (url, params) {
  const promiseA = service.post(url, params)
  return allowCancelPms.request(promiseA, url).then(res => res).catch(console.log)
}
// 封装一个post请求
export const post = function (url, params) {
  return prevPost(url, params).then(res => {
    const {code, data, msg} = res || {}
    if(code) {
      showToast(JSON.stringify(msg) || `${url}报错，msg为空`)
      return false
    } else {
      return data
    }
  }).catch(console.log)
}