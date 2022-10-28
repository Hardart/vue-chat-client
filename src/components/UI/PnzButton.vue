<template>
  <button v-tooltip="{ title: 'Закрыть', position: 'bottom' }" class="btn btn-close" type="button" v-if="icon == 'close'" v-html="icons[icon]"></button>
  <button :class="['btn', `btn-${color ?? 'default'}`, { 'btn-icon': icon }]" v-icon="{ icon: setIcon }" v-else>{{ text }}</button>
</template>

<script setup>
  import icons from '@/utils/icons'
  const props = defineProps({
    color: String,
    icon: String,
    text: String,
    type: String,
    size: String,
    isIcon: {
      type: Boolean,
      default: false
    }
  })

  const setIcon = props.icon || 'emptyIcon'
</script>

<style></style>
