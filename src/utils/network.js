import axios from "axios"
import CryptoJS from 'crypto-js'
import { formatJSON, getSessionStorage, removeSessionStorage, downloadFile, safeGet, dateFormater } from "@/common.js"
import router from "../router/index.js"
import Qs from 'qs'
// import { Message } from 'view-design'
/**
 * 加密解密函数
 * encrypt： 加密函数
 * decrypt： 解密函数
 */
const utf8Key = CryptoJS.enc.Utf8.parse(process.env.VUE_APP_KEY) // 秘钥
const options = { iv: CryptoJS.enc.Utf8.parse(process.env.VUE_APP_IV), padding: CryptoJS.pad.Pkcs7, mode: CryptoJS.mode.CBC } // 生成配置项
export const encrypt = e => CryptoJS.TripleDES.encrypt(e, utf8Key, options).toString() // 加密
export const decrypt = e => CryptoJS.enc.Utf8.stringify(CryptoJS.TripleDES.decrypt(e.replace(/\s/g,''), utf8Key, options)) // 解密
/**
 * 页面调试debug开关
 * isDebug： true ----> 代表当前是开发环境不需要加密
 * isDebug： false ----> 代表当前是生产环境需要加密
 */
export const isDebug = process.env.VUE_APP_ENV == 'development' // 是否开启debug
export const requestUrl = isDebug ? process.env.VUE_APP_BASE_URL : `${window.location.protocol}//${window.location.host}`
/************配置axios****** */
let service = axios.create({
  baseURL: requestUrl,
  timeout: 10e3
})
/*
 * 设置请求拦截器
 * token一般存在vuex/redux/本地存储中
 */
service.interceptors.request.use(
  config => {
    const token = getSessionStorage('token') // 测试token:  "100.41b857bed9564d2792a5a995dbea44d7"
    if (token) {
      config.headers['token'] = token
    }
    if (isDebug) {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded"
    } else {
      config.headers.Accept = "application/json"
    }
    return config
  },
  err => Promise.reject(err)
)
/*
 * 响应拦截器
 */
service.interceptors.response.use(
  res => {
    // 加密模式 && 不是文件流请求
    if ((!isDebug) && !(res.data instanceof Blob)) {
      res.data = res.data && res.data.errcode ? res.data : JSON.parse(decrypt(res.data))
    }
    return res.data.errcode ? res.data : res
  },
  err => {
    const { response } = err
    if (response) {
      switch (response.status) {
        case 401: break // 权限问题，未登录
        case 403: removeSessionStorage('token'); break // token过期
        case 404: break // 找不到页面
      }
    } else {
      if (!window.navigator.onLine) { return Promise.reject('你的网络连接有问题') } // 服务器结果都没返回（可能服务器崩了，或者断网了
      return Promise.reject(err)
    }
  }
)
// 处理入参
const resolveParams = params => {
  params = formatJSON(params || {})
  const commonParam = { cityLcode: '320400', deviceId: 'PC', deviceType: 'PC', clientTime: new Date().getTime() }
  let postParam = isDebug ? { ...params, ...commonParam, debug: 1 } : { data: encrypt(JSON.stringify({ ...params, ...commonParam })) }
  return Qs.stringify(postParam)
}
// 处理异常
export const processError = function (res, url, type, resolve, reject) {
  // res = safeGet(() => res.errcode, false) ? res : JSON.parse(decrypt(res))
  if (errcode == 10200 || errcode == 10210) { // 未登录和token过期
    removeSessionStorage('token')
    removeSessionStorage('roleId')
    router.replace({ path: "/login" }).catch(() => {})
    iview.Message.info('请登录')
    reject('请登录')
  } else if (type == 0) {
    resolve(res)
  } else if (errcode == 200) {
    resolve(data)
  } else { // 其他异常
    iview.Message.error(JSON.stringify(errmsg) || `${url}报错，errmsg为空`)
    reject(JSON.stringify(errmsg) || `${url}报错，errmsg为空`)
  }
}
/**************************************************************************************************** */
/******************************************分******************************************************** */
/******************************************割******************************************************** */
/******************************************线******************************************************** */
/**************************************************************************************************** */
// 上传图片
export const uploadImg = function (url, formDatas, type = 1) {
  if(isDebug) { formDatas.append('debug',1) }
  return new Promise((resolve, reject) => {
    return service.request({
      method: "POST",
      headers: { 'Content-Type': 'multipart/form-data' },
      url,
      data: formDatas,
      params: formDatas,
      transformRequest: [function () { return formDatas }],
    }).then(res => processError(res, url, type, resolve, reject))
  })
}
/**
 * 导出excel等二进制流文件（接口传参，后端返回二进制流文件，前端再进行导出）
 * @param {String} url 接口请求地址
 * @param {JSON} params 接口传参
 * @param {String} defaultName 接口传参
 * @returns
 * @举例 exportFile('/api/pcExportOrdersList', {ids: '1231263231123,487752163678,123866742163'}) // 导出三条数据。具体传参需要跟后端去约定
 */
