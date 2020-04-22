import React from "react"
import { Router, Route, Switch, Link, Navlink } from "react-router-dom"
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
        <Route path='/login'>
          <LogIn />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/counter'>
          <Counter />
        </Route>
        <Route exact path='/' component={LogIn} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
