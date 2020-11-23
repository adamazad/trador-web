import relativeTime from 'dayjs/plugin/relativeTime'
import styled from 'styled-components'
import React from 'react'
import dayjs from 'dayjs'

import { Flex, Iconticon } from 'src/components'
import { CardBody } from 'src/components/Card'

dayjs.extend(relativeTime)

const AuthorName = styled.span(props => ({
  fontSize: props.theme.fontSizes[1],
  fontWeight: 'bold',
}))

const DatePosted = styled.span(props => ({
  fontSize: props.theme.fontSizes[0],
}))

const Media = styled.div({
  flexBasis: 40,
  marginRight: 10,
})

interface MessageHeaderProps {
  iconticonSeed: string
  authorName: string
  date: string
}

const MessageHeader: React.FC<MessageHeaderProps> = ({ iconticonSeed, authorName, date }) => (
  <CardBody display="flex" pb={0}>
    <Media>
      <Iconticon seed={iconticonSeed} />
    </Media>
    <Flex flexDirection="column">
      <AuthorName>{authorName}</AuthorName>
      <DatePosted>{dayjs(date).fromNow()}</DatePosted>
    </Flex>
  </CardBody>
)

export default MessageHeader
