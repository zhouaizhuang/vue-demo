import * as PDFJS from "pdfjs-dist/legacy/build/pdf";
PDFJS.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/legacy/build/pdf.worker.entry.js");
let pdfjsLib =require("pdfjs-dist/legacy/build/pdf.js");
import workerSrc from "pdfjs-dist/legacy/build/pdf.worker.entry";
pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
// 打印pdf
export const printPdf = async function () {
  let imageList = []
  for(let item of this.urls) {
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
  // console.log(imageList)
  this.printImages(imageList)
}
// 打印图片数组
export const printImages = function (imageList) {
  const iframe = document.createElement('iframe')
  iframe.style.position="relative"
  iframe.style.zIndex = 1000
  iframe.style.width = `${this.A4Width}px`
  iframe.style.height = `${this.A4Height}px`
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
  imageList.map((v, i) => this.createImg(v, i)).forEach(v => { iframeBody.appendChild(v) }) // 往body中加入dom
  Promise.all(imageList.map(loadImage)).then(v => { // 等待图片加载完毕
    console.log(iframeBody)
    const frameWindow = iframe.contentWindow
    frameWindow.focus()
    frameWindow.print() // 打印
    setTimeout(() => document.body.removeChild(iframe), 500) // 500ms后移除iframe标签
  })
}
// 加载图片对象
function loadImage(src){
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = src
    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error('load image failed'))
  })
}
// 创建图片对象
export function createImg(src, index){
  const image = new Image()
  image.width = this.A4Width
  image.height = this.A4Height
  image.src = src
  image.style.margin = 0
  image.style.padding = 0
  // image.style.margin = index == 2 ? '-37px 0 -30px 0' : '-67px 0 -30px 0'
  // image.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%)' // 对图片进行裁剪显示
  return image
}