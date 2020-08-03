import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import NavSub from "./NavSub"
import { getMenuData } from "../../fixtures/MenuText"

console.warn = jest.fn()

describe("NavSub", () => {
  test("should match snapshot for each location from the getMenuData array", () => {
    getMenuData().forEach((item) => {
      const { asFragment } = render(
        <NavSub location={{ pathname: item.link }} />
      )
      expect(asFragment()).toMatchSnapshot()
    })
  })

  test("should match title and desc strings from getMenuData array", () => {
    getMenuData().forEach((item) => {
      render(<NavSub location={{ pathname: item.link }} />)
      expect(screen.getAllByText(item.title))
    })
  })
})
