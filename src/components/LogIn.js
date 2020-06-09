import React from "react"
import { connect } from "react-redux"
import { startLogin } from "../actions/auth_actions"
import GoogleSignIn from "../btn-sign-in-g.svg"
import "../css/login.css"

export const LogIn = ({ startLogin }) => {
  return (
    <div className='login-area fade-in'>
      <div className='sub-text'>
        <div className='logo-pic'></div>
        <h2>Welcome!</h2>
        Selino's ReactJS Demo is a live portfolio of custom components hand
        crafted with React… and love.
      </div>
      <img
        style={{ cursor: "pointer", marginTop: "1rem" }}
        onClick={startLogin}
        src={GoogleSignIn}
        alt='React Logo'
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
})

export default connect(undefined, mapDispatchToProps)(LogIn)
