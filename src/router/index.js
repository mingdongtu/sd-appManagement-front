import { createRouter,createWebHistory } from 'vue-router';
import Home from './../view/Home/index.vue';
import Login from "./../view/Login/index.vue";
const routes = [
     {
        path:'/',
        name:'Home',
        component:Home
     },
     {
       path:'/login',
       name:'Login',
       component:Login
     }
]
const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router
