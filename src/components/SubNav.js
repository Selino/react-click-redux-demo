import React from "react"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { LinkContainer } from "react-router-bootstrap"

export default function SubNav(props) {
  let text = { title: "", desc: "" }
  switch (props.location.pathname) {
    case "/menu":
      text.title = "Menu"
      text.desc = "Choose an item from the list below."
      break
    case "/counter":
      text.title = "Redux Counter Prototype"
      text.desc = "An over-engineered counter as a sandbox for learning Redux."
      break
    case "/executivesummary":
      text.title = "Trilliant Executive Summary"
      text.desc = "A live data table with all the bells and whistles."
      break

    default:
      text.title = ""
      text.desc = ""
      break
  }

  return (
    <div
      style={{
        marginTop: "58px",
        backgroundColor: "#333",
        color: "white",
        padding: "1rem",
      }}
    >
      <table>
        <tbody>
          <tr style={{ verticalAlign: "top" }}>
            <td>
              <LinkContainer
                to='/menu'
                exact
                active='false'
                style={{
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon icon={faHome} />
              </LinkContainer>
            </td>
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
    </div>
  )
}
