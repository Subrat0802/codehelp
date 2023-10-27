import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
    const navigate = useNavigate();
    function clickHandle(){
        navigate("/login")
    }

    function backhandler(){
        navigate(-1);
    }
  return (
    <div>
        <div>this is Support</div>
        <button onClick={clickHandle}>Move to login page</button>
        <button onClick={backhandler}>Go Back</button>
    </div>
  )
}

export default Support