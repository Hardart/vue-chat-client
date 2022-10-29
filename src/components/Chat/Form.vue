<template>
  <div class="chat__main--text-area">
    <form class="text-area__form">
      <input class="input" v-model="inputText" placeholder="Введите сообщение" />
      <PnzButton class="text-area__button" color="dark" icon="play" @click.prevent="sendMessage" :disabled="!inputText.trim()" />
    </form>
  </div>
</template>

<script setup>
  import { computed, inject, ref } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()
  const socket = inject('io')

  const user = computed(() => store.getters['user/get'])
  const inputText = ref('')

  function sendMessage() {
    const message = {
      userID: user.value.chatID,
      userName: user.value.name,
      sendTime: new Date(),
      text: inputText.value,
      userAvatar: user.value.avatar
    }
    socket.emit('newMessage', message)

    inputText.value = ''
  }
</script>

<style lang="scss" scoped>
  .text-area {
    &__form {
      @include display-flex;
      align-items: center;
      gap: 10px;
    }

    &__button {
      width: 37px;
      height: 37px;
      border-radius: 8px;
      padding: 6px;
    }
  }
</style>
