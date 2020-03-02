import axios from "axios"

const myAxios = state => {
  axios
    .post(
      "http://localhost:5000/currentcount/update/5e4c34a342683f064e6ad948",
      state
    )
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

const initialState = {
  counter: 0
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      myAxios({ counter: state.counter + action.incrementBy })
      return { counter: state.counter + action.incrementBy }
    case "DECREMENT":
      myAxios({ counter: state.counter - action.decrementBy })
      return { counter: state.counter - action.decrementBy }
    case "SET":
      return { counter: (state.counter = action.data) }
    case "RESET":
      myAxios({ counter: initialState.counter })
      return { counter: (state.counter = initialState.counter) }
    default:
      return { counter: state.counter }
  }
}

export default rootReducer
