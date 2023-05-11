import * as PDFJS from "pdfjs-dist/legacy/build/pdf";
PDFJS.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/legacy/build/pdf.worker.entry.js");
let pdfjsLib =require("pdfjs-dist/legacy/build/pdf.js");
import workerSrc from "pdfjs-dist/legacy/build/pdf.worker.entry";
pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
// 打印pdf
export const printPdf = function (pdfUrl) {
  pdfjsLib.getDocument(pdfUrl).promise.then((pdf) => {
    const totalPages = pdf.numPages
    let imageList = []
    for (let i = 1; i <= totalPages; i++) {
      pdf.getPage(i).then((page) => {
        const viewport = page.getViewport({scale: 1.0})
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = viewport.width
        canvas.height = viewport.height
        page.render({ canvasContext: ctx, viewport: viewport }).promise.then(() => {
          imageList.push(canvas.toDataURL('image/png'))
          console.log(imageList)
          if (imageList.length === totalPages) {
            this.printImages(imageList)
          }
        })
      })
    }
  })
}
// 打印图片数组
export const printImages = function (imageList) {
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none' // 隐藏iframe这样就不会被用户看到了
  document.body.appendChild(iframe)
  iframe.contentDocument.write('<html><head></head><body></body></html>')
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
  imageList.map(createImg).forEach(v => { iframeBody.appendChild(v) }) // 往body中加入dom
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
    // image.width = 200
    // image.height = 200
    image.src = src
    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error('load image failed'))
  })
}
// 创建图片对象
function createImg(src){
  const image = new Image()
  // image.width = 200
  // image.height = 200
  image.src = src
  return image
}