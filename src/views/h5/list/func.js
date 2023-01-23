import { guID, wait } from "@/common.js"
// 获取列表数据
// export const getList = async function () {
//   const { list } = await this.$post('/xxx/xxx', {
//     currentPage: this.page,
//     pageSize: 10,
//   })
//   this.list = [...this.list, ...list]
// }
export const getList = async function () {
  /**模拟一下 */
  await wait(600)
  let list = this.page > 3 ? [] : new Array(10).fill('1').map((v, i)=> ({id: guID()}))
  this.list = [...this.list, ...list]
}