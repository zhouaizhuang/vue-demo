import * as PDFJS from "pdfjs-dist/legacy/build/pdf"
PDFJS.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/legacy/build/pdf.worker.entry.js")
let pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js")
import workerSrc from "pdfjs-dist/legacy/build/pdf.worker.entry"
pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc
export const showpdf = function (pdfUrl) {
  PDFJS.getDocument({url:pdfUrl, rangeChunkSize:65536, disableAutoFetch:false}).promise.then(pdfDoc=>{
    this.numPages = pdfDoc.numPages // pdf的总页数
    this.pdfDoc = pdfDoc
    // 获取第1页的数据
    this.renderPage(this.pageNum)
  })
}
// 渲染某一页的pdf
export const renderPage = function (num) {
  this.pdfDoc.getPage(num).then(page =>{
    // 设置canvas相关的属性
    const canvas = this.$refs.pdfContainer
    const ctx = canvas.getContext("2d")
    const dpr = window.devicePixelRatio || 1
    const bsr = ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio || 1;
    const ratio = dpr / bsr
    const viewport = page.getViewport({ scale: 1 })
    canvas.width = viewport.width * ratio
    canvas.height = viewport.height * ratio
    canvas.style.width = viewport.width + "px"
    canvas.style.height = viewport.height + "px"
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    }
    page.render(renderContext)  // 数据渲染到canvas画布上
  })
}
// 上一页
export const prevPage = function () {
  if (this.pageNum <= 1) { return }
  this.pageNum--
  this.renderPage(this.pageNum)
}
// 下一页
export const nextPage = function () {
  if (this.pageNum >= this.numPages) { return }
  this.pageNum++
  this.renderPage(this.pageNum)
}