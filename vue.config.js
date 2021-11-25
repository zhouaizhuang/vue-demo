module.exports = {
  devServer: {
    disableHostCheck: true,
    // proxy:{
    //   '/': {
    //     target:'http://127.0.0.1:8080',
    //     changeOrigin: true  // node帮助我们用中间件实现了
    //     secure: false,
    //   }
    // }
  }
}