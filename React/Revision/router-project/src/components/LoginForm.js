import React from 'react'

const LoginForm = () => {
  return (
    <div>
        <form>
            <input required placeholder='email' type='email'/>
            <input required placeholder='password' type='password'/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default LoginForm