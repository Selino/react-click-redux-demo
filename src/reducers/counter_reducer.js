export default (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.incrementBy
    case "DECREMENT":
      return state - action.decrementBy
    case "SET":
      return (state = action.counter)
    case "RESET":
      return (state = 0)
    default:
      return state
  }
}
