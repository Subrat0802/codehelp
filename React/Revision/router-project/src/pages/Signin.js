import React from 'react'
import SignupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signin = ({setIsUserLogin}) => {
  return (
    <div>
        <Template
            title="Welcome Back"
            desc1="Build Skills for today, tomorrow and beyond."
            desc2="Education to future-proof your career."
            image={SignupImg}
            formtype="signin"
            setIsUserLogin={setIsUserLogin}
        />
    </div>
  )
}

export default Signin