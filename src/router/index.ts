import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import MainPage from '@/modules/main-page/main-page.vue';
import Menu1Page from '@/modules/menu1-page/menu1-page.vue';
import Menu2Page from '@/modules/menu2-page/menu2-page.vue';
import Menu3Page from '@/modules/menu3-page/menu3-page.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name: 'main',
        component: MainPage,
        meta:{
            requiresAuth: true
        }
    },
    {
        path:'/menu1',
        name: 'menu1',
        component: Menu1Page,
        meta:{
            requiresAuth: true
        }
    },
    {
        path:'/menu2',
        name: 'menu2',
        component: Menu2Page,
        meta:{
            requiresAuth: true
        }
    },
    {
        path:'/menu3',
        name: 'menu3',
        component: Menu3Page,
        meta:{
            requiresAuth: true
        }
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;