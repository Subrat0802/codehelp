import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Logout = () => {

    const {LogoutUser, setUser} = useAuth()
    useEffect(() => {
        LogoutUser()
        setUser("");
    }, [LogoutUser])
  return <Navigate to="/login" />
}

export default Logout