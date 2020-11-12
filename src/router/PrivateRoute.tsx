import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { useUser } from 'src/hooks'

export default function PrivateRoute({
  component: Component,
  ...rest
}: RouteProps): React.ReactElement {
  const user = useUser()

  if (!user) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            from: rest.location,
          },
        }}
      />
    )
  }

  return <Route {...rest} component={Component} />
}
