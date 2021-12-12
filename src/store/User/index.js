import { login } from "@/api/user"
export default {
	state: {
		userInfo: {}
	},
	mutations: {
		getUser(state, data) {
			state.userInfo = data
		},
	},
	actions: {
		login({ commit }, data) {
			login(data).then(({ data, code }) => {
				if (code !== 200) return false
				commit("getUser", data)
			})
		}
	},
	getters: {
		navbarList: state => state.list
	}
}
