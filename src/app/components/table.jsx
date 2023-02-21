import React from "react";
import PropTypes from "prop-types";
import TableBody from "./tableBody";

const Table = ({  columns, data, children }) => {
    return (
        <table className="table">
            {children || (
                <>
    
                    <TableBody {...{ columns, data }} />
                </>
            )}
        </table>
    );
};
Table.propTypes = {
   
    columns: PropTypes.object,
    data: PropTypes.array,
    children: PropTypes.array
};

export default Table;
