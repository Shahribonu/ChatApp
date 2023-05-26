const loginPage=()=>import('./views/Login.vue')


export default [
    {
        path:'/login',
        name: 'login',
        component: loginPage,
        meta:{
            layout:true
         }
    },
 
]