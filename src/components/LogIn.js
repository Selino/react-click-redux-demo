import React from "react"
import { connect } from "react-redux"
import { startLoginGoogle, startLoginGithub } from "../actions/auth_actions"
import imgGoogleSignIn from "../images/btn-sign-in-g.svg"
import imgGitHubSignIn from "../images/btn-sign-in-github.svg"
import BigTitle from "../images/big-title.svg"
import Logo from "../images/sv-logo.jpg"
import styled from "@emotion/styled"
import { Fade, Bounce } from "react-reveal"

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
`

export const LogIn = ({ startLoginGoogle, startLoginGithub }) => {
  return (
    <Emotion>
      <div className='login-area'>
        <Fade cascade>
          <div className='sub-text'>
            <Bounce top>
              <div className='logo-pic'></div>
            </Bounce>
            <Bounce>
              <img
                alt="Selino's ReactJS Demo"
                style={{
                  display: "block",
                  margin: "-10px auto 1rem",
                  width: "80%",
                }}
                src={BigTitle}
              />
            </Bounce>
            Welcome to Selino's ReactJS Demo! This is a live portfolio of custom
            components hand crafted with React… and love.
          </div>
          <img
            style={{ cursor: "pointer", marginTop: "1rem", width: "100%" }}
            onClick={startLoginGoogle}
            src={imgGoogleSignIn}
            alt='Sign in with Google'
          />
          <img
            style={{ cursor: "pointer", marginTop: "1rem", width: "100%" }}
            onClick={startLoginGithub}
            src={imgGitHubSignIn}
            alt='Sign in with Google'
          />
        </Fade>
      </div>
    </Emotion>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLoginGoogle: () => dispatch(startLoginGoogle()),
  startLoginGithub: () => dispatch(startLoginGithub()),
})

export default connect(undefined, mapDispatchToProps)(LogIn)
