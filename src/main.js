/*
 * @description: 
 * @author: 肛肠科冯主任
 * @Date: 2020-08-27 16:36:56
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
