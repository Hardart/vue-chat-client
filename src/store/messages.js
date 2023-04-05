export default {
  namespaced: true,
  state: {
    messages: [],
    messagesIsLoading: false
  },
  getters: {
    all: state => state.messages,
    isLoading: state => state.messagesIsLoading
  },
  mutations: {
    loadAllMessages(state, messages) {
      state.messages = messages
    },
    addMessage(state, message) {
      state.messages.push(message)
    },
    changeLoadState(state) {
      state.messagesIsLoading = !state.messagesIsLoading
    }
  },
  actions: {
    loadAllMessages({ commit }, { messages, roomID }) {
      commit('loadAllMessages', messages)
      commit('rooms/removeUnread', roomID, { root: true })
    },
    addMessage({ commit }, message) {
      commit('addMessage', message)
    },
    changeLoadState({ commit }) {
      commit('changeLoadState')
    }
  }
}
