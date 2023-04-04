<template>
  <div class="full-size flex flex-center flex-middle bg-overlay px-20">
    <div v-modal class="card card-primary w-l@s">
      <div class="card-header pb-0">
        <div class="card__title">Измените имя пользователя</div>
        <div class="card__text">Введите новое имя пользователя</div>
      </div>
      <div class="card-body">
        <PnzInput v-model="valueForChange" />
      </div>
      <div class="card-footer text-right">
        <PnzButton @click="changeName(valueForChange)" color="success" text="Применить" :disabled="!valueForChange" />
        <PnzButton @click="close" class="ml-10" color="danger" text="Отменить" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PnzButton from '@/components/UI/PnzButton.vue'
import PnzInput from '@/components/UI/PnzInput.vue'
import { isOpenChangeNameModal, valueForChange } from '@/features/settings/changeInfo'
import { changeState } from '@/utils/helpers'
import { inject } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
// const socket = inject('io')

const changeName = async name => {
  await store.dispatch('user/changeName', name)
  // socket.emit('update')
  valueForChange.value = ''
  changeState(isOpenChangeNameModal)
  return
}
const close = () => changeState(isOpenChangeNameModal)
</script>

<style></style>
