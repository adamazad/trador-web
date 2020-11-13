import React from 'react'
import { Spinner } from 'src/components'
import Center from 'src/layouts/Center'

const Loading = () => (
  <Center height="100%" flex={1}>
    <Spinner />
  </Center>
)

export default Loading
