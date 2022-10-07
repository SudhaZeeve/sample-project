import React from "react";
import { NavLink } from "react-router-dom";
import Table from "../../common/Table";
import { TableHeadData,TablebodyData } from "../StaticData";

const CommissionReportTable = () => {
    return (
        <>
            <Table TableHeadData={TableHeadData}>
                {TablebodyData.map((key, index) => {
                    return (
                        <tr key={index}>
                            <td>{key.LeadID}</td>
                            <td>{key.CustomerName}</td>
                            <td>{key.Assignedto}</td>
                            <td>{key.SanctionCode}</td>
                            <td>{key.SanctionDate}</td>
                            <td>{key.Branch}</td>
                            <td>{key.Product}</td>
                            <td>{key.Status}</td>
                            <td>{key.TotalAmount}</td>
                            <td>{key.Commissionper}</td>
                            <td>{key.Commissiondollar}</td>
                        </tr>
                    );
                })}
            </Table>
        </>
    );
}
export default CommissionReportTable;