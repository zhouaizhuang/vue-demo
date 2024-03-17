// 点击第一级
export const clickfirstItem = function (e) {
	const list = _.searchCover(this.treeObj.list, { id: e.id }, v => ({ ...v, isSpread: !v.isSpread }))
  const treeObj = { ...this.treeObj, list }
  this.$emit('setTreeObj', treeObj)
}
// 点击当前条目
export const clickCurItem = function (item) {
  let list = _.tree2flat(this.treeObj.list)
  list = _.radioChecked(list, {id: item.id})
  list = _.flat2tree(list)
  const treeObj = { ...this.treeObj, list }
  this.$emit('setTreeObj', treeObj)
}
// 点击第二级
export const clickSecondItem = function (e) {
	const list = this.treeObj.list.map(v => ({...v,children: _.searchCover(v.children, { id: e.id }, k => ({ ...k, isSpread: !k.isSpread }))}))
  const treeObj = { ...this.treeObj, list }
  this.$emit('setTreeObj', treeObj)
}
// 点击第三级
export const clickthirdItem = function (e) {
  const list = this.treeObj.list.map(v => {
		const city = v.children
		v.children = city.map(k => ({...k,children: _.searchCover(k.children, { id: e.id }, j => ({ ...j, isSpread: !j.isSpread }))}))
		return v
	})
  const treeObj = { ...this.treeObj, list }
  this.$emit('setTreeObj', treeObj)
}
// 选择当前条目 
export const selectCurItem = async function (e, item) {
  let list = _.tree2flat(this.treeObj.list)
  let childIds = []
  let prevId = item.pid
  if(e) {
    list = list.map(v => {
      if(v.pid == item.pid && _.safeGet(() => this.treeObj.rbacTree.menuDisableList, []).includes(v.id)) { v.isChecked = true}
      return v
    })
  }
  // 向下操作子元素选中
  list = list.map(v => {
    if(v.id == item.id) { // 当前元素是否选中
      v.isChecked = e
      if(v.isChecked) { v.isIndeterminate = false }
    } else if(v.pid == item.id || childIds.includes(v.pid)) { // 当前元素的子元素是否选中
      v.isChecked = e
      childIds.push(v.id)
      if(v.isChecked) { v.isIndeterminate = false }
    }
    return v
  })
  // 向上操作父元素选中
  while(prevId != 0) {
    list = _.searchCover(list, {id: prevId}, v => {
      const child = list.filter(k => k.pid == prevId)
      v.isChecked = child.every(h => h.isChecked)
      v.isIndeterminate = child.some(h => h.isChecked || h.isIndeterminate) && !v.isChecked
      return v
    })
    prevId = _.safeGet(() => list.find(v => v.id == prevId).pid, 0)
    // console.log(prevId)
    // await _.wait(3000)
  }
  // 找出勾选的菜单
  const menuIds = [..._.getField(list, 'id', {isChecked: true}), ..._.getField(list, 'id', {isIndeterminate: true})]
  this.$emit('changeTree', menuIds)
  list = _.flat2tree(list)
  const treeObj = { ...this.treeObj, list }
  this.$emit('setTreeObj', treeObj)
}