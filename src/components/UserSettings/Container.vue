<template>
  <div class="section">
    <div class="container container-l">
      <UserSettings.AvatarUploadInput />
      <PnzButton @click="isOpen" icon="close" />
      <h2 class="settings-title">Настройки</h2>
      <UserSettings.List />
    </div>
  </div>
</template>

<script setup>
  import * as UserSettings from './_index'

  const props = defineProps({
    isOpen: Function
  })
</script>

<style lang="scss">
  .settings-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 30px;
  }
</style>
