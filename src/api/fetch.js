import { ref, isRef, unref, watchEffect } from 'vue'
import { getAccessToken, setTokens } from '@/utils/tokens'
export const serverUrl = 'http://localhost:5500'
export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  async function doFetch() {
    // reset state before fetching..
    data.value = null
    error.value = null

    // resolve the url value synchronously so it's tracked as a
    // dependency by watchEffect()
    const urlValue = unref(url)

    try {
      // artificial delay / random error
      // await timeout()
      // unref() will return the ref value if it's a ref
      // otherwise the value will be returned as-is
      const res = await fetch(urlValue)
      data.value = await res.json()
    } catch (e) {
      error.value = e
    }
  }

  if (isRef(url)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(doFetch)
  } else {
    // otherwise, just fetch once
    doFetch()
  }

  return { data, error, retry: doFetch }
}

export function uploadAvatar(body, action = 'avatar') {
  const data = ref(null)
  const error = ref(null)
  const url = `${serverUrl}/upload/${action}`

  async function doFetch() {
    // reset state before fetching..
    data.value = null
    error.value = null

    const bodyValue = unref(body)

    const token = getAccessToken()
    let headers = {
      authorization: `Bearer ${token}`,
    }
    if (bodyValue?.avatar) headers = { ...headers, 'Content-Type': 'application/json' }
    try {
      const res = await fetch(url, {
        body: bodyValue?.avatar ? JSON.stringify(bodyValue) : bodyValue,
        method: 'POST',
        headers,
      })
      data.value = await res.json()
    } catch (e) {
      error.value = e
      console.log(error)
    }
  }

  if (isRef(body)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(doFetch)
  } else {
    // otherwise, just fetch once
    doFetch()
  }

  return { data, error, retry: doFetch }
}

export async function resizeAvatar(body) {
  const data = ref(null)
  const error = ref(null)
  const url = `${serverUrl}/upload/resize`

  async function doFetch() {
    // reset state before fetching..
    data.value = null
    error.value = null

    const bodyValue = unref(body)

    const token = getAccessToken()
    try {
      const res = await fetch(url, {
        body: bodyValue ? JSON.stringify(bodyValue) : null,
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      data.value = await res.json()
    } catch (e) {
      error.value = e
      console.log(error)
    }
  }

  if (isRef(body)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(doFetch)
  } else {
    // otherwise, just fetch once
    doFetch()
  }

  return { data, error, retry: doFetch }
}

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve()
      } else {
        reject(new Error('Random Error'))
      }
    }, 300)
  })
}
