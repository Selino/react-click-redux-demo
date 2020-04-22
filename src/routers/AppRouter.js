import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { createBrowserHistory } from "history"
import GlobalNav from "../components/GlobalNav"
import Counter from "../components/Counter"
import LogIn from "../components/LogIn"
import About from "../components/About"

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <GlobalNav />
      <Switch>
        <Route exact path='/login'>
          <LogIn />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/counter'>
          <Counter />
        </Route>
        <Route exact path='/' component={LogIn} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
