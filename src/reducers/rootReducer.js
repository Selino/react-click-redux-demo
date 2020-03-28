const initialState = {
  counter: null
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + action.incrementBy }
    case "DECREMENT":
      return { counter: state.counter - action.decrementBy }
    case "SET":
      return { counter: (state.counter = action.counter) }
    case "RESET":
      return { counter: (state.counter = 0) }
    default:
      return { counter: state.counter }
  }
}

export default rootReducer
