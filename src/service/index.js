// 对请求进行全局的配置
import axios from 'axios'
import { message } from 'ant-design-vue';
// 添加响应拦截器
/**
 * 
 *
 * @interface
 */
axios.interceptors.request.use(config=>{
       const token = localStorage.getItem('token');
       if(token){
           config.headers.common['Authorization'] = `Bearer ${token}`;
       }
       return config
})
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
 

  const {data} = response
  // 全局失败提示
  if(data.code==0){ // 登录失败
    message.error(data.msg);    
  }else{
    message.success(data.msg); 
  }
  return data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios