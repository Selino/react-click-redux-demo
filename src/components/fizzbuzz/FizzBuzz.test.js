import React from "react"
import { shallow } from "enzyme"
import { getString, AlertItem } from "./FizzBuzz"

test("return Fizz if % 3, Buzz if % 5, FIZZBUZZ! if both.", () => {
  const action = getString(15)
  expect(action).toBe("FIZZBUZZ!")
})

test("should render a single Alert item", () => {
  const wrapper = shallow(
    <AlertItem key='1' variant='warning' displayStatus='Fizz' value={3} />
  )
  expect(wrapper).toMatchSnapshot()
})
