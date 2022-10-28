<template>
  <li class="flex flex-col flex-middle mb-10">
    <div class="btn flex flex-center bg-dark p-15" v-tooltip="{ title: 'Main', position: 'bottom' }">
      <img :src="roomImg(path)" width="30" alt="" />
    </div>
  </li>
</template>

<script setup>
  import { roomImg } from '@/utils/helpers'

  defineProps(['title'])
  const path = '/img/placeholders/room.png'
</script>

<style></style>
