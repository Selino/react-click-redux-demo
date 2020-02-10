const initialState = {
  counter: 0
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 }
    case "DECREMENT":
      if (state.counter > 0) {
        return { counter: state.counter - 1 }
      }
      break
    case "RESET":
      return { counter: (state.counter = 0) }
    default:
      return state
  }
}

export default rootReducer
