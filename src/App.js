import React from "react"
import "./App.css"
import AppRouter, { history } from "./routers/AppRouter"
import { firebase } from "./firebase/firebase"

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default App

// firebase auth test
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("logged in")
  } else {
    console.log("logged out")
    history.push("/")
  }
})
