import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token,  setToken] = useState(localStorage.getItem('token'))
    const [user, setUser] = useState("")
    const [services, setServices] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const authorizationToken = `Bearer ${token}`

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem('token', serverToken);
    }

    let isLoggedIn = !!token

    //logout functionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('token');
    }

    //jwt authentication - currenltlly logged in user

    const userAuthentication = async (req, res) => {
        setIsLoading(true)
        try{
            const resposne = await fetch("http://localhost:3000/api/v1/user", {
                method:"GET",
                headers:{
                    Authorization:authorizationToken
                },
            });
            if(resposne.ok){
                const data = await resposne.json();
                setUser(data.userData)
                setIsLoading(false)
            }else{
                setIsLoading(false)
            }

        }catch(error){
            console.log("Error fetching")
        }
    }

    //fetch services data from the bend
    const getServices = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/s1/service", {
              method:"GET"
            })
      
            if(response.ok){
                const data  = await response.json();
                setServices(data.data);
            }
          }catch(error){
            console.log("error while service data", err);
          }
    }

    useEffect(() => {
        userAuthentication();
        getServices();
    },[])

    return <AuthContext.Provider value={{storeTokenInLS, isLoading, isLoggedIn, LogoutUser, user, setUser, services, userAuthentication, authorizationToken}} >
        {children}
    </AuthContext.Provider>
}


export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new error("useAuth used outside of the provider");
    }
    return authContextValue
}