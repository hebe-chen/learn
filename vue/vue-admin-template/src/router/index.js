import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/layout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      hide: true,
      meta: {
        name: '登录',
      },
      component: () => import('@/views/login'),
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      meta: {
        name: '主页',
      },
      name: 'dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard/index',
          meta: {
            name: '控制中心',
          },
          component: () => import('@/views/dashboard'),
        },
      ],
    },
    {
      path: '/table',
      component: Layout,
      redirect: '/table/index',
      meta: {
        name: '表格',
      },
      name: 'table',
      children: [
        {
          path: 'index',
          name: 'table/index',
          meta: {
            name: '列表',
          },
          component: () => import('@/views/table/index'),
        },

        {
          path: 'list',
          name: 'table/list',
          meta: {
            name: '列表2',
          },
          component: () => import('@/views/table/index'),
        },
      ],
    },
  ],
});
