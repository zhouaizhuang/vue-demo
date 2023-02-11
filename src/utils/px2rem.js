/***** rem适配版本三******/
(function (designWidth, maxWidth) {
  var doc = document,
    win = window,
    docEl = doc.documentElement,
    remStyle = document.createElement("style"),
    tid;
  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    maxWidth = maxWidth || 540;
    width > maxWidth && (width = maxWidth);
    // var dpr = window.devicePixelRatio || 1; // 设备像素比
    var rem = width / designWidth;
    // console.log(width)
    // console.log(designWidth)
    // console.log(dpr)
    remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';  // 可以让rem为1
  }
  if (docEl.firstElementChild) {
    docEl.firstElementChild.appendChild(remStyle);
  } else {
    var wrap = doc.createElement("div");
    wrap.appendChild(remStyle);
    doc.write(wrap.innerHTML);
    wrap = null;
  }
  //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
  refreshRem();
  win.addEventListener("resize", function () {
    clearTimeout(tid); //防止执行两次
    tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener("pageshow", function (e) {
    if (e.persisted) { // 浏览器后退的时候重新计算
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);
  if (doc.readyState === "complete") {
    doc.body.style.fontSize = "16px";
  } else {
    doc.addEventListener("DOMContentLoaded", function (e) {
      doc.body.style.fontSize = "16px";
    }, false);
  }
})(750, 750);

// flexible.js
// (function flexible(window, document) {
//     var docEl = document.documentElement;
//     var dpr = window.devicePixelRatio || 1;

//     // adjust body font size
//     function setBodyFontSize() {
//         if (document.body) {
//             document.body.style.fontSize = 12 * dpr + "px";
//         } else {
//             document.addEventListener("DOMContentLoaded", setBodyFontSize);
//         }
//     }
//     setBodyFontSize();

//     // set 1rem = viewWidth / 10
//     function setRemUnit() {
//         var rem = docEl.clientWidth / 24;
//         docEl.style.fontSize = rem + "px";
//     }

//     setRemUnit();

//     // reset rem unit on page resize
//     window.addEventListener("resize", setRemUnit);
//     window.addEventListener("pageshow", function(e) {
//         if (e.persisted) {
//             setRemUnit();
//         }
//     });

//     // detect 0.5px supports
//     if (dpr >= 2) {
//         var fakeBody = document.createElement("body");
//         var testElement = document.createElement("div");
//         testElement.style.border = ".5px solid transparent";
//         fakeBody.appendChild(testElement);
//         docEl.appendChild(fakeBody);
//         if (testElement.offsetHeight === 1) {
//             docEl.classList.add("hairlines");
//         }
//         docEl.removeChild(fakeBody);
//     }
// })(window, document);