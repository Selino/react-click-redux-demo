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
      myAxios({ counter: state.counter + 1 })
      return { counter: state.counter + 1 }
    case "DECREMENT":
      myAxios({ counter: state.counter - 1 })
      return { counter: state.counter - 1 }
    case "RESET":
      myAxios({ counter: 0 })
      return { counter: (state.counter = 0) }
    default:
      return { counter: state.counter }
  }
}

export default rootReducer
