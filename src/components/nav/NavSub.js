import React from "react"
import { Fade } from "react-reveal"
import { getSubMenuText } from "../../fixtures/SubMenuText"

export default function NavSub(props) {
  const subMenuText = getSubMenuText()
  const text = {}
  text.title = subMenuText.find((x) => x.url === props.location.pathname).title
  text.desc = subMenuText.find((x) => x.url === props.location.pathname).desc

  return (
    <div
      className='position-fixed'
      style={{
        marginTop: "58px",
        backgroundColor: "#333",
        color: "white",
        padding: "1rem",
        zIndex: "5",
        width: "100%",
      }}
    >
      <Fade left spy={props.location}>
        <table>
          <tbody>
            <tr style={{ verticalAlign: "top" }}>
              <td
                style={{
                  color: "#FFD500",
                  fontWeight: "bold",
                  paddingRight: "1rem",
                }}
              >
                {text.title}
              </td>

              <td>{text.desc}</td>
            </tr>
          </tbody>
        </table>
      </Fade>
    </div>
  )
}