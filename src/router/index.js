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
      redirect: '/index',
      meta: {
        title: 'platform',
        auth: true
      },
      component: Platform,
      children: [
        {
          path: '/index',
          name: 'consultation',
          meta: {
            title: 'platform',
            parentPath: 'platform'
          },
          component: consultation
          },
        {
          path: '/guest',
          name: 'guest',
          meta: {
            title: 'platform',
            parentPath: 'platform'
          },
          component: Guest
          },
        {
          path: '/business',
          name: 'business',
          meta: {
            title: 'platform',
            parentPath: 'platform'
          },
          component: Business
          },
        {
          path: '/source',
          name: 'source',
          meta: {
            title: 'platform',
            parentPath: 'platform'
          },
          component: Source
          },
        {
          path: '/question',
          name: 'question',
          meta: {
            title: 'platform',
            parentPath: 'platform'
          },
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

export const getSubtitle = params => {
  return params.meta.parentPath || params.name
}

// setting title
route.beforeEach((to, from, next) => {
    if(window.localStorage.getItem('login')){
        let loginInfo = JSON.parse(window.localStorage.getItem('login'))
        store.state.login.username = loginInfo.username
        store.state.login.isLogin = true
    }
  store.state.login.subtitle = getSubtitle(to)
  store.state.table.tableSubtitle = ''
  document.title = to.meta.title || 'CRM';
  next()
});

export default route;
