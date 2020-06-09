import React from "react"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { LinkContainer } from "react-router-bootstrap"

const Text = (props) => {
  return (
    <span>
      <span style={{ fontWeight: "bold", color: "#FFD500" }}>
        {props.title}
      </span>{" "}
      : {props.descrpition}
    </span>
  )
}

export default function SubNav(props) {
  const printTitle = () => {
    let text = { title: "", desc: "" }
    switch (props.location.pathname) {
      case "/menu":
        text.title = "Menu"
        text.desc = "Choose an item from the list below."
        break
      case "/counter":
        text.title = "Redux Counter Prototype"
        text.desc =
          "An over-engineered counter as a sandbox for learning Redux."
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
    return <Text title={text.title} descrpition={text.desc} />
  }

  const css = {
    marginTop: "58px",
    padding: "1rem",
    backgroundColor: "#333",
    color: "white",
  }
  return (
    <div style={css}>
      <LinkContainer
        to='/menu'
        exact
        active='false'
        style={{ marginRight: ".5rem", cursor: "pointer" }}
      >
        <FontAwesomeIcon icon={faHome} />
      </LinkContainer>{" "}
      {printTitle()}
    </div>
  )
}
