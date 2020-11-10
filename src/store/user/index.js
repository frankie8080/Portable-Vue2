/*
 * @description: 
 * @author: 肛肠科冯主任
 * @Date: 2020-08-29 19:15:50
 */
export default {
  state: {
    info: {
      memberId: 39,
      name: 'zhangsan',
      phone: '15513693147',
      age: 23,
      sex: 1,
      id: 1
    },
    list: []
  },
  mutations: {
    setUserList(state, data) {
      state.list = data
    },
    setUserInfo(state, data) {
      state.info = data
    }
  },
  actions: {
    setUserInfo({
      commit
    }, data) {
      commit("setUserInfo", data)
    }
  },
  getters: {
    userInfo: state => state.info,
    userList: state => state.list
  }
}
