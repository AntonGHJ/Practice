import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../store/users";

const NavProfile = () => {
    const currentUser = useSelector(getCurrentUserData());    
    const [isOpen, setIsOpen] = useState(false);    
    function handleMouseEnter() {
        setIsOpen(true);
      }    
    function handleMouseLeave() {
        setIsOpen(false);
      }
    if (!currentUser) return "loading";
      return (
        <div 
            style={{color: 'green'}} 
            className="nav-link" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}>
          {currentUser.email}
            {isOpen && (
                <div className="dropdown-menu show">
                    <Link to="/logOut" className="dropdown-item">
                        Log Out
                    </Link>
            </div>
          )}
        </div>
      );
};

export default NavProfile;
