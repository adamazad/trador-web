import styled from 'styled-components'
import React from 'react'

interface ErrorMessageProps {
  error: any
}

const Wrapper = styled.div`
  border-radius: ${props => props.theme.radii.base};
  background-color: #f6bd60;
  vertical-align: middle;
  padding: 0.375rem 0.75rem;
`

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (error instanceof Error || error.hasOwnProperty('message')) {
    return <Wrapper>{error.message}</Wrapper>
  }

  return <Wrapper>Unknown Error</Wrapper>
}

export default ErrorMessage
