import React from "react"
import { useSelector } from "react-redux"
import { Router, Route, Switch, Redirect } from "react-router-dom"
import { createBrowserHistory } from "history"
import GlobalNav from "../components/GlobalNav"
import Counter from "../components/Counter"
import ExecutiveSummary from "../components/ExecutiveSummary"
import LogIn from "../components/LogIn"
import About from "../components/About"

export const history = createBrowserHistory()

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => !!state.auth.uid)
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  )
}

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => !!state.auth.uid)
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Redirect to='/counter' /> : <Component {...props} />
      }
    />
  )
}

const AppRouter = () => (
  <Router history={history}>
    <div>
      <PrivateRoute component={GlobalNav} />
      <Switch>
        <PublicRoute exact path='/login' component={LogIn} />
        <PrivateRoute exact path='/about' component={About} />
        <PrivateRoute exact path='/counter' component={Counter} />
        <PrivateRoute
          exact
          path='/executivesummary'
          component={ExecutiveSummary}
        />
        <Route exact path='/' component={LogIn} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
