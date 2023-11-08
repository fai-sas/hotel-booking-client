/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.config'
import axios from 'axios'

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const handlePassword = () => {
    setShowPassword(!showPassword)
  }

  const createUserWithEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUserWithEmail = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email
      const loggedUser = { email: userEmail }
      setUser(currentUser)
      console.log('current user', currentUser)
      setLoading(false)
      // if user exists then issue a token
      if (currentUser) {
        axios.post(
          'https://hotel-booking-server-rho.vercel.app/api/v1/jwt',
          loggedUser,
          {
            withCredentials: true,
          }
        )
      } else {
        axios.post(
          'https://hotel-booking-server-rho.vercel.app/api/v1/logout',
          loggedUser,
          {
            withCredentials: true,
          }
        )
      }
    })
    return () => {
      return unsubscribe()
    }
  }, [user?.email])

  const authInfo = {
    user,
    loading,
    showPassword,
    handlePassword,
    createUserWithEmail,
    signInUserWithEmail,
    signInWithGoogle,
    logOut,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}
export default AuthProvider
