import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../store/auth'

const AdminLayout = () => {
  const {user, isLoading} = useAuth()

  if(isLoading === true){
    return <h1>Loading...</h1>
  }

  if(!user.isAdmin){
    return <Navigate to="/"/>
  }
  return (
    <>
    <header>
      <div>
        <nav>
          <ul>
            <NavLink to="/admin/users"><li>Users</li></NavLink>
            <NavLink to="/admin/contacts"><li>Contacts</li></NavLink>
            <li>Services</li>
            <li>Home</li>
          </ul>
        </nav>
      </div>
    </header>
    <Outlet />
    </>
  )
}

export default AdminLayout