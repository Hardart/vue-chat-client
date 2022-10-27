<template>
  <div class="full-size">
    <ul v-scroll-down class="chat__main--message-list">
      <Message.Card v-for="message in messages" :key="message.id" :message="message" />
    </ul>
  </div>
</template>

<script setup>
  import * as Message from '@/components/Messages/_index'
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()
  const messages = computed(() => store.getters['messages/all'])
</script>

<style lang="scss">
  .scroller {
    overflow-y: auto;
  }
</style>
