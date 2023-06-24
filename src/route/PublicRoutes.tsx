import React from "react"
import { Route, Routes } from "react-router-dom"
import SignIn from "../pages/signin/SignIn"
import SignUp from "../pages/signup/SignUp"

const PublicRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default PublicRoute
