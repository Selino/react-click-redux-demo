import React from "react"
import { Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

export default function SubNav() {
  return (
    <div style={{ padding: "1rem" }}>
      <Nav variant='pills' defaultActiveKey='/counter'>
        <Nav.Item>
          <LinkContainer to='/counter'>
            <Nav.Link>Redux Counter</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to='/executivesummary'>
            <Nav.Link>Exec Summary</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to='/dogs'>
            <Nav.Link>Poop</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </div>
  )
}
