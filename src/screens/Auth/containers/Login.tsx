import React, { FormEvent, useState } from 'react'
import { Redirect } from 'react-router-dom'
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'

import { FormGroup, Button, Link, ErrorMessage, Flex } from 'src/components'
import { loginWithEmailAndPassword } from 'src/services/auth'
import { useInput, useUser } from 'src/hooks'
import { APP_TITLE } from 'src/constants'

import CookiesRequired from '../components/CookiesRequired'
import { isCookiesEnabled } from '../utils'
import AuthCard from '../components/AuthCard'
import { CardTitle } from 'src/components/Card'

function LoginContaienr() {
  const user = useUser()
  const [email, setEmail] = useInput('')
  const [password, setPassword] = useInput('')
  const [error, setError] = useState<Error>()
  const [working, setWorking] = useState(false)

  const login = (event: FormEvent) => {
    event.preventDefault()
    setWorking(true)
    setError(undefined)
    loginWithEmailAndPassword(email, password).catch(error => {
      setError(error)
      console.log(error)
      setWorking(false)
    })
  }

  if (user) {
    return <Redirect to="/" />
  }

  if (!isCookiesEnabled()) {
    return (
      <AuthCard>
        <CookiesRequired />
      </AuthCard>
    )
  }

  return (
    <AuthCard>
      <CardTitle>Login to {APP_TITLE}</CardTitle>
      <p>Sign in to engage with amazing threads.</p>
      <form id="login" onSubmit={login}>
        <FormGroup>
          <label id="emailLabel" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            autoComplete="email"
            onChange={setEmail}
          />
        </FormGroup>
        <FormGroup>
          <label id="passwordLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={setPassword}
          />
        </FormGroup>
        <FormGroup>
          <Flex justifyContent="space-between">
            <Button disabled={!isEmail(email) || isEmpty(password) || working}>
              Login
            </Button>
            <Link to="/register">Create an account</Link>
          </Flex>
        </FormGroup>
        {error && <ErrorMessage error={error} />}
      </form>
    </AuthCard>
  )
}

export default LoginContaienr
