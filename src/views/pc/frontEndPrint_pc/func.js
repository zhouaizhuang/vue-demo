import html2canvas from 'html2canvas'
// 加载图片对象
export function loadImage(src){
  return new Promise((resolve, reject) => {
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
// 打印
export async function print (template) {
  // 1、html转canvas。(注意是一页一页的截图，那么也就意味着，在HaiNan模板中，必须按照ref="hainan1"、ref="hainan2"的格式实现划分好)
  const canvasArr = await Promise.all(Object.keys(this.$refs[template]['$refs']).map(item => html2canvas(this.$refs[template]['$refs'][item])))
  // 1、canvas转base64图片
  const imgArr = canvasArr.map(v => v.toDataURL())
  // 3、图片导入iframe
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
  imgArr.map(v => this.createImg(v, this.A4Width, this.A4Height)).forEach(v => { iframeBody.appendChild(v) }) // 往body中加入dom
  // 4、等待图片加载完成
  await Promise.all(imgArr.map(loadImage))
  const frameWindow = iframe.contentWindow
  frameWindow.focus()
  // 5、进行打印
  frameWindow.print() // 打印
  // 6、移除iframe
  setTimeout(() => document.body.removeChild(iframe), 500) // 500ms后移除iframe标签
}
