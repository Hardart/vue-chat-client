<template>
  <div class="chat">
    <Chat.AdminSettings />
    <Chat.UserSettings />
    <Chat.Header />
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
  import * as Chat from '@/components/Chat/_index'
  import LSidebarLayout from '@/Layouts/L-Sidebar-Layout.vue'
  import RSidebarLayout from '@/Layouts/R-Sidebar-Layout.vue'
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
