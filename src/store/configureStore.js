import thunk from "redux-thunk"
import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import counterReducer from "../reducers/counter_reducer"
import authReducer from "../reducers/auth_reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  // const store = createStore(
  //   counterReducer,
  //   composeEnhancers(applyMiddleware(thunk))
  // )

  const store = createStore(
    combineReducers({
      counter: counterReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}
