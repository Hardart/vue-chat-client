<template>
  <Teleport to="body">
    <div v-if="openAdminSettings" class="full-size bg-dark">
      <AdminSettings.Container :isOpen="isOpenAdminSettings" />
    </div>
  </Teleport>
</template>

<script setup>
  import * as AdminSettings from '@/components/AdminSettings/_index'
  import { openAdminSettings, isOpenAdminSettings } from './_state.js'
</script>
