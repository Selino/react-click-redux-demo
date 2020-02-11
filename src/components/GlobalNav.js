import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

function GlobalNav() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>Counter Demo</Navbar.Brand>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav>
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
    </Navbar>
  )
}

export default GlobalNav
