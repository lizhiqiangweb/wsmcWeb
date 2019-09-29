import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) => require(['../components/home'], resolve)
    },
    {
      path: '/companyCase',
      name: 'companyCase',
      component: (resolve) => require(['../components/companyCase'], resolve)
    },
    {
      path: '/vrScene',
      name: 'vrScene',
      component: (resolve) => require(['../components/vrScene'], resolve)
    },
    {
      path: '/team',
      name: 'team',
      component: (resolve) => require(['../components/team'], resolve)
    },
    {
      path: '/strategy',
      name: 'strategy',
      component: (resolve) => require(['../components/strategy'], resolve)
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: (resolve) => require(['../components/aboutUs'], resolve)
    },
    {
      path: '/teamMember',
      name: 'teamMember',
      component: (resolve) => require(['../components/teamMember'], resolve)
    },
    {
      path: '/caseContent',
      name: 'caseContent',
      component: (resolve) => require(['../components/caseContent'], resolve)
    }
  ]
})