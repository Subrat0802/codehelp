const loginCheck = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    if(token){
        return true;
    }
    else{
        return false;
    }
}

//You want to use this function in other files
// func => import
export default loginCheck;