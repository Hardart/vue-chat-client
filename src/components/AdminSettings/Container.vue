<template>
  <div v-if="isOpenAdminSettings" class="full-size bg-dark">
    <div class="section">
      <div class="container container-m">
        <PnzButton @click="change" icon="close" />
        <h2 class="settings-title">Admin Settings</h2>
        <Settings.List />
      </div>
    </div>
  </div>
</template>

<script setup>
  import * as Settings from './_index'
  import { isOpenAdminSettings } from '../Chat/_state'
  import { changeState } from '@/utils/helpers'
  const change = () => changeState(isOpenAdminSettings)
</script>

<style lang="scss"></style>
