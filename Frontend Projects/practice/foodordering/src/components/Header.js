import React, { useContext, useState } from 'react'
import {Link} from "react-router-dom"
import UserContext from '../utils/userContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const [toggleButton, setToggleButton] = useState(false);
    const data = useContext(UserContext);

    const cartItems = useSelector((store) => store.cartReducer.items.length)

  return (
    <div className='flex justify-between items-center px-7 mb-6 border'>
        <img width={100} src='https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?size=626&ext=jpg' alt='Logo'/>
        <div>
            <ul className='flex gap-6'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/grocery"><li>Grocery </li></Link>
                <li>Help</li>
                <button onClick={() => setToggleButton(!toggleButton)}>
                    {toggleButton === true ? "Login" : "Logout"} 
                </button>
                <Link to="/cart"><li>Cart{cartItems}</li></Link>
                <li>{data.loggedInUser}</li>
            </ul>
        </div>
    </div>
  )
}

export default Header