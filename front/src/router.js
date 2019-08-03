import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/M-Home.vue'
import nav_M from './components/Main/nav/nav.vue'
import Login from './views/M-Login.vue'
import nav_L from './components/Main/nav/Log-nav.vue'
import User from './views/U-User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        body:Home,
        head:nav_M
      }
    },
    {
      path: '/Login',
      name: 'Login',
      components: {
        body:Login,
        head:nav_L
      }
    },
    {
      path: '/user',
      name: 'userpage',
      components: {
        body: User,
        // head: nav_L
      }
    },
  ]
})
  