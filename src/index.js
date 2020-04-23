import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { firebase } from "./firebase/firebase"
import AppRouter, { history } from "./routers/AppRouter"
import configureStore from "./store/configureStore"
import { login, logout } from "./actions/auth_actions"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

const store = configureStore()

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store} history={history}>
        <AppRouter />
      </Provider>,
      document.getElementById("root")
    )
    hasRendered = true
  }
}

// firebase auth test
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    renderApp()
    store.dispatch(login(user.uid))
    if (history.location.pathname === "/") {
      history.push("/counter")
    }
  } else {
    renderApp()
    store.dispatch(logout())
    history.push("/")
  }
})
