import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ 
      name: 'Home',
      path: '', 
      component: () => import('pages/homePage.vue') 
    },
    { 
      name: 'Projects',
      path: '/projects', 
      component: () => import('pages/projectsPage.vue') 
    }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
