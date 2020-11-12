import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React from 'react'

import { setPageTitle } from '../../services/redux/page'
import { useUser, useMountEffect } from 'src/hooks'
import Container from 'src/components/Container'
import LoginContainer from './containers/Login'
import Center from 'src/layouts/Center'

function LoginScreen() {
  const user = useUser()
  const dispatch = useDispatch()

  useMountEffect(() => {
    dispatch(setPageTitle('Login'))
  })

  if (user) {
    return <Redirect to="/" />
  }

  return (
    <Center height="100%">
      <Container>
        <LoginContainer />
      </Container>
    </Center>
  )
}

export default LoginScreen
