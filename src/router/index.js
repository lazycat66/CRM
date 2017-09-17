import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'

Vue.use(Router)

const route = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      meta: {
        title: 'CRM'
      },
      component: Hello
    },
    {
      path: '/test',
      name: 'Test',
      meta: {
        title: '测试页面'
      },
      component: Test
    }
  ]
});

// setting title
route.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
});

export default route;
