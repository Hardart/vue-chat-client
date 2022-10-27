<template>
  <div class="full-size">
    <router-view />
  </div>
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
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $primary;
  }
  .full-size {
    @include set-absolute;
  }
</style>
