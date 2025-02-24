import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import MainLayout from '@/components/layout/main-layout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/chats',
      name: 'chatList',
      meta: {
        layout: MainLayout,
      },
      components: {
        chatView: () => import('@/views/empty-view.vue'),
        sideBarView: () => import('@/components/chat-list/chat-list.vue')
      },
    },
    {
      path: '/chats/:id?',
      name: 'chatPage',
      meta: {
        layout: MainLayout,
      },
      components: {
        chatView: () => import('@/views/chat-view.vue'),
        sideBarView: () => import('@/components/chat-list/chat-list.vue')
      }
    },
    {
      path: '/users',
      name: 'userList',
      meta: {
        layout: MainLayout,
      },
      components: {
        chatView: () => import('@/views/empty-view.vue'),
        sideBarView: () => import('@/components/user-list/user-list.vue')
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/auth-view.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/chats'
    }
  ],
})

export default router
