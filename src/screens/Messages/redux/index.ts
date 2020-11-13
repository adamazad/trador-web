import { showModal } from 'src/services/redux/modal'
import { AppThunk } from 'src/services/redux/store'
import { Message } from 'src/interfaces/Messages'
import ApiService from 'src/services/api'

const MESSAGES_CREATE = 'messages/create'
const MESSAGES_UPDATE = 'messages/update'
const MESSAGES_DELETE = 'messages/delete'
const MESSAGES_LOADING = 'messages/loading'
const MESSAGES_RECEIVE = 'messages/recevie'
const MESSAGES_ERROR = 'messages/error'

type MessagesLoadingAction = {
  type: typeof MESSAGES_LOADING
}

type MessagesReceiveAction = {
  type: typeof MESSAGES_RECEIVE
  payload: Message[]
}

type MessagesErrorAction = {
  type: typeof MESSAGES_ERROR
  payload: Error
}

type MessagesDeleteAction = {
  type: typeof MESSAGES_DELETE
  payload: string
}

type MessagesUpdateAction = {
  type: typeof MESSAGES_UPDATE
  payload: Message
}

type MessagesCreateAction = {
  type: typeof MESSAGES_CREATE
  payload: Message
}

type MessageAction =
  | MessagesReceiveAction
  | MessagesLoadingAction
  | MessagesErrorAction
  | MessagesDeleteAction
  | MessagesUpdateAction
  | MessagesCreateAction

const messagesLoading = (): MessagesLoadingAction => ({
  type: MESSAGES_LOADING,
})

const messagesError = (payload: Error): MessagesErrorAction => ({
  type: MESSAGES_ERROR,
  payload,
})

const messagesReceive = (payload: Message[]): MessagesReceiveAction => ({
  payload,
  type: MESSAGES_RECEIVE,
})

export const messageDelete = (messageId: string): MessagesDeleteAction => ({
  type: MESSAGES_DELETE,
  payload: messageId,
})

export const messageCreate = (payload: Message): MessagesCreateAction => ({
  type: MESSAGES_CREATE,
  payload,
})

export const messageUpdate = (payload: Message): MessagesUpdateAction => ({
  type: MESSAGES_UPDATE,
  payload,
})

type MessagesState = {
  items: Message[]
  isLoading: boolean
  updatedAt: number
  ttl: number
  error: Error | null
}

const initialState: MessagesState = {
  isLoading: false,
  error: null,
  items: [],
  updatedAt: 0,
  ttl: 120,
}

type GetMessagesResponse = {
  messages: Message[]
}

export interface CreateMessagePayload {
  message: string
  parentId?: string
}

export interface UpdateMessagePayload extends CreateMessagePayload {}

export const getMessages = (): AppThunk => (dispatch, getState) => {
  const { messages } = getState()

  const tllDelta = Date.now() / 1000 - messages.updatedAt

  if (tllDelta < messages.ttl) {
    return
  }

  dispatch(messagesLoading())

  ApiService.get<GetMessagesResponse>(`/messages`)
    .then(({ data }) => dispatch(messagesReceive(data.messages)))
    .catch(error => dispatch(messagesError(error)))
}

export const deleteMessage = (messageId: string): AppThunk => dispatch => {
  ApiService.delete(`/messages/${messageId}`)
    .then(() => dispatch(messageDelete(messageId)))
    .catch(error => {
      dispatch(
        showModal({
          title: 'Error',
          content: error.message,
        })
      )
    })
}

export const updateMessage = (
  messageId: string,
  payload: UpdateMessagePayload
): AppThunk => dispatch => {
  ApiService.put(`/messages/${messageId}`, payload).then(({ data }) => {
    dispatch(messageUpdate(data))
  })
}

export default function messagesReducer(
  state = initialState,
  action: MessageAction
) {
  const updatedAt = Date.now() / 1000

  switch (action.type) {
    case MESSAGES_LOADING:
      return {
        ...state,
        error: null,
        isLoading: true,
      }
    case MESSAGES_CREATE: {
      return {
        ...state,
        items: [action.payload, ...state.items],
        updatedAt,
      }
    }
    case MESSAGES_UPDATE: {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        ),
        updatedAt,
      }
    }
    case MESSAGES_DELETE: {
      return {
        ...state,
        items: state.items.filter(message => message.id !== action.payload),
        updatedAt,
      }
    }
    case MESSAGES_RECEIVE: {
      return {
        ...state,
        items: action.payload,
        isLoading: false,
        updatedAt,
      }
    }
    case MESSAGES_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}
