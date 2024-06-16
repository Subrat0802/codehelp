import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../store/auth';

const Home = () => {
  const {user, userAuthentication} = useAuth();

  useEffect(() => {
    userAuthentication()
  }, []);

  return (
    <div className='text-center text-white font-bold text-3xl'>
       <h1>Hello {user.username}</h1>
    </div>
  )
}

export default Home