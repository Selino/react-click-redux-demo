const initialState = {
  counter: 0
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
      return { counter: (state.counter = initialState.counter) }
    default:
      return { counter: state.counter }
  }
}

export default rootReducer
