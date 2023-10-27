import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    function clickHandle(){
        navigate("/support")
    }
  return (
    <div>
      <div>this is Login</div>
      <button onClick={clickHandle}>Move to support</button>
    </div>
  );
};

export default Login;
