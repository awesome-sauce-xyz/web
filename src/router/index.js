import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    }, {
      path: '/about',
      name: 'About',
      component: AboutPage
    }
  ]
})
