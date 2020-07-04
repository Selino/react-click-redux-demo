import React from "react"
import { getString } from "./FizzBuzz"

test("return Fizz if % 3, Buzz if % 5, FIZZBUZZ! if both.", () => {
  const action = getString(15)
  expect(action).toBe("FIZZBUZZ!")
})
