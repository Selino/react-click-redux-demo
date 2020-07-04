// const getString = (number) => {
//   if (number % 15 === 0) return "FIZZBUZZ!"
//   else if (number % 3 === 0) return "Fizz"
//   else if (number % 5 === 0) return "Buzz"
//   else return null
// }

test("return Fizz if % 3, Buzz if % 5, FIZZBUZZ! if both.", () => {
  const action = getString(15)
  expect(action).toBe("FIZZBUZZ!")
})
