import React from 'react'
import LoginForm from './LoginForm'
import SigninForm from "./SigninForm"

const Template = ({ title, desc1, desc2, image, formtype, setIsUserLogin }) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <h2>{desc1}</h2>
            <h2>{desc2}</h2>
            {
                formtype === "signin" ? (<SigninForm setIsUserLogin={setIsUserLogin} />) :
                 (<LoginForm setIsUserLogin={setIsUserLogin} />)
            }
        </div>
        <div>
            <button>Google access</button>
        </div>
    </div>
  )
}

export default Template