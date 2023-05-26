import { createRouter, createWebHistory } from 'vue-router'
import authRoute from '../modules/auth'
import chatRoute from '../modules/chat'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    name: 'home',
    component:()=>import('../views/Home.vue')

   },
   {
    path:'/settings',
    name: 'settings',
    component:()=>import('../views/Settings.vue')

   },
    // 404
    {
      path: '/:pathmatch(.*)*',
      name: '404',
      component: () => import('../views/404.vue')
    },
    //modules
    ...authRoute,
    ...chatRoute
  ]
})

export default router
