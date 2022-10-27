<template>
   <form>
      <div class="uk-margin">
         <div class="uk-inline uk-width-2-3">
            <span class="uk-form-icon" uk-icon="icon: mail"></span>
            <input v-model="authData.email" class="uk-input" name="email" type="email" required />
         </div>
      </div>
      <div class="uk-margin">
         <div class="uk-inline uk-width-2-3">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input v-model="authData.password" class="uk-input" type="password" required />
         </div>
      </div>
      <div class="uk-margin">
         <div class="uk-inline uk-width-2-3">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input v-model="authData.passwordCopy" class="uk-input" type="password" required />
         </div>
      </div>
      <div class="uk-margin">
         <div class="uk-inline uk-width-2-3">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input v-model="authData.name" class="uk-input" type="text" required />
         </div>
      </div>

      <div class="uk-margin" v-if="authData.errorText != ''">
         <p class="text-danger">{{ authData.errorText }}</p>
      </div>
      <div class="uk-margin-small">
         <button @click.prevent="tryRegistration" class="uk-button bg-info uk-width-2-3">регистрация</button>
      </div>
      <router-link to="/login" class="uk-link">назад</router-link>
   </form>
</template>

<script setup>
   import { useRouter } from 'vue-router'
   import { useStore } from 'vuex'
   import { authData } from '@/features/auth/authData'

   const store = useStore()
   const router = useRouter()

   async function tryRegistration() {
      if (authData.value.password !== authData.value.passwordCopy) return 
      const res = await store.dispatch('user/registration', {
         email: authData.value.email,
         password: authData.value.password,
         name: authData.value.name,
      })
      if (res.message) return 
      router.push('/login')
   }
</script>

<style></style>
