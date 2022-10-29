<template>
  <div class="absolute-0 flex flex-center flex-middle bg-primary">
    <div class="card card-secondary bdr-15 w-50@s w-33@m w-25@l shadow-2 m-20">
      <div class="card-header pb-0">
        <h2>{{ isLoginForm ? 'Авторизация' : 'Регистрация' }}</h2>
      </div>
      <div class="card-body text-center">
        <Form.Login />
      </div>
    </div>
  </div>
</template>

<script setup>
  import * as Form from '@/components/Form/_index'
  import { isLoginForm } from '@/features/auth/authData'
</script>

<style></style>
