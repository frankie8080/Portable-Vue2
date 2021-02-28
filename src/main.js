import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
// import "./assets/iconfont/font_1896882_9v3jjv4smql/iconfont"
// import "./assets/iconfont/font_1896882_51qtqm9gcai/iconfont.css"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
