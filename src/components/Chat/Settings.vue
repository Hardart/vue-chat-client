<template>
  <div class="user-settings bg-dark">
    <div class="user-settings__user--avatar">
      <img :src="user?.avatar" width="42" alt="" />
    </div>
    <div class="user-settings__user--info">
      <div class="uk-text-bold user-name">{{ user?.name }}</div>
      <div class="uk-text-meta user-id">#{{ user?.chatID }}</div>
    </div>
    <div class="user-settings__buttons">
      <PnzButton v-tooltip="{ title: 'Настройки' }" class="mr-5" icon="cog" @click="isOpenUserSettings" />
      <PnzButton v-tooltip="{ title: 'Выйти' }" icon="sign-out" @click="tryLogout" />
    </div>
  </div>
</template>

<script setup>
  import { computed, inject } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import { isOpenUserSettings } from './_state.js'
  const router = useRouter()
  const store = useStore()
  const socket = inject('io')

  const user = computed(() => store.getters['user/get'])

  async function tryLogout() {
    await store.dispatch('user/logout')
    socket.emit('logout')
    router.push('/login')
  }
</script>

<style lang="scss">
  .user-settings {
    display: flex;
    align-items: center;
    width: auto;
    height: 52px;
    padding: 0 10px;

    &__user {
      &--avatar {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        overflow: hidden;
      }

      &--info {
        flex: 1;
        padding: 0 10px;

        .user-name {
          font-size: 14px;
          line-height: 18px;
        }

        .user-id {
          font-size: 13px;
          line-height: 12px;
        }
      }
    }

    &__buttons {
      display: flex;

      .btn {
        width: 30px;
        height: 30px;
        padding: 6px;
      }
    }
  }
</style>
