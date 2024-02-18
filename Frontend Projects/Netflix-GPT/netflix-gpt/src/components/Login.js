import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm ] = useState(true)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className=''>
        <Header />
        <div className='absolute '>
            <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
        </div>
        <form className=' py-16 mt-48 p-12 absolute bg-opacity-85 rounded-md  text-white bg-black  w-3/12 mx-auto my-28 right-0 left-0'>
          <h1 className='font-bold text-3xl py-4 '>
          {
            isSignInForm ? "Sign Up" : "Sign In"
          }  
          </h1>
          {
            isSignInForm && <div>
              <input type='text' placeholder='First Name ' className='p-2 my-2 w-full text-black bg-gray-700'/>
              <input type='text' placeholder='Last Name' className='p-2 my-2 w-full text-black bg-gray-700'/> 
            </div>
          }

          <input 
            type='text'
            placeholder='Email Address'
            className='p-2 my-2 w-full text-black bg-gray-700 '
          />
          <input 
            type='password'
            placeholder='Email Address'
            className='p-2 my-2 w-full text-black bg-gray-700'
          />
          <button className=' my-2 py-4 bg-red-700 w-full'>
            {
              isSignInForm ? "Sign Up" : "Sign In"
            } 
          </button>
          <p onClick={toggleSignInForm} className='cursor-pointer group '>
          {
            isSignInForm ?"Already have an account?" : "New to Netflix?" 
          }  <span className='group-hover:text-red-700 transition-all duration-200'>
            {
            isSignInForm ? "Sign In Now" : "Sign Up Now"
            } 
          </span></p>
        </form>
    </div>
  )
}

export default Login