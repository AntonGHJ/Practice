import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../store/users";

const NavProfile = () => {
    const currentUser = 1;
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    if (!currentUser) return "loading";
    return (
        <div className="dropdown" onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div className="me-2">{currentUser.email}</div>
            </div>
            <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
                
                <Link to="/logout" className="dropdown-item">
                    Log Out
                </Link>
            </div>
        </div>
    );
};

export default NavProfile;
