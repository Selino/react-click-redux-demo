import React, { Context } from "react"
import "./App.css"
import { useSelector, useDispatch } from "react-redux"

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Slektor</h1>
      </header>
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App
