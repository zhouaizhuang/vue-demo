// 保存
export const submit = function () {
  this.$refs['accountRef'].validate(async valid => {
    if(!valid) { return }
    if(/[\u4e00-\u9fa5]/.test(this.accountObj.pwd)) {
      return this.$Message.error('密码不能包含中文')
    } else if(this.accountObj.pwd.length > 50) {
      return this.$Message.error('密码不能超过50位')
    }
    this.$Message.success('注册成功')
    // 进行接口请求
    // let params =  {...this.accountObj }
    // const data = await this.$startPost("/account/editAccount", params)
    // if(data) {
    //   this.$refs['accountRef'].resetFields();
    //   this.isShow = false
    //   this.getList()
    //   return this.$Message.success(this.modalType == 1 ? '添加成功' : '编辑成功')
    // }
  })
}
// 改变密码
export const inputPwd = function (e){
  // 用户删除
  if((e.inputType || '').includes('deleteContentBackward')) {
    this.accountObj.pwd = this.accountObj.pwd.slice(0, -1)
  } else {
    this.accountObj.pwd += e.data || this.accountObj._pwd.replace(/[*]/g, '')
  }
  this.accountObj._pwd = new Array(this.accountObj._pwd.length).fill('*').join('')
}