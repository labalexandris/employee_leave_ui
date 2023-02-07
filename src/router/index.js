import Vue from 'vue'
import VueRouter from 'vue-router'
import item1 from '../views/item1.vue'
import item2 from '../views/item2.vue'
import item3 from '../views/item3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'item1',
    component: item1
  },
  {
    path: '/item1',
    name: 'item1',
    component: item1
  },
  {
    path: '/item2',
    name: 'item2',
    component: item2
  },
  {
    path: '/item3',
    name: 'item3',
    component: item3
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
