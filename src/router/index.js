import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import companyCase from '../components/companyCase'
import vrScene from '../components/vrScene'
import team from '../components/team'
import strategy from '../components/strategy'
import aboutUs from '../components/aboutUs'
import slider from '../components/slider' //test
import teamMember from '../components/teamMember'
import caseContent from '../components/caseContent'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/companyCase',
      name: 'case',
      component: companyCase
    },
    {
      path: '/vrScene',
      name: 'vrScene',
      component: vrScene
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/strategy',
      name: 'strategy',
      component: strategy
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/slider',
      name: 'slider',
      component: slider
    },
    {
      path: '/teamMember',
      name: 'teamMember',
      component: teamMember
    },
    {
      path: '/caseContent',
      name: 'caseContent',
      component: caseContent
    }
  ]
})