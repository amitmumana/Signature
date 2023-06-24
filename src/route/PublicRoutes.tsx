import React from "react"
import { Route, Routes } from "react-router-dom"
import SignIn from "../pages/signin/SignIn"

const PublicRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default PublicRoute
