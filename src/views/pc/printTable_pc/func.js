
import { searchCover } from "@/common.js"
// 点击当前行
export const deviceRowClick = function (e) {
  this.deviceTableData = searchCover(this.deviceTableData, {id: e.id}, v => ({...v, isChecked: true}), v => ({...v, isChecked: false}))
}
// 多选改变
export const changeSection = function (e) {
  this.deviceTableData = this.deviceTableData.map(v => {
    v._checked = e.some(k => k.id == v.id)
    return v
  })
}
// 改变code
export const changeCode = function (e, row) {
  const _code = e.target.value
  this.deviceTableData = searchCover(this.deviceTableData, {id: row.id}, v => ({...v, _code: _code}))
}
// 保存编码
export const saveCode = async function (row) {
  // const { id, _code } = row
  // const res = await this.$post('/device/updateDeviceByCode', { code: _code, id })
  // if(res) {
  //   this.getDeviceList()
  //   return this.$Message.success('更新成功')
  // }
}
// 打印出货单
export const printManifest = async function () {
  const checkedList = this.$refs.deviceRef.getSelection()
  if(checkedList.length == 0) {
    // const { list } = await this.$post('/appproject/deviceListByProject', {
    //   projectId: this.projectId,
    //   orgId: this.checkedDeviceOrg.id,
    //   type: this.checkedDeviceTypeItem.id,
    //   currentPage: 1,
    //   pageSize: 9999
    // })
    // 如果没有勾选，那么默认查询出所有的，进行打印
    const list = this.deviceTableData
    this.printDeviceTableData = list
  } else {
    this.printDeviceTableData = checkedList
  }
  this.$nextTick(()=>{
    this.$print(this.$refs.deviceRef)
  })
}