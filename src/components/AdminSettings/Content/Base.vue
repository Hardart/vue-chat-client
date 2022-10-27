<template>
  <div>
    <h3 class="p-20">{{ name }}</h3>
    <hr />
  </div>
</template>

<script setup>
  const props = defineProps({
    name: String,
  })
</script>

<style></style>
