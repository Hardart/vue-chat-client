<template>
  <ul>
    <li class="rooms--name__header mt-5 mb-20">Комнаты</li>
    <Room title="MAIN" />
    <AddRoom />
  </ul>
  <slot />
</template>

<script setup>
  import Room from '@/components/Rooms/Room.vue'
  import AddRoom from '../Rooms/AddRoom.vue'
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
