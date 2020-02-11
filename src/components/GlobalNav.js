import React from "react"
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"

function GlobalNav() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>Counter Demo</Navbar.Brand>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
      </nav>
    </Navbar>
  )
}

export default GlobalNav
