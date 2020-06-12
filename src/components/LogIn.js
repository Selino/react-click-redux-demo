import React from "react"
import { connect } from "react-redux"
import { startLogin } from "../actions/auth_actions"
import GoogleSignIn from "../images/btn-sign-in-g.svg"
import BigTitle from "../images/big-title.svg"
import Logo from "../images/sv-logo.jpg"
import styled from "@emotion/styled"

const Emotion = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");

  .login-area {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
  }

  .login-area .sub-text {
    font-family: "Roboto Slab", serif;
    color: #333;
    font-size: 1rem;
    padding: 1rem;
    padding-top: 5rem;
    color: white;
    background-color: #333333;
    border-radius: 4px;
    position: relative;
  }

  .logo-pic {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: solid 2px black;
    margin: auto;
    background-image: url(${Logo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    box-shadow: 0px 0px 3px black;
  }

  /* // Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    .login-area .sub-text {
      font-size: 1.2rem;
    }
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    .login-area {
      width: 50%;
    }
    .login-area .sub-text {
      font-size: 1.3rem;
    }
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .login-area {
      width: 50%;
    }
    .login-area .sub-text {
      font-size: 1.3rem;
    }
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .login-area {
      width: 40%;
    }
    .login-area .sub-text {
      font-size: 1.5rem;
    }
  }

  .fade-in {
    animation: fadeIn ease 2s;
    -webkit-animation: fadeIn ease 2s;
    -moz-animation: fadeIn ease 2s;
    -o-animation: fadeIn ease 2s;
    -ms-animation: fadeIn ease 2s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const LogIn = ({ startLogin }) => {
  return (
    <Emotion>
      <div className='login-area fade-in'>
        <div className='sub-text'>
          <div className='logo-pic'></div>
          <img
            alt="Selino's ReactJS Demo"
            style={{
              display: "block",
              margin: "-10px auto 1rem",
              width: "80%",
            }}
            src={BigTitle}
          />
          Welcome to Selino's ReactJS Demo! This is a live portfolio of custom
          components hand crafted with React… and love.
        </div>
        <img
          style={{ cursor: "pointer", marginTop: "1rem" }}
          onClick={startLogin}
          src={GoogleSignIn}
          alt='React Logo'
        />
      </div>
    </Emotion>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
})

export default connect(undefined, mapDispatchToProps)(LogIn)
