import { ref } from 'vue'
import { settings } from '@/utils/settings'

// user aside panel
export let openUserPanel = ref(settings.usersPanel)
export const isActiveUserPanel = () => {
  openUserPanel.value = !openUserPanel.value
  settings.setUserPanel(openUserPanel.value)
}

// admin settings window
export let openAdminSettings = ref(false)
export const isOpenAdminSettings = () => {
  openAdminSettings.value = !openAdminSettings.value
}

// user settings window
export let openUserSettings = ref(false)
export const isOpenUserSettings = () => {
  openUserSettings.value = !openUserSettings.value
}
