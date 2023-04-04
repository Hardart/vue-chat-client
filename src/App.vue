<template>
  <router-view />
</template>

<script setup>
// socket.on('sendMessage', data => {
//   store.dispatch('messages/addMessage', data)
// })

// socket.on('updated', ({ messages, users }) => {
//   store.dispatch('setOnlineUsers', users)
//   store.dispatch('messages/loadAllMessages', messages)
// })
</script>

<style lang="scss">
#app {
  @include set-absolute;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
