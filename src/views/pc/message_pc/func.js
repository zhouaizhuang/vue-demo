import { searchCover, wait, addCss, once } from "../../../common"
export const joinCssAni = once(function (){
  [1,2,3,4,5,6,7].forEach((v, i) => {
    addCss(`.ani-msg-ty${i}{
      animation: aniTy${i} 3s ease 0s 1 both;
    }
    @keyframes aniTy${i} {
      0% {opacity: 0;transform: translate(-50%,-10px);}
      20% {opacity: 10;transform: translate(-50%,20px);}
      75% {opacity: 10;transform: translate(-50%,20px);}
      100%{opacity: 0;transform: translate(-50%,-${i * 50}px);}
    }`, `ani-msg-ty${i}`)
  })
})

// 显示错误弹窗
export const sure = function () {
  this.joinCssAni()
  const list = [...this.list, {isShow:true}].slice(0, 7)
  this.list = list.map((v, i) => ({...v, top: i * 70 + 20}))
  setTimeout(() => {
    this.list.shift()
  }, 3000)
}