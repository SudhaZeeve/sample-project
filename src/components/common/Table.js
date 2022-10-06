import React from "react";

const Table = ({TableHeadData,children}) => {
    return (
        <div className="panel">
            <div className="table-responsive ">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {TableHeadData.map((key, index) => {
                                return (
                                    <th key={index}>{key.Name} {key.Icon}</th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>
        </div>

    );
}
export default Table;