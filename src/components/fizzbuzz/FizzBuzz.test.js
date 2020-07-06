import React from "react"
import { shallow, mount } from "enzyme"
import FizzBuzz, { getString, AlertItem, DisplayAlerts } from "./FizzBuzz"

// Test numbers 1 through 99
// Under 1 and over 99

// create array of numbers
// loop over and create array of formatted objects
// use formatted array of objects to feed components

function range(start, end) {
  let foo = []
  for (let i = start; i <= end; i++) {
    foo.splice(i, 0, { num: i })
  }
  return foo
}

describe("getString - helper function", () => {
  it("return Fizz if % 3, Buzz if % 5, FIZZBUZZ! if both.", () => {
    const action = [15, 3, 5, 17].map((num) => getString(num))
    expect(action).toEqual(["FIZZBUZZ!", "Fizz", "Buzz", null])
  })
})

describe("AlertItem", () => {
  it("should render a single Alert item", () => {
    const wrapper = shallow(
      <AlertItem key='1' variant='warning' displayStatus='Fizz' value={3} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})

describe("DisplayAlerts", () => {
  const testArray = range(0, 100)
  let wrapper
  beforeEach(() => {
    wrapper = mount(<DisplayAlerts items={[]} />)
  })

  it("should render DisplayAlerts alert for full range of numbers within given range().", () => {
    const wrapper = shallow(<DisplayAlerts items={testArray} />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe("FizzBuzz", () => {
  // button push with number in it
  // set number < 1
  // set number > 99
  // push button with range(1-99) set
  let wrapper
  beforeEach(() => {
    wrapper = mount(<FizzBuzz />)
  })

  it("should render the full component with default value in field, no alerts", () => {
    const wrapper = shallow(<FizzBuzz />)
    expect(wrapper).toMatchSnapshot()
  })
})
