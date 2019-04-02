import Vue from 'vue'
import Router from 'vue-router'

import GHeader from '@/components/GlobalHeader'
import GFooter from '@/components/GlobalFooter'
import Toast from '@/components/Toast'
import Indicator from '@/components/Indicator'
import Navbar from '@/components/Navbar'
import Button from '@/components/Button'
import Swipe from '@/components/Swipe'
import Radio from '@/components/Radio'
import Checklist from '@/components/Checklist'
import Field from '@/components/Field'

Vue.use(Router)
Vue.component('gheader', GHeader)
Vue.component('gfooter', GFooter)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Field',
      component: Field
    },
    {
      path: '/Checklist',
      name: 'Checklist',
      component: Checklist
    },
    {
      path: '/Radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/Swipe',
      name: 'Swipe',
      component: Swipe
    },
    {
      path: '/Button',
      name: 'Button',
      component: Button
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/Indicator',
      name: 'Indicator',
      component: Indicator
    },
    {
      path: '/Toast',
      name: 'Toast',
      component: Toast
    }
  ]
})
