import React from 'react'

import { Message } from 'src/interfaces/Messages'
import Center from 'src/layouts/Center'
import Card from 'src/components/Card'
import SingleMessage from './Message'

interface RenderMessageListProps {
  messages: Message[]
  emptyList?: () => JSX.Element
}

const DefaultEmptyList = () => (
  <Center>
    <h4>You best everyone else!</h4>
  </Center>
)

const MessageList: React.FC<RenderMessageListProps> = ({
  messages,
  emptyList = DefaultEmptyList,
}) => {
  if (messages.length === 0) {
    return emptyList()
  }

  return (
    <>
      {messages.map(item => (
        <Card mb={20} key={item.id}>
          <SingleMessage message={item} />
        </Card>
      ))}
    </>
  )
}

export default MessageList
