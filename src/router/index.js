import Vue from 'vue'
import Router from 'vue-router'
import Tou from '@/components/Tou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tou',
      component: Tou
    }
  ]
})
