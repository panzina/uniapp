import Vue from 'vue'
import App from './App'
import Request from './plugins/pocky-request/index.js'

Vue.config.productionTip = false
Vue.prototype.axios = Request();

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
