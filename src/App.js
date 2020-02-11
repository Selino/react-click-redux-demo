import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"
import GlobalNav from "./components/GlobalNav"
import Counter from "./components/Counter"

function App() {
  return (
    <div className='App'>
      <Router>
        <GlobalNav />
        <Counter />
      </Router>
    </div>
  )
}

export default App
