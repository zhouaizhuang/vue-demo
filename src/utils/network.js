import axios from "axios"
import qs from 'qs'
import {JSON2url, formatJSON, showToast} from "@/common.js"
/***********获取token*****/
// function getToken(){
//   return window.localStorage.getItem('token')
// }
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
    // if(getToken()) {
    //   // config.headers.Authorization = getToken()
    //   config.headers['token'] = getToken()
    // }
    config.data = qs.stringify(config.data)
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
// 封装一个request请求
export const request = function (options) {
  return service.request({
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    url: '',
    data: {},
    ...options
  }).then(res => res.data)
}
// 封装一个get请求
export const get = function (url, params){
  return request({ method:'GET', url:JSON2url(url, params) }).then(res => {
    const {code, data, msg} = res || {}
    if(code) {
      showToast(msg || `${url}报错，msg为空`)
      return false
    } else {
      return data
    }
  })
}
// 封装一个post请求
export const post = function (url, params) {
  return request({ method:'POST', url, data: params }).then(res => {
    const {code, data, msg} = res || {}
    if(code) {
      showToast(msg || `${url}报错，msg为空`)
      return false
    } else {
      return data
    }
  })
}