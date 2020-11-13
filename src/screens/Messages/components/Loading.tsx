import React from 'react'
import { Spinner } from 'src/components'
import Center from 'src/layouts/Center'

const Loading = () => (
  <Center height="100%" flexDirection="column" minHeight="100%">
    <Spinner />
  </Center>
)

export default Loading
