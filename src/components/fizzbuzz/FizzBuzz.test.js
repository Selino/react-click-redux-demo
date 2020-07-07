import React from "react"
import { shallow, mount, render } from "enzyme"
import FizzBuzz, { getString, AlertItem, DisplayAlerts } from "./FizzBuzz"

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
  it("should render a single Alert item with displayStatus = Fizz, value = 3, and warning = variant.", () => {
    const wrapper = shallow(
      <AlertItem variant='warning' displayStatus='Fizz' value={3} />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(".h2").text()).toEqual("3")
    expect(wrapper.find(".display-status").text()).toEqual("Fizz")
    expect(wrapper.prop("variant")).toEqual("warning")
  })

  it("should render a single Alert item with displayStatus = Buzz, value = 5, and warning = success.", () => {
    const wrapper = shallow(
      <AlertItem variant='success' displayStatus='Buzz' value={5} />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(".h2").text()).toEqual("5")
    expect(wrapper.find(".display-status").text()).toEqual("Buzz")
    expect(wrapper.prop("variant")).toEqual("success")
  })

  it("should render a single Alert item with displayStatus = FIZZBUZZ!, value = 15, and warning = danger.", () => {
    const wrapper = shallow(
      <AlertItem variant='danger' displayStatus='FIZZBUZZ!' value={15} />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(".h2").text()).toEqual("15")
    expect(wrapper.find(".display-status").text()).toEqual("FIZZBUZZ!")
    expect(wrapper.prop("variant")).toEqual("danger")
  })
})

describe("DisplayAlerts", () => {
  const testArray = range(1, 100)

  it("should render DisplayAlerts alert for full range of numbers within given range().", () => {
    const wrapper = shallow(<DisplayAlerts items={testArray} />)
    expect(wrapper.find(AlertItem).length).toBe(100)
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
    const input = wrapper.find("input")
    const button = wrapper.find("Button")

    input.simulate("focus")
    input.simulate("change", { target: { value: "15" } })
    button.simulate("click")
    expect(wrapper).toMatchSnapshot()
  })
})
