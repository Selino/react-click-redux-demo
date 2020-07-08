import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import NavSub from "./NavSub"
import { getSubMenuText } from "../../fixtures/SubMenuText"

console.warn = jest.fn()

describe("NavSub", () => {
  test("should match snapshot for each location from the getSubMenuText array", () => {
    getSubMenuText().forEach((item) => {
      const { asFragment } = render(
        <NavSub location={{ pathname: item.url }} />
      )
      expect(asFragment()).toMatchSnapshot()
    })
  })

  test("should match title and desc strings from getSubMenuText array", () => {
    getSubMenuText().forEach((item) => {
      render(<NavSub location={{ pathname: item.url }} />)
      expect(screen.getAllByText(item.title))
    })
  })
})
