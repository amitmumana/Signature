import React, { useState, useMemo } from "react"
import PublicRoute from "./PublicRoutes"
import ProtectedRoute from "./ProtectedRoutes"

const AppRoute = () => {
  const [user, setUser] = useState()
  return useMemo(() => {
    if (user) {
      return <ProtectedRoute />
    } else {
      return <PublicRoute />
    }
  }, [user])
}

export default AppRoute
