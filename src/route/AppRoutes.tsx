import React, { useState, useMemo, useEffect } from "react"
import PublicRoute from "./PublicRoutes"
import ProtectedRoute from "./ProtectedRoutes"
import Auth from "../component/firebase/auth"
import { onAuthStateChanged } from "firebase/auth"

const AppRoute = () => {
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState<any>()

  console.log(user, "this is user got from ")

  useEffect(() => {
    const subscriber = Auth.firebaseAuth.onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  const onAuthStateChanged = (users: any) => {
    setUser(users)
    if (initializing) setInitializing(false)
  }

  return <>{user ? <ProtectedRoute /> : <PublicRoute />}</>
}

export default AppRoute
