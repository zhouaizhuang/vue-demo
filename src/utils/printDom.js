/*pdf转图片*/
import * as PDFJS from "pdfjs-dist/legacy/build/pdf"
PDFJS.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/legacy/build/pdf.worker.entry.js")
let pdfjsLib =require("pdfjs-dist/legacy/build/pdf.js")
import workerSrc from "pdfjs-dist/legacy/build/pdf.worker.entry"
pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc
/*html转canvas转图片*/
import html2canvas from 'html2canvas'
import { getImgs, getViewPos } from "@/common.js"
// 创建图片对象
function createImg(src, width = 80, height = 80){
  const image = new Image()
  image.crossOrigin = "anonymous"
  image.width = width
  image.height = height
  image.src = src
  image.style.margin = 0
  image.style.padding = 0
  // image.classList.add('no-footer')
  // image.style.margin = index == 2 ? '-37px 0 -30px 0' : '-67px 0 -30px 0'
  // image.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%)' // 对图片进行裁剪显示
  return image
}
// 加载图片对象
function loadImage(src, width = 80, height = 80){
  return new Promise(async (resolve, reject) => {
    const image = new Image()
    image.crossOrigin = "anonymous"
    image.src = src
    image.width = width
    image.height = height
    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error('图片加载失败'))
  })
}
/**
 * dom转图片
 * @param {*} dom 需要打印的报告组件的dom结点 
 * @param {*} renderData 组件渲染需要的数据
 * @param {*} isAuto 是否自动裁剪分页   默认为自动裁剪分页。传入false则为手动在模板中分页
 * dom2Img(this.$refs['hainan'], {})
 */
export async function dom2Img (dom, renderData, isAuto = true) {
  if(isAuto) {
    /**方案2：自动分页截图 */
    // // 0、获取全部数据中的图片，并等待他们全部加载完毕。从而保证在截图之前，dom已经全部渲染完毕
    await Promise.all(getImgs(renderData).map(loadImage))
    // 1、html转canvas。(注意是一页一页的截图，那么也就意味着，在HaiNan模板中，必须按照ref="hainan1"、ref="hainan2"的格式实现划分好)
    const content = dom['$refs'].page1
    const totalHeight = content.scrollHeight
    let [scale, perWidth, perHeight, offset, screenshots] = [2, 794, 1120, 0, []]
    const canvasArr = await Promise.all(Object.keys(dom['$refs']).map(item => html2canvas(dom['$refs'][item], {
      scale: scale,
      // width: 794,
      // height: totalHeight,
      useCORS: true
    })))
    const imgArr = canvasArr.map(v => v.toDataURL('image/jpg'))
    const totalPages = Math.ceil(totalHeight / perHeight)
    for (var i = 0; i < totalPages; i++) {
      var canvas = document.createElement('canvas') // 创建一个新的canvas元素，用于绘制每一页的内容
      var ctx = canvas.getContext('2d')
      canvas.width = perWidth // 设置canvas的宽度等于当前窗口的宽度
      canvas.height = perHeight // 设置canvas的高度等于一页纸的高度
      const res = await loadImage(imgArr[0], perWidth, perHeight)
      ctx.drawImage(res, 0, offset * scale, canvas.width * scale, perHeight * scale, 0, 0, perWidth, perHeight) // 将内容的一部分绘制到canvas上
      screenshots.push(canvas.toDataURL('image/png')) // 将canvas添加到截图数组中
      offset += perHeight // 更新偏移量，准备绘制下一页的内容
    }
    return screenshots
  } else {
    /**方案1：手动分页截图 */
    // 0、获取全部数据中的图片，并等待他们全部加载完毕。从而保证在截图之前，dom已经全部渲染完毕
    await Promise.all(getImgs(renderData).map(loadImage))
    // 1、html转canvas。(注意是一页一页的截图，那么也就意味着，在HaiNan模板中，必须按照ref="hainan1"、ref="hainan2"的格式实现划分好)
    const canvasArr = await Promise.all(Object.keys(dom['$refs']).map(item => {
        const curDom = dom['$refs'][item]
        // console.log(curDom)
        return html2canvas(_.isArray(curDom) ? curDom[0] : curDom, {
          scale: 2,
          // canvas: document.createElement("canvas"),
          // width: 1120,
          // height: 794,
          useCORS: true
        })
      }
    ))
    // console.log(canvasArr)
    // // 1、canvas转base64图片
    const imgArr = canvasArr.map(v => v.toDataURL('image/jpg'))
    return imgArr
  }
}
/**
 * 打印图片数组
 * @param {*} imageList ['https://xxx1.png','https://xxx1.png','https://xxx1.png',]
 * @param {*} width 宽度
 * @param {*} hidth 高度
 * @returns 
 * @举例子 await printImages(['https://xxx1.png','https://xxx1.png','https://xxx1.png',])
 */
