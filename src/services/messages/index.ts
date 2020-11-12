import { Message } from 'src/interfaces/Messages'
import ApiService from '../api'

type GetMessagesResponse = {
  messages: Message[]
}

export interface CreateMessagePayload {
  message: string
  parentId?: string
}

export interface UpdateMessagePayload extends CreateMessagePayload {}

export const getMessages = () => {
  return ApiService.get<GetMessagesResponse>(`/messages`).then(
    ({ data }) => data
  )
}

export const getMessageById = (messageId: string) => {
  return ApiService.get<Message>(`/messages/${messageId}`).then(
    ({ data }) => data
  )
}

export const deleteMessageById = (messageId: string) =>
  ApiService.delete(`/messages/${messageId}`)

export const createMessage = (payload: CreateMessagePayload) =>
  ApiService.post(`/messages`, payload)

export const updateMessage = (
  messageId: string,
  payload: UpdateMessagePayload
) => ApiService.put(`/messages/${messageId}`, payload)
