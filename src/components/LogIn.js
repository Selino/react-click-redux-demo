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
import BackgroundImg from "../images/wood_med.jpg"
import styled from "@emotion/styled"
import { useSpring, a } from "react-spring"

const Emotion = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");

  .login-background {
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: black;
    width: 110%;
    height: 110%;
    position: absolute;
    top: -5%;
    left: -5%;
  }

  .login-area {
    font-family: "Roboto Slab", serif;
    font-size: 1.2rem;
    color: white;
    text-align: center;
    padding: 2.5rem;
    padding-top: 300px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    width: 80%;
    position: absolute;
    top: 16%;
    left: 0;
    right: 0;
    margin: auto;
  }

  .logo-pic {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: solid 2px black;
    margin: auto;
    background-image: url(${Logo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    opacity: 1;
  }

  .big-title {
    width: 440px;
    position: absolute;
    top: 23%;
    left: 0;
    right: 0;
    margin: auto;
  }

  .button-sign-in {
    cursor: pointer;
    margin: 0.5rem;
    min-width: 250px;
  }

  /* // Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    .login-area {
      width: 48vmax;
      padding-top: 250px;
    }
    .big-title {
      width: 320px;
    }
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    .login-area {
      width: 50vmax;
    }
    .big-title {
      width: 340px;
    }
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .login-area {
      width: 40vmax;
      padding-top: 280px;
    }
    .big-title {
      width: 390px;
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

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans1 = (x, y) => `translate3d(${x / 200}px,${y / 200}px,0)`
  const trans2 = (x, y) => `translate3d(${x / 200}px,${y / 200}px,0)`
  const trans3 = (x, y) => `translate3d(${x / 160}px,${y / 160}px,0)`
  const trans4 = (x, y) => `translate3d(${x / 120}px,${y / 120}px,0)`
  const trans5 = (x, y) => `translate3d(${x / 80}px,${y / 80}px,0)`
  const trans6 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`
  const [props, set] = useSpring(() => ({ xy: [0, 0] }))

  return (
    <Emotion>
      <a.div
        className='login-background'
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        style={{ transform: props.xy.interpolate(trans1) }}
      >
        <a.div
          className='login-area'
          style={{ transform: props.xy.interpolate(trans2) }}
        >
          <a.p style={{ transform: props.xy.interpolate(trans3) }}>
            Welcome to Selino's ReactJS Demo! This is a live portfolio of custom
            components hand crafted with React… and love.
          </a.p>
          <img
            onClick={startLoginGoogle}
            src={imgGoogleSignIn}
            alt='Sign in with Google'
            className='button-sign-in'
            style={{
              marginTop: "0.5rem",
            }}
          />
          <img
            onClick={startLoginGithub}
            src={imgGitHubSignIn}
            alt='Sign in with Google'
            className='button-sign-in'
          />
        </a.div>
        <a.div
          id='logo-pic'
          className='logo-pic'
          style={{ transform: props.xy.interpolate(trans5) }}
        ></a.div>
        <a.img
          id='big-title'
          className='big-title'
          alt="Selino's ReactJS Demo"
          src={BigTitle}
          style={{ transform: props.xy.interpolate(trans6) }}
        />
      </a.div>
    </Emotion>
  )
}

export default LogIn
