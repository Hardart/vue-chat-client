import { ref } from 'vue'
import { settings } from '@/utils/settings'

// user aside panel
export const openUserPanel = ref(settings.usersPanel)

export const isActiveUserPanel = () => {
  openUserPanel.value = !openUserPanel.value
  settings.setUserPanel(openUserPanel.value)
}

// admin settings window
export const isOpenAdminSettings = ref(false)

// user settings window
export const isOpenUserSettings = ref(false)
