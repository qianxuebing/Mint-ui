import Vue from 'vue'
import Router from 'vue-router'

import GHeader from '@/components/GlobalHeader'
import GFooter from '@/components/GlobalFooter'
import Toast from '@/components/Toast'

Vue.use(Router)
Vue.component('gheader', GHeader)
Vue.component('gfooter', GFooter)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Toast',
      component: Toast
    }
  ]
})
