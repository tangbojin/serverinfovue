import Vue from 'vue'
import Router from 'vue-router'
import SystemInfo from '@/components/SystemInfo'

Vue.use(Router)

export default new Router({
  //去除访问路径中的/#/，mode默认为hash
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SystemInfo',
      component: SystemInfo
    }
  ]
})
