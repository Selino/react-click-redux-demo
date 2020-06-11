import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch } from "react-redux"
import { startLogout } from "../actions/auth_actions"
import { faBars } from "@fortawesome/fontawesome-pro"
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
    <Navbar bg='dark' variant='dark' onSelect={handleSelect} fixed='top'>
      <LinkContainer exact to='/menu' active='false'>
        <Navbar.Brand>
          <div>
            <div className='d-inline-block align-top logo'></div>
            Selino's ReactJS Demo
          </div>
        </Navbar.Brand>
      </LinkContainer>

      <Nav className='ml-auto'>
        <NavDropdown
          title={
            <FontAwesomeIcon
              alignRight
              icon={faBars}
              style={{ color: "#FFD500", fontSize: "1.5rem" }}
            />
          }
        >
          <LinkContainer exact to='/menu' active={false}>
            <NavDropdown.Item>Menu</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer exact to='/counter' active={false}>
            <NavDropdown.Item>Counter</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer exact to='/executivesummary' active={false}>
            <NavDropdown.Item>Trilliant Data Table</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer exact to='/wordcounter' active={false}>
            <NavDropdown.Item>Word Counter</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer exact to='/gifcaller' active={false}>
            <NavDropdown.Item>Gif Caller</NavDropdown.Item>
          </LinkContainer>

          <NavDropdown.Divider />
          <NavDropdown.Item eventKey='logout'>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default GlobalNav
