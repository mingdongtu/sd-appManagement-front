module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8082,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {//配置跨域
        '/apm': {
            target: 'http://localhost:3005/',//这里后台的地址模拟的;应该填写你们真实的后台接口
            ws: true,
            changOrigin: true,//允许跨域
            // pathRewrite: {
            //     '^/apm': ''//请求的时候使用这个api就可以
            // }
        }
        
    }}

  //  module: {
  //   rules: [
  //     // 此处省略一万个字
  //     {
  //       test: /\.less$/,
  //       loader: 'style-loader!css-loader!less-loader'
  //     }
  //   ]
  // },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //     },
  //     less: {
  //       lessOptions: {
  //         javascriptEnabled: true,
  //       },
  //     },
  //   },
  // },
}