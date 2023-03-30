import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCurrentUserId } from "../store/users";
const Users = () => {
    const { userId } = useParams();
    const currentUserId = useSelector(getCurrentUserId());

    return (
        <>
            <div>
                {userId ? (
                   <p>User{currentUserId}</p>):'Loading'}
            </div>
        </>
    );
};

export default Users;
