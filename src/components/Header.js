import React from "react";
import "../styles/Header.css"
import { FaUserFriends } from "react-icons/fa";



function Header() {
    return <>
        <div className="header" >
          
          <h1> <FaUserFriends/> Employee Directory!</h1>
            
            <p className="pheader">Search the employees by their First Name and Last Name In The SearcBar</p>
            
                                     
            
        </div>

    </>;
}
export default Header;
