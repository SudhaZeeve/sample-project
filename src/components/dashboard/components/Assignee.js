import React from "react";

const Assignee = ({AssigneeData}) => {
    return (
        <>
            <div className="panel mb-4">
                <div className="head_top">
                    <h5>Assignee</h5>
                </div>
                <div className="table-reponsive">
                    <table className="table mb-0">
                        <tbody>
                            {AssigneeData.map((key, index) => {
                                return (
                                    <tr key={index}>
                                        <td><span class="name">{key.Name}</span><br /><small>{key.Num}</small></td>
                                        <td align="center"><span class="text-danger font-bold">{key.Leads} Leads</span></td>
                                        <td align="right"><small>{key.Gmail}<br /><a class="text-success"
                                            href="">Send mail</a></small></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default Assignee;