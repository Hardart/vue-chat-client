<template>
  <div v-if="isOpenUserSettings" class="full-size bg-dark settings">
    <div class="section">
      <div class="container container-l">
        <UserSettings.AvatarUploadInput />
        <PnzButton @click="closeSettings" icon="close" />
        <h2 class="settings-title">Настройки</h2>
        <UserSettings.List />
      </div>
    </div>
  </div>
</template>

<script setup>
  import * as UserSettings from './_index'
  import { isOpenUserSettings } from '../Chat/_state'
  import { changeState } from '@/utils/helpers'
  const closeSettings = () => changeState(isOpenUserSettings)
</script>

<style lang="scss">
  .settings-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 30px;
  }
</style>
