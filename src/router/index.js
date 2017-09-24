import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Platform from '@/components/Platform'
import IM from '@/components/IM'
import Account from '@/components/Account'
import consultation from '@/components/platform/index'
import Guest from '@/components/platform/GuestTable'
import Business from '@/components/platform/BusinessTable'
import Source from '@/components/platform/SourceTable'
import Question from '@/components/platform/QuestionTable'

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
              name: 'platform',
              component: consultation
          },
          {
              path: '/guest',
              name: 'guest',
              component: Guest
          },
          {
              path: '/business',
              name: 'business',
              component: Business
          },
          {
              path: '/source',
              name: 'source',
              component: Source
          },
          {
              path: '/question',
              name: 'question',
              component: Question
          }
      ]
  },
  {
      path: '/im',
      name: 'im',
      meta: {
          title: 'IM'
      },
      component: IM
  },
  {
      path: '/account',
      name: 'account',
      meta: {
          title: 'Profiles'
      },
      component: Account
  }
  ]
});

// setting title
route.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'CRM';
  next()
});

export default route;
