export default {
  namespaced: true,
  state: {
    rooms: null,
    unread: {}
  },
  getters: {
    all: state => state.rooms,
    unreadCount: state => state.unread
  },
  mutations: {
    setRoomsList(state, list) {
      state.rooms = list
    },
    setUnreadMessage(state, roomTitle) {
      if (state.unread[roomTitle]) {
        state.unread[roomTitle] += 1
      } else {
        state.unread[roomTitle] = 1
      }
    }
  },
  actions: {
    setRoomsList({ commit }, list) {
      commit('setRoomsList', list)
    },
    setUnreadMessage({ commit }, roomTitle) {
      commit('setUnreadMessage', roomTitle)
    }
  }
}
