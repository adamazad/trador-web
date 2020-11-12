import { Dispatch } from 'redux'
import { APP_TITLE } from '../../constants'

const PAGE_SET_TITLE = 'page/title/set'
const PAGE_SET_PATH = 'page/path/set'

type PageActionSetTitle = {
  type: typeof PAGE_SET_TITLE
  payload: string
}

type PageActionSetPath = {
  type: typeof PAGE_SET_PATH
  payload: string
}

type PageAction = PageActionSetTitle | PageActionSetPath

type PageState = {
  title: string
  path: string
}

export const setPagePath = (path: string): PageActionSetPath => ({
  type: PAGE_SET_PATH,
  payload: path,
})

export const setPageTitle = (title: string) => (dispatch: Dispatch) => {
  const payload = `${title} | ${APP_TITLE}`
  document.title = payload
  dispatch({
    type: PAGE_SET_TITLE,
    payload,
  })
}

const inititalState: PageState = {
  title: 'Home',
  path: '/',
}

export default function reducer(
  state: PageState = inititalState,
  action: PageAction
) {
  switch (action.type) {
    case PAGE_SET_TITLE:
      return { ...state, title: action.payload }
    case PAGE_SET_PATH:
      return { ...state, path: action.payload }
    default:
      return state
  }
}
