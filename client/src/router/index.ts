import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/components/layout/main-layout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chatList',
      meta: {
        layout: MainLayout,
      },
      component: () => import('@/views/chat-view.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/auth-view.vue'),
    }
  ],
})

export default router
