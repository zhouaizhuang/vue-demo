// https://github.com/serratus/quaggaJS
import Quagga from 'quagga'
import { safeGet, range } from "../../../common.js"
console.log(range(window.innerHeight, 350, 400))
// 初始化
export const init = function () {
  this.isShowBarCode = true
  Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      constraints: {
        width: range(window.innerWidth, 350, 400),
        height: range(window.innerHeight, 400, 750),
        facingMode: "environment",
        deviceId: ""
      },
      singleChannel: false,
      target: document.querySelector('#serviceCode')    // Or '#yourElement' (optional)
    },
    debug: {
      drawBoundingBox: false,
      showFrequency: false,
      drawScanline: false,
      showPattern: false
    },
    decoder : {
      readers : ["code_128_reader"]
    }
  }, err => {
    if (err) {
      console.log(err);
      return
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
    Quagga.onProcessed(e => {
      // console.log(e)
    })
    Quagga.onDetected(e => {
      console.log(e)
      const code = safeGet(() => e.codeResult.code, '')
      if(code) {
        this.serviceCode = code
        // console.log(this.serviceCode)
        Quagga.stop()
        this.isShowBarCode = false
      }
    })
    Quagga.decodeSingle(e => {
      console.log(e)
    })
    Quagga.offProcessed(e => {
      console.log(e)
    })
    Quagga.offDetected(e => {
      console.log(e)
    })
  });
}
// 扫描服务码
export const scanfServiceCode = function () {
  this.isShowBarCode = true
  this.init()
}