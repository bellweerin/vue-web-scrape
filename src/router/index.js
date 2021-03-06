import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../pages/AllJob.vue')
    },
    {
      path: '/status',
      name: 'status',
      component: () => import('../pages/Status.vue'),
    },
    {
      path: '/keyword',
      name: 'keyword',
      component: () => import('../pages/Keyword.vue')
    },
    {
      path: '/facebook-page',
      name: 'facebook-page',
      component: () => import('../pages/FacebookPage.vue')
    },
    {
      path: '/keyword-list',
      name: 'keyword-list',
      component: () => import('../pages/KeywordList.vue')
    },
    {
      path: '/keyword-fillter',
      name: 'keyword-fillter',
      component: () => import('../pages/TableKeywordFillter.vue')
    },
    {
      path: '/all-job',
      name: 'all-job',
      component: () => import('../pages/AllJob.vue')

    },
    {
      path: '/facebook-job',
      name: 'facebook-job',
      component: () => import('../pages/FaceBookJob.vue')

    }
  ]
})