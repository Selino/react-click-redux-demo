import React from "react"
import { Fade } from "react-reveal"

export default function SubNav(props) {
  let text = { title: "", desc: "" }
  switch (props.location.pathname) {
    case "/menu":
      text.title = "Home"
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
    case "/wordcounter":
      text.title = "Word Counter"
      text.desc =
        "Type is some words and watch the count change! Exciting, right?"
      break
    case "/gifcaller":
      text.title = "Gif Caller"
      text.desc = "A Giphy API caller using Async React Hooks."
      break
    case "/fizzbuzz":
      text.title = "Fizz Buzz"
      text.desc = "A React version of a classic Javascript puzzle."
      break

    default:
      text.title = ""
      text.desc = ""
      break
  }

  return (
    <div
      className='position-fixed'
      style={{
        marginTop: "58px",
        backgroundColor: "#333",
        color: "white",
        padding: "1rem",
        zIndex: "1",
        width: "100%",
      }}
    >
      <Fade left>
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
