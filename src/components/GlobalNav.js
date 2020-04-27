import React from "react"
import { Nav, Navbar, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch } from "react-redux"
import { startLogout } from "../actions/auth_actions"

export function GlobalNav() {
  const dispatch = useDispatch()
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>Counter Demo</Navbar.Brand>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Item>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to='/counter'>
              <Nav.Link>Counter</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      <Button onClick={() => dispatch(startLogout())} variant='outline-light'>
        Logout
      </Button>
    </Navbar>
  )
}

export default GlobalNav
