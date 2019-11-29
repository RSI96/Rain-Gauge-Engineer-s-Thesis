import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
//import './registerServiceWorker'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/plugins/echarts";
import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(VueResource);

/*
const base = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API

});
Vue.prototype.$http = base;
*/
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

