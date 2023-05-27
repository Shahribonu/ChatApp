import { createRouter, createWebHistory } from 'vue-router'
import authRoute from '../modules/auth'
import chatRoute from '../modules/chat'

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    redirect:'/login',
   },
   {
    path:'/home',
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

router.beforeEach((to, from, next) => {

  if (to.meta && to.meta.layout) next();
  if (!to.meta.layout) {
    next();
  } else {
    next("/login");
  }
  console.log(to.meta.layout, 'eeee')
});


export default router
