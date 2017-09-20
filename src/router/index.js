import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Platform from '@/components/Platform'
import Account from '@/components/Account'

Vue.use(Router)

const route = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'welcome crm system'
      },
      component: Home,
      childen:[
        {
          path: '/login',
          name: 'login',
          meta: {
            title: 'login system'
          },
          component: Login
        }
      ]
    },
    {
      path: '/platform',
      name: 'platform',
      meta: {
        title: 'platforn'
      },
      component: Platform
    },
    {
      path: '/account',
      name: 'account',
      meta: {
        title: 'account information'
      },
      component: Account
    }
  ]
});

// setting title
route.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
});

export default route;
