import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Status } from './Status';

export const Navbar = () => {
    const { isAuthorized , login, logout } = useContext(AuthContext);
  return (
    <div>
        <button onClick={() => {
        if(isAuthorized) logout();
        else  login("P", "Z");
      }}>
        {isAuthorized ? "LogIn" : "LogOut"}
      </button>
      {isAuthorized && <Status />}
    </div>
  )
}
