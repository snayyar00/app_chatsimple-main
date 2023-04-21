
import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const auth = useAuth()


  return auth ? <Outlet /> : <Navigate to="/" />

}

export default PrivateRoutes