import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setIsUserLoggedIn}) => {
  return (
    <div>
        <Template 
            title="Join the million learning to code with studyNotion for free"
            desc1="Build skills for today, tomorrow and beyond."
            desc2="Education to future-proof your career."
            image={signupImg}
            formtype="signup"
            setIsUserLoggedIn={setIsUserLoggedIn}
        
        />
    </div>
  )
}

export default Signup