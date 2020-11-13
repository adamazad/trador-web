import { useDispatch } from 'react-redux'
import React from 'react'

import MessageListContainer from './containers/MessageList'
import { setPageTitle } from 'src/services/redux/page'
import FixedHeader from 'src/layouts/FixedHeader'
import { useMountEffect } from 'src/hooks'
import { Container } from 'src/components'

function MessageListScreen() {
  const dispatch = useDispatch()

  useMountEffect(() => {
    dispatch(setPageTitle('Messages'))
  })

  return (
    <FixedHeader>
      <Container>
        <MessageListContainer />
      </Container>
    </FixedHeader>
  )
}

export default MessageListScreen
