import { createStore } from 'vuex'
import usersApi from '@/api/users'
import messages from './messages'
import user from './user'
export default createStore({
  state: {
    users: [],
    usersOnline: []
  },
  getters: {
    all: state => state.users,
    allOnline: state => state.usersOnline
  },
  mutations: {
    setAllUsers(state, users) {
      state.users = users
    },
    onlineUsers(state, users) {
      state.usersOnline = users
    }
  },
  actions: {
    async getAllUsers({ commit }, roles) {
      const res = await usersApi.getAll(roles)
      commit('setAllUsers', res)
    },

    async getOnlineUsers({ commit }) {
      const onlineUsers = await usersApi.getOnlineUsers()
      commit('onlineUsers', onlineUsers)
    },

    setOnlineUsers({ commit }, users) {
      commit('onlineUsers', users)
    },

    changeAvatar({ getters, commit }, user) {
      const users = getters.allOnline
      users.map(forChange(user))
      commit('onlineUsers', users)
    },

    changeName({ getters, commit }, user) {
      const users = getters.allOnline
      users.map(forChange(user, 'name'))
      commit('onlineUsers', users)
    }
  },
  modules: {
    messages,
    user
  }
})

function forChange(user, field = 'avatar') {
  return function (u) {
    if (user.chatID === u.chatID) u[field] = user[field]
  }
}
