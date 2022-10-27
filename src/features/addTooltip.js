import { reactive, ref } from 'vue'
import { getCoords } from '@/utils/helpers'

export const coords = reactive({
  top: 0,
  left: 0,
  bottom: 0,
  title: '',
  position: '',
})

export function showTooltip($target, title, position) {
  coords.top = getCoords($target).top
  coords.bottom = getCoords($target).bottom
  coords.left = getCoords($target).centerX
  coords.title = title || 'Tooltip'
  coords.position = position || 'top'
  isShowTooltip.value = true
}

export const isShowTooltip = ref(false)
