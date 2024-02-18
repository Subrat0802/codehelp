import { createContext, useState } from "react";


const UserContext = createContext({
    loggedInUser: "Default User",
    // locationSideBar: true,
    // setLocationSideBar: () => {} 
})



export default UserContext;