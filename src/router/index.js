import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Platform from '@/components/Platform'
import Account from '@/components/Account'
import consultation from '@/components/platform/index'

Vue.use(Router)

import store from '@/store/Store'
const route = new Router({
  mode: 'history',
  routes: [
  {
      path: '*',
      redirect: '/login'
  },
    {
      path: '/',
      name: 'index',
      redirect: '/login',
      meta: {
        title: 'welcome crm system',
        auth: true
      },
      component: Home
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'sign up'
        },
        component: Login
    },
    {
      path: '/platform',
      name: 'platform',
      meta: {
        title: 'platform',
        auth: true
      },
      component: Platform,
      children: [
          {
              path: '/platform',
              name: 'consultation',
              component: consultation
          }
      ]
    }
  ]
});

// setting title
route.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'CRM';
  next()
});

export default route;
