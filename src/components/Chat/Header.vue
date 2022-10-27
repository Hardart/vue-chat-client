<template>
  <div class="flex flex-between flex-middle p-10 bg-dark">
    <div>Vue Chat</div>
    <div class="flex flex-gap-10">
      <PnzButton v-tooltip="{ position: 'bottom', title: 'Search' }" class="p-11 shadow-2" color="dark" icon="search" />
      <PnzButton
        v-tooltip="{ position: 'bottom', title: 'Admin Settings' }"
        class="p-11 shadow-2"
        color="dark"
        icon="cog"
        @click="isOpenAdminSettings"
        v-if="user?.roles.some(role => role == 'admin')"
      />
      <PnzButton v-tooltip="{ position: 'bottom', title: 'Show/Hide Users' }" class="p-11 shadow-2" color="dark" icon="users" @click="isActiveUserPanel" />
    </div>
  </div>
  <Teleport to="body">
    <PnzTooltip v-if="isShowTooltip" :el="coords" />
  </Teleport>
</template>

<script setup>
  import { isActiveUserPanel, isOpenAdminSettings } from './_state.js'
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { isShowTooltip, coords } from '@/features/addTooltip'

  const store = useStore()
  const user = computed(() => store.getters['user/get'])
</script>

<style lang="scss">
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;

    &__buttons {
      display: flex;
      gap: 10px;

      .btn {
        padding: 14px;
      }
    }
  }
</style>
