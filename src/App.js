import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import "./App.css"
import GlobalNav from "./components/GlobalNav"
import Counter from "./components/Counter"

function App() {
  return (
    <Router>
      <div className='App'>
        <GlobalNav />
        <div>
          <Switch>
            <Route path='/about'>
              <div className='body-container'>
                <h2>About</h2>
                <p>
                  This demo is to display an understanding of several core
                  concepts.
                </p>
                <ul>
                  <li>Functional components using Redux for state</li>
                  <li>Redux Dev Tools integration</li>
                  <li>
                    Persistent data across sessions using Firebase Realtime
                    DB/Redux-Thunk
                  </li>
                  <li>React router usage</li>
                  <li>Deployment using Heroku CLI</li>
                </ul>
                <p>Click on the "Counter" link in the nav to continue.</p>
              </div>
            </Route>
            <Route path='/counter'>
              <Counter />
            </Route>
            <Route exact path='/' render={() => <Redirect to='/about' />} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
