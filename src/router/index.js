import Vue from 'vue'

//vue-router
import Router from 'vue-router'
Vue.use(Router);


const router = new Router({
    // mode:"history",
    routes: [
        {
            path: '*',
            redirect: '/404'
        },
        {
            path: '/404',
            component: resolve => require(['@/page/404.vue'], resolve)
        },
        {
            path:"/",
            component: resolve => require(['@/page/login'], resolve)
        },
        {
            path: '/Navbar',
            name: 'Navbar',
            component: resolve => require(['@/components/Navbar'], resolve)
        },
        {
            path: '/contributionInfo',
            name: 'contributionInfo',
            component: resolve => require(['@/page/manuscript/contributionInfo'], resolve)
        },
    ]
});


export default router;

