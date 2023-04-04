<template>
  <li class="flex flex-col flex-middle mb-10">
    <div class="room btn flex flex-center bg-dark p-15" v-tooltip="{ title, position: 'bottom' }">
      <div v-if="unreadCount[title]" class="badge"></div>
      <img :src="roomImg(path)" width="30" alt="" />
    </div>
  </li>
</template>

<script setup>
import { roomImg } from '@/utils/helpers'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const props = defineProps(['title'])
const unreadCount = computed(() => store.getters['rooms/unreadCount'])

const path = '/img/rooms/main.png'
</script>

<style lang="scss">
.room {
  position: relative;

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
