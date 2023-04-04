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
const socket = io(config.baseURL)

socket.on('nsList', ns => {
  namespace.connect(ns)

  store.dispatch('rooms/setRoomsList', ns.rooms)
  const roomToJoin = ns.rooms[0].title
  namespace.io.emit('room:join', roomToJoin, null, user.value.id)
  namespace.room = roomToJoin
  namespace.io.on('updateUsersInRoom', users => {
    store.dispatch('setOnlineUsers', users)
  })

  namespace.io.on('room:messages-history', messages => {
    store.dispatch('messages/loadAllMessages', messages)
  })

  namespace.io.on('room:sendMessage', msgData => {
    if (namespace.room !== msgData.room) {
      store.dispatch('rooms/setUnreadMessage', msgData.room)
    }
  })
})
</script>
