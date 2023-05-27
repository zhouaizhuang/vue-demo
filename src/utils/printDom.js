import html2canvas from 'html2canvas'
import { getImgs } from "@/common.js"
// 加载图片对象
export function loadImage(src){
  return new Promise(async (resolve, reject) => {
    const image = new Image()
    image.src = src
    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error('图片加载失败'))
  })
}
// 创建图片对象
export function createImg(src, width = 80, height = 80){
  const image = new Image()
  image.width = width
  image.height = height
  image.src = src
  image.style.margin = 0
  image.style.padding = 0
  // image.style.margin = index == 2 ? '-37px 0 -30px 0' : '-67px 0 -30px 0'
  // image.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 90%, 0% 90%)' // 对图片进行裁剪显示
  return image
}
/**
 * 打印DOM结点
 * @param {*} dom 需要打印的报告组件的dom结点
 * @param {*} renderData 组件渲染需要的数据
 * @param {*} isDebug 是否是debug模式， true代表调试模式，也就是不会出现打印预览。   false为打印模式，会出现打印预览
 * @param {*} width 打印纸宽度 默认为A4纸宽度
 * @param {*} hidth 打印纸高度 默认为A4纸高度
 */
export async function printDom (dom, renderData, isDebug = false, width = 794, hidth = 1120) {
  // 0、获取全部数据中的图片，从而保证在截图之前，dom已经全部渲染完毕
  await Promise.all(getImgs(renderData).map(loadImage)) 
  // 1、html转canvas。(注意是一页一页的截图，那么也就意味着，在HaiNan模板中，必须按照ref="hainan1"、ref="hainan2"的格式实现划分好)
  const canvasArr = await Promise.all(Object.keys(dom['$refs']).map(item => html2canvas(dom['$refs'][item]), {useCORS: true}))
  // 1、canvas转base64图片
  const imgArr = canvasArr.map(v => v.toDataURL('image/jpg'))
  // 3、图片导入iframe
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
  imgArr.map(v => createImg(v, width, hidth)).forEach(v => { iframeBody.appendChild(v) }) // 往body中加入dom
  // 4、等待图片加载完成
  await Promise.all(imgArr.map(loadImage))
  const frameWindow = iframe.contentWindow
  frameWindow.focus()
  // 5、进行打印
  if(!isDebug){ frameWindow.print() } // 打印
  // 6、移除iframe
  setTimeout(() => document.body.removeChild(iframe), 500) // 500ms后移除iframe标签
}