import React from "react";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../context/authContext";

const Navbar = () => {
  const {currentUser,SignOut}=UserAuth();
  const handleLogout=async()=>{
    try {
      await SignOut()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-base-100 shadow fixed w-full z-10">
<div className="navbar containerWrap">
      <div className="flex-1">
        <NavLink to='/' className="normal-case text-xl">Chat2Chat</NavLink>
      </div>
      <div className="flex-none">
        {
          currentUser ? <button className="btn bg-base-100" onClick={handleLogout}>Logout</button> : ""
        }
      
      </div>
    </div>

    </div>

    
  );
};

export default Navbar;
