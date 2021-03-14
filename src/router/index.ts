import { createRouter, createWebHistory } from 'vue-router';
import Home from './../view/Home/index.vue';
import Login from "./../view/Login/index.vue";
import ControlPlat from "./../view/ControlPlat/index.vue";
import AppDetail from "./../view/AppDetail/index.vue";

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
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
