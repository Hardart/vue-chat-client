<template>
  <div class="chat">
    <Chat.AdminSettings />
    <Chat.UserSettings />
    <HeaderLayout />
    <div class="chat__wrap">
      <LSidebarLayout>
        <Chat.Rooms />
      </LSidebarLayout>
      <Chat.Main />
      <RSidebarLayout v-if="openUserPanel">
        <Chat.Users />
        <Chat.Settings />
      </RSidebarLayout>
    </div>
  </div>
</template>

<script setup>
  import HeaderLayout from '@/layouts/Header-Layout.vue'
  import LSidebarLayout from '@/layouts/L-Sidebar-Layout.vue'
  import RSidebarLayout from '@/layouts/R-Sidebar-Layout.vue'
  import * as Chat from '@/components/Chat/_index'
  import { openUserPanel } from './_state'
</script>

<style lang="scss">
  .chat {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    &__wrap {
      display: flex;
      flex: 1;
      transition: all 0.5s ease;
      width: 100%;
    }
  }
</style>