export const exportFile = function (url, params, defaultName = '') {
  return service.request({ method: "POST", url, data: resolveParams(params), responseType: 'blob' }).then(res => {
    if (!(res.headers['content-disposition'] && res.data)) { return iview.Message.error('导出失败') } // 检查是否返回了数据
    let fileName = safeGet(() => decodeURI(res.headers['content-disposition'].split('=')[1]), defaultName) || `${dateFormater('YYYY-MM-DD hh:mm:ss')}.txt` // 获取文件名
    downloadFile(fileName, res.data) // 文件名，二进制流数据
    return iview.Message.success('导出成功')
  })
}
// 封装一个request请求
export const request = function (options) {
  return new Promise((resolve, reject) => {
    return service.request({ method: "GET", url: '', data: {}, ...options}).then(res => {
      const { errcode, errmsg } = res
      if (errcode == 200) {
        resolve(res)
      } else if (errcode == 10200 || errcode == 10210) { // 未登录和token过期
        removeSessionStorage('token')
        removeSessionStorage('roleId')
        iview.Message.info('请登录')
        router.replace({ path: "/login"}).catch(() => {})
        reject('请登录')
      } else { // 其他异常
        const msg = JSON.stringify(errmsg) || `${options.url}报错，errmsg为空`
        iview.Message.error(msg)
        reject(msg)
      }
    })
  })
}
/**
 * 封装一个post请求
 * @param {String} url 请求的url地址
 * @param {JSON} params 请求参数
 * @param {Number|String} type 返回数据类型  1代表只返回data    0代表不做任何处理直接返回格式：{code:xx, data:xx, msg:xx}
 * @returns 
 * @举例 const res = await this.$post('/apprepair/editRepair', {id:1, name:'zz'})
 */
export const post = function (url, params, type = 1) {
  return new Promise((resolve, reject) => service.post(url, resolveParams(params)).then(res => processError(res, url, type, resolve, reject)))
}
/**
 * 防止重复请求，只请求第一次，在第一次结果返回之前。后续相同的url请求被屏蔽
 * @param {String} url 请求的url地址
 * @param {JSON} params 请求参数
 * @param {Number|String} type 返回数据类型  1代表只返回data    0代表不做任何处理直接返回格式：{code:xx, data:xx, msg:xx}
 * @returns 
 * @举例 const res = await this.$endPost('/apprepair/editRepair', {id:1, name:'zz'})
 */
export const startPost = (function () {
  const reqRecord = new Map() // 记录已发起但未返回的请求： url<--->reject方法
  return function (url, params, type = 1) {
    return new Promise((resolve, reject) => {
      if (reqRecord.get(url)) { return Promise.reject(`取消当前请求${url}`) }
      reqRecord.set(url, url)
      return service.post(url, resolveParams(params)).then(res => processError(res, url, type, resolve, reject)).finally(() => reqRecord.delete(url))
    })
  }
})()
/**
 * 可以重复请求，连续重复的url请求，只会渲染最后一次请求返回的结果
 * @param {String} url 请求的url地址
 * @param {JSON} params 请求参数
 * @param {Number|String} type 返回数据类型  1代表只返回data    0代表不做任何处理直接返回格式：{code:xx, data:xx, msg:xx}
 * @returns 
 * @举例 const res = await this.$endPost('/apprepair/editRepair', {id:1, name:'zz'})
 */
export const endPost = (function () {
  const reqRecord = new Map() // 记录已发起但未返回的请求： url<--->reject方法
  return function (url, params, type = 1) {
    const req = () => service.post(url, resolveParams(params))
    return new Promise((resolve, reject) => {
      if (reqRecord.get(url)) { reqRecord.get(url)(`放弃上次请求的渲染${url}`) } // 放弃请求
      const promiseA = new Promise((_, rej) => reqRecord.set(url, rej))
      return Promise.race([req(), promiseA]).then(res => processError(res, url, type, resolve, reject)).finally(() => reqRecord.delete(url))
    })
  }
})()

// 注册到全局vue
export default {
  install(Vue) {
    Vue.prototype.$exportFile = exportFile
    Vue.prototype.$uploadImg = uploadImg
    Vue.prototype.$request = request
    Vue.prototype.$post = post
    Vue.prototype.$startPost = startPost
    Vue.prototype.$endPost = endPost
  }
}