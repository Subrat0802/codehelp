import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-around items-center shadow bg-blue-300'>
      <div>
        <NavLink to="/"><img className='w-16 ' src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png" alt="logo"/>
        </NavLink>
      </div>
      <div className='flex gap-8'>
        <p>Items</p>
        <p>Offers</p>
        <NavLink className="text-white hover:text-red-800" to="/cart"><FaCartShopping /></NavLink>
      </div>
    </div>
  )
}

export default Navbar