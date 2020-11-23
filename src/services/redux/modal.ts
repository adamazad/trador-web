import { Action } from 'redux'

export enum ActionTypes {
  MODAL_SHOW = 'modal/show',
  MODAL_DISMISS = 'modal/dismiss',
}

type ModalPayload = {
  title: string
  content: string
}

export interface ModalShowAction extends Action<ActionTypes.MODAL_SHOW> {
  payload: ModalPayload
}

export interface ModalDismissAction extends Action<ActionTypes.MODAL_DISMISS> {}

type ModalAction = ModalShowAction | ModalDismissAction

export interface ModalState {
  shown: boolean
  title: string
  content: string
}

export const showModal = (payload: ModalPayload): ModalShowAction => ({
  type: ActionTypes.MODAL_SHOW,
  payload,
})

export const dismissModal = (): ModalDismissAction => ({
  type: ActionTypes.MODAL_DISMISS,
})

export const inititalState: ModalState = {
  shown: false,
  title: '',
  content: '',
}

export default function reducer(state = inititalState, action: ModalAction) {
  switch (action.type) {
    case ActionTypes.MODAL_SHOW:
      return { ...action.payload, shown: true }
    case ActionTypes.MODAL_DISMISS:
      return { ...inititalState }
    default:
      return state
  }
}
