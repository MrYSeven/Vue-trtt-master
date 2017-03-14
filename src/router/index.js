import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
	    path: '/index',
	    name: 'Hello',
	    component: require('@/components/Hello.vue')
    },
    {
  		path: '/top',
  		name: 'top',
  		component: require('@/views/top.vue')
    },
    {
      path: '/shehui',
      name: 'shehui',
      component: require('@/views/shehui.vue')
    },
    {
      path: '/keji',
      name: 'keji',
      component: require('@/views/keji.vue')
    },
    {
      path: '/yule',
      name: 'yule',
      component: require('@/views/yule.vue')
    },
    {
      path: '/guonei',
      name: 'guonei',
      component: require('@/views/guonei.vue')
    },
    {
    	path: '/detail',
    	name: 'detail',
    	component: require('@/views/detail.vue')
    },
    {
      path:'*',redirect: '/top'
    }
  ]
})
