const initialState = {
  count: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy }
    case "DECREMENT":
      return { count: state.count - action.decrementBy }
    case "SET":
      return { count: (state.count = action.counter) }
    case "RESET":
      return { count: (state.count = 0) }
    default:
      return { count: state.count }
  }
}
