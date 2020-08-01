import React from "react"
import getMenuText from "../../fixtures/MenuText"

export default function NavSub(props) {
  const subMenuText = getMenuText()
  const text = {}
  text.title = subMenuText.find((x) => x.link === props.location.pathname).title
  text.desc = subMenuText.find(
    (x) => x.link === props.location.pathname
  ).subMenuText

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
    </div>
  )
}
