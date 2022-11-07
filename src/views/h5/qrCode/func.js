import { Html5Qrcode } from 'html5-qrcode'
import { queryAll, isArray } from "../../../common.js"
// 获取相机
export const getCameras = async function () {
  const devices = await Html5Qrcode.getCameras()
  if (devices && devices.length) {
    // 如果有2个摄像头，1为前置的
    if (devices.length > 1) {
      this.cameraId = devices[1].id
    } else {
      this.cameraId = devices[0].id
    }
    this.devices = devices
  }
}
// 启动相机
export const start = async function () {
  this.isShowQrCode = true
  this.html5QrCode = new Html5Qrcode('qr-reader')
  this.html5QrCode.start(this.cameraId, // retreived in the previous step.
  {
    fps: 10, //  扫码的帧数
    qrbox: { width: 350, height: 350 } // 扫码的框
  },
  (decodedText, decodedResult) => {
    if (decodedText) {
      this.serviceCode = decodedText
      this.stop()
    }
  },
  (errorMessage) => {
    console.log(errorMessage)
  }).catch((err) => {
    console.log(`无法扫码: ${err}`)
  })
  // 强行更改页面的dom
  this.videoId = setInterval(() => {
    const dom = queryAll('video')
    if(isArray(dom) && dom.length > 0) {
      const video = dom[0]
      video.style.width = '100vw'
      video.style.maxWidth = '350px'
      clearInterval(this.videoId)
    }
  }, 50)
}
// 停止
export const stop = function () {
  this.html5QrCode.stop().then((ignore) => {
    this.isShowQrCode = false
    console.log('QR Code 关闭')
  }).catch(() => {
    console.log('Unable to stop scanning.')
  })
}
// 扫描二维码
export const scanfServiceCode = function () {
  this.start()
}