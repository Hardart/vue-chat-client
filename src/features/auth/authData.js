import { ref } from 'vue'

export const authData = ref({
  email: '',
  password: '',
  passwordCopy: '',
  name: '',
  errorText: ''
})

export const isLoginForm = ref(true)
