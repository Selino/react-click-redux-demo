import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import GlobalNav from "./components/GlobalNav"
import Counter from "./components/Counter"
import { LoremIpsum, Avatar } from "react-lorem-ipsum"

function App() {
  return (
    <Router>
      <div className='App'>
        <GlobalNav />
        <div>
          <Switch>
            <Route path='/counter'>
              <Counter />
            </Route>
            <Route path='/about'>
              <div className='body-container'>
                <h2>About</h2>

                <LoremIpsum p={1} />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
