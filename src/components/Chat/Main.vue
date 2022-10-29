<template>
  <div class="chat__main bg-primary" @mousemove="setMessageRead">
    <div class="chat__main--messages-container scroller">
      <Message.List />
    </div>
    <Chat.Form />
  </div>
</template>

<script setup>
  import * as Message from '@/components/Messages/_index'
  import * as Chat from '@/components/Chat/_index'

  // const setMessageRead = () => console.log('read')
</script>

<style lang="scss">
  .chat__main {
    display: flex;
    flex-direction: column;
    flex: 1;

    > * {
      padding: 0 10px;
    }

    &--messages-container {
      position: relative;
      flex: 1;
    }

    &--message-list {
      padding-top: 7px !important;
      padding-left: 0;
      list-style: none;
    }
  }
</style>
