/*eslint-disable*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import path from 'path'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}



const routes = [
	{
		path: "/",
		component: () => import("@/views/Home"),
	}
]
const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
