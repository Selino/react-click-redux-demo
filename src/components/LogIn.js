import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {
  startLoginGoogleAction,
  startLoginGithubAction,
} from "../actions/auth_actions"
import imgGoogleSignIn from "../images/btn-sign-in-g.svg"
import imgGitHubSignIn from "../images/btn-sign-in-github.svg"
import BigTitle from "../images/big-title.svg"
import Logo from "../images/sv-logo.jpg"
import styled from "@emotion/styled"
import { Fade, Bounce } from "react-reveal"

const Emotion = styled.div`
  .login-area {
    text-align: center;
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-52%, -50%);
    width: 80%;
  }

  .login-area .sub-text {
    font-family: "Roboto Slab", serif;
    font-size: 1.1rem;
    padding: 2rem;
    padding-top: 5rem;
    color: white;
    border-radius: 4px;
    position: relative;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
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
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    opacity: 1;
  }

  .button-sign-in {
    cursor: pointer;
    margin-top: 1rem;
    width: 100%;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
  }

  .shadow {
    box-shadow: 0px 0px 3px black;
  }

  /* // Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    .login-area {
      width: 50vmax;
    }
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    .login-area {
      width: 50vmax;
    }
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .login-area {
      width: 40vmax;
    }
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .login-area {
      width: 50vmin;
    }
  }
`

export const LogIn = () => {
  const [animation, setAnimation] = useState(0)
  const dispatch = useDispatch()
  const startLoginGithub = dispatch(startLoginGithubAction)
  const startLoginGoogle = dispatch(startLoginGoogleAction)

  return (
    <Emotion>
      <div className='login-area'>
        <Fade cascade when={animation > 2}>
          <div className='sub-text'>
            <Bounce top>
              <div className='logo-pic'></div>
            </Bounce>
            <Bounce>
              <img
                onLoad={() => setAnimation(animation + 1)}
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
            className='button-sign-in'
            onLoad={() => setAnimation(animation + 1)}
            onClick={startLoginGoogle}
            src={imgGoogleSignIn}
            alt='Sign in with Google'
          />
          <img
            className='button-sign-in'
            onLoad={() => setAnimation(animation + 1)}
            onClick={startLoginGithub}
            src={imgGitHubSignIn}
            alt='Sign in with Google'
          />
        </Fade>
      </div>
    </Emotion>
  )
}

export default LogIn
