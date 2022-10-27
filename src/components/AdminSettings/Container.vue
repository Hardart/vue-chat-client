<template>
  <div class="section">
    <div class="container container-m">
      <PnzButton @click="isOpen" icon="close" />
      <h2 class="settings-title">Admin Settings</h2>
      <Settings.List />
    </div>
  </div>
</template>

<script setup>
  import * as Settings from './_index'

  const props = defineProps({
    isOpen: Function,
  })
</script>

<style lang="scss"></style>
