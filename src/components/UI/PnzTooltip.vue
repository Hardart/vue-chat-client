<template>
  <div ref="$this" class="tooltip" :style="`top: ${top}px; left: ${center}px`">{{ el.title }}</div>
</template>

<script setup>
  import { getCoords } from '@/utils/helpers'
  import { onMounted, ref } from 'vue'

  const $this = ref(null)
  const center = ref(0)
  const top = ref(0)

  const props = defineProps({
    el: null,
  })
  onMounted(() => {
    const side = props.el.position
    center.value = props.el.left - getCoords($this.value).width / 2
    top.value = side === 'top' ? props.el[side] - getCoords($this.value).height : props.el[side] + 4
  })
</script>

<style lang="scss">
  .tooltip {
    display: inline-block;
    position: absolute;
    padding: 5px 10px;
    color: $light;
    background-color: rgba($color: #000000, $alpha: 0.5);
    font-size: 0.7rem;
    font-weight: 600;
    z-index: 9999;
  }
</style>
