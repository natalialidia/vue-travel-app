import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/destination/:id/:slug',
        name: 'destination.page',
        component: () => import('@/views/DestinationPage.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    //linkActiveClass: custom class name for active router link
});

export default router