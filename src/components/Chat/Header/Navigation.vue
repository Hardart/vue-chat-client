<template>
  <div class="flex flex-gap-10">
    <PnzButton class="p-11 shadow-2" color="primary" icon="search" v-tooltip="{ position: 'bottom', title: 'Search' }" />
    <PnzButton v-if="user?.roles.some(role => role == 'admin')" @click="change" class="p-11 shadow-2" color="primary" icon="cog" v-tooltip="{ position: 'bottom', title: 'Admin Settings' }" />
    <PnzButton class="p-11 shadow-2" color="primary" icon="users" @click="isActiveUserPanel" v-tooltip="{ position: 'bottom', title: 'Show/Hide Users' }" />
  </div>
</template>

<script setup>
  import { changeState } from '@/utils/helpers'
  import PnzButton from '@/components/UI/PnzButton.vue'
  import { isActiveUserPanel, isOpenAdminSettings } from '@/components/Chat/_state'
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const user = computed(() => store.getters['user/get'])
  const change = () => changeState(isOpenAdminSettings)
</script>

<style></style>
