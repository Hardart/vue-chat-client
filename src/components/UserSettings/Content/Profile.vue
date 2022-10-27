<template>
  <div>
    <h3 class="p-20">{{ name }}</h3>
    <hr />
    <div class="card card-default">
      <div class="card-header">
        <div class="grid flex flex-middle">
          <div class="w-auto relative">
            <img class="user-avatar bdr-circle" width="120" height="120" :src="user.avatar" />
            <p class="user-id">#{{ user.chatID }}</p>
          </div>
          <div class="w-expand">
            <h3 class="user-title">{{ user.name }}</h3>
          </div>
          <div class="w-auto">
            <div @click="changeStateUploadInput" class="btn btn-warning">Изменить изображение</div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="flex flex-middle mb-20">
          <div class="w-expand">
            <h4 class="card__title">Имя пользователя</h4>
            <p>{{ user.name }}</p>
          </div>
          <PnzButton @click="open" color="secondary" text="Изменить" />
        </div>
        <div class="flex flex-middle">
          <div class="w-expand">
            <h4 class="card__title">Электронная почта</h4>
            <p>{{ user.email }}</p>
          </div>
          <PnzButton color="secondary" text="Изменить" disabled />
        </div>
      </div>
    </div>
    <hr />
    <h4 class="p-20">Учётная запись</h4>
    <div class="btn btn-danger ml-20">Удалить уч. запись</div>
    <ChangeInfo v-if="isOpenChangeNameModal" />
  </div>
</template>

<script setup>
  import ChangeInfo from './ChangeInfo.vue'
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { changeStateUploadInput } from '@/features/settings/User/adds'
  import { isOpenChangeNameModal } from '@/features/settings/changeInfo'
  import { changeState } from '@/utils/helpers'
  import PnzButton from '@/components/UI/PnzButton.vue'

  const props = defineProps({
    name: String
  })
  const store = useStore()
  const user = computed(() => store.getters['user/get'])
  const open = () => changeState(isOpenChangeNameModal)
</script>

<style lang="scss" scoped>
  .user-id {
    @include display-flex;
    @include flex-align(center);
    @include set-absolute(82px, 96px);
    width: 40px;
    height: 40px;
    font-size: $standart;
    font-weight: 600;
    border-radius: 50%;
    background-color: $dark;
    border: 2px solid $light;
  }
  .user-avatar {
    border: 5px solid $light;
  }

  .user-title {
    font-size: 2rem;
  }
</style>
