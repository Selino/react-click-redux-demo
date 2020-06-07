import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch } from "react-redux"
import { startLogout } from "../actions/auth_actions"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/globalnav.css"

export function GlobalNav() {
  const dispatch = useDispatch()
  const handleSelect = (eventKey) => {
    switch (eventKey) {
      case "logout":
        dispatch(startLogout())
        break
      default:
        break
    }
  }
  return (
    <Navbar bg='dark' variant='dark' onSelect={handleSelect}>
      <Navbar.Brand>
        <div className='d-inline-block align-top logo'></div>
        Selino's React Demo
      </Navbar.Brand>
      <Nav className='ml-auto'>
        <NavDropdown title={<FontAwesomeIcon icon={faBars} />} alignRight>
          <LinkContainer to='/about'>
            <NavDropdown.Item>About</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to='/counter'>
            <NavDropdown.Item>Counter</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to='/executivesummary'>
            <NavDropdown.Item>Trilliant Data Table</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey='logout'>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default GlobalNav

// <Navbar bg='dark' variant='dark'>
// <Navbar.Brand>Selino Demo</Navbar.Brand>
// <Navbar.Collapse id='basic-navbar-nav'>
//   <Nav className='ml-auto'>
//     <Nav.Item>
//       <LinkContainer to='/about'>
//         <Nav.Link>About</Nav.Link>
//       </LinkContainer>
//     </Nav.Item>
//     <Nav.Item>
//       <LinkContainer to='/counter'>
//         <Nav.Link>Counter</Nav.Link>
//       </LinkContainer>
//     </Nav.Item>
//   </Nav>
// </Navbar.Collapse>
// <Button onClick={() => dispatch(startLogout())} variant='outline-light'>
//   Logout
// </Button>
// </Navbar>
