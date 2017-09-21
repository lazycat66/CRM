import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Platform from '@/components/Platform'
import Account from '@/components/Account'

Vue.use(Router)

import store from '@/store/Store'
const route = new Router({
  mode: 'history',
  routes: [
      // {
      //     path: '*',
      //     redirect: '/'
      // },
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
        title: 'platforn',
        auth: true
      },
      component: Platform
    }
  ]
});

// setting title
route.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
});

export default route;
