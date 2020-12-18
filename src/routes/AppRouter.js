import React from "react"
import { useSelector } from "react-redux"
import { Router, Route, Switch, Redirect } from "react-router-dom"
import { createBrowserHistory } from "history"
import NavGlobal from "../components/nav/NavGlobal"
import Counter from "../components/counter/Counter"
import ExecutiveSummary from "../components/ExecutiveSummary"
import LogIn from "../components/LogIn"
import Home from "../components/Home"
import About from "../components/About"
import NavSub from "../components/nav/NavSub"
import WordCounter from "../components/wordcounter/WordCounter"
import GifCaller from "../components/GifCaller"
import FizzBuzz from "../components/fizzbuzz/FizzBuzz"

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
        isAuthenticated ? <Redirect to='/home' /> : <Component {...props} />
      }
    />
  )
}

const AppRouter = () => (
  <Router history={history}>
    <PrivateRoute component={NavGlobal} />
    <PrivateRoute component={NavSub} />
    <Switch>
      <PublicRoute exact path='/login' component={LogIn} />
      <Route exact path='/' component={LogIn} />
      <div className='body-container'>
        <PrivateRoute exact path='/home' component={Home} />
        <PrivateRoute exact path='/about' component={About} />
        <PrivateRoute exact path='/counter' component={Counter} />
        <PrivateRoute exact path='/gifcaller' component={GifCaller} />
        <PrivateRoute exact path='/fizzbuzz' component={FizzBuzz} />
        <PrivateRoute
          exact
          path='/executivesummary'
          component={ExecutiveSummary}
        />
        <PrivateRoute exact path='/wordcounter' component={WordCounter} />
      </div>
    </Switch>
  </Router>
)

export default AppRouter
