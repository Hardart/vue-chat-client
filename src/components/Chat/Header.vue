<template>
  <div class="flex flex-between flex-middle p-10 bg-dark">
    <Header.Logo />
    <Header.Navigation />
  </div>
  <Teleport to="body">
    <PnzTooltip v-if="isShowTooltip" :el="coords" />
  </Teleport>
</template>

<script setup>
  import * as Header from './Header/index'
  import { isShowTooltip, coords } from '@/features/addTooltip'
</script>

<style lang="scss">
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;

    &__buttons {
      display: flex;
      gap: 10px;

      .btn {
        padding: 14px;
      }
    }
  }
</style>
