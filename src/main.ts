
import { createApp } from 'vue'
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
// import ant from './utils/ant'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from "./router/index"
import App from './App.vue';

const app = createApp(App)
app.use(router)
app.use(Antd)
app.mount('#app')