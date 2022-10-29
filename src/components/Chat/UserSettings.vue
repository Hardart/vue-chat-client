<template>
  <Teleport to="body">
    <UserSettings.Container />
  </Teleport>
</template>

<script setup>
  import * as UserSettings from '@/components/UserSettings/_index'
</script>

<style lang="scss" scoped>
  .settings {
    display: flex;
    z-index: 999;

    &__container {
      position: relative;
      display: flex;
      flex-direction: column;
      flex: 1;

      &--main {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
    }

    &__exit {
      position: absolute;
      top: 30px;
      right: 10%;
      z-index: 20;
    }
  }
</style>
