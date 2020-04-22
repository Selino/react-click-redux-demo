import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import AppRouter, { history } from "./routers/AppRouter"
import { firebase } from "./firebase/firebase"

const store = configureStore()

ReactDOM.render(
  <Provider store={store} history={history}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
)

// firebase auth test
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (history.location.pathname === "/") {
      history.push("/counter")
    }
  } else {
    history.push("/")
  }
})
