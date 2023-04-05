<template>
  <ul>
    <li class="rooms--name__header mt-5 mb-20">Комнаты</li>
    <Room @click="con(room)" v-for="room in rooms" :key="room.id" :room="room" />
    <AddRoom v-if="user.roles == 'admin'" />
  </ul>
  <slot />
</template>

<script setup>
import Room from '@/components/Rooms/Room.vue'
import AddRoom from '../Rooms/AddRoom.vue'
import { namespace } from '../../features/sockets'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const rooms = computed(() => store.getters['rooms/all'])
const user = computed(() => store.getters['user/get'])

const con = room => {
  store.dispatch('messages/changeLoadState')
  const roomToLeave = user.value.activeRoom
  store.dispatch('user/setActiveRoom', room.id)
  namespace.io.emit('room:join', user.value, roomToLeave)
}
</script>

<style lang="scss" scoped>
.rooms {
  &--name {
    &__header {
      padding: 5px;
      font-size: $standart;
      font-weight: 600;
      text-transform: uppercase;
      text-align: center;
    }
  }
}
</style>
