import React from "react"
import { connect } from "react-redux"
import { startLogin } from "../actions/auth_actions"
import { Container, Row, Col } from "react-bootstrap"
import GoogleSignIn from "../btn-sign-in-g.svg"
import "../css/login.css"

export const LogIn = ({ startLogin }) => {
  return (
    <Container>
      <Row>
        <Col>&nbsp;</Col>
        <Col className='login-area fade-in' xs={6}>
          <div className='logo-pic'></div>
          <div className='sub-text'>
            Selino's React Click Demo is a live portfolio of custom components
            hand crafted with React… and love.
            <br />
            Lots and lots of love.
          </div>
          <img
            style={{ cursor: "pointer", marginTop: "1rem" }}
            onClick={startLogin}
            src={GoogleSignIn}
            alt='React Logo'
          />
        </Col>
        <Col>&nbsp;</Col>
      </Row>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
})

export default connect(undefined, mapDispatchToProps)(LogIn)
