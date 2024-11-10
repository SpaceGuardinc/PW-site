import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Champions from '../pages/Champions.vue';
import Community from '../pages/Community.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/news',
    name: 'news',
    component: News,
  },
  {
    path: '/champions',
    name: 'champions',
    component: Champions,
  },
  {
    path: '/community',
    name: 'community',
    component: Community,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
