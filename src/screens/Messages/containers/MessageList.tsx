import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import React from 'react'

import RabbitImageUrl from 'src/assets/media/arabica-1055.png'
import Card, { CardBody } from 'src/components/Card'
import { useUser, useMountEffect } from 'src/hooks'
import { Link, Button } from 'src/components'
import Center from 'src/layouts/Center'

import MessageList from '../components/MessageList'
import AddMessage from '../components/AddMessage'
import Loading from '../components/Loading'
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
    return <Loading />
  }

  // @TODO: improve the UX
  if (error) {
    return (
      <Center flexDirection="column" height="100%">
        There was an error fetching your feed.
        <Button onClick={fetchMessages}>Try Again</Button>
      </Center>
    )
  }

  return (
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
        emptyList={() => <>You beat everyone else here!</>}
      />
    </Center>
  )
}

export default MessageListContainer
