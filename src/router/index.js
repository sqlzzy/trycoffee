import {createRouter, createWebHistory} from 'vue-router';

import Home from '@/pages/Home/index.vue';
import CardPage from '@/pages/CardPage/index.vue';
import MethodPage from '@/pages/MethodPage/index.vue';
import AboutPage from "@/pages/AboutPage/index.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/card/:methodName-:authorId-:idCoffee',
        name: 'card',
        component: CardPage,
    },
    {
        path: '/method/:methodName',
        name: 'method',
        component: MethodPage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
