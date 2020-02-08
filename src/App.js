import React, { Context } from "react"
import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "react-bootstrap/Button"
import { ButtonGroup } from "react-bootstrap"

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
        <ButtonGroup aria-label='controls'>
          <Button onClick={() => dispatch({ type: "DECREMENT" })}>
            <FontAwesomeIcon icon={faMinus} />
          </Button>
          <Button onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
          <Button onClick={() => dispatch({ type: "INCREMENT" })}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default App
