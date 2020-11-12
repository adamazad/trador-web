export interface MessageUser {
  id: string
  name: string
}

export interface Message {
  id: string
  user: MessageUser
  parentId: string | null
  message: string
  createdAt: string
  updatedAt: string
}
