import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import LeftMenu from '@/modules/left-menu/left-menu.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name: 'LeftMenu',
        component: LeftMenu,
        meta:{
            requiresAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;