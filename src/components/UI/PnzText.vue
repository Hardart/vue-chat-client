<template>
   <p>Hello</p>
</template>

<script setup>
   const props = defineProps({
      color: {
         type: String,
         default: 'red',
      },
   })
</script>

<style scoped>
   p {
      color: v-bind('color');
   }
</style>
