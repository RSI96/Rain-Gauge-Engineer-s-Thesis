import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import History from "./views/History";
import Actual from "./views/Actual";
import DataAnalysis from "./views/DataAnalysis";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/actual',
      name: 'actual',
      component: Actual
    },
    {
      path: '/dataAnalysis',
      name: 'dataAnalysis',
      component: DataAnalysis
    },
    {
      path: '/history',
      name: 'history',
      component: History
    }
  ]
})
