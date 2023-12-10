<template>
  <form>
    <div class="mb-10" v-if="authData.errorText != ''">
      <p class="error-msg text-warning">{{ authData.errorText }}</p>
    </div>
    <div class="mb-10">
      <PnzIconInput v-model="authData.email" :icon="icons.mail" type="email" placeholder="Email" :required="true" />
    </div>
    <div :class="!isLoginForm ? 'mb-10' : 'mb-20'">
      <PnzIconInput v-model="authData.password" :icon="icons.lock" type="password" placeholder="Пароль" :required="true" />
    </div>
    <div class="mb-10" v-if="!isLoginForm">
      <PnzIconInput v-model="authData.passwordCopy" :icon="icons.lock" type="password" placeholder="Повторите пароль" :required="true" />
    </div>
    <div class="mb-20" v-if="!isLoginForm">
      <PnzIconInput v-model="authData.name" :icon="icons.user" placeholder="Ваше имя" :required="true" />
    </div>

    <PnzButton v-if="isLoginForm" @click.prevent="tryLogin" color="primary" text="Войти" />
    <PnzButton v-else @click.prevent="tryRegistration" color="primary" text="Зарегестрироваться" />
    <PnzButton @click.prevent="changeLoginForm" :text="isLoginForm ? 'зарегестрироваться' : 'войти'" />
  </form>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { isLoginForm, authData, checkEmail, checkPassword, cleanAuthData } from '@/features/auth/authData'
import icons from '@/utils/icons'

const store = useStore()
const router = useRouter()

const changeLoginForm = () => {
  authData.value.errorText = ''
  isLoginForm.value = !isLoginForm.value
}

async function tryLogin() {
  const emailError = checkEmail()
  const passwordError = checkPassword()
  if (emailError) return (authData.value.errorText = emailError)
  if (passwordError) return (authData.value.errorText = passwordError)
  const res = await store.dispatch('user/login', { email: authData.value.email, password: authData.value.password })
  if (res.message) return (authData.value.errorText = res.message)
  cleanAuthData()
  router.push('/')
}

async function tryRegistration() {
  const emailError = checkEmail()
  const passwordError = checkPassword()
  if (emailError) return (authData.value.errorText = emailError)
  if (passwordError) return (authData.value.errorText = passwordError)
  if (authData.value.password !== authData.value.passwordCopy) return (authData.value.errorText = 'Пароли не совпадают')
  const res = await store.dispatch('user/registration', {
    email: authData.value.email,
    password: authData.value.password,
    name: authData.value.name,
  })
  if (res.message) return (authData.value.errorText = res.message)
  cleanAuthData()
  isLoginForm.value = !isLoginForm.value
}
</script>

<style lang="scss">
.error-msg {
  text-transform: uppercase;
  font-weight: 600;
  font-size: $standart;
}
</style>
