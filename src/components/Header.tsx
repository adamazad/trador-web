import { variant } from 'styled-system'
import styled from 'styled-components'
import React from 'react'

import { logout } from 'src/services/auth'
import { useUser } from 'src/hooks'
import Link from './Link'

type NavbarProps = {
  variant?: string
}

const Navbar = styled.header<NavbarProps>(
  props => ({
    padding: '0px 20px',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    height: props.theme.header.height,
    background: props.theme.header.backgroundColor,
  }),
  variant({
    variants: {
      fixed: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1030,
        boxShadow: `0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)`,
      },
    },
  })
)

Navbar.defaultProps = {
  variant: 'fixed',
}

const Nav = styled.nav(props => ({
  display: 'flex',
  gap: 20,
}))

const NavText = styled.span(props => ({
  color: 'white',
}))

export default function Header() {
  const user = useUser()

  return (
    <Navbar>
      {user ? (
        <>
          <Nav>
            <Link variant="navlink" to="/">
              Messages
            </Link>
            <Link variant="navlink" to="/me/messages">
              My Messages
            </Link>
          </Nav>
          <Nav>
            <NavText>Hi {user.name}</NavText>
            <NavText role="button" onClick={logout}>
              Logout
            </NavText>
          </Nav>
        </>
      ) : (
        <>
          <Link variant="navlink" to="/login">
            Login
          </Link>
        </>
      )}
    </Navbar>
  )
}
