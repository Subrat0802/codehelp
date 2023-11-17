import React from 'react'
import frameImage from "../assets/frame.png"
import image from "../assets/signup.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Template = ({title, desc1, desc2, image, formtype, setIsUserLoggedIn}) => {

  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {formtype === "signup" ?
                (<SignupForm setIsUserLoggedIn={setIsUserLoggedIn}/>) : 
                (<LoginForm setIsUserLoggedIn={setIsUserLoggedIn}/>)
            }

            <div>
                <div></div>
                <p>Or</p>
                <div></div>
            </div>

            <button>Sign Up with Google</button>
        </div>

        <div>
            <img src={frameImage} alt='apptern' width={558} height={504} loading='lazy'/>
            <img src={image} alt='apptern' width={558} height={494} loading='lazy'/>
        </div>
    </div>
  )
}

export default Template