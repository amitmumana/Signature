import React from "react"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth"
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

const app = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(app)
const database = getFirestore(app)

// Login Account//
const login = async ({ email, password }) => {
  console.log("login", email, password)
  if (!email || !password) {
    alert("Please fill all filed")
  } else {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((user) => {
        console.log(user, "user in res")
      })
      .catch((error) => {
        console.error("Error signing in with password and email", error)
      })
  }
}

// Singout Account //
const logout = () => {
  firebaseAuth.signOut()
}

// Create Account //
const signUp = async ({ displayName, email, password }) => {
  if (!displayName || !email || !password) {
    alert("Please fill all filed")
  } else {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .tfhen((user) => {
        console.log(user)
      })
      .catch((error) => {
        console.log("Got error in Auth while creating User  49 line")
      })
  }
}

const Auth = {
  login,
  signUp,
  logout,
  firebaseAuth
}

export default Auth
