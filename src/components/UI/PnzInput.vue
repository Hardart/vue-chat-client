<template>
  <h3 class="input__label">Имя пользователя</h3>
  <input v-in-focus class="input" :placeholder="placeholder" :type="type || 'text'" :value="modelValue" @input="$emit('update:modelValue', $event.target.value.trim())" />
</template>

<script setup>
// import icons from '@/utils/icons'
defineProps(['modelValue', 'placeholder', 'type'])
defineEmits(['update:modelValue'])
</script>

<style></style>
