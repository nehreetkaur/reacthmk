import React from "react";
import "../styles/Header.css"
import { FaUserFriends } from "react-icons/fa";



function Header() {
    return <>
        <div className="header" >
          
          <h1> <FaUserFriends/> Employee Directory!</h1>
            
            <p className="pheader">Sort the employess by their First Name</p>
            
                                     
            
        </div>

    </>;
}
export default Header;
