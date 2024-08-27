import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../components/UserLogin.vue';
import RevenueDashboard from '../components/RevenueDashboard.vue';

const routes = [
    { path: '/', component: UserLogin },
    { path: '/revenue', component: RevenueDashboard },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;