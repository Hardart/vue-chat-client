import { ref } from 'vue'

export const authData = ref({
  email: '',
  password: '',
  passwordCopy: '',
  name: '',
  errorText: ''
})

export const isLoginForm = ref(true)

export const checkEmail = () => {
  const email = authData.value.email.trim()
  if (email === '') return 'Поле Email не может быть пустым'
  if (email.includes(' ')) return 'Email может содержать пробелов'
  if (!email.includes('@') || !email.includes('.')) return 'Не верный формат Email'
  return ''
}

export const checkPassword = () => {
  const password = authData.value.password
  if (password.length < 3) return 'Пароль слишком короткий'
  if (password.length > 25) return 'Пароль слишком длинный'
  if (password.includes(' ')) return 'Email может содержать пробелов'
  return ''
}

export const shouldDisable = () => {
  if (authData.value.email !== '') return true
  return false
}

export const cleanAuthData = () => {
  for (const key of Object.keys(authData.value)) {
    authData.value[key] = ''
  }
}
