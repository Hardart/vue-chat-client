<template>
  <li class="flex flex-col flex-middle mb-10">
    <div class="room btn flex flex-center bg-dark p-15" :class="room.active" v-tooltip="{ title: room.title, position: 'bottom' }">
      <div v-if="unreadCount[room.id]" class="badge"></div>
      <img :src="room.avatar" width="30" alt="" />
    </div>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
defineProps(['room'])
const unreadCount = computed(() => store.getters['rooms/unreadCount'])
</script>

<style lang="scss">
.room {
  position: relative;

  &.active {
    box-shadow: inset 0 0 10px 0 rgba(204, 234, 255, 0.5);
  }

  .badge {
    display: block;
    position: absolute;
    top: 2px;
    right: 2px;
    width: 10px;
    height: 10px;
    color: aliceblue;
    border-radius: 50%;
    background-color: red;
    z-index: 1;
  }
}
</style>
