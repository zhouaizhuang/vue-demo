import { tree2flat, searchCover, getField } from "@/common.js"
// 获取全部菜单
export const getAllMenu = function (isChecked, isSpread) {
  // 获取全部菜单权限（平铺格式）
  let allMenu = [
    { "id": 100,"name": "工作台","parentId": 1,"type": 2,"isSpread": true, "isChecked": false },
    { "id": 200, "name": "排班管理", "parentId": 2, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 300, "name": "患者管理", "parentId": 3, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 400, "name": "签约管理", "parentId": 4, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 500, "name": "机构维护", "parentId": 5, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 600, "name": "机构管理", "parentId": 6, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 2020, "name": "今日就诊", "parentId": 202, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 5000, "name": "机构信息", "parentId": 500, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 5011, "name": "门诊类型", "parentId": 501, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 5031, "name": "服务包管理", "parentId": 503, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 5041, "name": "挂号费用", "parentId": 504, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 201, "name": "挂号登记", "parentId": 2, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 301, "name": "微信交流", "parentId": 3, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 401, "name": "新增签约", "parentId": 4, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 501, "name": "医务设置", "parentId": 5, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 601, "name": "机构套餐", "parentId": 6, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 2021, "name": "历史就诊", "parentId": 202, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 5001, "name": "科室维护", "parentId": 500, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 5012, "name": "班次维护", "parentId": 501, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 5032, "name": "服务项管理", "parentId": 503, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 202, "name": "医生门诊", "parentId": 2, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 302, "name": "新增患者", "parentId": 3, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 402, "name": "随访管理", "parentId": 4, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 502, "name": "患者设置", "parentId": 5, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 5002, "name": "角色管理", "parentId": 500, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 5013, "name": "诊室维护", "parentId": 501, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 5033, "name": "团队管理", "parentId": 503, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 203, "name": "接诊", "parentId": 2, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 303, "name": "患者详情", "parentId": 3, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 403, "name": "新增随访计划", "parentId": 4, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 503, "name": "健康管理", "parentId": 5, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 5003, "name": "员工管理", "parentId": 500, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 5021, "name": "标签维护", "parentId": 502, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 5034, "name": "签约协议", "parentId": 503, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 404, "name": "新增随访", "parentId": 4, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 504, "name": "收费项目", "parentId": 5, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 1, "name": "工作台", "parentId": 0, "type": 1, "isSpread": true, "isChecked": false },
    { "id": 205, "name": "收费", "parentId": 2, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 405, "name": "随访详情", "parentId": 4, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 505, "name": "数据字典", "parentId": 5, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 406, "name": "修改随访计划", "parentId": 4, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 407, "name": "签约档案", "parentId": 4, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 2, "name": "就诊流程", "parentId": 0, "type": 1, "isSpread": true, "isChecked": false },
    { "id": 204, "name": "检查治疗", "parentId": 2, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 408, "name": "签约档案详情", "parentId": 4, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 409, "name": "签约详情", "parentId": 4, "type": 2, "isSpread": true, "isChecked": false },
    { "id": 3, "name": "患者维护", "parentId": 0, "type": 1, "isSpread": true, "isChecked": false },
    { "id": 4, "name": "健康管理", "parentId": 0, "type": 1, "isSpread": true, "isChecked": false },
    { "id": 5, "name": "机构系统管理", "parentId": 0, "type": 1, "isSpread": true, "isChecked": false },
    { "id": 6, "name": "运营系统管理", "parentId": 0, "type": 1, "isSpread": true, "isChecked": false }
  ]
  allMenu = allMenu.map(v => ({...v, isChecked, isSpread}))
  this.allMenu = this.flat2tree(allMenu)
}
// 扁平数据结构转树形结构
export const flat2tree = function (arr) {
  const itemMap = arr.reduce((prev, item) => (prev[item.id] = { ...item, children: [] }, prev), {})
  return arr.reduce((prev, item) => {
    const { id, parentId } = item
    const curItem = itemMap[id]
    itemMap[parentId] = itemMap[parentId] || { children: [] } // 防止有的pid不存在
    parentId === 0 ? prev.push(curItem) : itemMap[parentId].children.push(curItem)
    return prev
  }, [])
}
// 点击展开、收起箭头
export const clickItem = function (item) {
  let newMenu = tree2flat(this.allMenu, 'children')
  newMenu = searchCover(newMenu, {id: item.id}, v => ({...v, isSpread: !v.isSpread}))
  this.allMenu = flat2tree(newMenu)
}
// 选择一级条目
export const changeFirstItem = function (e, firstItem) {
  const allMenu = this.allMenu.map(v => {
    if(v.id != firstItem.id) { return v }
    return {...v, isChecked: e, children: v.children.map(k => ({ ...k, isChecked:e, children:k.children.map(p => ({ ...p, isChecked: e })) })) }
  })
  this.updateMenuState(allMenu)
}
// 改变当前第二个条目
export const changeSecondItem = function (e, secondItem) {
  const allMenu = this.allMenu.map(v => {
    v.children = v.children.map(k => {
      if(k.id != secondItem.id) { return k }
      return {...k,isChecked:e, children: k.children.map(p => ({...p, isChecked: e})) }
    })
    v.isChecked = v.children.length ? v.children.every(k => k.isChecked) : v.isChecked
    return v
  })
  this.updateMenuState(allMenu)
}
// 更新菜单
export const updateMenuState = function (allMenu) {
  allMenu = allMenu || this.allMenu
  // 半选处理函数
  const processIsIndeterminate = item => item.isChecked ? false : (item.children.length ? item.children.some(g => g.isChecked || g.isIndeterminate) : false)
  // 处理整个数组是否处于半选
  const updateIndeterminate = val =>  val.map(v => {
    v.isChecked = v.children.length ? v.children.every(p => p.isChecked) : v.isChecked
    v.isIndeterminate = processIsIndeterminate(v)
    v.children = v.children.map(k => {
      k.isChecked = k.children.length ? k.children.every(p => p.isChecked) : k.isChecked
      k.isIndeterminate = processIsIndeterminate(k)
      return k
    })
    return v
  })
  this.allMenu = updateIndeterminate(updateIndeterminate(allMenu)) // 第二次才能把一级菜单更新完毕
}
// 编辑
export const edit = function () {
  const menuIds = [304,1,3,100,2021,300,301,302,303] // 当前角色拥有的菜单
  let allMenu = tree2flat(this.allMenu)
  allMenu = allMenu.map(v => {
    v.isSpread = true
    v.isChecked = menuIds.includes(v.id)
    return v
  })
  allMenu = this.flat2tree(allMenu)
  this.updateMenuState(allMenu)
}
// 模拟保存
export const save = function () {
  let checkedMenu = tree2flat(this.allMenu, 'children').filter(v => v.isChecked || v.isIndeterminate)
  const checkedIds = getField(checkedMenu, 'id')
  this.$Message.success(`拿到权限ids值为:${checkedIds.join(',')}`)
}