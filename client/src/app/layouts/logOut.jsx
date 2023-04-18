import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/users";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LogOut = () => {
    const history = useHistory()
   const dispatch = useDispatch();
    useEffect(() => {
        console.log("logout");
        dispatch(logOut());
        history.push('/')
    }, []);
    return <h1>Loading</h1>;
};

export default LogOut;
