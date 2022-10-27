import { ref } from 'vue'

export const menuItems = [
  { title: 'Пользователи', slug: 'Users' },
  { title: 'Сообщения', slug: 'Messages' }
]
export const comp = ref({
  activeSlug: menuItems[0].slug,
  activeTitle: menuItems[0].title
})

export const setActiveComp = menuItem => {
  comp.value.activeSlug = menuItem.slug
  comp.value.activeTitle = menuItem.title
}
