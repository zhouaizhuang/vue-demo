import { toogle01, deepCopy } from "@/common.js"
// 新增
export const add = function () {
  
}
// 查询
export const search = function () {
  this.pageObj.page = 1
  this.getList()
}
// 重置
export const resetSearch = function () {
  this.searchObj = deepCopy(this.$options.data().searchObj)
  this.pageObj.page = 1
  this.getList()
}
// 获取列表
export const getList = async function () {
  const res = await this.$post('/xxx', {
    ...this.searchObj,
    currentPage: this.pageObj.page,
    pageSize: this.pageObj.pageSize
  })
  this.tableData = res.list
  this.pageObj.totalCount = res.page.totalCount
}
// 重置密码
export const resetPassword = function (row) {
  this.$Modal.confirm({
    title: '温馨提示',
    content: `<p>确定要重置<span class="fs22 b pl5 pr5 ">${row.name}</span>的密码吗？</p>`,
    onOk: async () => {
      await this.$post('/xxxreset', {id: row.id}) // 调用重置密码接口
      this.getList()
    },
    onCancel: () => {}
  })
}
// 停用启用
export const changeStatus = function (row) {
  this.$Modal.confirm({
    title: '温馨提示',
    content: `<p>确定要${row.state == 0 ? '启用' : '停用'}<span class="fs22 b pl5 pr5 ">${row.name}</span>这个帐号吗？</p>`,
    onOk: async () => {
      // this.$api.changeStaffStatus({id: row.id, status: toogle01(row.state)})
      await this.$post('/xxxChangeStatus', {id: row.id, status: toogle01(row.state)})
      this.getList()
    },
    onCancel: () => {}
  })
}
// 编辑
export const edit = function (row) {
  this.modalType = 2
  this.rowId = row.id
}