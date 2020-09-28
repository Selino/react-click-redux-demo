/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState, useEffect } from "react"
import getMenuText from "../../fixtures/MenuText"
import { useTransition, animated } from "react-spring"

function AnimatedTable({ title, desc }) {
  const transitions = useTransition(title, null, {
    from: {
      position: "absolute",
      top: ".5rem",
      opacity: 0,
      marginLeft: -1000,
    },
    enter: { opacity: 1, marginLeft: 0 },
    leave: { opacity: 0, marginLeft: -1000 },
  })

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.table key={key} style={props}>
          <tbody>
            <tr style={{ verticalAlign: "top" }}>
              <td
                style={{
                  color: "#FFD500",
                  fontWeight: "bold",
                  paddingRight: "1rem",
                }}
              >
                {title}
              </td>
              <td>{desc}</td>
            </tr>
          </tbody>
        </animated.table>
      )
  )
}

export default function NavSub(props) {
  const [state, setState] = useState({})

  useEffect(() => {
    const subMenuText = getMenuText()
    const title = subMenuText.find((x) => x.link === props.location.pathname)
      .title
    const desc = subMenuText.find((x) => x.link === props.location.pathname)
      .subMenuText
    setState({ title, desc })
  }, [props.location.pathname])

  return (
    <div
      css={css`
        height: 2.5rem;
        background-color: #333;
        margin-top: 58px;
        color: white;
        padding: 1rem;
        z-index: 5;
        width: 100%;
        /* // Small devices (landscape phones, 250px and up) */
        @media (max-width: 420px) {
          height: 4rem;
        }
      `}
      className='position-fixed'
    >
      <AnimatedTable title={state.title} desc={state.desc} />
    </div>
  )
}
