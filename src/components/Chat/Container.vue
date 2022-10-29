<template>
  <div class="chat">
    <Chat.AdminSettings />
    <Chat.UserSettings />
    <Layouts.Header />
    <div class="chat__wrap">
      <Layouts.LeftSidebar />
      <Chat.Main />
      <Layouts.RightSidebar v-if="openUserPanel" />
    </div>
  </div>
</template>

<script setup>
  import * as Chat from '@/components/Chat/_index'
  import * as Layouts from '@/layouts'
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
