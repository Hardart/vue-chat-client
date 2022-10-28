import icons from '@/utils/icons'
export default {
  name: 'icon',
  mounted(el, binding) {
    const icon = binding.value?.icon
    if (!icon) return console.error('in Icon directive you need pass param "icon"')
    if (icon === 'emptyIcon') return
    if (!icons[icon]) return console.error(`There are no icon with name ${icon} in icons file`)
    el.insertAdjacentHTML('afterbegin', icons[icon])
  }
}
