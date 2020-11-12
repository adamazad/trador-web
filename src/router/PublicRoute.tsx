import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { useUser } from 'src/hooks'

interface PublicRouteProps extends RouteProps {
  restricted?: boolean
}

export default function PublicRoute({
  component: Component,
  restricted = false,
  ...rest
}: PublicRouteProps): React.ReactElement {
  const user = useUser()

  if (user && restricted) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: {
            from: rest.location,
          },
        }}
      />
    )
  }

  return <Route {...rest} component={Component} />
}
