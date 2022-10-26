import { RouteRecordRaw } from 'vue-router';
export const route_names = {
  home: 'home',
  projects: 'projects',
  more_info: 'more info',
  addProject: 'add project',
  projectDetails: 'project details'
};
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: route_names.home,
        path: '',
        component: () => import('pages/homePage.vue'),
      },
      {
        name: route_names.projects,
        path: '/projects',
        component: () => import('pages/projectsPage.vue'),
      },
      {
        name: route_names.addProject,
        path: '/projects/add-project',
        component: () => import('pages/AddProject.vue'),
      },
      {
        name: route_names.more_info,
        path: '/more-info',
        component: () => import('pages/moreInfo.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
