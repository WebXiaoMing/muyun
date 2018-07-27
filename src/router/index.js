import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home')
const Detail = () => import('views/detail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:name',
      name: 'detail',
      component: Detail
    }
  ]
})
