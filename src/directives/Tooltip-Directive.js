import { showTooltip, isShowTooltip } from '@/features/addTooltip'
export default {
  name: 'tooltip',
  mounted(el, binding) {
    const position = binding.value?.position || null
    const title = binding.value?.title || null
    el.onmouseenter = (event) => showTooltip(event.target, title, position)
    el.onmouseleave = () => (isShowTooltip.value = false)
    el.onclick = () => (isShowTooltip.value = false)
  },
  unmounted(el) {
    el.onmouseenter = null
    el.onmouseleave = null
    el.onclick = null
  },
}
