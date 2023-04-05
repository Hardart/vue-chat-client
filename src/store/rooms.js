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
    setUnreadMessage(state, roomID) {
      state.unread[roomID] = 1
    },
    removeUnread(state, roomID) {
      delete state.unread[roomID]
    }
  },
  actions: {
    setRoomsList({ commit }, list) {
      commit('setRoomsList', list)
    },
    setUnreadMessage({ commit }, roomID) {
      commit('setUnreadMessage', roomID)
    },
    removeUnread({ commit }, roomID) {
      commit('removeUnread', roomID)
    }
  }
}
