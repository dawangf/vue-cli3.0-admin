import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from './views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
    { path: '/login', component: () => import('@/views/login/index'), hidden: true },
    { path: '/404', component: () => import('@/views/404'), hidden: true },

    {
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/index'),
                name: 'Dashboard',
                meta: { title: '首页', icon: 'dashboard', noCache: true, close: 'hide' }
            }
        ]
    },

    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/dashboard',
    //   name: 'Dashboard',
    //   meta: { title: '首页', icon: 'example' },
    //   hidden: true,
    //   children: [{
    //     path: 'dashboard',
    //     component: () => import('@/views/dashboard/index')
    //   }]
    // },

    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        // meta: { title: 'Example', icon: 'example' },
        meta: { title: 'Example', icon: 'icon-fenleiorguangchangorqitatianchong' },
        children: [
            {
                path: 'table',
                name: 'Table',
                component: () => import('@/views/table/index'),
                meta: { title: '表格', icon: 'icon-shoujitianchong' }
            },
            {
                path: 'tree',
                name: 'Tree',
                component: () => import('@/views/tree/index'),
                // meta: { title: 'Tree', icon: 'tree' }
                meta: { title: '树', icon: 'icon-gengduotianchong' }
            }
        ]
    },

    {
        path: '/form',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Form',
                component: () => import('@/views/form/index'),
                meta: { title: '表单', icon: 'icon-xinfengtianchong' }
            }
        ]
    },

    { path: '*', redirect: '/404', hidden: true }
];
export default new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});
