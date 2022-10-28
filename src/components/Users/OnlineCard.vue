<template>
  <li>
    <div class="user-online">
      <div class="user-online__avatar">
        <img :src="avatar(user.avatar)" width="40" height="40" :alt="firstLetter(user.name)" />
      </div>
      <div class="user-online__name">
        <h5>{{ user.name }}</h5>
      </div>
    </div>
  </li>
</template>

<script setup>
  import { avatar, firstLetter } from '@/utils/helpers'

  const props = defineProps({
    user: Object
  })
</script>

<style lang="scss">
  .user-online {
    display: flex;
    align-items: center;
    padding: 5px 10px;

    &__avatar {
      overflow: hidden;
      border-radius: 50%;
    }

    &__name h5 {
      padding: 0 10px;
      margin: 0 !important;
    }
  }
</style>
