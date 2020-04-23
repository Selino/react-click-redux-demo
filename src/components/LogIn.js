import React from "react"
import { connect } from "react-redux"
import { startLogin } from "../actions/auth_actions"
import { Container, Row, Col } from "react-bootstrap"
import GoogleSignIn from "../btn-sign-in-g.svg"

export const LogIn = ({ startLogin }) => {
  return (
    <Container>
      <Row>
        <Col>&nbsp;</Col>
        <Col className='login-area' xs={6}>
          Welcome to Selino's
          <br /> React Redux Firebase <br />
          Click Demo
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