const printImages = function (imageList = [], width = 794, hidth = 1120) {
  const iframe = document.createElement('iframe')
  iframe.style.position="relative"
  iframe.style.zIndex = 1000
  iframe.style.width = `${width}px`
  iframe.style.height = `${hidth}px`
  iframe.style.display = 'none' // 隐藏iframe这样就不会被用户看到了
  document.body.appendChild(iframe)
  iframe.contentDocument.write('<html><head></head><body style="margin:0;padding:0;"></body></html>')
  iframe.contentDocument.close()
  let iframeBody = iframe.contentDocument.getElementsByTagName('body')[0];
  // var pObj = document.createElement("div") // 创建，写内容
  // pObj.innerHTML = `
  //   <div style="display:flex;padding: 20px 0;font-size:24px;">
  //     <div style="width:100px;">姓名:</div>
  //     <div style="flex:1;">张三</div>
  //   </div>
  // `
  // iframeBody.appendChild(pObj)
  imageList.map(v=> createImg(v, width, hidth)).forEach(v => { iframeBody.appendChild(v) }) // 往body中加入dom
  return Promise.all(imageList.map(loadImage)).then(v => { // 等待图片加载完毕
    const frameWindow = iframe.contentWindow
    frameWindow.focus()
    frameWindow.print() // 打印
    setTimeout(() => document.body.removeChild(iframe), 500) // 500ms后移除iframe标签
  })
}
/**
 * 调用此函数立刻可以打印传入的pdf和图片
 * @param {*} urls ['https://xxxx.pdf', 'https://xxxx.png', 'http://xxxx.jpg']
 * @举例子 printPdfAndImg(['https://xxxx.pdf', 'https://xxxx.png', 'http://xxxx.jpg'])
 */
export const printPdfAndImg = async function (urls = []) {
  let imageList = []
  for(let item of urls) {
    if(item.includes('.pdf')) {
      const pdf = await pdfjsLib.getDocument(item).promise
      const totalPages = pdf.numPages
      for (let i = 1; i <= totalPages; i++) {
        const page = await pdf.getPage(i)
        const viewport = page.getViewport({scale: 2.0})
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = viewport.width
        canvas.height = viewport.height
        await page.render({ canvasContext: ctx, viewport: viewport }).promise
        // 对canvas进行裁剪
        // const imageData = ctx.getImageData(0, 200, viewport.width, viewport.height - 200)
        // 清除canvas画布
        // ctx.clearRect(0,0,canvas.width,canvas.height)
        // 重新绘制到画布上
        // ctx.putImageData(imageData, 0, 0);
        imageList.push(canvas.toDataURL('image/png'))
      }
    } else {
      imageList.push(item)
    }
  }
  await printImages(imageList)
}
// // 获取图片尺寸
// function getImgSize (str) {
//   //获取base64图片大小，返回KB数字
//   var str = str.replace('data:image/jpeg;base64,', '');//这里根据自己上传图片的格式进行相应修改
//   var strLength = str.length;
//   var fileLength = parseInt(strLength - (strLength / 8) * 2);
//   // 由字节转换为KB
//   var size = "";
//   size = (fileLength / 1024).toFixed(2);
//   return parseInt(size);
// }
// // 压缩base64
// function compress(base64String, w, quality) {
//   var getMimeType = function (urlData) {
//       var arr = urlData.split(',');
//       var mime = arr[0].match(/:(.*?);/)[1];
//       // return mime.replace("image/", "");
//       return mime;
//   };
//   var newImage = new Image();
//   var imgWidth, imgHeight;
//   var promise = new Promise(function (resolve) {
//     newImage.onload = resolve;
//   });
//   newImage.src = base64String;
//   return promise.then(function () {
//     imgWidth = newImage.width;
//     imgHeight = newImage.height;
//     var canvas = document.createElement("canvas");
//     var ctx = canvas.getContext("2d");
//     if (Math.max(imgWidth, imgHeight) > w) {
//       if (imgWidth > imgHeight) {
//         canvas.width = w;
//         canvas.height = w * imgHeight / imgWidth;
//       } else {
//         canvas.height = w;
//         canvas.width = w * imgWidth / imgHeight;
//       }
//     } else {
//       canvas.width = imgWidth;
//       canvas.height = imgHeight;
//     }
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height);
//     var base64 = canvas.toDataURL(getMimeType(base64String), quality);   
//     return base64;
//   })
// }
