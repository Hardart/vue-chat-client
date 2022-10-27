import { ref } from 'vue'
export let isShowUploadInput = ref(false)
export let isShowUploadSettings = ref(false)

export const changeStateUploadInput = () => {
  isShowUploadInput.value = !isShowUploadInput.value
}

export const changeStateUploadSettings = () => {
  isShowUploadSettings.value = !isShowUploadSettings.value
}

export const uploadImage = ref(null)
