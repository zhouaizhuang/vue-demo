// 删除
export const del = function () {
  this.$zConfirm({
    title: '温馨提示',
    name: '测试账号',
    content: `<p>确定要删除吗？</p>`,
    onOk: async () => {
      console.log('点击确定')
    },
    onCancel: () => {
      console.log('点击取消')
    }
  });
}