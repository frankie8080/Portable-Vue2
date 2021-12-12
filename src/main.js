
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Base from '@/components/Base'
import Custom from '@/components/Custom'
import The from '@/components/The'
import demo from "./utils/my-lib"
console.log(demo);
Vue.use(Base).use(Custom).use(The)
Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')