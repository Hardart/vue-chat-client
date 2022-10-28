<template>
  <div class="flex flex-between flex-middle p-10 bg-dark">
    <Header.Logo title="Vue Chat" />
    <Header.Navigation />
  </div>

  <PnzTooltip v-if="isShowTooltip" :el="coords" />
</template>

<script setup>
  import * as Header from '@/components/Chat/Header/index'
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
