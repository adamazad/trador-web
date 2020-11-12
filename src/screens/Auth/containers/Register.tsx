import React, { FormEvent, useState } from 'react'
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'

import { registerWithEmailAndPassword } from 'src/services/auth'
import { isCookiesEnabled } from '../utils'

import { CardTitle } from 'src/components/Card'
import CookiesRequired from '../components/CookiesRequired'
import AuthCard from '../components/AuthCard'

import { ErrorMessage, FormGroup, Button, Flex, Link } from 'src/components'
import { APP_TITLE } from 'src/constants'
import { useInput } from 'src/hooks'

function RegisterContainer() {
  const [email, setEmail] = useInput('')
  const [password, setPassword] = useInput('')
  const [isRegistered, setIsRegistered] = useState(false)
  const [error, setError] = useState<Error | false>(false)
  const [loading, setLoading] = useState(false)

  const register = (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError(false)
    registerWithEmailAndPassword(email, password)
      .then(() => setIsRegistered(true))
      .catch(setError)
      .finally(() => setLoading(false))
  }

  if (!isCookiesEnabled()) {
    return (
      <AuthCard>
        <CookiesRequired />
      </AuthCard>
    )
  }

  if (isRegistered) {
    return (
      <AuthCard>
        <CardTitle>Welcome Aboard!</CardTitle>
        <p>You are all set. Login and start engaging!</p>
        <Link to="/login">Get Started</Link>
      </AuthCard>
    )
  }

  return (
    <AuthCard>
      <CardTitle>Join {APP_TITLE}</CardTitle>
      <p>Join {APP_TITLE} to engage in thoughtful conversations</p>
      <form id="register" onSubmit={register}>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            autoComplete="email"
            onChange={setEmail}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="new-password"
            onChange={setPassword}
            required
          />
        </FormGroup>
        <FormGroup>
          <Flex justifyContent="space-between">
            <Button
              type="submit"
              disabled={!isEmail(email) || isEmpty(password) || loading}
            >
              Continue
            </Button>
            <Link to="/login">Have an account?</Link>
          </Flex>
        </FormGroup>
        {error && <ErrorMessage error={error} />}
      </form>
    </AuthCard>
  )
}

export default RegisterContainer
