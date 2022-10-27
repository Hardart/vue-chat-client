import authAPI from '@/api/auth'
import usersAPI from '@/api/users'
import { getAccessToken, setTokens, cleanTokensData, getJWTPayload } from '@/utils/tokens'

let resolveUserAuth
let promise = new Promise(resolve => {
  resolveUserAuth = resolve
})

export default {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    isLogin: state => state.user !== null,
    isReady: () => promise,
    get: state => state.user
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    updateUser(state, avatar) {
      state.user = { ...state.user, avatar }
    },
    changeUserName(state, name) {
      state.user = { ...state.user, name }
    }
  },
  actions: {
    async registration(_, { email, password, name }) {
      let res = await authAPI.registration(email, password, name)
      if (!res) return { message: 'Check connection' }
      if (res.data) return { message: res.data.message, errors: res.data.errors }
      return res
    },

    async login({ commit }, { email, password }) {
      let res = await authAPI.login(email, password)
      if (res.data) return { message: res.data.message, errors: res.data.errors }
      setTokens(res.accessToken)
      const { name, roles, chatID, avatar } = getJWTPayload(res.accessToken)
      commit('setUser', { email, name, roles, chatID, avatar })
      return true
    },

    async autoLogin({ commit }) {
      let res = await authAPI.check()
      if (res.message) return resolveUserAuth()
      const { email, name, roles, chatID, avatar } = getJWTPayload(getAccessToken())
      commit('setUser', { email, name, roles, chatID, avatar })
      resolveUserAuth()
    },

    async logout({ commit }) {
      let res = await authAPI.logout()
      if (res.message) return res.message
      commit('setUser', null)
      cleanTokensData()
      return res
    },

    async changeAvatar({ commit }, image) {
      const res = await usersAPI.changeAvatar(image)
      if (res.data) return { message: res.data.message, errors: res.data.errors }
      setTokens(res.accessToken)
      const { avatar } = getJWTPayload(res.accessToken)
      commit('updateUser', avatar)
      return true
    },

    async cancelChangeAvatar({ commit }, image) {
      const res = await usersAPI.cancelChangeAvatar(image)
      if (res.data) return { message: res.data.message, errors: res.data.errors }
      return res
    },

    async changeName({ commit }, payload) {
      const res = await usersAPI.changeName(payload)
      if (res.data) return { message: res.data.message, errors: res.data.errors }
      setTokens(res.accessToken)
      const { name } = getJWTPayload(res.accessToken)
      commit('changeUserName', name)
    }
  }
}
