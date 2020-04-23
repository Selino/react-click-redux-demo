import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { createBrowserHistory } from "history"
import GlobalNav from "../components/GlobalNav"
import Counter from "../components/Counter"
import LogIn from "../components/LogIn"
import About from "../components/About"
import PrivateRoute from "./PrivateRoute"

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <PrivateRoute component={GlobalNav} />
      <Switch>
        <Route exact path='/login' component={LogIn} />
        <PrivateRoute exact path='/about' component={About} />
        <PrivateRoute exact path='/counter' component={Counter} />
        <Route exact path='/' component={LogIn} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
