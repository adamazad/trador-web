import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React from 'react'

import { setPageTitle } from 'src/services/redux/page'
import RegisterContainer from './containers/Register'
import { useUser, useMountEffect } from 'src/hooks'
import Container from 'src/components/Container'
import Center from 'src/layouts/Center'

function RegisterScreen() {
  const user = useUser()
  const dispatch = useDispatch()

  useMountEffect(() => {
    dispatch(setPageTitle('Register'))
  })

  if (user) {
    return <Redirect to="/" />
  }

  return (
    <Center height="100%">
      <Container>
        <RegisterContainer />
      </Container>
    </Center>
  )
}

export default RegisterScreen
