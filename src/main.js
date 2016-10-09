import Vue from 'vue'
import App from './App.vue'
import resource from 'vue-resource'

Vue.use(resource)
Vue.http.options.root = 'https://cnodejs.org/api/v1';



new Vue({
  el: 'body',
  components: { App }
})
