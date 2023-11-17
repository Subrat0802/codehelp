import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const isUserLogin = props.isUserLogin;
    const setIsUserLogin = props.setIsUserLogin;
  return (
    <div>
        <img src={logo}/>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </nav>
        
        <div>
            { !isUserLogin &&
                <Link to="/login">
                    <button>Login</button>
                </Link>
            }
            { !isUserLogin &&
                <Link to="/signin">
                    <button>SignUp</button>
                </Link>
            }
            { isUserLogin &&
                <Link to="/">
                    <button>Logout</button>
                </Link>
            }
            { isUserLogin &&
                <Link to="/dashboard">
                    <button>Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar