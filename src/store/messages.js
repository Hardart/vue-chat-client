export default {
   namespaced: true,
   state: {
      messages: [],
   },
   getters: {
      all: (state) => state.messages,
   },
   mutations: {
      loadAllMessages(state, messages) {
         state.messages = messages
      },
      addMessage(state, message) {
         state.messages.push(message)
      },
   },
   actions: {
      loadAllMessages({ commit }, messageHistoryArray) {
         commit('loadAllMessages', messageHistoryArray)
      },
      addMessage({ commit }, message) {
         commit('addMessage', message)
      },
   },
}
