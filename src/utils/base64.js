 /**base64转formData */
 export function base64ToFormData(base64Img) {
  const binaryImageData = atob(base64Img.split(",")[1]);
  // 创建一个缓冲数组来存储二进制数据
  const buffer = new Uint8Array(binaryImageData.length);
  // 将二进制数据复制到缓冲数组中
  for (let i = 0; i < binaryImageData.length; i++) {
    buffer[i] = binaryImageData.charCodeAt(i);
  }
  // 将缓冲数组转换为 Blob 对象
  const blob = new Blob([buffer], { type: "image/png" });
  // 创建 FormData 对象并添加图像数据
  const formData = new FormData();
  formData.append("file", blob, "image.png");
  console.log("formData", formData);
  return formData
}
/**
* base64转文件。
* @举例子 this.base64ToFile(base64, 'picture.png', 'image/png')
* @param {*} obj base64,名称,格式
* @returns 对应的文件
*/
export function base64ToFile(base64, filename='picture.png', contentType='image/png') {
if(!isString(base64)) { throw new Error('传入的参数必须是个字符串') }
var arr = base64.split(',')  //去掉base64格式图片的头部
var bstr = atob(arr[1])   //atob()方法将数据解码
var leng = bstr.length
var u8arr = new Uint8Array(leng)
while (leng--) {
  u8arr[leng] = bstr.charCodeAt(leng) //返回指定位置的字符的 Unicode 编码
}
return new File([u8arr], filename, { type: contentType })
}
/**
* File 转 Base64
* @param file Object 文件对象流
*/
export function fileToBase64(file){
return new Promise((resolve) => {
  var reader = new FileReader()
  reader.readAsDataURL(file)  
  //读取后，result属性中将包含一个data:URL格式的Base64字符串用来表示所读取的文件
  reader.onload = function(e){
    resolve(e.target.result)
  }
})
}
/**
* Base64转Blob
* @param base64 String base64格式字符串
* @param contentType String blob对象的文件类型，如："image/png"
*/
export function base64ToBlob(base64, contentType){
var arr = base64.split(',')  //去掉base64格式图片的头部
var bstr = atob(arr[1])   //atob()方法将数据解码
var leng = bstr.length
var u8arr = new Uint8Array(leng)
while(leng--){
  u8arr[leng] =  bstr.charCodeAt(leng) //返回指定位置的字符的 Unicode 编码
}
var blob = new Blob([u8arr],{type:contentType})
var blobImg = {}
blobImg.url = URL.createObjectURL(blob )  //创建URL,
blobImg.name = new Date().getTime() + '.png'
return blobImg
}
/**
* Blob 转 Base64
* @param blob Object blob对象
*/
export function blobToBase64(blob){
return new Promise((resolve) => {
  var reader = new FileReader()
  reader.readAsDataURL(blob)  
  //读取后，result属性中将包含一个data:URL格式的Base64字符串用来表示所读取的文件
  reader.onload = function(e){
    resolve(e.target.result)
  }
})
}
// 二进制流转文件
export const blobToFile = function(blob, fileName, mimeType='image/png') {
return new File([blob], fileName, {type: mimeType})
}
export const getByteLen = function(val) {
var len = 0;
for (var i = 0; i < val.length; i++) {
  var a = val.charAt(i);
  if (a.match(/[^\x00-\xff]/ig) != null) {//\x00-\xff→GBK双字节编码范围
    len += 2;
  }
  else {
    len += 1;
  }
}
return len;
}