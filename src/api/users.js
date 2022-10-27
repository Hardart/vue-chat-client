import http from '@/api/axios'
export default {
  async getAll(roles) {
    try {
      let { data } = await http().get(`users`, { roles })
      return data
    } catch ({ response }) {
      return response
    }
  },

  async getOnlineUsers() {
    try {
      let { data } = await http().get(`onlineUsers`)
      return data
    } catch ({ response }) {
      return response
    }
  },

  async changeName(name) {
    try {
      let { data } = await http().post(`changeName`, { name })
      return data
    } catch ({ response }) {
      return response
    }
  },

  async changeAvatar(avatar) {
    try {
      let { data } = await http().post(`upload/resize`, { avatar })
      return data
    } catch ({ response }) {
      return response
    }
  },

  async cancelChangeAvatar(avatar) {
    try {
      let { data } = await http().post(`upload/cancel`, { avatar })
      return data
    } catch ({ response }) {
      return response
    }
  }
}
