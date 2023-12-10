<template>
  <ChatContainer />
</template>

<script setup>
import ChatContainer from '@/components/Chat/Container.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { io } from 'socket.io-client'
import config from '../config'
import { namespace } from '../features/sockets'
const store = useStore()
const user = computed(() => store.getters['user/get'])
const baseSocket = io(config.baseURL)

baseSocket.on('nsList', ns => {
  // namespace.connect(ns, user.value.id)

  // store.dispatch('rooms/setRoomsList', ns.rooms)
  // const roomID = ns.rooms[0].id
  // store.dispatch('user/setActiveRoom', roomID)

  // namespace.io.emit('room:join', user.value, null)

  namespace.io.on('updateUsersInRoom', users => {
    store.dispatch('setOnlineUsers', users)
  })

  namespace.io.on('room:messages-history', messages => {
    store.dispatch('messages/loadAllMessages', { messages, roomID: user.value.activeRoom })
    store.dispatch('messages/changeLoadState')
  })

  namespace.io.on('room:sendMessage', msgData => {
    if (user.value.activeRoom !== msgData.roomID) {
      store.dispatch('rooms/setUnreadMessage', msgData.roomID)
    } else {
      store.dispatch('messages/addMessage', msgData)
    }
  })

  namespace.onDisconnect(store)
})
</script>
