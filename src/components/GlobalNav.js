/** @jsx jsx */
import { Navbar, NavDropdown, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch } from "react-redux"
import { startLogout } from "../actions/auth_actions"
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import Logo from "../images/sv-logo.jpg"

const Emotion = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");

  .dropdown-toggle:after {
    content: none !important;
  }

  .navbar-brand {
    font-family: "Roboto Slab", serif !important;
  }

  .logo {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: solid 1px black;
    background-image: url(${Logo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 0.5rem;
    box-shadow: 0px 0px 3px black;
    cursor: pointer;
  }
`

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
    <Emotion>
      <Navbar bg='dark' variant='dark' onSelect={handleSelect} fixed='top'>
        <LinkContainer exact to='/menu' active='false'>
          <Navbar.Brand>
            <div>
              <div className='d-inline-block align-top logo'></div>
              Selino's ReactJS Demo
            </div>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse
          className='justify-content-end'
          css={css`
            color: white;
            font-size: 1.2rem;
          `}
        >
          <Button
            variant=''
            css={css`
              margin-right: 0.25rem;
              color: white;
              font-size: 1.2rem;
            `}
          >
            <LinkContainer to='/menu' exact active='false'>
              <FontAwesomeIcon icon={faHome} />
            </LinkContainer>
          </Button>

          <Button
            variant=''
            css={css`
              margin-right: 0.25rem;
              color: white;
              font-size: 1.2rem;
            `}
            href='https://github.com/Selino/react-click-redux-demo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} />
          </Button>

          <NavDropdown
            alignRight
            title={
              <FontAwesomeIcon
                icon={faBars}
                css={css`
                  color: #ffd500;
                `}
              />
            }
          >
            <LinkContainer exact to='/menu' active={false}>
              <NavDropdown.Item>Home</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer exact to='/counter' active={false}>
              <NavDropdown.Item>Counter</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer exact to='/fizzbuzz' active={false}>
              <NavDropdown.Item>Fizz Buzz</NavDropdown.Item>
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
        </Navbar.Collapse>
      </Navbar>
    </Emotion>
  )
}

export default GlobalNav
