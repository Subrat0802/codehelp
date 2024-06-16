import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Navbar = () => {
  const {isLoggedIn} = useAuth()
  return (
    <div className='w-full flex justify-center h-16 items-center font-semibold text-[#5661c7]'>
        <div className='w-10/12 flex justify-between  '>
            <p>SubratTech</p>
            <div>
                <ul className='flex gap-5'>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                    <NavLink to="/contact"><li>Contact</li></NavLink>
                    <NavLink to="/services"><li>Services</li></NavLink>
                    {
                      isLoggedIn ? <NavLink to="/logout">Logout</NavLink> : 
                      <>
                        <NavLink to="/register"><li>Register</li></NavLink>
                        <NavLink to="/login"><li>Login</li></NavLink>
                      </>
                    }                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar