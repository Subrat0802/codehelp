import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
    const navigate= useNavigate();
    function clickhandler(){
        navigate("/about")
    }
  return (
    <div>
        <div>Labs</div>
        <button onClick={clickhandler}>Move to about page</button>
    </div>
    
  )
}

export default Labs