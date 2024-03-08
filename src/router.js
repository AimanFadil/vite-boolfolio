import { createRouter, createWebHistory } from 'vue-router';

import home from './pages/home.vue';
import blog from './pages/blog.vue';
import projectSingle from './pages/projectSingle.vue';
import nonTrovata from './pages/nonTrovata.vue';
import Contacts from './pages/Contacts.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
        },
        {
            path: '/blog',
            name: 'blog',
            component: blog,
        },
        {
            path: '/blog/:slug',
            name: 'projectSingle',
            component: projectSingle,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
        },
        {
            path: '/:catchAll(.*)',
            name: 'non-trovata',
            component: nonTrovata,
        },
    ]
});
export { router }