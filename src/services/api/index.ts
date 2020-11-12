import axios, { AxiosError, AxiosResponse } from 'axios'

import { APP_API_BASE } from 'src/constants'
import store from '../redux/store'

const ApiService = axios.create({
  baseURL: APP_API_BASE,
  timeout: 30000,
  headers: {},
})

class NetworkError extends Error {
  constructor() {
    super('Network error')
  }
}

class ApiError extends Error {
  code: number

  constructor(code: number, message: string) {
    super(message)
    this.code = code
  }
}

ApiService.interceptors.request.use(
  config => {
    const { auth } = store.getState()

    if (auth.user) {
      config.headers.Authorization = `Bearer ${auth.user.auth.accessToken}`
    }

    return config
  },
  error => Promise.reject(error)
)

ApiService.interceptors.response.use(
  (res: AxiosResponse) => Promise.resolve(res),
  (error: AxiosError) => {
    const { response } = error

    if (response && response.data && response.data.message) {
      return Promise.reject(
        new ApiError(response.status, response.data.message)
      )
    }

    if (error.message === 'Network Error') {
      return Promise.reject(new NetworkError())
    }

    return Promise.reject(error)
  }
)

export default ApiService
