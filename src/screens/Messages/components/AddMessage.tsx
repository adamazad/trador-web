import React from 'react'

import Card, { CardBody, CardTitle } from 'src/components/Card'
import AddMessageForm from './AddMessageForm'

export default function AddMessage() {
  return (
    <Card mb={20}>
      <CardBody>
        <CardTitle>Post A New Message</CardTitle>
        <AddMessageForm />
      </CardBody>
    </Card>
  )
}
