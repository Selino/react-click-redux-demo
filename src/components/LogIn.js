import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import {
  startLoginGoogleAction,
  startLoginGithubAction,
} from "../actions/auth_actions"
import imgGoogleSignIn from "../images/btn-sign-in-g.svg"
import imgGitHubSignIn from "../images/btn-sign-in-github.svg"
import BigTitle from "../images/big-title.svg"
import Logo from "../images/sv-logo.svg"
import styled from "@emotion/styled"
import { useSpring, a } from "react-spring"

const Emotion = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

  .login-background {
    width: 100vw;
    height: 100vh;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-area {
    display: none;
    width: 70%;
  }

  .logo-pic {
    border-radius: 50%;
    border: solid 4px black;
    opacity: 1;
    margin-bottom: 1rem;
  }

  .big-title {
    width: 100%;
  }

  .sub-text {
    font-family: "Bebas Neue", serif;
    font-size: 1.5rem;
    color: black;
  }

  .btn-area {
    display: flex;
    justify-content: space-around;
    height: 100px;
    flex-wrap: wrap;
  }

  .btn-sign-in {
    cursor: pointer;
    margin-top: 1rem;
    overflow: hidden;
    width: 40%;
    min-width: 240px;
    max-width: 400px;
  }

  .url {
    color: #e48811;
    margin-right: 1rem;
  }

  /* // Small devices (landscape phones, 250px and up) */
  @media (min-width: 250px) {
    .sub-text {
      font-size: 1.2rem;
    }
  }

  /* // Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    .sub-text {
      font-size: 1.6rem;
    }
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    .sub-text {
      font-size: 1.7rem;
    }
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .sub-text {
      font-size: 1.8rem;
    }
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
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
  // const trans5 = (x, y) => `translate3d(${x / 80}px,${y / 80}px,0)`
  const [parallax, setParallax] = useSpring(() => ({ xy: [0, 0] }))

  const [animation2] = useSpring(() => ({
    to: async (next, cancel) => {
      await next({ opacity: 0, marginTop: -500, width: 0 })
      await next({ opacity: 1, marginTop: 0, width: 150 })
    },
    config: { tension: 300, friction: 10 },
  }))

  useEffect(() => {
    if (animation >= 4) {
      document.getElementById("login-area").style.display = "block"
    }
  }, [animation])

  return (
    <Emotion>
      <a.div
        className='login-background'
        onMouseMove={({ clientX: x, clientY: y }) =>
          setParallax({ xy: calc(x, y) })
        }
        style={{ transform: parallax.xy.interpolate(trans1) }}
        id='backGround'
      >
        <a.div id='login-area' className='login-area'>
          <a.img
            className='logo-pic'
            alt='test'
            src={Logo}
            style={{
              ...animation2,
              transform: parallax.xy.interpolate(trans2),
            }}
            onLoad={() => setAnimation(animation + 1)}
          />
          <a.img
            id='big-title'
            className='big-title'
            alt="Selino's ReactJS Demo"
            src={BigTitle}
            style={{ transform: parallax.xy.interpolate(trans3) }}
            onLoad={() => setAnimation(animation + 1)}
          />
          <a.p
            className='sub-text'
            style={{ transform: parallax.xy.interpolate(trans4) }}
          >
            <span class='url'>selino.com</span> portfolio / coding demos
          </a.p>
          <a.p className='btn-area'>
            <img
              className='btn-sign-in'
              src={imgGoogleSignIn}
              onClick={startLoginGoogle}
              alt='Sign in with Google'
              onLoad={() => setAnimation(animation + 1)}
            />

            <img
              className='btn-sign-in'
              onClick={startLoginGithub}
              src={imgGitHubSignIn}
              alt='Sign in with Google'
              onLoad={() => setAnimation(animation + 1)}
            />
          </a.p>
        </a.div>
      </a.div>
    </Emotion>
  )
}

export default LogIn
