import axios from "axios"
import { loadJs } from "./common.js"
// 搜狐接口，只能定位到省
export const getProvinceBySouHu = async function () {
  return axios.get('http://pv.sohu.com/cityjson?ie=utf-8').then(res => {
    const [left, right] = res.data.split('=')
    const { cname } = JSON.parse(right.slice(0, -1)) || {}
    return cname
  })
}
// 高德地图，根据ip获得定位 ----> 只能定位到市
// 只能进行城市定位，返回所在城市的名称、中心点、城市编码、矩形边界等基本信息
// Geolocation新增getCityInfo方法，使用用户IP进行城市定位，返回所在城市的名称、中心点、城市编码、矩形边界等基本信息；   
export const getLocationByIp = async function () {
  // 高德地图
  await loadJs('http://webapi.amap.com/maps?v=2.0&key=c5d067e779ee525406906816e2b5b98f')
	const map = new AMap.Map('container', { resizeEnable: true })
  return new Promise((resolve, reject) => {
    map.plugin('AMap.Geolocation', function() {
      let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, 
        timeout: 10000,
      })
      geolocation.getCityInfo((status, result) => {
        if(status!='complete') {
          reject('定位失败')
        } else {
          resolve(result)
        }
      })
    })
  })
}
// 高德地图基于浏览器定位
// 除了获得市级别信息，还能获得更详细的信息
// ！！！！！由于Chrome、IOS10等已不再支持非安全域的浏览器定位请求，为保证定位成功率和精度，请尽快升级您的站点到HTTPS。
// https://lbs.amap.com/api/javascript-api/reference/location/#m_AMap.Geolocation
export const getLocationByBrowser = async function () {
  await loadJs('http://webapi.amap.com/maps?v=2.0&key=c5d067e779ee525406906816e2b5b98f')
  AMap.plugin('AMap.Geolocation', function() {
    var geolocation = new AMap.Geolocation({
      enableHighAccuracy: true, // 是否使用高精度定位，默认：true
      timeout: 10000, // 设置定位超时时间，默认：无穷大
      offset: [10, 20], // 定位按钮的停靠位置的偏移量
      zoomToAccuracy: true, //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false     
      position: 'RB' //  定位按钮的排放位置,  RB表示右下
    })
    geolocation.getCurrentPosition(function(status, result){
      if(status=='complete'){
        console.log(result)
      }else{
        console.log(result)
      }
    })
  })
}
