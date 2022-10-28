<template>
  <div class="flex flex-gap-10">
    <PnzButton v-tooltip="{ position: 'bottom', title: 'Search' }" class="p-11 shadow-2" color="primary" icon="search" />
    <PnzButton v-tooltip="{ position: 'bottom', title: 'Admin Settings' }" class="p-11 shadow-2" color="primary" icon="cog" @click="change" v-if="user?.roles.some(role => role == 'admin')" />
    <PnzButton v-tooltip="{ position: 'bottom', title: 'Show/Hide Users' }" class="p-11 shadow-2" color="primary" icon="users" @click="isActiveUserPanel" />
  </div>
</template>

<script setup>
  import PnzButton from '@/components/UI/PnzButton.vue'
  import { isActiveUserPanel, isOpenAdminSettings } from '@/components/Chat/_state'
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { changeState } from '@/utils/helpers'
  const store = useStore()
  const user = computed(() => store.getters['user/get'])
  const change = () => changeState(isOpenAdminSettings)
</script>

<style></style>
