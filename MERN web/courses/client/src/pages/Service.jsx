import React from 'react'
import { useAuth } from '../store/auth'

const Service = () => {

  const {services} = useAuth();
  
  return (
    <div>
      {
        services === null ? <h1>Loading...</h1> : services.map((el, index) => {
          return <div className='border m-10 text-white' key={index} >
            <p>{el.description}</p>
            <p>{el.services}</p>
            <p>{el.provider}</p>
            <p>{el.price}</p>
          </div>
        })
      }
    </div>
  )
}

export default Service