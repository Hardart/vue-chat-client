<template>
  <div class="relative h-full">
    <ul class="chat__aside--users" ref="userOnline">
      <li class="chat__aside--users__header">
        В сети - <span class="users-online--count">{{ users.length }}</span>
      </li>
      <UserOnlineCard v-for="user in users" :key="user.chatID" :user="user" />
    </ul>
  </div>
</template>

<script setup>
  import UserOnlineCard from '../Users/OnlineCard.vue'
  import { computed, inject } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()

  const users = computed(() => store.getters['allOnline'])
</script>

<style lang="scss" scoped>
  .chat__aside {
    position: relative;
    width: 200px;

    &--users {
      @include set-absolute;
      &__header {
        margin: 5px;
        padding: 5px 10px;
        text-transform: uppercase;
        font-size: 0.875rem;
        text-align: left;
        font-weight: 600;
      }
    }
    .users-online--count {
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
</style>
