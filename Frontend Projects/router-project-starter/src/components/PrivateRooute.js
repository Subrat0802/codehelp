import React from 'react'
import { Navigate } from 'react-router';

const PrivateRooute = ({isLogin, children}) => {
if(isLogin){
    return children;
}
else{
    return <Navigate to="/login"/>
}
}

export default PrivateRooute