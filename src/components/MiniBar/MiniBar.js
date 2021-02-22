import React from "react"
import colors from "../../tokens/colors"

export default function MiniBar(props) {
  let backGroundColor = props.backGroundColor
    ? props.backGroundColor
    : colors.graysGray4
  let forGroundColor = props.forGroundColor
    ? props.forGroundColor
    : colors.primaryInactive
  const myBarBackGround = {
    backgroundColor: backGroundColor,
    width: "60px",
    height: "16px",
    borderRadius: "2px",
    overflow: "hidden",
    display: "inline-block",
    marginLeft: ".5rem",
    verticalAlign: "text-bottom",
  }
  const myBarForGround = {
    backgroundColor: forGroundColor,
    width: props.Perc + "%",
    height: "100%",
  }
  return (
    <div style={myBarBackGround}>
      <div style={myBarForGround}></div>
    </div>
  )
}
