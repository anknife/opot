import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/components/common/Sign'
import Home from '@/components/page/Home'
import Basket from '@/components/page/basket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Basket',
      name: 'Basket',
      component: Basket
    }
  ]
})
