import styled from 'styled-components'
import React from 'react'
import dayjs from 'dayjs'

import { Flex, Iconticon } from 'src/components'
import { CardBody } from 'src/components/Card'

const AuthorName = styled.span(props => ({
  fontSize: props.theme.fontSizes[1],
  fontWeight: 'bold',
}))

const DatePosted = styled.span(props => ({
  fontSize: props.theme.fontSizes[0],
}))

interface MessageHeaderProps {
  iconticonSeed: string
  authorName: string
  date: string
}

const MessageHeader: React.FC<MessageHeaderProps> = ({
  iconticonSeed,
  authorName,
  date,
}) => (
  <CardBody display="flex" pb={0}>
    <div
      style={{
        flexBasis: 40,
        marginRight: 10,
      }}
    >
      <Iconticon seed={iconticonSeed} />
    </div>
    <Flex flexDirection="column">
      <AuthorName>{authorName}</AuthorName>
      <DatePosted>{dayjs(date).fromNow()}</DatePosted>
    </Flex>
  </CardBody>
)

export default MessageHeader
