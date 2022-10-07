import React from "react";
import { NavLink } from "react-router-dom";
import Table from "../../common/Table";
import { TableHeadData,TablebodyData } from "../StaticData";

const ManageLeadTable = () => {
    return (
        <Table TableHeadData={TableHeadData}>
            {TablebodyData.map((key, index) => {
                return (
                    <tr key={index}>
                        <td>{key.LeadID}</td>
                        <td>{key.LeadName}</td>
                        <td>{key.Email}</td>
                        <td>{key.MobileNumber}</td>
                        <td>{key.DateAdded} {key.Sort}</td>
                        <td>{key.Branch}</td>
                        <td>{key.Product}</td>
                        <td>{key.LaonAmt} {key.Sort}</td>
                        <td>
                            <div class="dropdown">
                                <NavLink to="" class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ashish Tiwari
                                </NavLink>
                                
                                <ul class="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton1">
                                    <li><b>Email :</b> Ashish@gmail.com</li>
                                    <li><b>Phone :</b> +91-9910099999</li>
                                </ul>
                            </div>
                        </td>
                        <td>{key.Status}</td>
                        <td><a href="#">View</a>/ <a href="#">Edit</a></td>
                    </tr>
                );
            })
            }
        </Table>
    );
}
export default ManageLeadTable;