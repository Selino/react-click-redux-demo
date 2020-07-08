import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import FizzBuzz from "./FizzBuzz"

function range(start, end) {
  let foo = []
  for (let i = start; i <= end; i++) {
    foo.splice(i, 0, { num: i })
  }
  return foo
}

const testArray = range(0, 100)

describe("FizzBuzz", () => {
  test("should render the full component with default value in field, no alerts", () => {
    const { asFragment } = render(<FizzBuzz />)
    expect(screen.getByTestId("number-input"))
    expect(screen.getByTestId("submit-button"))
    expect(screen.getByTestId("list-area"))
    expect(screen.getByDisplayValue("1"))
    fireEvent.click(screen.getByTestId("submit-button"))
    expect(screen.getByTestId("list-area")).toHaveTextContent("1")
    expect(asFragment()).toMatchSnapshot()
  })

  test("should not let a user enter a number < 1", () => {
    render(<FizzBuzz />)
    const numberInput = screen.getByTestId("number-input")
    fireEvent.change(numberInput, { target: { value: 0 } })
    expect(numberInput.value).not.toEqual("0")
    fireEvent.change(numberInput, { target: { value: -2 } })
    expect(numberInput.value).not.toEqual("-2")
  })

  test("should not let a user enter a number > 99", () => {
    render(<FizzBuzz />)
    const numberInput = screen.getByTestId("number-input")
    fireEvent.change(numberInput, { target: { value: 150 } })
    expect(numberInput.value).not.toEqual("150")
  })

  test("should render an alert with FIZZBUZZ! 15.", () => {
    const { asFragment } = render(<FizzBuzz />)
    const numberInput = screen.getByTestId("number-input")
    fireEvent.change(numberInput, { target: { value: 15 } })
    expect(numberInput.value).toEqual("15")
    fireEvent.click(screen.getByTestId("submit-button"))
    expect(screen.getByTestId("list-area")).toHaveTextContent("FIZZBUZZ!")
    expect(screen.getByTitle("FIZZBUZZ!")).toHaveClass("alert-danger")
  })

  test("should render an alert with Fizz 3.", () => {
    const { asFragment } = render(<FizzBuzz />)
    const numberInput = screen.getByTestId("number-input")
    fireEvent.change(numberInput, { target: { value: 3 } })
    expect(numberInput.value).toEqual("3")
    fireEvent.click(screen.getByTestId("submit-button"))
    expect(screen.getByTestId("list-area")).toHaveTextContent("Fizz")
    expect(screen.getByTitle("Fizz")).toHaveClass("alert-warning")
  })

  test("should render an alert with Buzz 5.", () => {
    const { asFragment } = render(<FizzBuzz />)
    const numberInput = screen.getByTestId("number-input")
    fireEvent.change(numberInput, { target: { value: 5 } })
    expect(numberInput.value).toEqual("5")
    fireEvent.click(screen.getByTestId("submit-button"))
    expect(screen.getByTestId("list-area")).toHaveTextContent("Buzz")
    expect(screen.getByTitle("Buzz")).toHaveClass("alert-success")
  })
})
