import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>Error, This page is not available {" "}{err.error.message} {err.error.status}</div>

  )
}

export default Error