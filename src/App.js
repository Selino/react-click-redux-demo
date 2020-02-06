import React, { Context } from "react"
import "./App.css"
import UsersContextProvider, { UsersContext } from "./contexts/UsersContext"

function App() {
  return (
    <div className='App'>
      <h1>Slektor</h1>
      <UsersContextProvider>Testing</UsersContextProvider>
    </div>
  )
}

export default App
