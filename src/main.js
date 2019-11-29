import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
//import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "@/plugins/echarts";
//import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(BootstrapVue);

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

