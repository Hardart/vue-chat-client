<template>
  <div class="rooms bg-secondary flex flex-col w-s@s hidden@s">
    <ul class="uk-nav uk-nav-default rooms--name">
      <li class="rooms--name__header">Комнаты</li>
    </ul>
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .rooms {
    position: relative;

    &--name {
      width: 100%;
      flex: 1;

      &__header {
        margin: 5px;
        padding: 5px 10px;
        text-transform: uppercase;
        font-size: 0.875rem;
        text-align: left;
        font-weight: 600;
      }
    }
  }
</style>
