import { createRouter, createWebHistory } from 'vue-router';

import home from './pages/home.vue';
import main from './pages/main.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
        },
        {
            path: '/main',
            name: 'main',
            component: main,
        },
    ]
});
export { router }