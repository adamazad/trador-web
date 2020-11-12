const MODAL_SHOW = 'modal/show'
const MODAL_DISMISS = 'modal/dismiss'

type ModalPayload = {
  title: string
  content: string
}

type ModalShowAction = {
  type: typeof MODAL_SHOW
  payload: ModalPayload
}

type ModalDismissAction = {
  type: typeof MODAL_DISMISS
}

type ModalAction = ModalShowAction | ModalDismissAction

type ModalState = {
  shown: boolean
  title: string
  content: string
}

export const showModal = (payload: ModalPayload): ModalShowAction => ({
  type: MODAL_SHOW,
  payload,
})

export const dismissModal = (): ModalDismissAction => ({
  type: MODAL_DISMISS,
})

const inititalState: ModalState = {
  shown: false,
  title: '',
  content: '',
}

export default function reducer(state = inititalState, action: ModalAction) {
  switch (action.type) {
    case MODAL_SHOW:
      return { ...action.payload, shown: true }
    case MODAL_DISMISS:
      return { ...inititalState }
    default:
      return state
  }
}
