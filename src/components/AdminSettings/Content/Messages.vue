<template>
  <div @click="socket.emit('clearHistory')" class="btn btn-danger">Удалить все сообщения</div>
</template>

<script setup>
  import { inject } from 'vue'
  const socket = inject('io')
</script>

<style></style>
