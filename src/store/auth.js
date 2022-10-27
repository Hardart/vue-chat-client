import { getAccessToken, setTokens, cleanTokensData, getJWTPayload } from '@/utils/tokens'

let readyRes
let promise = new Promise((resolve) => {
   readyRes = resolve
})

export default {
   namespaced: true,
   state: {
      user: null,
   },
   getters: {
      isLogin: (state) => state.user !== null,
      isReady: (state) => promise,
      checkRole: (state) => (allowedRoles) => state.user !== null && allowedRoles.some((role) => state.user.roles.includes(role)),
   },
   mutations: {
      setUser(state, user) {
         state.user = user
      },
   },
   actions: {
      async login({ commit }, { login, password }) {
         let { res, data } = await authApi.login(login, password)

         if (!res) return { error: 'No connection' }

         if (data.res) {
            setTokens(data.accessToken)
            const { login, name, roles } = getJWTPayload(data.accessToken)
            commit('setUser', { login, name, roles })
         }

         return data
      },
      async autoLogin({ commit }) {
         let { res } = await authApi.check()
         if (res) {
            const { login, name, roles, chatID, avatar } = getJWTPayload(getAccessToken())
            commit('setUser', { login, name, roles, chatID, avatar })
         }
         readyRes()
      },
      async logout({ commit }) {
         let res = await authApi.logout()
         if (res) commit('setUser', null)

         cleanTokensData()
         return res
      },
   },
}
