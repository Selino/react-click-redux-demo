/** @jsx jsx */
import { Navbar, NavDropdown, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch } from "react-redux"
import { startLogout } from "../../actions/auth_actions"
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import Logo from "../../images/sv-logo.jpg"
import getMenuData from "../../fixtures/MenuText"

const Emotion = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

  .dropdown-toggle:after {
    content: none !important;
  }

  .navbar-brand {
    font-family: "Bebas Neue", serif;
    font-size: 1.5rem;
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

  .btn:hover {
    color: #999;
  }

  /* // Small devices (landscape phones, 250px and up) */
  @media (max-width: 420px) {
    .app-name {
      display: none;
    }
  }
`

export function DropDownItems(props) {
  return props.items.map((item) => {
    return (
      <LinkContainer key={item.id} exact to={item.link} active={false}>
        <NavDropdown.Item>{item.title}</NavDropdown.Item>
      </LinkContainer>
    )
  })
}

export function NavGlobal() {
  const dispatch = useDispatch()
  const dropDownMenuData = getMenuData().filter((menuitem) => {
    return menuitem.link !== "/"
  })

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
        <LinkContainer exact to='/home' active='false'>
          <Navbar.Brand>
            <div>
              <div className='d-inline-block align-top logo'></div>
              <span className='app-name'>Selino.com</span>
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
            <DropDownItems items={dropDownMenuData} />

            <NavDropdown.Divider />
            <NavDropdown.Item key='IDLOGOUT' eventKey='logout'>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </Emotion>
  )
}

export default NavGlobal
