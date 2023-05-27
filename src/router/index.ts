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
    component:()=>import('../modules/home/views/Home.vue')

   },
   {
    path:'/settings',
    name: 'settings',
    component:()=>import('../modules/settings/views/Settings.vue')

   },

   
    //modules
    ...authRoute,
    ...chatRoute,

    // 404
    {
      path: '/:pathmatch(.*)*',
      name: '404',
      component: () => import('../views/404.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {

  if (to.meta && to.meta.layout) next();
  if (!to.meta.layout) {
    next();
  } else {
    next("/login");
  }
 
});


export default router
