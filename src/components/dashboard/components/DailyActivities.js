import React from "react";
import SelectTag from "../../common/SelectTag";
import { Montly } from "../StaticData";

const DailyActivities = () => {
    return (
        <>
            <div className="panel">
                <div className="head_top">
                    <div className="row  align-items-center ">
                        <div className="col-8 ">
                            <h4>Daily activities</h4>
                        </div>
                        <div className="col-4">
                            <SelectTag Label="" Required optionData={Montly} customClass="custom-textfield ms-auto" />
                        </div>

                    </div>
                </div>
                <div className="p-3">
                    <ul className="listing mb-0">
                        {Dailydata.map((key, index) => {
                            return (
                                <li key={index}><span className="time">{key.Time}</span> - {key.Description}
                                    {key.Status === "approved" && <span className="text-success"> approved</span>}
                                    {key.Status === "contacted" && <span className="text-primary"> contacted</span>}
                                    {key.Status === "rejected" && <span className="text-danger"> rejected</span>}
                                    {key.Status === "on hold" && <span className="text-warning"> on hold</span>}
                                </li>
                            );

                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default DailyActivities;

export const Dailydata = [
    {
        Time: "4:30 pm",
        Description: "LD001 loan application is",
        Status: "approved"
    },
    {
        Time: "4:26 pm",
        Description: "LD001, LD002 and LD004 were",
        Status: "contacted"
    },
    {
        Time: "4:15 pm",
        Description: "LD011 loan application is",
        Status: "rejected"
    },
    {
        Time: "4:04 pm",
        Description: "LD012 loan application is",
        Status: "on hold"
    },
];