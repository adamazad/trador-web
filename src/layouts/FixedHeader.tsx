import React from 'react'

import Flex from 'src/components/Flex'
import Header from 'src/components/Header'
import { header } from '../styles/Theme'

const FixedHeader: React.FC = ({ children }) => {
  return (
    <Flex flexDirection="column" height="100%">
      <Header />
      <Flex marginTop={header.height} py={20} flexGrow={3}>
        {children}
      </Flex>
    </Flex>
  )
}

export default FixedHeader
