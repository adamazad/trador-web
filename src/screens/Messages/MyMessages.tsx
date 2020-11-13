import { useDispatch } from 'react-redux'
import React from 'react'

import MyMessageListContainer from './containers/MyMessages'
import { setPageTitle } from 'src/services/redux/page'
import FixedHeader from 'src/layouts/FixedHeader'
import { useMountEffect } from 'src/hooks'
import { Container } from 'src/components'

function MyMessageListScreen() {
  const dispatch = useDispatch()

  useMountEffect(() => {
    dispatch(setPageTitle('My Messages'))
  })

  return (
    <FixedHeader>
      <Container>
        <MyMessageListContainer />
      </Container>
    </FixedHeader>
  )
}

export default MyMessageListScreen
