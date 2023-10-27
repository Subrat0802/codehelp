import React from 'react'
import SignupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
        title="Join the million learning to code with studynotion for free"
        desc1="Build Skills for today, tomorrow and beyond."
        desc2="Education to future-proof your career."
        image={SignupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup