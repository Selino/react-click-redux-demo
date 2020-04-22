import React from "react"
import { Button } from "react-bootstrap"
import { connect } from "react-redux"
import { startLogin } from "../actions/auth_actions"

export const LogIn = ({ startLogin }) => {
  return (
    <div>
      <Button style={{ margin: "1rem", padding: "1rem" }} onClick={startLogin}>
        LogIn
      </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
})

export default connect(undefined, mapDispatchToProps)(LogIn)
