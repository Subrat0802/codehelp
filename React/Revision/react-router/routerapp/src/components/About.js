import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    function useLinkClickHandler(){
        navigate("/support")
    }
  return (
    <div>
        <div>About</div>
        <button onClick={useLinkClickHandler}>Move to support page</button>
    </div>
  )
}

export default About