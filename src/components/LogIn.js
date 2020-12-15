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
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
    display: none;
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translate(-52%, -50%);
    width: 80%;
    padding-top: 5rem;
  }

  .logo-pic {
    border-radius: 50%;
    border: solid 4px black;
    opacity: 1;
  }

  .btn-area {
    text-align: center;
  }

  .big-title {
    width: 100%;
    position: relative;
    margin: auto;
  }
  .sub-text {
    font-family: "Bebas Neue", serif;
    font-size: 1.5rem;
    color: black;
  }
  .button-sign-in {
    cursor: pointer;
    margin-top: 1rem;
    width: 50%;
    overflow: hidden;
  }

  .url {
    color: #e48811;
    margin-right: 1rem;
  }

  /* // Small devices (landscape phones, 250px and up) */
  @media (min-width: 250px) {
    .login-area {
      max-height: 470px;
    }

    .sub-text {
      font-size: 1rem;
    }

    .button-sign-in {
      width: 100%;
    }
    .logo-pic {
      width: 150px !important;
    }
    .login-area {
      max-height: 84%;
      padding-top: 0;
    }
    .sub-text {
      font-size: 1.2rem;
    }
    .button-sign-in {
      width: 70%;
    }
  }

  /* // Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    .login-area {
      width: 50vmax;
    }
    .button-sign-in {
      width: 70%;
    }
    .sub-text {
      font-size: 1.2rem;
    }
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    .login-area {
      width: 50vmax;
    }
    .logo-pic {
      width: 150px !important;
    }
    .button-sign-in {
      width: 50%;
      margin-right: 20px;
    }
    .sub-text {
      font-size: 1.4rem;
    }
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .login-area {
      width: 50vmax;
    }
    .logo-pic {
      width: 150px !important;
    }
    .button-sign-in {
      width: 33%;
      margin-right: 20px;
    }
    .sub-text {
      font-size: 1.8rem;
    }
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .login-area {
      width: 50vmin;
    }
    .logo-pic {
      width: 160px !important;
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
  // const trans5 = (x, y) => `translate3d(${x / 80}px,${y / 80}px,0)`
  const [parallax, setParallax] = useSpring(() => ({ xy: [0, 0] }))

  const [animation2] = useSpring(() => ({
    to: async (next, cancel) => {
      await next({ opacity: 0, marginTop: -500, width: 0 })
      await next({ opacity: 1, marginTop: -150, width: 150 })
    },
    config: { tension: 300, friction: 10 },
  }))

  const pickColor = (max) => {
    // const colorNum = Math.floor(Math.random() * Math.floor(max))
    // let colorName
    // switch (colorNum) {
    //   case 0:
    //     // green
    //     colorName = "#29AC35"
    //     break
    //   case 1:
    //     // orange
    //     colorName = "#ff9200"
    //     break
    //   case 2:
    //     // blue
    //     colorName = "#016a98"
    //     break
    //   default:
    //     // red
    //     colorName = "#f12417"
    // }
    document.getElementById("backGround").style.backgroundColor = "#ffffff"
  }

  useEffect(() => {
    if (animation >= 4) {
      pickColor(4)
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
            <span class='url'>selino.com</span> portfolio / coding demos / case
            studies
          </a.p>
          <a.p className='btn-area'>
            <img
              className='button-sign-in'
              src={imgGoogleSignIn}
              onClick={startLoginGoogle}
              alt='Sign in with Google'
              onLoad={() => setAnimation(animation + 1)}
            />

            <img
              className='button-sign-in'
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
