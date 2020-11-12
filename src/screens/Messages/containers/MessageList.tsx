import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import React from 'react'

import { Link, Container, Button, ErrorMessage, Spinner } from 'src/components'
import RabbitImageUrl from 'src/assets/media/arabica-1055.png'
import Card, { CardBody } from 'src/components/Card'
import { useUser, useMountEffect } from 'src/hooks'
import Center from 'src/layouts/Center'

import MessageList from '../components/MessageList'
import AddMessage from '../components/AddMessage'
import { getMessages } from '../redux'

const CardMedia = styled(Card)`
  background-image: url(${RabbitImageUrl});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  min-height: 200px;
`

function MessageListContainer() {
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
        {user ? (
          <AddMessage />
        ) : (
          <CardMedia mb={20}>
            <CardBody>
              <Link to="/login">Login to post a message</Link>
            </CardBody>
          </CardMedia>
        )}
        <MessageList
          messages={items.filter(message => message.parentId == null)}
          emptyList={() => (
            <Center flex={1}>You do not have any messsages posted</Center>
          )}
        />
        {isLoading && <Spinner />}
        {error && <LoadError />}
      </Center>
    </Container>
  )
}

export default MessageListContainer
