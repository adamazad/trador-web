import { useDispatch, useSelector } from 'react-redux'
import React from 'react'

import MessageList from '../components/MessageList'
import { useMountEffect, useUser } from 'src/hooks'
import Loading from '../components/Loading'
import { Button } from 'src/components'
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
    return <Loading />
  }

  // @TODO: improve the UX
  if (error) {
    return (
      <Center height="100%" flexDirection="column">
        There was an error fetching your feed.
        <Button onClick={fetchMessages}>Try Again</Button>
      </Center>
    )
  }

  return (
    <Center height="100%" flexDirection="column">
      <MessageList
        messages={items.filter(item => item.user.id === user?.id)}
        emptyList={() => <>You haven't posts any messages</>}
      />
    </Center>
  )
}
