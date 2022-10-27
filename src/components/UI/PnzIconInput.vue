<template>
  <div class="input-icon">
    <span v-html="icon ?? '₽'"></span>
    <input class="input" :placeholder="placeholder" :type="type || 'text'" :value="modelValue" @input="$emit('update:modelValue', $event.target.value.trim())" :required="required || false" />
  </div>
</template>

<script setup>
  const props = defineProps(['modelValue', 'placeholder', 'type', 'required', 'icon'])
  defineEmits(['update:modelValue'])
</script>

<style></style>
