import config from '@/config'
/**
 * @param {HTMLElement} el
 */
export function getCoords(el) {
  const { top, bottom, left, right, width, height, x, y, toJSON } = el.getBoundingClientRect()
  const centerY = top + height / 2
  const centerX = left + width / 2
  return { centerX, centerY, ...{ top, bottom, left, right, width, height, x, y, toJSON } }
}

export const changeState = ref => (ref.value = !ref.value)

/**
 * @param {string} path
 */
export const avatar = path => {
  if (!path.includes('_avatar')) path = '/' + path
  return config.baseURL + path
}

/**
 * @param {string} name
 */
export const firstLetter = name => toUppercase(name.charAt(0))

/**
 * @param {string} string
 */
export function toUppercase(string) {
  return string.toUpperCase()
}
