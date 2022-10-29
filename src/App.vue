<template>
  <router-view />
</template>

<script setup>
  import { inject } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const socket = inject('io')

  socket.on('messageHistory', messageHistoryArray => {
    store.dispatch('messages/loadAllMessages', messageHistoryArray)
  })
  socket.on('sendMessage', data => {
    store.dispatch('messages/addMessage', data)
  })
  socket.on('users-online', users => {
    store.dispatch('setOnlineUsers', users)
  })
  socket.on('updated', ({ messages, users }) => {
    store.dispatch('setOnlineUsers', users)
    store.dispatch('messages/loadAllMessages', messages)
  })
</script>

<style lang="scss">
  #app {
    @include set-absolute;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
</style>
