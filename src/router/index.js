import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Platform from '@/components/Platform'
import Account from '@/components/Account'

Vue.use(Router)

import Store from '@/store/Store'
const route = new Router({
  mode: 'history',
  routes: [
      {
          path: '*',
          redirect: '/platform'
      },
    {
      path: '/',
      name: 'home',
      redirect: '/Login',
      meta: {
        title: 'welcome crm system'
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
        title: 'platforn'
      },
      beforeEach: (to, from, next) => {
          console.log(Store.getters.authorizd);
        if (Store.getters.authorizd)  {
            next()
        } else {
            next({
                path: '/login'
            })
        }
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
    // if (Store.getters.authorizd) { // 已经登陆
    //     if (to.path === '/'){
    //         next({
    //             path: '/platform'
    //         })
    //     } else {
    //         next()
    //     }
    // } else {
    //     // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
    //     next({path:'/login'})
    // }
  document.title = to.meta.title;
  next()
});

export default route;
