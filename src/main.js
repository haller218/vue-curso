import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';

import VueRouter from 'vue-resource';


Vue.use(VueResource);
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App)
})
