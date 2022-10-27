<template>
  <div v-if="openUserSettings" class="full-size bg-dark settings">
    <UserSettings.Container :isOpen="isOpenUserSettings" />
  </div>
</template>

<script setup>
  import * as UserSettings from '@/components/UserSettings/_index'
  import { openUserSettings, isOpenUserSettings } from './_state.js'
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
