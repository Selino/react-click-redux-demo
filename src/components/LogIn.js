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
import { useSpring, a } from "react-spring"

const Emotion = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");

  .login-background {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: red;
    width: 104%;
    height: 104%;
    position: absolute;
    top: -2%;
    left: -2%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
  }

  .login-area {
    text-align: center;
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-52%, -50%);
    width: 80%;
    padding: 2rem;
    padding-top: 5rem;

    border-radius: 4%;
    background: rgba(0, 0, 0, 0.25);
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
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    opacity: 1;
  }

  .big-title {
    width: 90%;
    position: relative;
    margin: auto;
  }

  .sub-text {
    font-family: "Roboto Slab", serif;
    font-size: 1.3rem;
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  }

  .button-sign-in {
    cursor: pointer;
    margin-top: 1rem;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    width: 50%;
    overflow: hidden;
  }

  .shadow {
    box-shadow: 0px 0px 3px black;
  }

  /* // Small devices (landscape phones, 250px and up) */
  @media (min-width: 250px) {
    .button-sign-in {
      width: 100%;
    }
  }

  /* // Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    .login-area {
      width: 50vmax;
    }
    .button-sign-in {
      width: 50%;
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
      width: 60vmax;
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
  const trans2 = (x, y) => `translate3d(${x / 60}px,${y / 60}px,0)`
  const trans3 = (x, y) => `translate3d(${x / 40}px,${y / 60}px,0)`
  const trans4 = (x, y) => `translate3d(${x / 120}px,${y / 120}px,0)`
  const trans5 = (x, y) => `translate3d(${x / 80}px,${y / 80}px,0)`
  const [parallax, setParallax] = useSpring(() => ({ xy: [0, 0] }))

  const [animation2] = useSpring(() => ({
    to: async (next, cancel) => {
      await next({ opacity: 0, marginTop: -500, width: 0 })
      await next({ opacity: 1, marginTop: -150, width: 120 })
    },
    config: { tension: 300, friction: 10 },
  }))

  return (
    <Emotion>
      <a.div
        className='login-background'
        onMouseMove={({ clientX: x, clientY: y }) =>
          setParallax({ xy: calc(x, y) })
        }
        style={{ transform: parallax.xy.interpolate(trans1) }}
      >
        <a.div className='login-area'>
          <a.div
            className='logo-pic'
            alt='test'
            src={Logo}
            style={{
              ...animation2,
              transform: parallax.xy.interpolate(trans2),
            }}
          ></a.div>

          <a.img
            id='big-title'
            className='big-title'
            alt="Selino's ReactJS Demo"
            src={BigTitle}
            style={{ transform: parallax.xy.interpolate(trans3) }}
          />
          <a.p
            className='sub-text'
            style={{ transform: parallax.xy.interpolate(trans4) }}
          >
            Welcome! This is a live portfolio of custom components hand crafted
            with React… and love.
          </a.p>
          <a.p style={{ transform: parallax.xy.interpolate(trans5) }}>
            <img
              className='button-sign-in'
              onLoad={() => setAnimation(animation + 1)}
              onClick={startLoginGoogle}
              src={imgGoogleSignIn}
              alt='Sign in with Google'
            />
            <br />
            <img
              className='button-sign-in'
              onLoad={() => setAnimation(animation + 1)}
              onClick={startLoginGithub}
              src={imgGitHubSignIn}
              alt='Sign in with Google'
            />
          </a.p>
        </a.div>
      </a.div>
    </Emotion>
  )
}

export default LogIn
