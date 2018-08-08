import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home')
const Detail = () => import('views/detail')
const Archives = () => import('views/archives')
const Categories = () => import('views/categories')
const CategoriesList = () => import('components/categories-list')
const Tags = () => import('views/tags')
const TagItem = () => import('views/tag-item')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        keepAlive: true
      },
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        keepAlive: true
      },
      component: Home
    },
    {
      path: '/detail/:name',
      name: 'detail',
      component: Detail
    },
    {
      path: '/archives',
      name: 'archives',
      meta: {
        keepAlive: true
      },
      component: Archives
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories,
      children: [
        {
          path: '/categories/:name',
          name: 'categories-item',
          meta: {
            keepAlive: true
          },
          component: CategoriesList
        }
      ]
    },
    {
      path: '/tags',
      name: 'tags',
      meta: {
        keepAlive: true
      },
      component: Tags
    },
    {
      path: '/tags/:name',
      name: 'tag-item',
      component: TagItem
    }
  ]
})
