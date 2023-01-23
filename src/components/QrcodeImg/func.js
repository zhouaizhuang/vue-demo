 // 下载图片
 export const saveImg = function (){
  const fileName = this.fileName
  const img = document.getElementById('qrcode').getElementsByTagName('img')[0].src || ''
  let aLink = document.createElement('a')
  let blob = this.base64ToBlob(img)
  let evt = document.createEvent('HTMLEvents')
  evt.initEvent('click', true, true) // initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  aLink.download = fileName
  aLink.href = URL.createObjectURL(blob)
  aLink.click()
}
// base64转二进制图片
export const base64ToBlob = function (code) {
  let parts = code.split(';base64,')
  let contentType = parts[0].split(':')[1]
  let raw = window.atob(parts[1])
  let rawLength = raw.length
  let uInt8Array = new Uint8Array(rawLength)
  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i)
  }
  return new Blob([uInt8Array], { type: contentType })
}