import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import WordCounter from "./WordCounter"

console.warn = jest.fn()

describe("WordCounter", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<WordCounter />)
    expect(asFragment()).toMatchSnapshot()
  })

  test("should render the full component with empty text area", () => {
    const { asFragment } = render(<WordCounter />)
    const textInput = screen.getByTestId("text-input")
    expect(screen.getByTestId("text-input"))
    expect(screen.getByTestId("word-count")).toHaveTextContent("0")
    fireEvent.change(textInput, {
      target: { value: "Lorem ipsum dolar sit amet." },
    })
    expect(screen.getByTestId("word-count")).toHaveTextContent("5")
  })

  test("should count 5 words with given input of /Lorem ipsum dolar sit amet./", () => {
    const { asFragment } = render(<WordCounter />)
    const textInput = screen.getByTestId("text-input")
    fireEvent.change(textInput, {
      target: { value: "Lorem ipsum dolar sit amet." },
    })
    expect(screen.getByTestId("word-count")).toHaveTextContent("5")
  })

  test("should only count letters and numbers", () => {
    const myChars = [
      " ",
      "  ",
      "!",
      '"',
      "#",
      "$",
      "%",
      "&",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "@",
      "[",
      "\\",
      "]",
      "^",
      "`",
      "{",
      "|",
      "}",
      "~",
      " ",
      "¡",
    ].join(" ")
    const { asFragment } = render(<WordCounter />)
    const textInput = screen.getByTestId("text-input")
    fireEvent.change(textInput, {
      target: { value: myChars },
    })
    expect(screen.getByTestId("word-count")).toHaveTextContent("0")
  })
})
