import Vue from 'vue'
import App from './App.vue'
import resource from 'vue-resource'
import Router from 'vue-router'

import index from './pages/index.vue'

Vue.use(resource)
Vue.use(Router)





Vue.http.options.root = 'https://cnodejs.org/api/v1';



var router = new Router({
	hashbang: false,
	history:true
})

router.map({
  '/': {
    component: index
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')