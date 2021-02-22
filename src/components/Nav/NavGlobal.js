/** @jsx jsx */
import { Navbar, NavDropdown, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch } from "react-redux"
import { startLogout } from "../../actions/auth_actions"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import Logo from "../../images/sv-logo.svg"
import getMenuData from "../../fixtures/MenuText"

const Emotion = styled.div`
  .dropdown-toggle:after {
    content: none !important;
  }

  .navbar-brand {
    font-size: 2rem;
    line-height: 2.8rem;
    color: #333;
    font-weight: bold;
  }

  .logo {
    width: 40px;
    height: 40px;
    background-image: url(${Logo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 0.5rem;
    cursor: pointer;
  }

  .btn {
    padding: 0;
    margin-left: 1rem;
    color: #333;
    font-size: 2rem;
  }

  .btn:hover {
    color: black;
  }

  .nav-link {
    padding: 0 !important;
  }

  .dropdown-item.active {
    background-color: #69bac9;
  }

  /* // Small devices (landscape phones, 250px and up) */
  @media (max-width: 420px) {
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
      <Navbar
        style={{ backgroundColor: "#69BAC9" }}
        onSelect={handleSelect}
        fixed='top'
      >
        <LinkContainer exact to='/home' active='false'>
          <Navbar.Brand>
            <div>
              <div className='d-inline-block align-top logo'></div>
              <span className='app-name'>Selino Valdes</span>
            </div>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse className='justify-content-end'>
          <Button
            variant=''
            className='btn'
            href='https://linkedin.com/in/selino'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Button>
          <Button
            variant=''
            className='btn'
            href='https://github.com/Selino/react-click-redux-demo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} />
          </Button>

          <NavDropdown
            alignRight
            title={<FontAwesomeIcon icon={faBars} className='btn' />}
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
