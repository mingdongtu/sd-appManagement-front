import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/view/Home/index.vue';
import Login from "@/view/Login/index.vue";
import ControlPlat from "@/view/ControlPlat/index.vue";
import AppDetail from "@/view/AppDetail/index.vue";
import UpLoad from '@/view/UpLoad/index.vue';
import Download from "@/view/Download/index.vue"

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: "/control",
        component: ControlPlat
      },
      {
        path: '/appDetail',
        component: AppDetail
      },
      {
        path:'/upLoad',
        component:UpLoad
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/download',
    component:Download

  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
