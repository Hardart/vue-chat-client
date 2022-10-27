import axios from 'axios'
import { getAccessToken, setTokens } from '@/utils/tokens'

export default () => {
   const baseURL = 'http://127.0.0.1:5500'
   const instance = axios.create({
      baseURL,
      withCredentials: true,
   })
   instance.interceptors.request.use(addAccessToken)

   instance.interceptors.response.use(
      (res) => res,
      async (err) => {
         if (err.response.status !== 401) return Promise.reject(err)

         const response = await axios.get(`${baseURL}/refresh`, { withCredentials: true })
         if (response.data.message) return Promise.reject(err)
         setTokens(response.data.accessToken)
         return axios(addAccessToken(err.config))
      }
   )

   return instance
}

// добавляем accessToken в header Authorization
function addAccessToken(request) {
   const token = getAccessToken()
   if (token !== null) request.headers.Authorization = `Bearer ${token}`
   return request
}
