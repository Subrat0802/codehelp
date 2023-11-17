import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
    const navigate = useNavigate();
    function clickhandle(){
        navigate("/home")
    }
    function backPage(){
        navigate(-1);
    }
  return (
    <div>
        <div>Support</div>
        <button onClick={clickhandle}>Home</button>
        <button onClick={backPage}>go back</button>
    </div>
  )
}

export default Support