import { Action } from 'redux'
import { APP_TITLE } from 'src/constants'
import { AppThunk } from './store'

export interface PageState {
  title: string
  path: string
}

export const inititalState: PageState = {
  title: 'Home',
  path: '/',
}

export enum ActionTypes {
  PAGE_SET_TITLE = 'page/title/set',
  PAGE_SET_PATH = 'page/path/set',
}

export interface PageActionSetTitle extends Action<ActionTypes.PAGE_SET_TITLE> {
  payload: string
}

export interface PageActionSetPath extends Action<ActionTypes.PAGE_SET_PATH> {
  payload: string
}

type PageAction = PageActionSetTitle | PageActionSetPath

export const setPagePath = (path: string): PageActionSetPath => ({
  type: ActionTypes.PAGE_SET_PATH,
  payload: path,
})

export function setPageTitle(title: string): AppThunk<void> {
  return dispatch => {
    const payload = `${title} | ${APP_TITLE}`
    document.title = payload
    dispatch({
      type: ActionTypes.PAGE_SET_TITLE,
      payload,
    })
  }
}

export default function reducer(state: PageState = inititalState, action: PageAction) {
  switch (action.type) {
    case ActionTypes.PAGE_SET_TITLE:
      return { ...state, title: action.payload }
    case ActionTypes.PAGE_SET_PATH:
      return { ...state, path: action.payload }
    default:
      return state
  }
}
