<template>
  <div class="user-settings bg-dark p-10">
    <div class="user-settings__user--avatar">
      <img :src="avatar(user?.avatar)" width="40" alt="" />
    </div>
    <div class="user-settings__user--info">
      <div class="uk-text-bold user-name">{{ user?.name }}</div>
      <div class="uk-text-meta user-id">#{{ user?.chatID }}</div>
    </div>
    <div class="user-settings__buttons">
      <PnzButton v-tooltip="{ title: 'Настройки' }" class="mr-5" icon="cog" @click="openSettings" />
      <PnzButton v-tooltip="{ title: 'Выйти' }" icon="sign-out" @click="tryLogout" />
    </div>
  </div>
</template>

<script setup>
  import { computed, inject } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import { isOpenUserSettings } from './_state'
  import { avatar, changeState } from '@/utils/helpers'
  const router = useRouter()
  const store = useStore()
  const socket = inject('io')

  const user = computed(() => store.getters['user/get'])

  async function tryLogout() {
    await store.dispatch('user/logout')
    socket.emit('logout')
    router.push('/login')
  }
  const openSettings = () => changeState(isOpenUserSettings)
</script>

<style lang="scss">
  .user-settings {
    display: flex;
    align-items: center;
    width: auto;

    &__user {
      &--avatar {
        width: 40px;
        height: 40px;
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
