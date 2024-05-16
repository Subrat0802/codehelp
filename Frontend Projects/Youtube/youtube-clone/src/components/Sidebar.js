import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    
  return isMenuOpen && (
    <div className='p-5  shadow-lg h-[100vh] px-10 '> 
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <NavLink to={"/"}><li>Home</li></NavLink>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Latter</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar