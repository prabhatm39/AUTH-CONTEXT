import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [isAuthorized, setIsAuthorized ] = useState(false);
    const login = (usreName, password) => {
        console.log(usreName, password)
        if(usreName && password){
            setIsAuthorized(true);
        }
    }
    const logout = () => {
        setIsAuthorized(false)
    }
    return <AuthContext.Provider value={{isAuthorized , login, logout}}>{children}</AuthContext.Provider>
}