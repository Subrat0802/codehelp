import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex mt-14 pt-4 bg-[#121212] min-h-[100vh] px-3'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body