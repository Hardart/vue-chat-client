<template>
  <ul>
    <li class="rooms--name__header mt-5 mb-20">Комнаты</li>
    <Room @click="con(room)" v-for="room in rooms" :key="room.id" :title="room.title" />
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
  namespace.io.emit('room:join', room.title, namespace.room, user.value.id)
  namespace.room = room.title
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
