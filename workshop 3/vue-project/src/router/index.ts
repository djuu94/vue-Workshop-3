// index.ts
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import UsersData from '../views/UsersData.vue';
import UserDetails from '../components/UserDetails.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/users', name: 'users-data', component: UsersData },
  { path: '/users/:id', name: 'user-details', component: UserDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;