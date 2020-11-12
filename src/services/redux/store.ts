import {
  combineReducers,
  createStore,
  applyMiddleware,
  Action,
  compose,
} from 'redux'
import Thunk, { ThunkAction } from 'redux-thunk'

import messagesReducer from '../../screens/Messages/redux'
import authReducer from '../../screens/Auth/redux'
import modalReducer from './modal'
import pageReducer from './page'

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

const rootReducer = combineReducers({
  messages: messagesReducer,
  modal: modalReducer,
  page: pageReducer,
  auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(Thunk)))

export default store
