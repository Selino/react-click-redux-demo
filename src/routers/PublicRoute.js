import React from "react"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom"

export const PublicRoute = ({ component: Component, ...rest }) => {
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

export default PublicRoute
