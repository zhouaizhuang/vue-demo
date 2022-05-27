import { isArray } from "./check.js"
import router from '../../router/index.js'
/**
 * 去某个页面
 * @param {*} options
 * @举例 go({name: 'lottie', query:{name:'tom'}}) // 这样就实现了跳转到/lottie页面并且页面传参为name=tom
 */
export const go = function(options = {}) {
  router.push({
    path: '', // 路由路径
    name: '', // 路由名称
    query: {}, // 通过this.$route.query.id获取。刷新没问题。因为数据是在url上的
    params: {}, // 通过this.$route.params.id。刷新，传入当前页面的数据会丢失
    ...options
  }) 
}
// 返回几层
export const goBack = (times = -1) => router.go(times) // 返回times页面
/**
 * 路由比对函数
 * @param {*} allRouter 全部路由
 * @param {*} userRouter 真实路由
 * @returns 
 */
 export const compareRoute = function (allRouter = [], userRouter = []) {
  // console.log(allRouter)
  // console.log(userRouter)
  return allRouter.reduce((prev, item) => {
    userRouter.forEach(v => {
      if(item.path == v.path) {
        if(isArray(item.children)) {
          item.children = compareRoute(item.children, v.authorityList)
        }
        if(v.hasAuthority == 1) {
          prev = [...prev, item]
        }
      }
    })
    return prev
  }, [])
}