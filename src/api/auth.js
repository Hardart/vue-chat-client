import http from '@/api/axios'
export default {
   async registration(email, password, name) {
      try {
         let { data } = await http().post(`registration`, { email, password, name })

         return data
      } catch ({ response }) {
         return response
      }
   },

   async login(email, password) {
      try {
         let { data } = await http().post(`login`, { email, password })
         return data
      } catch ({ response }) {
         return response
      }
   },

   async check() {
      try {
         let { data } = await http().get('check')
         return data
      } catch ({ response }) {
         return response.data
      }
   },

   async logout() {
      try {
         let { data } = await http().get('logout')
         return data
      } catch ({ response }) {
         return response.data
      }
   },
}
