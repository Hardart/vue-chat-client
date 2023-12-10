import { ref } from 'vue'

export const menuItems = [{ title: 'Мой профиль', id: 'Profile' }]

export const activeMenuItem = ref({
  id: menuItems[0].id,
  title: menuItems[0].title
})

export const setActiveComp = ({ id, title }) => {
  activeMenuItem.value.id = id
  activeMenuItem.value.title = title
}
