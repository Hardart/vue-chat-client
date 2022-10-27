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

    changeAvatar({ state, commit }, user) {
      const userChangeAvatar = state.usersOnline.map(userOnline => {
        userOnline.chatID !== user.chatID ? userOnline : (userOnline.avatar = user.avatar)
      })
      commit('onlineUsers', userChangeAvatar)
    }
  },
  modules: {
    messages,
    user
  }
})
