import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

const ProtectedRoute = () => {
          const { user, dispatch } = useContext(AuthContext)

          if (user) {
                    return (
                              <Outlet></Outlet>
                    )
          } return <Navigate to={"/home"}></Navigate>
}

export default ProtectedRoute