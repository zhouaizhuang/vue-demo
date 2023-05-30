import { query, getViewPos } from "@/common.js" 
import * as PDFJS from "pdfjs-dist/legacy/build/pdf"
PDFJS.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/legacy/build/pdf.worker.entry.js")
let pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js")
import workerSrc from "pdfjs-dist/legacy/build/pdf.worker.entry"
pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc
export const showpdf = function (pdfUrl) {
  PDFJS.getDocument({url:pdfUrl, rangeChunkSize:65536, disableAutoFetch:false}).promise.then(pdfDoc=>{
    this.reportPdf.totalPage = pdfDoc.numPages // pdf的总页数
    this.pdfDoc = pdfDoc
    // 获取第1页的数据
    for(let i = 1; i <= this.reportPdf.totalPage; i++) {
      window.requestAnimationFrame(() => {
        this.renderPage(`eyeReport${i}`, i)
      })
    }
  })
}
// 渲染某一页的pdf
export const renderPage = function (dom, num) {
  this.pdfDoc.getPage(num).then(page =>{
    // 设置canvas相关的属性
    const canvas = this.$refs[dom][0]
    const ctx = canvas.getContext("2d")
    const dpr = window.devicePixelRatio || 1
    const bsr = ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio || 1;
    const ratio = dpr / bsr
    const scale = 4
    const viewport = page.getViewport({ scale })
    canvas.width = viewport.width * ratio
    canvas.height = viewport.height * ratio
    const {width: fatherWidth} = getViewPos(this.$refs.outerCanvasBox)
    canvas.style.width = fatherWidth - 60 + "px"
    canvas.style.height = (fatherWidth - 60) * 1.415 + "px"
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    }
    page.render(renderContext)  // 数据渲染到canvas画布上
  })
}
export const bindObserve = function (){
  // 观察者创建
  const observer = new IntersectionObserver(entries => {
    entries.forEach(async item => {
      const { intersectionRatio, target } = item
      if(intersectionRatio > 0) {
        if(this.reportPdf.page < this.reportPdf.totalPage) {
          this.reportPdf.page += 1
        //  console.log('加载下一页',this.reportPdf.page )
        } else {
          this.reportPdf.isShowLoadMore = false
        }
      }
    })
  }, {
    root: null, // 相对的视口元素，传入 null 则为顶级文档视口
    rootMargin: '0px 0px 0px 0px', // 触发交叉回调时被观察元素相对于视口的偏移量
    threshold: [0.0001, 0.001, 0.01, 0] // 一个具体数值或数值数组， 触发交叉回调时被观察元素的可见比例
  })
  observer.observe(query(`.${this.loadMoreClassName}`)) // 监听加载更多的位置
}