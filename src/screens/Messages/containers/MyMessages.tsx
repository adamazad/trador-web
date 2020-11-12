import { useDispatch, useSelector } from 'react-redux'
import React from 'react'

import { Container, Button, ErrorMessage, Spinner } from 'src/components'
import MessageList from '../components/MessageList'
import { useMountEffect, useUser } from 'src/hooks'
import Center from 'src/layouts/Center'
import { getMessages } from '../redux'

export default function MyMessageListContainer() {
  const user = useUser()
  const dispatch = useDispatch()
  const { error, isLoading, items } = useSelector(store => store.messages)

  const fetchMessages = () => dispatch(getMessages())

  useMountEffect(() => {
    fetchMessages()
  })

  if (isLoading) {
    return (
      <Center flex={1}>
        <Spinner />
      </Center>
    )
  }

  const LoadError = () => (
    <>
      <ErrorMessage error={error} />
      <p>Looks like you lost your connection. Please check it and try again.</p>
      <div>
        <Button variant="black" onClick={fetchMessages}>
          Try Again
        </Button>
      </div>
    </>
  )

  return (
    <Container>
      <Center height="100%" flexDirection="column">
        <MessageList
          messages={items.filter(item => item.user.id === user?.id)}
          emptyList={() => <div>Empty!</div>}
        />
        {isLoading && <Spinner />}
        {error && <LoadError />}
      </Center>
    </Container>
  )
}
