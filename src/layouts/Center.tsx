import React from 'react'
import Flex, { Props } from 'src/components/Flex'

const Center: React.FC<Props> = props => (
  <Flex alignItems="center" justifyContent="center" {...props} />
)

export default Center
