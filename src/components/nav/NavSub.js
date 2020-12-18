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
        margin-top: 66px;
        color: #333333;
        padding: 1rem;
        z-index: 5;
        width: 100%;
      `}
      className='position-fixed'
    >
      <AnimatedTable title={state.title} desc={state.desc} />
    </div>
  )
}
