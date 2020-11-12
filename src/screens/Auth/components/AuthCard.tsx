import styled from 'styled-components'
import React from 'react'

import Card, { CardBody } from 'src/components/Card'
import bgImage from 'src/assets/media/arabica-luck-of-real-communication-behind-the-table.png'

const CardImage = styled.div`
  height: 200px;
  background-size: cover;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: bottom;
`

const AuthCard: React.FC = ({ children }) => (
  <Card
    maxWidth={400}
    style={{
      background: '#faf8f0',
    }}
    minHeight={200}
    m="auto"
  >
    <CardImage />
    <CardBody>{children}</CardBody>
  </Card>
)

export default AuthCard
