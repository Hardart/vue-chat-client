import icons from '@/utils/icons'

export default {
  name: 'icon',
  /**
   * @param {HTMLElement} el
   * @param {import('vue').DirectiveBinding} binding
   */
  mounted(el, binding) {
    const icon = binding.value?.icon
    let ratio = binding.value?.ratio
    if (!icon) return console.error('in Icon directive you need pass param "icon"')
    if (icon === 'emptyIcon') return
    if (!icons[icon]) return console.error(`There are no icon with name ${icon} in icons file`)
    el.insertAdjacentHTML('afterbegin', icons[icon])
    if (!ratio) ratio = 1
    const svg = el.children[0]
    if (svg.tagName === 'svg') setElementSize(svg, ratio)
  }
}
/**
 * @param {HTMLElement} el
 * @param {number} ratio
 */
function setElementSize(el, ratio) {
  const width = el.clientWidth
  el.setAttribute('width', `${width * ratio}`)
  el.setAttribute('height', `${width * ratio}`)
}
