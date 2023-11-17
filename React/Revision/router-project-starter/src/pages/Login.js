import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"

const Login = ({setIsUserLoggedIn}) => {
  return (
    <div>
        <Template 
            title="Welcome Back"
            desc1="Build skills for today, tomorrow and beyond."
            desc2="Education to future-proof your career."
            image={loginImg}
            formtype="login"
            setIsUserLoggedIn={setIsUserLoggedIn}
        />
    </div>
  )
}

export default Login