<template>
   <div class="chat">
      <Chat.AdminSettings />
      <Chat.UserSettings />
      <Chat.Header />
      <div class="chat__wrap">
         <Chat.Rooms>
            <Chat.Settings />
         </Chat.Rooms>
         <Chat.Main />
         <Chat.Users v-if="openUserPanel" />
      </div>
   </div>
</template>

<script setup>
   import * as Chat from '@/components/Chat/_index'
   import { openUserPanel } from './_state.js'
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
