import React, { Suspense, lazy } from "react"
import { useSelector } from "react-redux"
import { Router, Route, Switch, Redirect } from "react-router-dom"
import { createBrowserHistory } from "history"
import LogIn from "../components/LogIn/LogIn"

export const history = createBrowserHistory()

const Home = lazy(() => import("../components/Home/Home"))
const NavGlobal = lazy(() => import("../components/Nav/NavGlobal"))
const NavSub = lazy(() => import("../components/Nav/NavSub"))
const About = lazy(() => import("../components/About/About"))
const Counter = lazy(() => import("../components/Counter/Counter"))
const WordCounter = lazy(() => import("../components/WordCounter/WordCounter"))
const GifCaller = lazy(() => import("../components/GifCaller/GifCaller"))
const FizzBuzz = lazy(() => import("../components/FizzBuzz/FizzBuzz"))
const ExecutiveSummary = lazy(() =>
  import("../components/ExecutiveSummary/ExecutiveSummary")
)

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
    <Suspense fallback={<div>Loading...</div>}>
      <PrivateRoute component={NavGlobal} />
      <PrivateRoute component={NavSub} />

      <Switch>
        <PublicRoute exact path='/login' component={LogIn} />
        <Route exact path='/' component={LogIn} />
      </Switch>

      <Switch>
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
      </Switch>
    </Suspense>
  </Router>
)

export default AppRouter
