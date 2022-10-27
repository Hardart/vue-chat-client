export function getCoords(el) {
  const { top, bottom, left, right, width, height, x, y, toJSON } = el.getBoundingClientRect()
  const centerY = top + height / 2
  const centerX = left + width / 2
  return { centerX, centerY, ...{ top, bottom, left, right, width, height, x, y, toJSON } }
}

export const changeState = ref => (ref.value = !ref.value)
