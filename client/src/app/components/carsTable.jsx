import React from "react";
import PropTypes from "prop-types";

import Table from "./table";
import { Link } from "react-router-dom";

const CarsTable = ({
    cars,
    onDelete
}) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (car) => (
                <Link to={`/cars/${car._id}`}>{car.name}</Link>
            )
        },
        qualities: {
            name: "Качества",
            
        },
       
        delete: {
            component: (car) => (
                <button
                    onClick={() => onDelete(car._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            )
        }
    };
    return (
        <Table
            
            columns={columns}
            data={cars}
        />
    );
};

CarsTable.propTypes = {
    cars: PropTypes.array.isRequired,
    
    onDelete: PropTypes.func.isRequired
};

export default CarsTable;


{/*pr: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            )
        },*/}