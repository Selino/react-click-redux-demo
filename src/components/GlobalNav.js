import React from "react"
import { Nav, Navbar, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { connect } from "react-redux"
import { startLogout } from "../actions/auth_actions"

export function GlobalNav({ startLogout }) {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>
        <LinkContainer to='/' style={{ color: "white" }}>
          <Nav.Link>Counter Demo</Nav.Link>
        </LinkContainer>
      </Navbar.Brand>
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
      <Button onClick={startLogout} variant='outline-light'>
        Logout
      </Button>
    </Navbar>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
})

export default connect(undefined, mapDispatchToProps)(GlobalNav)
