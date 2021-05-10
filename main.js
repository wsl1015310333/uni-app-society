import Vue from 'vue'
import App from './App'
// import router from './router.js'
Vue.config.productionTip = false

//import store from '@/common/store'

//Vue.prototype.$store = store;

import {router,RouterMount} from './router.js'  //路径换成自己的
Vue.use(router)

App.mpType = 'app'
import divider from './components/common/divider.vue'
Vue.component('divider',divider)
import noThing from './components/common/no-thing.vue'
Vue.component('no-thing',noThing) 
const app = new Vue({
	
    ...App
})
app.$mount()
