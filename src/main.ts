
import { createApp } from 'vue'
import {useRouter} from "vue-router"
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from './service/index'
import VueAxios from 'vue-axios'
import router from "./router/index"
import App from './App.vue';
const Router = useRouter()

const app = createApp(App)
/**
 * 方法一
 app.config.globalProperties.$router = Router
 */
/**方法二 */
 app.mixin({
     methods:{
         $router:Router,
        //  $axios:axios
     }
 })
 

app.use(router)
app.use(Antd)
app.use(VueAxios, axios)
app.mount('#app')