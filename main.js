import Vue from 'vue'
import App from './App'
// import router from './router.js'


import api from 'common/request/index.js'

import {router,RouterMount} from './router.js'  //路径换成自己的
Vue.use(router)

Vue.config.productionTip = false

import store from '@/common/store'

Vue.prototype.$store = store;
Vue.prototype.$api = api;

// import {router,RouterMount} from './router.js'  //路径换成自己的
// Vue.use(router)

App.mpType = 'app'
import divider from './components/common/divider.vue'
Vue.component('divider',divider)
import noThing from './components/common/no-thing.vue'
Vue.component('no-thing',noThing) 
const app = new Vue({
	store,
    ...App
})
app.$mount()
