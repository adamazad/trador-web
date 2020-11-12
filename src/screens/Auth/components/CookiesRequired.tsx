import React from 'react'
import Card, { CardBody, CardTitle } from 'src/components/Card'

const CookiesRequired = () => (
  <Card>
    <CardBody>
      <CardTitle>Cookies Required {`🍪`}</CardTitle>
      <p>
        In order to login, you need to enable cookies for 3rd parties websites.
      </p>
      <p>
        See <a href="https://enablecookies.info/">Enable Cookies</a>.
      </p>
    </CardBody>
  </Card>
)

export default CookiesRequired
