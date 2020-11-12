import axios, { AxiosError, AxiosResponse } from 'axios'

import { userLogin, userLogout } from 'src/screens/Auth/redux'
import { APP_AUTH_BASE } from 'src/constants'
import { AppUser } from 'src/interfaces/Auth'
import store from '../redux/store'

export type EmailAlreadyUsed = 'auth/email-already-in-use'
export type WrongCredentials = 'auth/wrong-credentials'
export type UserDisabled = 'auth/user-disabled'
export type UnknownError = 'auth/unknown'

type AuthErrorCode =
  | EmailAlreadyUsed
  | WrongCredentials
  | UserDisabled
  | UnknownError

class NetworkError extends Error {
  constructor() {
    super('Network error')
  }
}

class AuthError extends Error {
  code: AuthErrorCode

  constructor(
    code: AuthErrorCode = 'auth/unknown',
    message: string | undefined = undefined
  ) {
    super(message)
    this.code = code
  }
}

const auth = axios.create({
  baseURL: APP_AUTH_BASE,
  timeout: 10000,
  headers: {},
})

auth.interceptors.response.use(
  (res: AxiosResponse) => Promise.resolve(res),
  (error: AxiosError) => {
    const { response } = error

    if (response && response.data && response.data.message) {
      return Promise.reject(new AuthError(response.data, response.data.message))
    }

    if (error.message === 'Network Error') {
      return Promise.reject(new NetworkError())
    }

    return Promise.reject(error)
  }
)

export function registerWithEmailAndPassword(
  email: string,
  password: string
): Promise<AppUser | AuthError> {
  return auth.post('/register', {
    email,
    password,
  })
}

export function loginWithEmailAndPassword(
  email: string,
  password: string
): Promise<AppUser | Error> {
  return auth
    .post<AppUser>('/login', {
      email,
      password,
    })
    .then(({ data }) => {
      store.dispatch(userLogin(data))
      return data
    })
}

export function logout() {
  store.dispatch(userLogout())
  return Promise.resolve()
}
