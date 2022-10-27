<template>
  <form>
    <div class="mb-10">
      <PnzIconInput v-model="authData.email" :icon="icons.mail" type="email" :required="true" />
    </div>
    <div :class="!isLoginForm ? 'mb-10' : 'mb-20'">
      <PnzIconInput v-model="authData.password" :icon="icons.lock" type="password" :required="true" />
    </div>
    <div class="mb-10" v-if="!isLoginForm">
      <PnzIconInput v-model="authData.passwordCopy" :icon="icons.lock" type="password" :required="true" />
    </div>
    <div class="mb-20" v-if="!isLoginForm">
      <PnzIconInput v-model="authData.name" :icon="icons.lock" :required="true" />
    </div>
    <div class="mb-10" v-if="authData.errorText != ''">
      <p class="text-danger">{{ authData.errorText }}</p>
    </div>
    <PnzButton v-if="isLoginForm" @click.prevent="tryLogin" color="primary" text="Войти" />
    <PnzButton v-else @click.prevent="tryRegistration" color="primary" text="Зарегестрироваться" />
    <PnzButton @click.prevent="changeLoginForm" :text="isLoginForm ? 'зарегестрироваться' : 'войти'" />
  </form>
</template>

<script setup>
  import { inject } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import { isLoginForm, authData } from '@/features/auth/authData'
  import icons from '@/utils/icons'
  import PnzIconInput from '../UI/PnzIconInput.vue'
  import PnzButton from '../UI/PnzButton.vue'

  const store = useStore()
  const router = useRouter()
  const socket = inject('io')

  const changeLoginForm = () => (isLoginForm.value = !isLoginForm.value)

  async function tryLogin() {
    const res = await store.dispatch('user/login', { email: authData.value.email, password: authData.value.password })
    if (res.message) return (authData.value.errorText = res.message)
    socket.emit('enter')

    router.push('/')
  }

  async function tryRegistration() {
    if (authData.value.password !== authData.value.passwordCopy) return console.log('Пароли не совпадают')
    const res = await store.dispatch('user/registration', {
      email: authData.value.email,
      password: authData.value.password,
      name: authData.value.name
    })
    if (res.message) return
    router.push('/login')
  }
</script>

<style></style>
