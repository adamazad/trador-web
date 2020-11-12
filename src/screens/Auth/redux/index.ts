import { AppUser, UserAuth } from 'src/interfaces/Auth'

const USER_LOGIN = 'user/login'
const USER_LOGOUT = 'user/logout'
const USER_UPDATE = 'user/update'
const USER_REGISTER = 'user/register'
const USER_UPDATE_AUTH = 'user/auth/update'

type UserActionLogin = {
  type: typeof USER_LOGIN
  payload: AppUser
}

type UserActionLogout = {
  type: typeof USER_LOGOUT
}

type UserActionUpdateAuth = {
  type: typeof USER_UPDATE_AUTH
  payload: UserAuth
}

type UserActionUpdate = {
  type: typeof USER_UPDATE
  payload: AppUser // any field
}

type UserActionRegister = {
  type: typeof USER_REGISTER
}

type AuthAction =
  | UserActionLogin
  | UserActionLogout
  | UserActionUpdate
  | UserActionUpdateAuth
  | UserActionRegister

export type AuthState = {
  user: AppUser | null
}

const initialState: AuthState = {
  user: null,
}

export const userLogin = (user: AppUser): UserActionLogin => ({
  type: USER_LOGIN,
  payload: user,
})

export const userLogout = (): UserActionLogout => ({
  type: USER_LOGOUT,
})

export default function authReducer(state = initialState, action: AuthAction) {
  switch (action.type) {
    case USER_LOGIN:
      return { user: action.payload }
    case USER_UPDATE_AUTH:
      return {
        user: {
          ...state.user,
          auth: action.payload,
        } as AppUser,
      }
    case USER_LOGOUT:
      return { user: null }
    case USER_REGISTER:
    default:
      return state
  }
}
