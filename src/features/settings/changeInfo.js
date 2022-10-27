import { ref } from 'vue'

export const valueForChange = ref('')
export const isOpenChangeNameModal = ref(false)
export const stateChangeNameModal = () => (isOpenChangeNameModal.value = !isOpenChangeNameModal.value)
