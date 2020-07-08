import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import MiniBar from "./MiniBar"

console.warn = jest.fn()

describe("MiniBar", () => {
  test("should match snapshot at 50% width", () => {
    const { asFragment } = render(
      <MiniBar
        backGroundColor='rgb(153, 153, 153)'
        forGroundColor='rgb(204, 204, 204)'
        Perc='50'
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("should match snapshot at 33% width", () => {
    const { asFragment } = render(
      <MiniBar
        backGroundColor='rgb(153, 153, 153)'
        forGroundColor='rgb(204, 204, 204)'
        Perc='33'
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
