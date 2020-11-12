import React, { memo } from 'react'
import styled from 'styled-components'
import { compiler } from 'markdown-to-jsx'
// import 'github-markdown-css'

const Wrapper = styled.div(
  props => `
  max-width: 100%;
  text-align: left;
  overflow-wrap: break-word;
  word-break: break-word;
  * {
    max-width: 100%;
  }
`
)

interface MessageMDProps {
  content: string
}

const Markdown: React.FC<MessageMDProps> = memo(({ content }) => (
  <Wrapper className="markdown-body">{compiler(content)}</Wrapper>
))

export default Markdown
