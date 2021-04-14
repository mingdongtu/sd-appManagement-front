module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8082,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {//配置跨域
        '/apm': {
            target: 'http://localhost:3005/',
            ws: true,
            changOrigin: true,//允许跨域
            // pathRewrite: {
            //     '^/apm': ''//请求的时候使用这个api就可以
            // }
        }
        
    }},
    chainWebpack:(config)=>{
         config.resolve.alias
               .set("@",resolve('src'))  //设置路径别名
    }

  //  module: {
  //   rules: [
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