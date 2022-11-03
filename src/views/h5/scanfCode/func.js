export const reset = function (){
  this.codeReader.reset() // 重置
  this.textContent = null // 重置
}
// 识别服务码
export const scanfServiceCode = function () {
  this.reset()
  this.serviceCode = ''
  this.isShowServiceCode = true
  this.isShowDeviceCode = false
  this.openScan('serviceVideo')
}
// 识别设备码
export const scafDeviceCode = function () {
  this.reset()
  this.isShowServiceCode = false
  this.isShowDeviceCode = true
  this.deviceCode = ''
  this.openScan('devicevideo')
}
// 打开摄像头
export const openScan = async function (ref) {
  this.codeReader.getVideoInputDevices().then((videoInputDevices) => {
    // this.tipMsg = '正在调用后置摄像头...'
    // console.log('videoInputDevices', videoInputDevices);
    let firstDeviceId = videoInputDevices[0].deviceId // 默认获取第一个摄像头设备id
    const videoInputDeviceslablestr = JSON.stringify(videoInputDevices[0].label) // 获取第一个摄像头设备的名称
    if (videoInputDevices.length > 1) {
      const index = videoInputDeviceslablestr.includes('back') ? 0 : 1 // 判断是否后置摄像头
      firstDeviceId = videoInputDevices[index].deviceId
    }
    this.decodeFromInputVideoFunc(firstDeviceId, ref)
  }).catch((err) => {
    console.error(err);
  })
}
// 解码
export const decodeFromInputVideoFunc = function (firstDeviceId, ref) {
  this.codeReader.reset() // 重置
  this.textContent = null // 重置
  this.codeReader.decodeFromInputVideoDeviceContinuously(firstDeviceId, ref, (result, err) => {
    // this.tipMsg = '正在尝试识别...'
    this.textContent = null
    if (result) {
      this.textContent = result.text
      // console.log(this.textContent)
      if (this.textContent) {
        if(ref == 'serviceVideo') {
          this.isShowServiceCode = false
          this.serviceCode = this.textContent
        } else if(ref == 'devicevideo'){
          this.deviceCode = this.textContent
          this.isShowDeviceCode = false
        }
      }
    }
    if (err && !(err)) {
      // this.tipMsg = '识别失败'
      alert('识别失败')
    }
  })
}