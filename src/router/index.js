import Vue from 'vue'
import Router from 'vue-router'

import GHeader from '@/components/GlobalHeader'
import Toast from '@/components/Toast'

Vue.use(Router)
Vue.component('gheader', GHeader)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Toast',
      component: Toast
    }
  ]
})
